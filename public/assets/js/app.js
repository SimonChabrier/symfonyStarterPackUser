const app = {
    
    //set the api endpoint
    apiRootUrl: 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=e98K2qwZcQlibrybmE6KYq6AfSHdase9', 

    // Method init is called on DOMContentLoaded -> line 64.
    init: function() {
        console.log("init");

        if(window.location.href != window.location.origin + '/'){
            console.log('We are currently not on homepage, so we don\'t excute the request !')

        } else {
            console.log('We are currently on homepage, so we call app.nty() and fetch New York Times datas !')
            app.nyt();
        }
    },

    // Api fecth on NewYorkTimes public endPoint
    nyt: function (){

            let config = {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
            };
            
            fetch(this.apiRootUrl, config)

            .then(function(response) {
            return response.json();
            })

            .then(function(data) {
            //loop on data for extract all Objects.
        console.log(data);
                // replace 8 by data.results.length to dipslay all results 
                for (var i = 0; i < 8; i++){
                    
                    // In rep front/home.html.twig -> We position ourselves in relation to:
                    const output = document.getElementById('mydiv');
                    // At each turn of the loop we render a card template hydrated with each object properties
                
                    try{

                        if (data.results[i]['media'].length == []) {
                            // we filter the objects that have no images
                            let picture = './assets/images/default_picture/default_pict.jpg'

                            output.innerHTML += 
                            `
                            <div class="card-group">
                                <div class="card" style="width: 15rem;">
                                    <div class="card-body">
                                    <img src="${picture}" class="card-img-top" alt="" title="">
                                    <h5 class="card-title">${data.results[i].title.slice(0, 20)} <a href="${data.results[i].url}"> ...</a></h5>
                                    <h5><span class="badge bg-warning">${data.results[i].section}</span></h5>
                                        <p class="card-text">${data.results[i].abstract.slice(0, 80)}<a href="${data.results[i].url}"> ...</a></p>
                                        <p class="card-text"><small class="text-muted">Date : ${data.results[i].updated}</small></p>
                                    <a href="${data.results[i].url}" class="btn btn-primary">Lire</a>  
                                </div>
                            </div> 
                                
                            `
                        }

                        else {
                            output.innerHTML += 
                            `
                            <div class="card-group">
                                <div class="card" style="width: 15rem;">
                                    <div class="card-body">
                                    <img src="${data.results[i]['media'][0]['media-metadata'][2].url}" class="card-img-top" alt="${data.results[i]['media'][0].caption}" title="${data.results[i]['media'][0].caption}">
                                    <h5 class="card-title">${data.results[i].title.slice(0, 20)} <a href="${data.results[i].url}"> ...</a></h5>
                                    <h5><span class="badge bg-warning">${data.results[i].section}</span></h5>
                                        <p class="card-text">${data.results[i].abstract.slice(0, 80)}<a href="${data.results[i].url}"> ...</a></p>
                                        <p class="card-text"><small class="text-muted">Date : ${data.results[i].updated}</small></p>
                                    <a href="${data.results[i].url}" class="btn btn-primary">Lire</a>  
                                </div>
                            </div> 
                                
                            `
                        }
                    }
                    catch(err){
                        console.log(err);
                    }  
                }//endfor
            })// end then
    },

};

// Call init() on DOMContentLoaded
document.addEventListener('DOMContentLoaded', app.init);



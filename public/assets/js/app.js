const app = {
    
    //set the api endpoint
    apiRootUrl: 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=e98K2qwZcQlibrybmE6KYq6AfSHdase9', 

    // Method init is called on DOMContentLoaded -> line 64.
    init: function() {
        console.log("init");
        app.nyt();
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

        .then(function(response) {
        //loop on response for extract all Objects.
        
            // replace 8 by esponse.results.length to dipslay all results 
            for (var i = 0; i < 8; i++){
                
                // In rep front/home.html.twig -> We position ourselves in relation to:
                const output = document.getElementById('mydiv');
                // At each turn of the loop we render a card template hydrated with each object properties

                if (response.results[i]['media'].length == []) {
                    // we filter the objects that have no images
                    let picture = './assets/images/default_picture/default_pict.jpg'

                    output.innerHTML += 
                    `
                    <div class="card-group">
                        <div class="card" style="width: 15rem;">
                            <div class="card-body">
                            <img src="${picture}" class="card-img-top" alt="" title="">
                            <h5 class="card-title">${response.results[i].title.slice(0, 20)} <a href="${response.results[i].url}"> ...</a></h5>
                            <h5><span class="badge bg-warning">${response.results[i].section}</span></h5>
                                <p class="card-text">${response.results[i].abstract.slice(0, 80)}<a href="${response.results[i].url}"> ...</a></p>
                                <p class="card-text"><small class="text-muted">Date : ${response.results[i].updated}</small></p>
                            <a href="${response.results[i].url}" class="btn btn-primary">Lire</a>  
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
                            <img src="${response.results[i]['media'][0]['media-metadata'][2].url}" class="card-img-top" alt="${response.results[i]['media'][0].caption}" title="${response.results[i]['media'][0].caption}">
                            <h5 class="card-title">${response.results[i].title.slice(0, 20)} <a href="${response.results[i].url}"> ...</a></h5>
                            <h5><span class="badge bg-warning">${response.results[i].section}</span></h5>
                                <p class="card-text">${response.results[i].abstract.slice(0, 80)}<a href="${response.results[i].url}"> ...</a></p>
                                <p class="card-text"><small class="text-muted">Date : ${response.results[i].updated}</small></p>
                            <a href="${response.results[i].url}" class="btn btn-primary">Lire</a>  
                        </div>
                    </div> 
                        
                    `
                }
                
            }
        })
    },
};

// Call init() on DOMContentLoaded
document.addEventListener('DOMContentLoaded', app.init);



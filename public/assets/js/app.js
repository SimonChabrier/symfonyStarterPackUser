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
            for (var i = 0; i < response.results.length; i++){
                // get position marker in html content.
                const output = document.getElementById('mydiv');
                // On each loop we render a card template hydrated with each object properties
                try {
                    output.innerHTML += 
                    `
                    <div class="card-group">
                        <div class="card" style="width: 18rem;">
                            <div class="card-body">
                            <img src="${response.results[i]['media'][0]['media-metadata'][2].url}" class="card-img-top" alt="${response.results[i]['media'][0].caption}" title="${response.results[i]['media'][0].caption}">
                            <h5 class="card-title">${response.results[i].title.slice(0, 25)} <a href="${response.results[i].url}"> ...</a></h5>
                            <h5><span class="badge bg-warning">${response.results[i].section}</span></h5>
                                <p class="card-text">${response.results[i].abstract.slice(0, 100)}<a href="${response.results[i].url}"> ...</a></p>
                                <p class="card-text"><small class="text-muted">Date : ${response.results[i].updated}</small></p>
                            <a href="${response.results[i].url}" class="btn btn-primary">Lire</a>  
                        </div>
                    </div> 
                        
                    `
                }
                
                catch(err) {
                    // see errors in console
                    console.log(err);
                }
            }
        })
    },
};

// Call init() on DOMContentLoaded
document.addEventListener('DOMContentLoaded', app.init);



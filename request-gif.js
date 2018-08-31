
var ajaxson5 = new Vue({
    el: '#mount-point',
    data: function () {
        return {
            tagValue: null,
            errorMessage: null,
            loading: false,
            imgSrc: null,
            searchQuery: null,
        };
    },
    methods: {
        fetchGif: function(searchQuery) {
            // get the user's input text from the DOM
            var searchQuery = document.getElementById("userInput");
             // TODO should be e.g. "dance"
            var value = searchQuery.value;
            // configure a few parameters to attach to our request
            var api_key = "dc6zaTOxFJmzC";
            var tag = "jackson+5+" + value; // TODO should be e.g. "jackson 5 dance"
            this.loading = true;
            // TODO what do we want this URL to be?
            fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}`)
                .then(response => response.ok ? response.json() : Promise.reject(response))
                .then(results => {
                    // if the response comes back successfully, the code in here will execute.
                    
                    console.log("we received a response!");
                    console.log(results);
    
                    this.imgSrc = results.data.image_url
                    this.loading = false;
                    // 1. set the imgSrc value in our data to the GIF's image_url inside results
                    // 2. clear the error message and loading state (since our request just succeede)
                })
                .catch(err => {
                    // if something went wrong, the code in here will execute instead of the success function

                    
                    this.errorMessage = 'Sorry, could not load GIF. Try again!';
                    
                });
            // TODO We've just made a request, so this is a good time to
            // set "loading = true"
            

                
            

        },
    },
});

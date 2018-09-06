
var ajaxson5 = new Vue({
    el: '#mount-point',
    data: function () {
        return {
            tagValue: null,
            errorMessage: null,
            loading: false,
            imgSrc: null,
            searchQuery: null,
            riddle: null,
        
        };
    },
    methods: {
        fetchGif: function(searchQuery) {
            
            var searchQuery = document.getElementById("userInput");
             
            var value = searchQuery.value;
            // configure a few parameters to attach to our request
            var api_key = "dc6zaTOxFJmzC";
            
            var tag = "jackson+5+" + value; // TODO should be e.g. "jackson 5 dance"
            
            
            this.loading = true;
           
            var getRiddle = document.getElementById("riddleQ");
            var riddleValue = getRiddle.value;
            
            if (riddleValue != 5) {
                this.loading = false;
                return this.riddle = true;
               
            } else {
                fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}`)
                    .then(response => response.ok ? response.json() : Promise.reject(response))
                    .then(results => {
                        // if the response comes back successfully, the code in here will execute.
                        
                        console.log("we received a response!");
                        console.log(results);
                        
                       

                        setTimeout(() => {
                            
                        this.imgSrc = results.data.image_url
                        this.loading = false;
                        this.riddle = false;
                        }, 900);
                        
                    })
                    
                    .catch(err => {
                        // if something went wrong, the code in here will execute instead of the success function

                        
                        this.errorMessage = 'Sorry, could not load GIF. Try again!';
                        
                        
                    }); 
                }
        
        },  
        
    },
    
});

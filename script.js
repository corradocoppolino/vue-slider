const app = new Vue({

    el: '#app',

    data:{

        counterImages: 0,
        images:[
            "immagini/1.jpeg",
            "immagini/2.jpeg",
            "immagini/3.jpeg",
            "immagini/4.jpeg"
        ]

    },
    methods:{

        nextImages(){
            this.counterImages++;
            if(this.counterImages === this.images.length){
                this.counterImages = 0;
            }
            //console.log(this.counterImages);
        },

        prevImages(){
            this.counterImages--;
            if(this.counterImages < 0){
                this.counterImages = this.images.length -1;
            }
            //console.log(this.counterImages);
        },

        /* changeImages(){
            setTimeout(function(){
                this.counterImages++;
                if(this.counterImages === this.images.length){
                    this.counterImages = 0;
                }
                console.log("ciao")
            }, 3000);
        }, */

        play: function() {
            let app = this;
            this.timer = setInterval(function() {
              app.nextImages();
            }, 3000);
        },

        stop: function(){
            clearInterval(this.timer);
        },

        riplay: function(){
            let app = this;
            this.timer = setInterval(function() {
              app.nextImages();
            }, 3000);
        }
        
    },

    created: function() {
        this.play();
    }


})
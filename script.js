function comienzaPartida(){
    let cardsDivs = document.querySelectorAll(".cards");
    let cardsSelected = 0;
    let cardsSelection = [];
    let kittiesSelected = [];
    // let cardElementsList = [] ;
    //Urls imagenes de gatitos
    const urls = [
        "https://stickercommunity.com/uploads/main/26-05-2022-15-52-27qa8vm-sticker0.webp",
        "https://stickercommunity.com/uploads/main/26-05-2022-15-52-27lqfak-sticker3.webp",
        "https://stickercommunity.com/uploads/main/26-05-2022-15-52-27bzprq-sticker1.webp",
        "https://stickercommunity.com/uploads/main/26-05-2022-15-52-27eo0pb-sticker9.webp",
        "https://stickercommunity.com/uploads/main/26-05-2022-15-52-27j0ani-sticker14.webp",
        "https://stickercommunity.com/uploads/main/26-05-2022-15-52-275b26y-sticker15.webp",
        "https://stickercommunity.com/uploads/main/26-05-2022-15-52-270cawv-sticker7.webp",
        "https://stickercommunity.com/uploads/main/26-05-2022-15-52-272fegp-sticker13.webp",
        "https://stickercommunity.com/uploads/main/26-05-2022-15-52-27scird-sticker18.webp",
        "https://stickercommunity.com/uploads/main/26-05-2022-15-52-27mqyjn-sticker8.webp",
        "https://stickercommunity.com/uploads/main/26-05-2022-15-52-27yb4pt-sticker16.webp",
        "https://stickercommunity.com/uploads/main/26-05-2022-15-52-27dhafm-sticker22.webp",
        "https://stickercommunity.com/uploads/main/26-05-2022-15-52-27phqcz-sticker12.webp",
        "https://stickercommunity.com/uploads/main/26-05-2022-15-52-277a98k-sticker19.webp"        
    ]

    function randomUrls(){
        let RandomUrls = [];
        let RandomUrls2 = [];
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
          }
        for (let index = 0; index <= 7; index++) {
            const findingIndex = (element) => element == RandomUrls[index];

            function validateIndex(){
                RandomUrls[index] = urls[getRandomInt(0, 13)]
                let arrayIndex = RandomUrls.findIndex(findingIndex)
                // console.log(arrayIndex);
        
                if (arrayIndex == index) {
                    // console.log("ok");
                }else{
                    
                    return validateIndex();
                }
            }
            RandomUrls.push(urls[getRandomInt(0, 13)])
            
            validateIndex()
        }
        RandomUrls = RandomUrls.concat(RandomUrls)
        
        let Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        let UrlsToRandomNumbers = Numbers.sort((a, b) => 0.5 - Math.random());
         UrlsToRandomNumbers.forEach((element) => {
            RandomUrls2.push(RandomUrls[element]);
        })
        
        // console.log(RandomUrls, RandomUrls2);
        return RandomUrls2
    } 
    
    function loadStickersOnCards(){
        const randomURLS = randomUrls();
       
        let cardsDivs = document.querySelectorAll(".cards div");
        // console.log(cardsDivs);
        for (let index = 0; index <= 15; index++) {
            cardsDivs[index].style.backgroundImage = `url(${randomURLS[index]})`;
        }
        
    }

    function showGameboard(){
        cardsDivs.forEach(card => {
            card.classList.add("backface-visibility");
        });
    }
    function hideGameboard(){
        cardsDivs.forEach(card => {
            card.classList.remove("backface-visibility");
        });
    }
    function addEventListenerToCards(){
        // console.log(cardsDivs);
        cardsDivs.forEach(card => {
            //Si quieres pasar parámetros a la función del listener, debes utilizar funciones anónimas.
            card.addEventListener("click", function handler(){
                addBackfaceTransitionClass(card)
            }, false);
        });
    }
    function removeEventListener(kitty){
        if (kitty) {
            kitty.replaceWith(kitty.cloneNode(true));
        } else {
            cardsDivs.forEach(card => {
                //Si quieres pasar parámetros a la función del listener, debes utilizar funciones anónimas.
                card.replaceWith(card.cloneNode(true));
                // card.removeEventListener("click");
            });
        }
        
    }
    function addBackfaceTransitionClass(card){
        cardsSelected++;
        card.classList.add("backface-visibility");
        removeEventListener(card);
        cardsSelection.push(card.children[0].attributes[1].nodeValue);
        console.log(cardsSelected);
        if (cardsSelected == 2) {
            kittiesSelected = document.querySelectorAll(".backface-visibility");
            removeEventListener();
            setInterval(() => {
                validateCardsPair(kittiesSelected);
            }, 2000);
            
            console.log(cardsSelection);
        }
    
    }
    function validateCardsPair(kittiesSelected){
        if (cardsSelection[0] == cardsSelection[1]) {
            console.log("Congratulations bro");
        }else{
            kittiesSelected.forEach(card => {
                console.log(card);
                
            card.classList.remove("backface-visibility")
                               
        });
           
        addEventListenerToCards(); 
        }
        
    }

    loadStickersOnCards();
    showGameboard();
    setTimeout(hideGameboard, 3000);
    addEventListenerToCards();

    
}
comienzaPartida();


( function(){
    "use strict";

    function handleAdvice(tips){
        const guess = tips.advice;
        const conselho = document.createElement("div");
        conselho.innerHTML = guess;
        document.getElementById("guess-content").appendChild(conselho)
    }


    fetch("https://api.adviceslip.com/advice", {method: "GET"})
        .then((response) => response.json())
        .then(function(data){
            console.log({data});
            handleAdvice(data.slip[0]);
        })
        .catch(function (error) {
            console.log({ error });
        });
        console.log()

})();


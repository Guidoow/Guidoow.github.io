





function displayMap(){
    var mape=document.querySelector("#map");

//                                             MAP FUNCTION   MAP FUNCTION   MAP FUNCTION
//                                             MAP FUNCTION   MAP FUNCTION   MAP FUNCTION
    function displayScript(){
            mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VpZG9vdyIsImEiOiJjbDMwaWsyajIwM3Z6M2twZmZia2Z5bjl4In0.khzKjoQR8G3073Ks32yM7w';
            const map = new mapboxgl.Map({
                container: 'map', // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: [-57.94, -34.915], // starting position [lng, lat]
                zoom: 9 // starting zoom
            });
    };
//                                             MAP FUNCTION   MAP FUNCTION   MAP FUNCTION
//                                             MAP FUNCTION   MAP FUNCTION   MAP FUNCTION

    if(mape.classList.contains("display")){
        mape.classList.remove("display");
        
    }else{
        mape.classList.add("display");
        setTimeout(displayScript, 500);
    }
    
    



};
//                                                              TEMPORIZADOR  -- - - -- - - 
//                                                              TEMPORIZADOR  -- - - -- - - 
//                                                              TEMPORIZADOR  -- - - -- - - 
//                                                              TEMPORIZADOR  -- - - -- - - 



window.onload = function(){
    
    console.log(this)

    var horaInit = new Date();
    globalThis.segundosInit = horaInit.getSeconds();
    globalThis.minutosInit = horaInit.getMinutes();
    // console.log("Tiempo Inicial:", minutosInit, "-", segundosInit)
    }

    function testTime(){
    var horaNow = new Date();
    var segundosNow = horaNow.getSeconds();
    var minutosNow = horaNow.getMinutes();

    segundosNow=segundosNow-segundosInit
    minutosNow=minutosNow-minutosInit

    if(minutosNow>0){
    segundosNow+=(minutosNow*60)
    minutosNow=0
    }
    globalThis.segundosNow
    console.log(segundosNow)
    return segundosNow
}
// setTimeout(testTime,1000);








//                                                              TEMPORIZADOR  -- - - -- - - 
//                                                              TEMPORIZADOR  -- - - -- - - 
//                                                              TEMPORIZADOR  -- - - -- - - 
//                                                              TEMPORIZADOR  -- - - -- - - 



function menuDisplayActivator(){
    
    este = this;
    var menu = document.querySelector(".menuDisplay");

    function moverHover(){
        if(este.classList.contains("hoverForMenuDisplay")){
            este.classList.replace("hoverForMenuDisplay","hoverForMenuHide");
            console.log("Se displayeo el contenido del menu!");
        }else if(este.classList.contains("hoverForMenuHide")){
            este.classList.replace("hoverForMenuHide","hoverForMenuDisplay");
            console.log("The content of MENU was hidden");
        };
    };

    function displayMainContent(){
        if(menu.classList.contains("menuAnimationInit")){
            menu.classList.replace("menuAnimationInit","menuAnimationHover");
        }else if(menu.classList.contains("menuAnimationInit2")){
            menu.classList.replace("menuAnimationInit2","menuAnimationHover");
        }else if(menu.classList.contains("menuAnimationHover")){
            menu.classList.replace("menuAnimationHover","menuAnimationInit2");
        };

    };

    displayMainContent();

    moverHover();

}
function apretado(){
    document.querySelector("#menuDisplayActivator").click();
};
setTimeout(apretado,4200)





function send(){
    const form = document.querySelector(".fifthForm");
    const aaaa = document.querySelector(".fifthSender");
    const formInfo = new FormData(form);
    aaaa.setAttribute("href",`mailto:guidomoran.ap@gmail.com?subject=Hi, im ${formInfo.get("name")}, my mail is: ${formInfo.get('email')}...&body=${formInfo.get('message')}`);
    aaaa.click();
    aaaa.setAttribute("href","/");

}
copied=document.createElement("div");
copied.classList.add("fifthCopyAlerta");
copied.innerHTML="Email copied!";
function clippin(){
    const mlpclk=()=>{
        btnm.removeChild(copied);
        btnm.setAttribute("onclick","clippin.call(this)");
    }
    const btnm = this;
    btnm.setAttribute("onclick","");
    btnm.appendChild(copied);
    setTimeout(mlpclk,2100);
    navigator.clipboard.writeText("guidomoran.ap@gmail.com");

}








function cardBackPosition(){
    try{
        if(cartaClickeada==="empty"){
            throw "No habia carta arriba.";
        }else{
            cartaClickeada.classList.replace("cardSelected","card");
            cartaClickeada.classList.replace("cardOn"+cartaClickeadaNumber,"stair"+ cartaClickeadaNumber);
            cartaClickeada.classList.add("cardOff"+cartaClickeadaNumber);

            cartaClickeada.setAttribute("onclick","cardSelected.call(this,'empty')");
            // console.log("la carta "+cartaClickeadaNumber+" estaba clickeada, ahora volvio a su lugar...");
            cartaClickeada="empty"
            // console.log(cartaClickeada)
            if(cartaClickeada==="empty"){
                explain.innerHTML = myTexts["Original"];
                // console.log("inner puesto.");
                throw "All is right working.";
            };
        };
    }catch(error){
        // console.log("ERROR, la carta clickeada tuvo un error al intentar volver (cardBackPosition)");
    };
};



        //First = CSS   Second = HTML   Third  = JS   Quarter = Django   Fifth = .python
function cardSelected(position){

    globalThis.cardSelectedContainer = document.querySelector(".explainContent");
    console.log(cardSelectedContainer);
    globalThis.cardsContainer = document.querySelector(".cards");
    console.log(cardsContainer);

    var este=this;

    globalThis.myCards = ["First","Second","Third","Quarter","Fifth"];

    globalThis.explain = document.querySelector(".explainContentText");

    globalThis.myTexts = {"First":`Experience on: 
                            <br> - Variables.
                            <br> - Design adaptable to exigence.
                            <br> - Classes and pseudo-classes.
                            <br> - Animations with and without JS (Like this cards!).
                            <br> - Responsive designs.`, 
                        "Second":`Experience on: 
                            <br> - Most elements of the DOM.
                            <br> - Nodes, hierarchy, inheritance.
                            <br> - Logical structuring.
                            <br> - Scripts and styles.
                            <br> - Media content incorporation.`,
                        "Third":`Experience on: 
                            <br> - Window methods and propertys management (e.g. DOM, events, console, etc.).
                            <br> - Basic developing concepts: function, variables, data types, modularization, etc. 
                            <br> - Error management, flow control, and so on.
                            <br> - Most about POO: Functions, classes, inheritance,  etc.
                            <br> - Async functions management> callbacks, promises, await.
                            <br> - JSON, Ajax and HTTPRequests management.
                            <br> - API deployment.
                            <br> - <br> - basic interactables 3D objects with library implementation.
                            <br> - ...
                            `,
                        "Quarter":`Experience on:
                            <br> - Habit on MVC or "MVT".
                            <br> - Database management whit CRUD basic functions: MySQL, SQLite.
                            <br> - Management of QuerySets.
                            <br> - basic HTTPRequests.
                            <br> - API deployment.
                            
                            `,       
                        "Fifth":`NOTE: I prefer this language among all others i tried.
                        <br> -Experience on:
                        <br> - Basic developing concepts: function, variables, data types, modularization etc. 
                        <br> - Most about POO: Functions, classes, inheritance,  etc.
                        <br> - Error management, flow control, and so on.
                        <br> - Brief frameworks introduction: Tkinter, Turtle, NumPY, Pyglet.
                        <br> - Some math knowledge and challenges!.
                        <br> - 
                        `, 
                        "Original":`Pick a card to show the info here! <br>SECTION UNDER CONSTRUCTION... <br>i keep learning every day!`};

    function upper(classNumber){

        este.classList.replace("card","cardSelected");
        este.classList.replace("stair"+ classNumber,"cardOn"+classNumber);
        
        if(este.classList.contains("cardOff"+classNumber)){
            
        }else{
            // console.log("El elemento "+ classNumber+" No contiene la clase cardOffNumero. Probablemente sea la primera vez que se clickea.")}
        };
        este.setAttribute("onclick","cardBackPosition.call(this)");
    };


    function downerOfClickeada(){
        try{
            if(cartaClickeada==="empty"){
                throw "No habia carta arriba.";
            }else{
                cartaClickeada.classList.replace("cardSelected","card");
                cartaClickeada.classList.replace("cardOn"+cartaClickeadaNumber,"stair"+ cartaClickeadaNumber);
                cartaClickeada.classList.add("cardOff"+cartaClickeadaNumber);

                cartaClickeada.setAttribute("onclick","cardSelected.call(this,'empty')");
                // console.log("la carta "+cartaClickeadaNumber+" estaba clickeada, ahora volvio a su lugar, empujada por otra carta...");
            }
        }catch(error){
            // console.log("ERROR, "+ cartaClickeada +" tuvo un error al intentar volver (downerOfClickeada)");
        };
    };


    function cartaGlobal(classNumber){
        globalThis.cartaClickeada = document.querySelector("#"+classNumber);
        globalThis.cartaClickeadaNumber = classNumber;
        // console.log("Carta superior es NUMERO "+cartaClickeadaNumber)

        function evalCardForDescripcion(){

            try{
                for(i=0; i<myCards.length; i++){
                    if(cartaClickeadaNumber===myCards[i]){
                        // console.log("Se encontro "+myCards[i]);
                        explain.innerHTML = myTexts[cartaClickeadaNumber];
                        // console.log(myTexts[cartaClickeadaNumber]);
                        break
                    }else{continue;};
                };
            }catch(Error){console.log("ERRRRRRRRRor!!! !!! !!! :(" + Error);};
        };
        evalCardForDescripcion();
    };



    function selectorDeCarta(){
        try{
            for(i=0; i<myCards.length; i++){
                if(este.classList.contains("stair"+myCards[i])){
                    // console.log("se encontro NUMERO 5!");
                    classNumber=myCards[i];
                    try{
                        if(cartaClickeada){
                            // console.log(cartaClickeada);
                            downerOfClickeada();
                        }else{
                            // console.log("No se encontro ninguna carta clickeada...");
                        }
                    }catch(ReferenceError){
                        // console.log("Hubo un error comun:");
                        // console.log(ReferenceError);
                    }
                    upper(classNumber);
                    cartaGlobal(classNumber);
                    break
                }else{continue;};
            };
        }catch(Error){console.log("  DAMN ERROR!!!!!!!!!!!!! NO se encontro ninguna! :(" + Error);}
    };


    if(position==='empty'){
        selectorDeCarta();
    }else{
        try{
            for(i=0; i<myCards.length; i++){
                if(position===myCards[i]){
                    console.log("Se encontro "+myCards[i]);
                    este=document.querySelector(".stair"+position);
                    selectorDeCarta(); 
                    console.log(este);
                    console.log(myCards[i]);
                
                    break
                }else{continue;};
            };
        }catch(Error){console.log("Q!!WQ!TEEEREWR !!! WRQW!!! :(" + Error);}
    };
};







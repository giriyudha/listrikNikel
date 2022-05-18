const mobileBtn = document.getElementById('mobile-cta');
                nav = document.querySelector('nav');
                mobileBtnExit = document.getElementById('mobile-cta-exit');
                body=document.querySelector('body');

mobileBtn.addEventListener('click', ()=> {
                nav.classList.add('menu-btn');
 });

mobileBtnExit.addEventListener('click', ()=> {
                nav.classList.remove('menu-btn');
});

$(document).ready(function(){
    $("#hitung50N").click(function(){
        var arusR = parseFloat($("#AR50N").val());
        var sudutR = parseFloat($("#SR50N").val());
        var arusS = parseFloat($("#AS50N").val());
        var sudutS = parseFloat($("#SS50N").val());
        var arusT = parseFloat($("#AT50N").val());
        var sudutT = parseFloat($("#ST50N").val());

        //REAL COMPONENT

        let realCom = {}; 
        // alert(arusS);
        realCom.rReal = arusR * Math.cos(sudutR * Math.PI/ 180 );
        realCom.sReal = arusS * Math.cos(sudutS * Math.PI/ 180);
        realCom.tReal = arusT * Math.cos(sudutT * Math.PI / 180);
        // alert(realCom.sReal);
        const sumReal = () => Math.round((Object.values(realCom).reduce((a,b)=>a+b))*100)/100;

        
        //IMAGINARY COMPONENT

        let imCom = {};

        imCom.rReal = arusR * Math.sin(sudutR * Math.PI / 180);
        imCom.sReal = arusS * Math.cos(sudutS * Math.PI / 180);
        imCom.tReal = arusT * Math.cos(sudutT * Math.PI / 180);
        
        const sumIm = () => Object.values(imCom).reduce((a,b)=>a+b);
       

        //Relay

        var setRelay = $("#relay50N").val();

        flagRelay = 0;

        if (sumReal > setRelay){
            flagRelay=1;
        }

        $("#resultArus50N").text(sumReal);

        if (flagRelay==1){
            $("#resultRelay50N").text("TRIP");
        }
    });
});

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
    $("#hitung51").click(function(){
      
        var volt = parseFloat($("#V51").val());
        var ohm = parseFloat($("#R51").val());
        
        const result  = 1.414 * volt /ohm;

        //Relay

        var setRelay = $("#relay51").val();

        flagRelay = 0;

        if (result > setRelay){
            flagRelay=1;
        }

        $("#resultArus51").text(result);

        if (flagRelay==1){
            $("#resultRelay51").text("TRIP");
        }
    });
});

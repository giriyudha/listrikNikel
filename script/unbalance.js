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
    $("#hitung46").click(function(){
        var arusR = parseInt($("#AR-46").val());
        var ratedR = parseInt($("#SR-46").val());
        var arusS = parseInt($("#AS-46").val());
        var ratedS = parseInt($("#SS-46").val());
        var arusT = parseInt($("#AT-46").val());
        var ratedT = parseInt($("#ST-46").val());
        
        //NPS

        let divided = {}; 

        divided.rPerRated = arusR / ratedR * 100;
        divided.sPerRated = arusS / ratedS * 100;
        divided.tPerRated = arusT / ratedT * 100;
        
       
        let max = 0;
        let min = 100000;

        for (let fasa in divided){
            if (divided[fasa]>max){
                max=divided[fasa];
            }
        }

        for (let fasas in divided){
            if(divided[fasas]<min){
                min=divided[fasas];
            }
        }
        
        var distance = max-min;

        var nps = Math.round(distance / 3*100)/100;

        //UNBALANCE

        var averageCur = (arusR+arusS+arusT)/3;
        let ubCur = {};

        ubCur.ubR = Math.abs((arusR-averageCur)/averageCur);
        ubCur.ubS = Math.abs((arusS-averageCur)/averageCur);
        ubCur.ubT = Math.abs((arusT-averageCur)/averageCur);
        let maxUb = 0;

        for (let phase in ubCur){
            if (ubCur[phase]>maxUb){
                maxUb=ubCur[phase];
            }
        }

        let ubRes = Math.round((maxUb * 100)*100/100);

        let ubIn = Math.round((((maxUb * averageCur)/ratedR)*100)*100/100);

        //Relay

        var setRelay = $("#relay46").val();

        flagRelay = 0;

        if ((nps > setRelay)||(ubIn>setRelay)){
            flagRelay=1;
        } else {
            flagRelay=0;
        }

        if((ratedR==0)||(ratedS==0)||(ratedT==0)){
            alert("Salah satu arus nominal kosong!");
        }

        $("#resultNps").text(nps);
        $("#resultUb").text(ubRes);
        $("#resultUbIn").text(ubIn)

        if (flagRelay==1){
            $("#resultRelay46").text("TRIP");
        } else {
            $("#resultRelay46").text("OK");
        }
    });
});

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
    $("#hitung87").click(function(){
        var IPrimFLA = parseFloat($("#APFLA87").val());
        var ISekFLA = parseFloat($("#ASFLA87").val());
        var IPrimR= parseFloat($("#APR87").val());
        var ISekR = parseFloat($("#ASR87").val());
        var IPrimS = parseFloat($("#APS87").val());
        var ISekS = parseFloat($("#ASS87").val());
        var IPrimT = parseFloat($("#APT87").val());
        var ISekT = parseFloat($("#AST87").val());
        var ct1Prim = parseFloat($("#ctPrimP87").val());
        var ct1Sek = parseFloat($("#ctPrimS87").val());
        var ct2Prim = parseFloat($("#ctSekP87").val());
        var ct2Sek = parseFloat($("#ctSekS87").val());
        
        //Fasa R
        
        var irm = IPrimR/IPrimFLA - (IPrimR+IPrimS+IPrimT)/(3*IPrimFLA);
        var irm2= (ISekT-ISekR)/(Math.sqrt(3)*ISekFLA);
        var idR = Math.abs(irm+irm2);
        var idinR = Math.abs(idR/IPrimFLA*100);
        var itR = 0;
        if (Math.abs(irm) > Math.abs(irm2)){
            itR = Math.abs(irm);
        } else if(Math.abs(irm2) > Math.abs(irm)) {
            itR = Math.abs(irm2);
        }

        var iditR = idR / itR;

         //Fasa S
        
         var ism = IPrimS/IPrimFLA - (IPrimR+IPrimS+IPrimT)/(3*IPrimFLA);
         var ism2= (ISekR-ISekS)/(Math.sqrt(3)*ISekFLA);
         var idS = Math.abs(ism+ism2);
         var idinS = Math.abs(idS/IPrimFLA*100);
         var itS = 0;
         if (Math.abs(ism) > Math.abs(ism2)){
             itS = Math.abs(ism);
         } else if(Math.abs(ism2) > Math.abs(ism)) {
             itS = Math.abs(ism2);
         }
 
         var iditS = idS / itS;
 
        //Fasa T
                
        var itm = IPrimT/IPrimFLA - (IPrimR+IPrimS+IPrimT)/(3*IPrimFLA);
        var itm2= (ISekS-ISekT)/(Math.sqrt(3)*ISekFLA);
        var idT = Math.abs(itm+itm2);
        var idinT = Math.abs(idT/IPrimFLA*100);
        var itT = 0;
        if (Math.abs(itm) > Math.abs(itm2)){
            itT = Math.abs(itm);
        } else if(Math.abs(itm2) > Math.abs(itm)) {
            itT = Math.abs(itm2);
        }

        var iditT = Math.round((idT / itT)*100)/100;

        //Relay

        var setRelayId = $("#rId87").val();
        var setRelayIdit = $("#rIdit87").val();

        flagRelay = 0;

        if ((idR > setRelayId)||(idS > setRelayId)||(idT > setRelayId)||(iditR>setRelayIdit)||(iditT>setRelayIdit)||(iditT>setRelayIdit)){
            flagRelay=1;
        }

        $("#resultRId").text(idR);
        $("#resultRIdit").text(iditR);
        $("#resultSId").text(idS);
        $("#resultSIdit").text(iditS);
        $("#resultTId").text(idT);
        $("#resultTIdit").text(iditT);

        if (flagRelay==1){
            $("#resultRelay87").text("TRIP");
        }
    });
});

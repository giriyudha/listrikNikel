const mobileBtn = document.getElementById('mobile-cta');
                nav = document.querySelector('nav');
                mobileBtnExit = document.getElementById('mobile-cta-exit');
                body=document.querySelector('body');

mobileBtn.addEventListener('click', ()=> {
                nav.classList.add('menu-btn');
 })

mobileBtnExit.addEventListener('click', ()=> {
                nav.classList.remove('menu-btn');
})

$("#hitung").click(function(){
    var mvaGrid = parseFloat($("#vaGrid").val());
    var kvBus1 = parseFloat($("#vBus1").val());
    var mvaTr1 = parseFloat($("#vaTr1").val());
    var kvGrid = parseFloat($("#vBus1").val());
    var impTr1 = parseFloat($("#xTr1").val());
    var impKabel= parseFloat($("#xKabel").val());
    var mvaTr2 = parseFloat($("#vaTr2").val());
    var impTr2 = parseFloat($("#xTr2").val());
    var kvBus2 = parseFloat($("#vBus2").val());
    console.log(kvBus2);
    var impLoad = parseFloat($("#xLoad").val());

    $("#level1").text(kvBus1);
    $("#kvB1").text(kvBus1);
    $("#mvaB1").text(mvaGrid);
    var zBase1 = (kvBus1*kvBus1)/mvaGrid;
    $("#zb1").text(zBase1);


    $("#level2").text(kvBus2);
    $("#kvB2").text(kvBus2);
    $("#mvaB2").text(mvaGrid);
    var zBase2 = (kvBus2*kvBus2)/mvaGrid;
    $("#zb2").text(zBase2);
    
    
     $("#zTrafo1").text(impTr1);
     $("#vtr1").text(kvBus1);
     $("#mvaTr1").text(mvaTr1);
     $("zb1-2").text(zBase1);
     var zPuTr1 = (impTr1/100 * (kvBus1*kvBus1)/mvaTr1)/ zBase1
     $("#ztr1").text(zPuTr1);
     

    $("#zkabel").text(impKabel);
    $("zb1-3").text(zBase1);
    var zPuKabel = impKabel / zBase1;
    $("#zBkabel").text(zPuKabel);
    
    
    $("#zTrafo2").text(impTr2);
    $("#vtr2").text(kvBus2);
    $("#mvaTr2").text(mvaTr2);
    $("#zb2-2").text(zBase2);
    var zPuTr2 = (impTr2/100 * (kvBus2*kvBus2)/mvaTr2)/ zBase2
    $("#ztr2").text(zPuTr2);
    

    $("#zLoad").text(impLoad);
    $("#zb2-3").text(zBase2)
    var zPuLoad = impLoad / zBase2 /3 
    $("#zLoadpu").text(zPuLoad);
    
    
    $("#ztr1-2").text(zPuTr1);
    $("#zBkabel-2").text(zPuKabel);
    $("#ztr2-2").text(zPuTr2);
    var impLine = zPuTr1+zPuKabel+zPuTr2;
    $("#zLine1").text(impLine);

    $("#mvaGrid").text(mvaGrid);
    $("#kvBus2").text(kvBus2);
    $("#zLine1-2").text(impLine);
    var iScAtas = (mvaGrid/(1.73*kvBus2)) * (1/impLine);
    console.log((1.73*kvBus2));
    $("#iSCAtas").text(iScAtas);
    
    $("#mvaGrid2").text(mvaGrid);
    $("#kvBus2-2").text(kvBus2);
    $("#zLoadpu-2").text(zPuLoad);
    var iScBawah = (mvaGrid/(1.73*kvBus2)) * (1/zPuLoad);
    $("#iSCBawah").text(iScBawah);


});
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


$("#draw").click(function(){
    
    var c = document.getElementById("canvasUb"); // Grab canvas object
    var ctx = c.getContext("2d"); // Define canvas context
    var w=c.width; // Canvas width => Frequency is relative to this
    var h=c.height/2; // Canvas height over two => Amplitude: Volume
    var f=1; // How many cycles per canvas width => Frequency: Tone & Speed
    ctx.clearRect(0, 0, w, h*2);

    // Note that:
    // h is the amplitude of the wave
    // x is the current x value we get every time interval
    // 2 * PI is the length of one cycle (full circumference)
    // f/w is the frequency fraction

    var sudutR = parseInt($("#sudutR").val());
    var sudutS = parseInt($("#sudutS").val());
    var sudutT = parseInt($("#sudutT").val());

    // Calculates y position from x
    function calcSineY(x, sudut) {
        return h - h * Math.sin( x * 2 * Math.PI * (f/w)  + (sudut*Math.PI/180) );
    }

    function tinggiKotak(sudut){
        return h - h * Math.sin( w/3 * 2 * Math.PI * (f/w)  + (sudut*Math.PI/180) );
    }

    function tinggiText(sudut){
        var tinggi = h - h * Math.sin( w/3 * 2 * Math.PI * (f/w)  + (sudut*Math.PI/180) );
        if ( tinggi > h){
            return c.height-h-tinggi;
        } else {
            return h-tinggi;  
        }
    }

    function posisiText(sudut){
        if (sudut<200){
            return Math.abs(sudut+30)
        } else {
            return calcSineY(w/3+5, sudut)
        }
    }

    function drawSine(x){
        ctx.clearRect(0, 0, w, h*2);
        //draw x axis
        ctx.beginPath(); // Draw a new path
        ctx.strokeStyle = "black"; // Pick a color
        ctx.moveTo(0,h); // Where to start drawing
        ctx.lineTo(w,h); // Where to draw to
        ctx.stroke(); // Draw
        
        // draw sin curve point to point until x
        ctx.beginPath(); // Draw a new path
        ctx.strokeStyle = "blue"; // Pick a color
        for(var i=0;i<x;i++){ // Loop from left side to current x
            var y = calcSineY(i, sudutR); // Calculate y value from x
            ctx.lineTo(i,y); // Where to draw to
        }
        ctx.stroke(); // Draw

         // draw sin curve point to point until x
         ctx.beginPath(); // Draw a new path
         ctx.strokeStyle = "red"; // Pick a color
         for(var i=0;i<x;i++){ // Loop from left side to current x
             var y = calcSineY(i, sudutS); // Calculate y value from x
             ctx.lineTo(i,y); // Where to draw to
         }
         ctx.stroke(); // Draw

          // draw sin curve point to point until x
        ctx.beginPath(); // Draw a new path
        ctx.strokeStyle = "green"; // Pick a color
        for(var i=0;i<x;i++){ // Loop from left side to current x
            var y = calcSineY(i, sudutT); // Calculate y value from x
            ctx.lineTo(i,y); // Where to draw to
        }
        ctx.stroke(); // Draw

        
        ctx.fillRect(w/3, tinggiKotak(sudutR), 5,5);
        ctx.font = 'Roboto';
        ctx.fillText(Math.round(tinggiText(sudutR)*100)/100, w/3+5, posisiText(sudutR));
        ctx.fillRect(w/3, tinggiKotak(sudutS), 5,5);
        ctx.fillText(Math.round(tinggiText(sudutS)*100)/100, w/3+5, posisiText(sudutS));
        ctx.fillRect(w/3, tinggiKotak(sudutT), 5,5);
        ctx.fillText(Math.round(tinggiText(sudutT)*100)/100, w/3+5, posisiText(sudutT));

    }

    // Define initial value of x positiom (leftmost side of cnanvas)
    var x=0;

    while(x<w+1){
        drawSine(x);
        x++;
    }

    magR = tinggiText(sudutR);
    magS = tinggiText(sudutS);
    magT = tinggiText(sudutT);
    var hasilArus = Math.round(magR+magS+magT)*100/100;

    $("#resultArus").text(hasilArus);
    
});

$("#hitungArus").click(function(){
    dayaR = parseFloat($("#dayaR").val());
    dayaS = parseFloat($("#dayaS").val());
    dayaT = parseFloat($("#dayaT").val());

    arusR = dayaR/220;
    arusS = dayaS/220;
    arusT = dayaT/220;

    $("#wattR").text(dayaR);
    $("#curR").text(arusR);

    $("#wattS").text(dayaS);
    $("#curS").text(arusS);

    $("#wattT").text(dayaT);
    $("#curT").text(arusT);

    $("#curR2").text(arusR);
    $("#curS2").text(arusS/2);
    $("#curT2").text(arusT/2);

    arusNetral = arusR-(arusS/2)-(arusT/2);
    $("#curNetral").text(arusNetral);
                                   
});




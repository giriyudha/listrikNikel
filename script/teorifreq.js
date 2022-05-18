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
    // var f=1; // How many cycles per canvas width => Frequency: Tone & Speed
    var f = parseInt($("#frekuensi").val()); // How many cycles per canvas width => Frequency: Tone & Speed
    ctx.clearRect(0, 0, w, h*2);

    // Note that:
    // h is the amplitude of the wave
    // x is the current x value we get every time interval
    // 2 * PI is the length of one cycle (full circumference)
    // f/w is the frequency fraction



    // Calculates y position from x
    function calcSineY(x) {
        return h - h * Math.sin( x * 2 * Math.PI * (f/w));
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
            var y = calcSineY(i); // Calculate y value from x
            ctx.lineTo(i,y); // Where to draw to
        }
        ctx.stroke(); // Draw



    }

    // Define initial value of x positiom (leftmost side of cnanvas)
    var x=0;

    while(x<w+1){
        drawSine(x);
        x++;
    }
});

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

$(document).ready(function(){
    $("#cek").click(function(){
        slogan = $("#antamBest").val();
        
        if (slogan.toLowerCase() == "best"){
            $("#container-quiz").addClass("best");
            $("#main-container").removeClass("best");
        } else {
            $("#prompt-quiz").text("Jawaban salah, refresh halaman dan coba lagi.")
        }
    })
})

$(document).keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        slogan = $("#antamBest").val();
        
        if (slogan.toLowerCase() == "best"){
            $("#container-quiz").addClass("best");
            $("#main-container").removeClass("best");
        } else {
            $("#prompt-quiz").text("Jawaban salah, refresh halaman dan coba lagi.")
        };  
    }
  });
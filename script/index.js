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

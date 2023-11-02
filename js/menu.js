const nav = document.querySelector('.menu-nav');
window.addEventListener('scroll',function(){
    nav.classList.toggle('active',window.scrollY)
})
//color menu-nav 
var menu_button = document.querySelector('.menu-button')
var menu = document.querySelector('.menu')
var slogan = document.querySelector('.slogan')
var link = document.querySelector('.link')

menu_button.addEventListener('click', function(){
    menu.classList.toggle('show-menu')
    slogan.classList.toggle('slogan-hidden')
    link.classList.toggle('link-hidden')
})
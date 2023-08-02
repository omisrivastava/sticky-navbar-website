burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
list=document.querySelector('.list')
rightNav=document.querySelector('.right-nav')

list=document.querySelector('.list')
rightNav=document.querySelector('.right-nav')
burger.addEventListener('click',()=>{
rightNav.classList.toggle('.v-list');
    navbar.classList.toggle('h-nav');
    list.classlist.toggle('.v-list');

})
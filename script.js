search = document.querySelector('.searchContainer');
menu = document.querySelector('.menuContainer');
width = document.querySelector('body');
label = document.querySelector('.labelContainer');
navMenu = document.querySelector('.navMenu');

search.style.marginLeft = width.offsetWidth / 2 - menu.offsetWidth - label.offsetWidth - search.offsetWidth / 2 + `px`;

menu.addEventListener('click', function(){
    navMenu.classList.toggle('show');
})

const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(event){

            let x = event.clientX;
            let y = event.clientY - btn.offsetTop;

            let ripple = document.createElement('span');
            ripple.style.left = x + `px`;
            ripple.style.top = y + `px`;
            ripple.classList.add('ripple');
            this.appendChild(ripple);

            setTimeout(() =>{
                ripple.remove()
            },1000)
        })
    })

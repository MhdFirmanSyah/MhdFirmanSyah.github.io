
// Loading animation
window.addEventListener('load', () => {
    const loading = document.querySelector('#loading');
    loading.style.opacity = '0'
    setTimeout(() => {
        loading.style.display = 'none';
    }, 1000);
});

let img = document.getElementsByTagName('img');
Array.prototype.forEach.call(img, function(img) {
    img.setAttribute('draggable', 'false');
});

// nav scroll hidden
// window.onscroll = function(){
//     if (window.pageYOffset > 0){
//         document.querySelector(".navDesktop").style.top = "-100px";
//     } 
//     else if(window.pageYOffset < 50){
//         document.querySelector(".navDesktop").style.top = "0";
//     }else{
//         document.querySelector(".navDesktop").style.top = "0";
//     }
// }

// scroll lock
document.documentElement.style.overflowX = 'hidden';
// document.documentElement.style.overflowY = 'hidden';
// const unlock = document.querySelectorAll('.unlock')
const unlock = document.querySelectorAll('a')
const lock = document.querySelector('.lock')
unlock.forEach(function(element) {
    element.addEventListener('click', () => {
        document.documentElement.style.overflowY = 'auto';

        lock.addEventListener('click', () => {
            document.documentElement.style.overflowY = 'hidden';
        });
    });
    
});


//sidebar
const listIcon = document.querySelector('.list-icon')
const sidebar = document.querySelector('.sidebar')
const closeIcon = document.querySelector('.close-icon')
// show sideabar
    listIcon.addEventListener('click', () => {
        sidebar.style.top = '0'
        listIcon.style.top = '-99px'
    });
// hidden sidebar
    closeIcon.addEventListener('click', () => {
        sidebar.style.top = '-1900px'
        listIcon.style.top = '0'
    });
// outside sidebar
    window.addEventListener('click', (e) => {
        if (e.target !== sidebar && e.target !== listIcon) {
            sidebar.style.top = '-1900px'
            listIcon.style.top = '0'
        }
    });



// contact form
const input = document.querySelector('div label input')
const button = document.querySelector('div button')
// button.style.display = 'none'

input.addEventListener('input', function(event){
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (regexEmail.test(input.value)) {
        button.style.boxShadow = '0px 5px 20px rgb(0, 255, 0)'
        button.style.color = ' rgb(0, 255, 0)'
    } else if(input.value == '') {
        button.style.boxShadow = 'none'
        button.style.color = 'rgba(255, 255, 255, .8)'
    } else {
        button.style.boxShadow = '0px 5px 20px red'
        button.style.color = 'red'
    }
});

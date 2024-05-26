// window.onscroll = function(){
//     if (window.pageYOffset > 50){
//         document.querySelector("nav").style.top = "-100px";
//     } else{
//         document.querySelector("nav").style.top = "0";
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


// function toggleScrool(enable){
//     if (enable) {
//         document.documentElement.style.overflowY = 'auto';
//     }
//     else {
//         document.documentElement.style.overflowY = 'hidden';
//     }
// }





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


// Text scroll
let scrollElement = document.querySelector('.scroll-element')
console.log(scrollElement.pageYOffset)
// window.addEventListener('scroll', function(){
//     if(scrollElement.scrollTop === 10) {
//     }
// });



// //nightmode

// const toggle = document.getElementById('darkModeToggle')


// // toggle.addEventListener('change', (e) => {
// //   document.documentElement.classList.toggle('dark', e.target.checked);
// // });

// toggle.addEventListener('change', (e) => {
// document.documentElement.classList.toggle('dark', e.target.checked);

// if (e.target.checked) {
// localStorage.setItem('darkMode', 'true');
// } else {
// localStorage.removeItem('darkMode');
// }
// });

// // Cek apakah 'darkMode' ada di localStorage ketika halaman dimuat
// if (localStorage.getItem('darkMode')) {
// toggle.checked = true;
// document.documentElement.classList.add('dark');
// }


window.onscroll = function(){
    if (window.pageYOffset > 50){
        document.querySelector("nav").style.top = "-100px";
    } else{
        document.querySelector("nav").style.top = "0";
    }
}

// scroll lock
document.documentElement.style.overflowX = 'hidden';
document.documentElement.style.overflowY = 'hidden';
function toggleScrool(enable){
    if (enable) {
        document.documentElement.style.overflowY = 'auto';
    }
    else {
        document.documentElement.style.overflowY = 'hidden';
    }
}

//sidebar
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.top ='0'
    const list = document.querySelector('.list')
    list.style.top ='-90px'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.top ='-1900px'
    const list = document.querySelector('.list')
    list.style.top ='0'
}
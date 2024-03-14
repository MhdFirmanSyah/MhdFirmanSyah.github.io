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
// loading 
function showLoading() {
    document.getElementById("loading").style.display = "block";
}
function hideLoading() {
    document.getElementById("loading").style.display = "none";
}
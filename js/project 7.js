let icon = document.getElementById('a-icon');
let inp = document.getElementById('inp');

window.onscroll = function() {
    let value = scrollY;
    if(value < 500) {
        icon.style.display = 'none';
    }else {
        icon.style.display = 'block';
    }
}
function scrollWin() {
    window.scrollTo(0,0);
};
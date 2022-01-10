let text = document.getElementById('text')

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    text.style.marginBottom = value * 3.5 + 'px'
})

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }
    
    imgs.style.transform = `translateX( ${-idx * 500}px )`;
}

setInterval(carrossel, 1800);
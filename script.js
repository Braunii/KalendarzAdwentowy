const nagrody = [
    "img/nagroda1.png",
    "img/nagroda2.png",
    "img/nagroda3.png",
    "img/nagroda4.png",
    "img/nagroda5.png",
    "img/nagroda6.png",
    "img/nagroda7.png",
    "img/nagroda8.png"
]

function opendiv(index){
    let opening = document.querySelector('#opening');
    opening.style.display = "flex";

    let image = document.querySelector('#image');
    image.src = nagrody[index];

    image.classList.add('open');
}

function powrot(){
    let opening = document.querySelector('#opening');
    opening.style.display = "none";
}

setInterval(1000, function(){
    let image = document.querySelector("#image");

    image.classList.remove('open');
})
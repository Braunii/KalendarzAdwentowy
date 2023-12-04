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

function opendiv(index, letter){
    let embed = document.getElementById("img" + letter);

    let opening = document.querySelector('#opening');

    if (embed.style.display !== "block") {
        embed.style.display = "block";
        opening.style.display = "flex";
        localStorage.setItem("embedDisplay" + letter, "block");
    } else {
        opening.style.display = "none";
        alert("Już zjadłeś tą czakoladkę człowieku!");
    }

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

function setInitialDisplayStatus() {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'];

    letters.forEach(letter => {
        let embedDisplay = localStorage.getItem("embedDisplay" + letter);
        if (embedDisplay) {
            let embed = document.getElementById("img" + letter);
            embed.style.display = embedDisplay;
        }
    });
}

function resetbtn(){
    localStorage.clear();
    location.reload();
}

window.onload = setInitialDisplayStatus;
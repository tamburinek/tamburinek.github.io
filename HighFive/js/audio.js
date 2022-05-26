let a = new Audio();
a.src = "../resources/elevator.mp3";

a.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

//changing volume image when pressing and stoping / starting audio
function volumeChanger() {
    imageEl = document.getElementById("settingsImage");
    imageEl.addEventListener("click", (e) => {
        if (e.target.className == "up") {
            e.target.src = "../resources/volume-down.svg";
            e.target.className = "down"
            a.pause();
        } else {
            e.target.src = "../resources/volume-up.svg";
            e.target.className = "up"
            a.play();
        }
    })
}

volumeChanger();
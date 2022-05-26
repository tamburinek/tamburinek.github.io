//animating home page text
function typeWriter(i) {
    let speed = 100;
    var txt = `HighFive is effective CV creater and generator. CV is the most important thing when you are looking for new job.
    So u have to spend some time to make it perfect. This app is actually not that perfect but it is what it is.
    `;
    if (i < txt.length) {
        document.querySelector(".index-title").innerHTML += txt.charAt(i);
        setTimeout(typeWriter.bind(null, i+=1), speed);
    }
}
typeWriter(0);

//short animation with tree dots
let buttonToToggle = document.getElementById("index-button");
buttonToToggle.addEventListener("click", (e) => {
    e.preventDefault()
    let mainik = document.querySelector(".index-title");
    let logik = document.querySelector(".logoLogo")
    logik.style.width = "80vh";
    buttonToToggle.style.display = "none"
    mainik.style.display = "none"
    let balls = document.querySelector(".loader");
    balls.style.display = "block";

    setTimeout(redirect, 1500)
})

//after animation is coming redirect
function redirect(){
    document.location.href = "html/playground.html"
}

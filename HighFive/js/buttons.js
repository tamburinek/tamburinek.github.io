let colorButtons = ["blueLabel","redLabel", "greenLabel","brownLabel", "blakcLabel"]

const colorButtonsHex = {
    blueLabel : "#001233",
    lightBlueLabel : "#0A9396", 
    whiteLabel : "#ffffff", 
    purpleLabel:"#FFA69E", 
    redLabel : "#9B2226", 
    greenLabel:"#155D27",
    yellowLabel:  "#FFD60A", 
    orangeLabel : "#EE9B00",
    brownLabel : "#5E503F", 
    blakcLabel : "#0A0908"
}

// setting eventListener for canvas colors
for (const button of colorButtons) {
    let helperButton = document.getElementById(button)
    helperButton.addEventListener("click", (e) => {
        colorToCanvas = colorButtonsHex[button]
        isBlackNeeded = false
        drawRec()
    })
}

let colorButtons2 = ["lightBlueLabel", "whiteLabel","yellowLabel", "orangeLabel", "purpleLabel"]

for (const button of colorButtons2) {
    let helperButton = document.getElementById(button)
    helperButton.addEventListener("click", (e) => {
        colorToCanvas = colorButtonsHex[button]
        isBlackNeeded = true
        drawRec()
    })
}
let profilePic = document.getElementById("test-drop")
let inputPic = document.getElementById("photo-input")
let testPic = document.getElementById("test-pic")

inputPic.onchange = function() {
	let file = inputPic.files[0];
	let url = URL.createObjectURL(file);
    testPic.src = url;
}

const dropArea = document.querySelector(".app");


// drag and drope prodile pic and show preview
;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
	dropArea.addEventListener(eventName, preventDefaults, false)
  })
  
  function preventDefaults (e) {
	e.preventDefault()
	e.stopPropagation()
  }

dropArea.addEventListener('drop', handleDrop, false)

function handleDrop(e) {
  let dt = e.dataTransfer.files[0]
  previewFile(dt)
}

function previewFile(file) {
	let reader = new FileReader()
	try{
		reader.readAsDataURL(file)
		reader.onloadend = function() {
		let img = document.getElementById("test-pic");
		img.src = reader.result
		}
	}catch{
		console.log("i tried")
	}
}
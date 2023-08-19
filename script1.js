export{clickButton, dragElement}

function createCanvas() { 
    let dBuilt = document.getElementById('container')
    let i = dBuilt.childElementCount+1
    let dCanvas = document.createElement('div')
    dCanvas.textContent =  `work ${i}` 
    dCanvas.setAttribute('id',i)
    dBuilt.appendChild(dCanvas)
}

function newtask(){

}
function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }
const clickButton = () => {
    const test = document.getElementById('createCanvas')
    test.addEventListener('click', createCanvas)
    test.addEventListener('click', addbt)
}
=======
}


>>>>>>> Stashed changes


// function createFolder(){
//     let dFolder = document.createElement("div")
    
// }

// function createTaskbar(){
//     const taskbar = document.getElementById('div')
//     const namebar = document.createElement('h1')

//     document.getElementById('h1').style.border('solid #000000')
//     namebar.textContent = 'Work 1'
//     taskbar.appendChild(namebar)
// }
// function changeNameTaskBar(){
//     const taskbar = document.getElementById('h1')
// }




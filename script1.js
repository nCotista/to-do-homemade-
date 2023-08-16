export{clickButton, dragElement}

function createCanvas() { 
    let dBuilt = document.getElementById('container')
    let i = dBuilt.childElementCount+1
    let dCanvas = document.createElement('div')
    dCanvas.textContent =  `work ${i}` 
    dCanvas.setAttribute('id',i)
    dCanvas.setAttribute("class",'folder')
    dBuilt.appendChild(dCanvas) 
}
// 
// function addbt() {
//     let dBuilt = document.getElementById('1')
//     let i = dBuilt.childElementCount+1
//     let dCanvas = document.createElement("div")
//     dCanvas.textContent =  `+` 
//     dCanvas.setAttribute('id','1header')
//     dBuilt.appendChild(dCanvas)
// }
dragElement(document.getElementById("mydiv"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
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
}

function modal(){
    const namefolder = document.getElementById('Namefolder').value
    const folder = document.getElementById('folder')
    let i = folder.childElementCount+1
    let createfolder = document.createElement('div')
    createfolder.textContent =  `work ${namefolder}}` 
    createfolder.setAttribute('id',i)
    createfolder.setAttribute("class",'folder')
    folder.appendChild(createfolder) 
}


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




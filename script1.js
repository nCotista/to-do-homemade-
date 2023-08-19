export {
  clickButton, dragElement,
  clickButton1,
  clickButton2,
  clickButton4,
  clickButton5,
  changeTextColor,
  midText,
  endText,
  startText,
  sizeText,
  toggleDisplay
}



let Name = []



function offmodal() {
  let modal = document.getElementById('modal');
  modal.setAttribute("style", "display:none;");
}

function onmodal() {
  let modal = document.getElementById('modal');
  modal.setAttribute("style", "display:block;");
}

const clickButton = () => {
  const test = document.getElementById('btid');
  test.addEventListener('click', onmodal);
};

const clickButton1 = () => {
  const test = document.getElementById('createform');
  test.addEventListener('click', offmodal);
};

const clickButton2 = () => {
  const test = document.getElementById('createform');
  test.addEventListener('click', folder3);
};

// function folder() {
//   let namef = document.getElementById('Namefolder').value;
//   // let des = document.getElementById('des').value;

//   let folder = document.getElementById('folderhtml');

//   let i = folder.childElementCount+1
//   let dCanvas = document.createElement('div');
//   dCanvas.textContent = `${namef}`;
//   dCanvas.setAttribute('id', `folder-${i}`);
//   // let tCanvas = document.createElement('p');
//   // tCanvas.textContent = `${des}`;
//   // tCanvas.setAttribute('id', `description-${i}`);

//   // let fCanvas = document.createElement('button');
//   // fCanvas.textContent = 'Setting';
//   // fCanvas.setAttribute('id', `folder-${i}` );
//   folder.appendChild(dCanvas);
//   // folder.appendChild(tCanvas)
//   // folder.appendChild(fCanvas);
//   // fCanvas.addEventListener('click', fixon); 
//   folder1()
//   folder2()

//   return i;

// }
// function folder1(){
//   let des = document.getElementById('des').value;
//   let folder = document.getElementById('folderhtml');
//   let i = folder.childElementCount+1
//   let desindiv = document.getElementById(`folder-${i}`)
//   let tCanvas = document.createElement('p');
//   tCanvas.textContent = `${des}`
//   tCanvas.setAttribute('id', `description-${i}`);

//   if(desindiv){desindiv.appendChild(tCanvas)}

// }
// function folder2(){
//   let folder = document.getElementById('folderhtml');
//   let i = folder.childElementCount+1
//   let desindiv = document.getElementById(`folder-${i}`)
//   let fCanvas = document.createElement('button');
//   fCanvas.textContent = 'setting'
//   fCanvas.setAttribute('id', `buttton-${i}`);

//   if(desindiv){desindiv.appendChild(fCanvas)
//     fCanvas.addEventListener('click', fixon); }


// }
function folder3() {
  let namef = document.getElementById('Namefolder').value;
  let des = document.getElementById('des').value;

  let folder = document.getElementById('folderhtml');
  let i = folder.childElementCount + 1;


  let folderId = `input-${i}`;

  let folderDiv = document.createElement('div'); // Create a div for each folder
  folderDiv.setAttribute('id', folderId);
  folder.appendChild(folderDiv);

  let projectNameDiv = document.createElement('div'); // Create a div for project name
  projectNameDiv.textContent = `${namef}`;
  projectNameDiv.setAttribute('id', `folder-${i}`);
  folderDiv.appendChild(projectNameDiv);

  let descriptionDiv = document.createElement('div'); // Create a div for description
  descriptionDiv.textContent = ` ${des}`;
  descriptionDiv.setAttribute('id', `des-${i}`);
  folderDiv.appendChild(descriptionDiv);

  let settingButton = document.createElement('button'); // Create the Setting button
  settingButton.textContent = 'Setting';
  settingButton.setAttribute('id', `button-${i}`);
  folderDiv.appendChild(settingButton);
  settingButton.addEventListener('click', fixon);

  const projectname = Name.push(`button-${i}`)
  console.log(Name);
  return i;

}


function fixoff() {
  let modal = document.getElementById('fixform');
  modal.setAttribute("style", "display:none;");
}

function fixon() {
  let modal = document.getElementById('fixform');
  modal.setAttribute("style", "display:block;");
}
const clickButton4 = () => {
  const test = document.getElementById('closefix')
  test.addEventListener('click', fixoff)
}
const clickButton5 = () => {
  const test = document.getElementById('closefix');
  if (test) { test.addEventListener('click', getvaluechangename) }
};
// function getvaluechangename(){
//   let folder = document.getElementById('folderhtml');

//  let i = folder.childElementCount 

//   let newName = document.getElementById('newnamefix').value
//   let newName1 = document.createElement('p')
//   newName1.setAttribute('id', `folder-${i} 1`);
//   newName1.textContent=(`${newName}`)
//   folder.appendChild(newName1)

//   let ref = document.querySelector(`.folder-${i}`)
//   folder.replaceChild(newName1,ref)
// }

function getvaluechangename() {
  let newName = document.getElementById('newnamefix').value;
  console.log('New name:', newName);

  let folder = document.getElementById('folderhtml');
  let i = folder.childElementCount;
  console.log('Child element count:', i);

  if (newName.trim() === '') {
    alert("Please enter a new name.");
    return;
  }

  let buttonElement = document.getElementById(`folder-${i}`);
  console.log('Button element:', buttonElement);

  if (buttonElement) {
    buttonElement.textContent = newName;
    console.log('Button text updated:', newName);
  }
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

const folderElements = document.getElementsByClassName('folder');

for (const folderElement of folderElements) {
  dragElement(folderElement);
}
function dragElement(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  elmnt.onmousedown = dragMouseDown;


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

// function newtask(){

// }
// function on() {
//     document.getElementById("overlay").style.display = "block";
//   }

//   function off() {
//     document.getElementById("overlay").style.display = "none";
//   }
// const clickButton = () => {
//     const test = document.getElementById('createCanvas')
//     test.addEventListener('click', createCanvas)
// }




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
const editor = document.querySelector('.editor');
const boldButton = document.getElementById('boldButton');
const italicButton = document.getElementById('italicButton');
const colorPicker = document.getElementById('colorPicker');
const colorButton = document.getElementById('colorButton');
const midButton = document.getElementById("mid")
const startButton = document.getElementById("start")
const endButton = document.getElementById("end")
const sizeButton = document.getElementById('size')
const fontNum = document.getElementById('fontNum').value
const fontSelect = document.getElementById('fontSelect');
const normalButton = document.getElementById('normal')

boldButton.addEventListener('click', boldText);
italicButton.addEventListener('click', italicText);
colorButton.addEventListener('click', changeTextColor);
midButton.addEventListener("click", midText);
startButton.addEventListener("click", startText);
endButton.addEventListener("click", endText);
sizeButton.addEventListener('click', function () {
  const fontSize = parseInt(document.getElementById('fontNum').value);
  sizeText(fontSize);
});
fontSelect.addEventListener('change', function () {
  const selectedFont = fontSelect.value;
  editor.style.fontFamily = selectedFont;
});
normalButton.addEventListener('click', normalText)
// function applyFormatting(tagName) {
//   const selection = window.getSelection();
//   const range = selection.getRangeAt(0);
//   const selectedText = range.extractContents();
//   const formattedText = document.createElement(tagName);
//   formattedText.innerHTML = selectedText.textContent;
//   formattedText.setAttribute("id", "forreplace");

//   let re = document.getElementById('forreplace');
//   if (re && re.parentNode === editor) { // Check if re is a child of editor
//     editor.replaceChild(formattedText, re);
//   } else {
//     range.insertNode(formattedText);
//   }
// }
function normalText() {
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const selectedText = range.extractContents();
  const color = colorPicker.value;
  const coloredText = document.createElement('span');
  coloredText.style.fontStyle = 'normal';
  coloredText.style.fontWeight = 'normal'
  coloredText.appendChild(selectedText);
  range.insertNode(coloredText);
}
function italicText() {
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const selectedText = range.extractContents();
  const coloredText = document.createElement('span');
  coloredText.style.fontStyle = 'italic';
  coloredText.appendChild(selectedText);
  range.insertNode(coloredText);
}

function boldText() {
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const selectedText = range.extractContents();
  const coloredText = document.createElement('span');
  coloredText.style.fontWeight = 'bold';
  coloredText.appendChild(selectedText);
  range.insertNode(coloredText);
}
function changeTextColor() {
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const selectedText = range.extractContents();
  const color = colorPicker.value;
  const coloredText = document.createElement('span');
  coloredText.style.color = color;
  coloredText.appendChild(selectedText);
  range.insertNode(coloredText);
}
function midText() {
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const selectedText = range.extractContents();
  const alliText = document.createElement('span');
  alliText.style.display = 'block';
  alliText.style.textAlign = 'center';
  alliText.appendChild(selectedText);
  range.insertNode(alliText);
}

function endText() {
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const selectedText = range.extractContents();
  const alliText = document.createElement('span');
  alliText.style.display = 'block';
  alliText.style.textAlign = 'end';
  alliText.appendChild(selectedText);
  range.insertNode(alliText);
}
function startText() {
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const selectedText = range.extractContents();
  const alliText = document.createElement('span');
  alliText.style.display = 'block';
  alliText.style.textAlign = 'start';
  alliText.appendChild(selectedText);
  range.insertNode(alliText);
}
function sizeText(fontNum) {
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const selectedText = range.extractContents();
  const alliText = document.createElement('span');
  alliText.style.display = 'block';
  alliText.style.fontSize = fontNum + 'px';;
  alliText.appendChild(selectedText);
  range.insertNode(alliText);
}
const toggleButton = document.getElementById('toggleButton');
const element = document.getElementById('elementId');

toggleButton.addEventListener('click', function () {
  toggleDisplay('elementId');
});

function toggleDisplay(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.display = (element.style.display === 'none') ? 'block' : 'none';
  }
}
(function() {
  let dragged, listener;

  console.clear();

  dragged = null;

  listener = document.addEventListener;

  listener("dragstart", (event) => {
    console.log("start !");
    return dragged = event.target;
  });

  listener("dragend", (event) => {
    return console.log("end !");
  });

  listener("dragover", function(event) {
    return event.preventDefault();
  });

  listener("drop", (event) => {
    console.log("drop !");
    event.preventDefault();
    if (event.target.className === "dropzone") {
      dragged.parentNode.removeChild(dragged);
      return event.target.appendChild(dragged);
    }
  });

}).call(this);



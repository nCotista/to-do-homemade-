export {
  clickButton, 
  clickButton1,  clickButton2,
  clickButton4,
  changeTextColor,
  midText,
  endText,
  startText,
  sizeText,
  toggleDisplay,
  ontaskclick,
  closetaskclick,
  createtaskfromdiv,
  dragElement
}


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


function folder3() {
  let namef = document.getElementById('Namefolder').value;
  let des = document.getElementById('des').value;
  let folder = document.getElementById('folderhtml');
  let i = folder.childElementCount + 1;

  let folderId = `input-${i}`;

  let folderDiv = document.createElement('div');
  folderDiv.setAttribute('id', folderId);
  folderDiv.setAttribute('class', 'wrapper');

  folder.appendChild(folderDiv);

  let projectNameDiv = document.createElement('div');
  projectNameDiv.textContent = namef;
  projectNameDiv.setAttribute('id', `folder-${i}`);
  projectNameDiv.setAttribute('class', 'name');
  folderDiv.appendChild(projectNameDiv);

  let descriptionDiv = document.createElement('div');
  descriptionDiv.textContent = des;
  descriptionDiv.setAttribute('id', `des-${i}`);
  descriptionDiv.setAttribute('class', 'descip');
  folderDiv.appendChild(descriptionDiv);

  let dropZoneDiv = document.createElement('div');
  dropZoneDiv.setAttribute('class', 'dropzone');
  folderDiv.appendChild(dropZoneDiv);

  let settingButton = document.createElement('button');
  settingButton.textContent = 'Setting';
  settingButton.setAttribute('id', `button-${i}`);
  folderDiv.appendChild(settingButton);
  settingButton.addEventListener('click', fixon);
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

function ontask() {
  let ontask = document.getElementById('taskforum');
  ontask.setAttribute('style', 'display:block');
}

function offtask() {
  let offtask = document.getElementById('taskforum');
  offtask.setAttribute('style', 'display:none')
  let info = document.getElementById('taskname').value
  console.log(info);;
}

const ontaskclick = () => {
  let ontaskclick = document.getElementById('createTask');
  ontaskclick.addEventListener('click', ontask);
};
function createtask(){
  let info = document.getElementById('taskname').value
  console.log(info);
  let createtask = document.getElementById('targetid')
  let creatediv =document.createElement('li')
  creatediv.setAttribute('draggable','true')
  creatediv.textContent = `${info}`
  createtask.appendChild(creatediv)
}

const closetaskclick = () => {
  let closetaskclick = document.getElementById('closetask');
  closetaskclick.addEventListener('click', offtask);
};
const createtaskfromdiv = () => {
  let createtaskfromdiv = document.getElementById('closetask')
  createtaskfromdiv.addEventListener('click',createtask)
}



document.addEventListener('DOMContentLoaded', () => {
  ontaskclick();
  closetaskclick();
  createtaskfromdiv()
  clickButton1()
  clickButton2()
});


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
(function () {
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

  listener("dragover", function (event) {
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

dragElement(document.getElementById("elementId"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "lak")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "lak").onmousedown = dragMouseDown;
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

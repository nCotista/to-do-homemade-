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
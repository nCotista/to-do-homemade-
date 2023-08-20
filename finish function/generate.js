function offmodal() {
    let modal = document.getElementById('modal');
    modal.setAttribute("style", "display:none;");
}

function onmodal() {
    let modal = document.getElementById('modal');
    modal.setAttribute("style", "display:block;");
}
function fixoff() {
    let modal = document.getElementById('fixform');
    modal.setAttribute("style", "display:none;");
}

function fixon() {
    let modal = document.getElementById('fixform');
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
}; const clickButton4 = () => {
    const test = document.getElementById('closefix')
    test.addEventListener('click', fixoff)

}
const clickButton5 = () => {
    const test = document.getElementById('closefix');
    if (test) { test.addEventListener('click', getvaluechangename) }
};

function folder3() {
    let namef = document.getElementById('Namefolder').value;
    let des = document.getElementById('des').value;
    let folder = document.getElementById('folderhtml');
    let i = folder.childElementCount + 1;


    let folderId = `input-${i}`;

    let folderDiv = document.createElement('div'); // Create a div for each folder
    folderDiv.setAttribute('id', folderId);
    folderDiv.setAttribute('class', "wrapper")

    folder.appendChild(folderDiv);

    let projectNameDiv = document.createElement('div'); // Create a div for project name
    projectNameDiv.textContent = `${namef}`;
    projectNameDiv.setAttribute('id', `folder-${i}`);
    projectNameDiv.setAttribute('class', 'name')
    folderDiv.appendChild(projectNameDiv);

    let descriptionDiv = document.createElement('div'); // Create a div for description
    descriptionDiv.textContent = ` ${des}`;
    descriptionDiv.setAttribute('id', `des-${i}`);
    descriptionDiv.setAttribute('class', 'descip');
    folderDiv.appendChild(descriptionDiv);

    let settingButton = document.createElement('button'); // Create the Setting button
    settingButton.textContent = 'Setting';
    settingButton.setAttribute('id', `button-${i}`);
    folderDiv.appendChild(settingButton);
    settingButton.addEventListener('click', fixon);

    let dropZoneDiv = document.createElement('div');
    dropZoneDiv.setAttribute('class', 'dropzone')
    folderDiv.appendChild(dropZoneDiv)

    let buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', event => {
            const clickedButtonId = event.target.id;
            console.log('คลิกปุ่มที่มี ID:', clickedButtonId);
        });
    });


}

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


    let buttonElement = document.getElementById(i);
    console.log('Button element:', buttonElement);

    if (buttonElement) {
        buttonElement.textContent = newName;
        console.log('Button text updated:', newName);
    }
}

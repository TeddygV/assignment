const darkthemebutton = document.querySelector('.darktheme');
const aside = document.querySelector('.lightthemeaside');
const article = document.querySelector('.section');
const newnotebutton = document.querySelector('.newnote');
const cancelButton = document.querySelector('.cancelbutton');
const saveButton = document.querySelector('.savebutton');
const textArea = document.querySelector('.textbox');
const emptyArray = [];
const noteList = document.querySelector('.listNotes');



function changeTheme() {
    darkthemebutton.classList.toggle('darkthemebuttondark');
    aside.classList.toggle('lightthemeaside');
    article.classList.toggle('lightthemearticle');
    newnotebutton.classList.toggle('darkactionbutton');
    textArea.classList.toggle('lightthemetextarea');
    if (darkthemebutton.textContent == 'Light Theme') {
        darkthemebutton.textContent = 'Dark Theme';
    }
    else {
        darkthemebutton.textContent = 'Light Theme';
    }
}
darkthemebutton.addEventListener('click', changeTheme);

function cancelbutton() {
        cancelButton.style.display = 'none';
        saveButton.style.display = 'none';
        textArea.style.display = 'none';


}

cancelButton.addEventListener('click', cancelbutton);

function newNoteButton() {
        if (textArea.style.display === 'none') {
            textArea.style.display = 'block';
            cancelButton.style.display = 'block';
            saveButton.style.display = 'block';
        }
        else {textArea.value = '';}

}

newnotebutton.addEventListener('click', newNoteButton);

function appendNewNote() {
    const listItems = document.createElement('li');
        const newNote = prompt('Enter a new note');
        {
            emptyArray.push({title: newNote, body: textArea.value});
        }
        listItems.appendChild(document.createTextNode(newNote));
        noteList.appendChild(listItems);
}

saveButton.addEventListener('click', appendNewNote);

function populateTextArea(event) {
        for (let i = 0; i < emptyArray.length; i++) {
            if (event.target.textContent === emptyArray[i].title) {
                textArea.value = emptyArray[i].body;
            }
        }

}

noteList.addEventListener('click', populateTextArea);
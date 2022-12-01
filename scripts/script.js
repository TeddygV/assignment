const darkthemebutton = document.querySelector('.darktheme');
const aside = document.querySelector('.lightthemeaside');
const article = document.querySelector('.section');
const newnotebutton = document.querySelector('.newnote');
const cancelButton = document.querySelector('.cancelbutton');
const saveButton = document.querySelector('.savebutton');
const textArea = document.querySelector('#textbox');

function changeTheme() {
    darkthemebutton.classList.toggle('darkthemebuttondark');
    aside.classList.toggle('lightthemeaside');
    article.classList.toggle('lightthemearticle');
    newnotebutton.classList.toggle('darkactionbutton');
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
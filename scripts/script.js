const darkthemebutton = document.querySelector('.darktheme');
const aside = document.querySelector('.lightthemeaside');
const article = document.querySelector('.section');
const newnotebutton = document.querySelector('.newnote');



function changeTheme() {
    darkthemebutton.classList.toggle('darkthemebuttondark');
    aside.classList.toggle('lightthemeaside');
    article.classList.toggle('lightthemearticle');
    newnotebutton.classList.toggle('darkactionbutton');
}
darkthemebutton.addEventListener('click', changeTheme);
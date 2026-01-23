// src/index.js

import "./styles.css"
import home from './home.js'
import menu from './menu.js'
import content from './content.js'

const pageContent = document.querySelector("#Content");
const nav = document.querySelector('nav');

const homeContent = home();
const menuContent = menu();
const contactContent = content();

pageContent.appendChild(homeContent);

nav.addEventListener('click', (e) => {
    const id = e.target.id;

    if (id == 'home-button'){
        pageContent.textContent = '';
        pageContent.appendChild(homeContent);
    }
    else if (id == 'menu-button'){
        pageContent.textContent = '';
        pageContent.appendChild(menuContent);
    }
    else if (id == 'contact-button'){
        pageContent.textContent = '';
        pageContent.appendChild(contactContent);
    }
});



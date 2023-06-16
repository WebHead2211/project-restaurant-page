import createHomePage from './home-page.js';
import { resetMain } from './home-page.js';
import createMenuPage from './menu-page.js';
import { createList } from './home-page.js';
import { createFooter } from './home-page.js';
import createContactPage from './contact-page.js';

function component(element) {
    const header = document.createElement('div');
    const main = document.createElement('div');
    const footer = document.createElement('div');
    header.setAttribute('class', 'header');
    main.setAttribute('class', 'main');
    footer.setAttribute('class', 'footer');
    
    header.classList.add('main-page');
    main.classList.add('main-page');
    footer.classList.add('main-page');
    
    element.appendChild(header);
    element.appendChild(main);
    element.appendChild(footer);

    const list = createList();
    header.appendChild(list);

    const footerDiv = createFooter();
    footer.appendChild(footerDiv);

}

component(document.querySelector('#content'));
createHomePage(document.querySelector('.main'));
const navHome = document.getElementById('home');
const navMenu = document.getElementById('menu');
const navContact = document.getElementById('contact');

navHome.addEventListener('click', resetMain);
navMenu.addEventListener('click', createMenuPage);
navContact.addEventListener('click', createContactPage);
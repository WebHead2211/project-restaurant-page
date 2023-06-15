export default function createHomePage(element) {
    const header = document.createElement('div');
    const main = document.createElement('div');
    const footer = document.createElement('div');
    header.setAttribute('id', 'header');
    header.classList.add('main-page');
    main.setAttribute('id', 'main');
    footer.setAttribute('id', 'footer');

    element.appendChild(header);
    element.appendChild(main);
    element.appendChild(footer);

    const list = document.createElement('ul');
    list.setAttribute('id', 'nav-list');

    const listItems = ['Home', 'Menu', 'Contact'];
    listItems.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        li.setAttribute('id', `${item.toLowerCase()}`);
        list.appendChild(li);
    });

    header.appendChild(list);
}
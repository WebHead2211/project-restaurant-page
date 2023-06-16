import menuItem from "./menu-item";

export default function createMenuPage() {
    const container = document.querySelector('.main');
    container.innerHTML = '';
    container.appendChild(createMenuBody());
}

function createMenuBody() {
    const bodyContainer = document.createElement('div');
    bodyContainer.classList.add('body-container');
    bodyContainer.classList.add('body-container', 'menu-page');

    const topDiv = document.createElement('div');
    const bottomDiv = document.createElement('div');

    const heading = document.createElement('h1');
    heading.textContent = 'Menu';
    topDiv.appendChild(heading);

    bottomDiv.classList.add('menu-row-container');
    createMenu(bottomDiv);

    bodyContainer.appendChild(topDiv);
    bodyContainer.appendChild(bottomDiv);
    return bodyContainer;
}

function createMenu(element) {
    const row1 = document.createElement('div');
    const row2 = document.createElement('div');
    const row3 = document.createElement('div');

    row1.classList.add('menu-row');    
    row2.classList.add('menu-row');  
    row3.classList.add('menu-row');  

    menuRow(row1, 'Burgers');
    menuRow(row1, 'Pizza');
    menuRow(row1, 'Drinks');

    element.appendChild(row1);
    element.appendChild(row2);
    element.appendChild(row3);
}

function menuRow(element, title) {
    const heading = document.createElement('h3');
    heading.textContent = `${title}`;
    heading.classList.add('menu-row-heading');

    const headingContainer = document.createElement('div');
    headingContainer.appendChild(heading);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    if (title == 'Burgers'){
        menuContainer.appendChild(menuItem('Big Meat Burger', 'Our bestselling burger comes with a giant chicken patty to satisfy your needs.', 'big-meat.jpg', 320));
        menuContainer.appendChild(menuItem('Death by Cheese', `There's no such thing as too much cheese!`, 'death-by-cheese.jpg', 380));
        menuContainer.appendChild(menuItem('The Big Boy', `Are you sure you can finish this one?`, 'big-boy.jpg', 650));
    } else if(title == 'Pizza'){
        menuContainer.appendChild(menuItem('Veggie Pizza', `For those who can't choose which veggies to add.`, 'veggie.jpg', 450));
        menuContainer.appendChild(menuItem('Mushroom Delight', `Only mushrooms. Nothing more. Nothing less.`, 'mushroom.jpg', 380));
        menuContainer.appendChild(menuItem('Pepperoni', `The most popular option.`, 'pepperoni.jpg', 320));
    } else if(title == 'Drinks'){
        menuContainer.appendChild(menuItem('Lemon Drink', `Tangy lemon flavor.`, 'lemon.jpg', 160));
        menuContainer.appendChild(menuItem('Alcohol', `A really fancy drink.`, 'alcohol.jpg', 720));
        menuContainer.appendChild(menuItem('Fruit Juice', `Refreshing fruit juice.`, 'juice.jpg', 120));
    }

    element.appendChild(headingContainer);
    element.appendChild(menuContainer);
}


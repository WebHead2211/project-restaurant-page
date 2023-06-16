export default function createHomePage(element) {
    const bodyContainer = createBody();
    element.appendChild(bodyContainer);

}

export function resetMain() {
    document.querySelector('.main').innerHTML = '';
    createHomePage(document.querySelector('.main'));
}

export function createList() {
    const list = document.createElement('ul');
    list.setAttribute('id', 'nav-list');

    const listItems = ['Home', 'Menu', 'Contact'];
    listItems.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        li.setAttribute('id', `${item.toLowerCase()}`);
        list.appendChild(li);
    });  
    
    return list;
}

export function createFooter() {
    const link = 'https://www.github.com/WebHead2211';
    const div = document.createElement('div');
    const text = document.createElement('p');
    text.innerHTML = `Created by <a href="${link}" target="blank">Aayush</a>`;
    div.appendChild(text);
    return div;
}

function createBody() {
    const topDiv = document.createElement('div');

    const bodyContainer = document.createElement('div');
    bodyContainer.classList.add('body-container');
    bodyContainer.classList.add('body-container', 'main-page');

    const heading = document.createElement('h1');
    heading.textContent = `Odin's Place`;
    topDiv.appendChild(heading);

    const subHeading = document.createElement('h2');
    subHeading.textContent = 'Good Food. Good Mood.'
    topDiv.appendChild(subHeading);

    const description = document.createElement('p');
    description.textContent = `The best food you will ever taste. Visit us once and you will never stop coming back. That's a promise!`
    topDiv.appendChild(description);
    description.style.maxWidth = '500px';

    const middleDiv = document.createElement('div');
    middleDiv.classList.add('bottom-div');
    const timeHeading = document.createElement('h2');
    timeHeading.textContent = 'TIMING'
    middleDiv.appendChild(timeHeading);

    const time = document.createElement('p');
    time.textContent = `11 a.m to 11 p.m`
    middleDiv.appendChild(time);

    const weeks = document.createElement('p');
    weeks.textContent = `52 weeks a year`
    middleDiv.appendChild(weeks);


    const bottomDiv = document.createElement('div');
    bottomDiv.classList.add('bottom-div');
    const addressHeading = document.createElement('h2');
    addressHeading.textContent = 'LOCATION'
    bottomDiv.appendChild(addressHeading);

    const address = document.createElement('p');
    address.textContent = `Top Floor, Real building, Actual City, That Country.`
    bottomDiv.appendChild(address);


    bodyContainer.appendChild(topDiv);
    bodyContainer.appendChild(middleDiv);
    bodyContainer.appendChild(bottomDiv);

    return bodyContainer;
}
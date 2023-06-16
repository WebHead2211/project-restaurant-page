export default function createContactPage() {
    const container = document.querySelector('.main');
    container.innerHTML = '';
    container.appendChild(createContact());
}

function createContact() {
    const bodyContainer = document.createElement('div');
    bodyContainer.classList.add('body-container');
    bodyContainer.classList.add('body-container', 'contact-page');
    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';
    bodyContainer.appendChild(heading);

    const callDiv = document.createElement('div');
    bodyContainer.appendChild(callDiv);

    const call = document.createElement('h2');
    call.textContent = 'Call us'
    callDiv.appendChild(call);

    const number = document.createElement('p');
    number.textContent = `+91 9808805678`
    number.style.margin = '0';
    callDiv.appendChild(number);

    const mailDiv = document.createElement('div');
    bodyContainer.appendChild(mailDiv);

    const mail = document.createElement('h2');
    mail.textContent = 'Write to us'
    mailDiv.appendChild(mail);

    const email = document.createElement('p');
    email.textContent = `realemail@website.com`;
    email.style.margin = '0';
    mailDiv.appendChild(email);

    return bodyContainer;
}
export default function menuItem(name, description, image, price) {
    const item = document.createElement('div');
    item.classList.add('menu-item');
    
    const itemImage = document.createElement('img');
    itemImage.setAttribute('src', `../src/menu-images/${image}`);
    itemImage.classList.add('menu-item-image');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('menu-image-container');
    imageContainer.appendChild(itemImage);

    const itemHeading = document.createElement('h3');
    itemHeading.classList.add('item-heading');
    itemHeading.textContent = name;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;

    const itemPrice = document.createElement('h3');
    itemPrice.classList.add('item-price');
    // itemPrice.style.position = 'absolute';
    // itemPrice.style.bottom = '10px';
    // itemPrice.style.left = '10px';
    // itemPrice.style.marginTop = '10px';
    itemPrice.textContent = `Rs. ${price}`;

    item.appendChild(imageContainer);
    item.appendChild(itemHeading);
    item.appendChild(itemDescription);
    item.appendChild(itemPrice);

    item.addEventListener('mouseenter', function(){
        this.querySelector('img').classList.toggle('hover');
    });
    item.addEventListener('mouseleave', function(){
        this.querySelector('img').classList.toggle('hover');
    });

    return item;
}
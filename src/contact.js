function createContactMain(){
    const main = document.querySelector("main");
    main.textContent = "";

    const phone = document.createElement('p');
    phone.textContent = '📞 123 456 789';

    const adress = document.createElement('p');
    adress.textContent = '🏠 Nowhere, Kansas 10, Far far away';

    const location = document.createElement('img');
    location.classList.add('img-map')
    location.src = 'images/location.png';

    main.appendChild(phone);
    main.appendChild(adress);
    main.appendChild(location);

    return main;
}

export default createContactMain;
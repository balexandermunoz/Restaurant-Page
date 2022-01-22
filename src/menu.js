function createMenuMain(){

    const main = document.querySelector("main");
    main.textContent = "The fucking menu";

    const cakes = document.createElement('div')
    cakes.classList.add('cakes')
    main.appendChild(cakes);

    cakes.appendChild(createCake("Cake Name!","Description, flavors on the cake, etc etc etc...", "images/cake1.jpg"))
    cakes.appendChild(createCake("Cake Name!","Description, flavors on", "images/cake2.jpeg"))
    cakes.appendChild(createCake("Cake Name!","Description, flavors on the cake, etc etc etc...", "images/cake3.jpg"))
    cakes.appendChild(createCake("Cake Name!","Description, flavors on the cake, etc etc etc...", "images/cake4.jpg"))
    cakes.appendChild(createCake("Cake Name!","Description, flavors on the cake, etc etc etc...", "images/drawcake.jpg"))
    cakes.appendChild(createCake("Cake Name!","Description, flavors on the cake, etc etc etc...", "images/drawcake.jpg"))

    return main;
}

function createCake(name,description, imgsrc){
    const container = document.createElement('div');
    container.classList.add('cake');

    const image = document.createElement('img');
    image.classList.add('img'); 
    image.src = imgsrc;
    image.alt = "A drawed cake";
    container.appendChild(image);

    const cakeName = document.createElement('h3');
    cakeName.textContent = name;
    container.appendChild(cakeName)

    const text = document.createElement('p');
    text.textContent = description;
    container.appendChild(text);

    return container;
}

export default createMenuMain;
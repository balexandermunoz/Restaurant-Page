function createHomeMain(){
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createText('Praline is a luxury bakery since 1990. Born in your city, it has brought cakes to thousand of people'))


    const scrollImages = document.createElement('div');
    scrollImages.classList.add('scroll-images');
    main.appendChild(scrollImages);

    scrollImages.appendChild(createImage('images/cake1.jpg'));
    scrollImages.appendChild(createImage("images/cake2.jpeg"));
    scrollImages.appendChild(createImage("images/cake3.jpg"));
    scrollImages.appendChild(createImage('images/cake4.jpg'));
    startImageTransition();

    main.appendChild(createText('Take a look at our menu, you will love it!'))

    return main;
}

function createImage(imgSrc){
    const Image = document.createElement("img");
    Image.classList.add('img','img-home'); 
    Image.src = imgSrc;
    Image.alt = "A cake";
    return Image;
}

function createText(content){
    const text = document.createElement('p');
    text.textContent= content;
    return text
}


function startImageTransition() {
    var images = document.getElementsByClassName("img-home");

    for (var i = 0; i < images.length; ++i) {
        images[i].style.opacity = 1;
    }
    var top = 1;
    var cur = images.length - 1;
    setInterval(changeImage, 3000);

    async function changeImage() {
        var nextImage = (1 + cur) % images.length;
        images[cur].style.zIndex = top + 1;
        images[nextImage].style.zIndex = top;
        await transition();
        images[cur].style.zIndex = top;
        images[nextImage].style.zIndex = top + 1;
        top = top + 1;
        images[cur].style.opacity = 1;
        cur = nextImage;
    }

    function transition() {
        return new Promise(function(resolve, reject) {
            var del = 0.01;
            var id = setInterval(changeOpacity, 10);
            function changeOpacity() {
                images[cur].style.opacity -= del;
                if (images[cur].style.opacity <= 0) {
                    clearInterval(id);
                    resolve();
                }
            }
        })
    }
}

export default createHomeMain;
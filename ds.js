const slide = document.getElementById('slide');
const upArrow = document.getElementById('upArrow');
const downArrow = document.getElementById('downArrow');


let x = 0;

downArrow.onclick = () => {
    if ( x > "-900") {
        x -= 300;
        slide.style.top = x + 'px';  
    }
}

upArrow.onclick = () => {
    if ( x < 0) {
        x += 300;
        slide.style.top = x + 'px';  
    }
}

const slides = document.querySelectorAll(".slide");
let counter = 0;
const totalSlides = slides.length;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    counter = (counter - 1 + totalSlides) % totalSlides;
    slideImage();
};

const goNext = () => {
    counter = (counter + 1) % totalSlides;
    slideImage();
};

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

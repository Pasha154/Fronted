const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const sliders = document.querySelectorAll(".slider-image");
const bottom = document.querySelector("#bottom");

let slideIndex = 0;
const paginationCircle = [];

function createPaginationCircle() {
    const div = document.createElement("div");
    div.className = "pagination-circle";
    bottom.appendChild(div);
    paginationCircle.push(div);
}

function addPaginations() {
    sliders.forEach(() => {
        createPaginationCircle();
    });
    paginationCircle[0].classList.add("active");
    paginationCircle.forEach((circle, index) => {
        circle.addEventListener('click', () => changeSlide(index));
    });
}

addPaginations();

function showSlides() {
    sliders[slideIndex].classList.add("block");
    paginationCircle[slideIndex].classList.add("active");
}

function hideSlides() {
    sliders[slideIndex].classList.remove("block");
    paginationCircle[slideIndex].classList.remove("active");
}

function changeSlide(index) {
    hideSlides();
    slideIndex = index;
    showSlides();
    updateButtons();
}

function nextSlide() {
    let newSlideIndex = slideIndex + 1;
    if (newSlideIndex > sliders.length - 1) {
        newSlideIndex = 0;
    }
    changeSlide(newSlideIndex);
}

function previousSlide() {
    let prevSlideIndex = slideIndex - 1;
    if (prevSlideIndex < 0) {
        prevSlideIndex = sliders.length - 1;
    }
    changeSlide(prevSlideIndex);
}

function updateButtons() {
    if (slideIndex === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }

    if (slideIndex === sliders.length - 1) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';
    }


    if (slideIndex === 1) {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
    }
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', previousSlide);

showSlides();
updateButtons();

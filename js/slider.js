let slidePins = document.querySelectorAll('.slider__pin');
let sliderItems = document.getElementsByClassName('slider__item');
let sliderList = document.getElementsByClassName('slider__list')[0];
let buttonPrev = document.querySelector('.slider__button--prev');
let buttonNext = document.querySelector('.slider__button--next');
let slideIndex = 0;

document.addEventListener('DOMContentLoaded', function () {
    /*регистрируем обработчик для события 'click' у кнопки "Предыдущий"*/
    buttonPrev.addEventListener('click', previousSlide);

    /*регистрируем обработчик для события 'click' у кнопки "Следующий"*/
    buttonNext.addEventListener('click', nextSlide);

    function nextSlide() {
        showSlide(++slideIndex, 1);
    }

    function previousSlide() {
        showSlide(--slideIndex, -1);
    }

    function showSlide(index, direction) {
        if (index === sliderItems.length - 1) {
            buttonNext.classList.add('slider__button--disabled');
            buttonNext.disabled = true;
        } else if (index === 0) {
            buttonPrev.classList.add('slider__button--disabled');
            buttonPrev.disabled = true;
        } else if (buttonNext.classList.contains('slider__button--disabled') || buttonPrev.classList.contains('slider__button--disabled')) {
            buttonNext.classList.remove('slider__button--disabled');
            buttonPrev.classList.remove('slider__button--disabled');
            buttonNext.disabled = false;
            buttonPrev.disabled = false;
        }

        for (var i = 0; i < slidePins.length; i++) {
            if (Number(slidePins[i].dataset.number) === index)
                slidePins[i].classList.add('slider__pin--active');
            else slidePins[i].classList.remove('slider__pin--active');
        }

        sliderList.style.transform = `translateX(${-100 * direction + Number(sliderList.style.transform.replace(/[^-^\d.]/g, ''))}%)`;
    }
});
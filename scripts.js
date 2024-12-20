document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach(slider => {
        const sliderWrapper = slider.querySelector('.slider_wrapper');
        const slidesAmount = slider.querySelectorAll('.slider_wrapper > img').length - 1;
        const prevButton = slider.querySelector('.slider_button__prev');
        const nextButton = slider.querySelector('.slider_button__next');
        const indicatorsWrapper = slider.querySelector('.slider_indicators')
        
        let currentSlide = 0;

        function createIndicators() {
            for (let index = 0; index <= slidesAmount; index++) {
                const indicator = document.createElement('li');
                indicator.classList.add('slider_indicator');
                indicatorsWrapper.appendChild(indicator);
            }
        }

        function updateIndicators() {
            const indicators = indicatorsWrapper.querySelectorAll('.slider_indicator');
            indicators.forEach((indicator, i) => {
                indicator.classList.toggle('active', i === currentSlide);
            });
        }

        function changeSlide(number) {
            currentSlide += number;
            if (currentSlide < 0) {
                currentSlide = slidesAmount;
            };
            if (currentSlide > slidesAmount) {
                currentSlide = 0;
            };

            const oneSlide = '(((100% - var(--gap) * 11) / 12) * var(--columns) + var(--gap) * (var(--columns) - 1))';

            sliderWrapper.style.transform = `translateX(calc((${oneSlide} * ${-currentSlide}))`;
            updateIndicators();
        };

        prevButton.addEventListener('click', () => changeSlide(-1));
        nextButton.addEventListener('click', () => changeSlide(+1))
        createIndicators();
        updateIndicators();
    });
});
function activateSlider(object) {
    class Slider {
        constructor(object) {
            this.index = 1;
            this.prev = document.querySelector(object.prevButton);
            this.next = document.querySelector(object.nextButton);
            this.slides = document.querySelectorAll(object.slides);
            this.slider([this.prev, this.next, this.slides, this.index]);
        };
        slider([prev, next, slides, index]) {
            const slider = (x) => {
                if (x < 1) index = slides.length;
                if (x > slides.length) index = 1;
                slides.forEach(i => i.style.display = "none");
                slides[index - 1].style.display = "block";
            };
            slider(index);
            const launchSliderWithIndex = (x) => {
                return slider(index += x);
            };
            const launchSlider = (p, n) => {
                p.addEventListener("click", () => launchSliderWithIndex(-1));
                n.addEventListener("click", () => launchSliderWithIndex(1));
            };
            return launchSlider(prev, next);
        };
    };
    let slider = new Slider(object);
};
activateSlider({
    prevButton: ".prev-button",
    nextButton: ".next-button",
    slides: ".slide__item"
});
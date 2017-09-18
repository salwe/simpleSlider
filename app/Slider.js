class Slider {
    constructor(root) {
        this.root = root[0];
        this.sliders = [...root[0].children];
        this.root.className += " sSlider";
        
        this.showSlide();
        this.addArrows();
    }
    showSlide(id = 0) {
        this.sliders.forEach(el => el.style.display = "none");
        this.sliders[id].style.display = "";
    }
    addArrows() {
        let arrowNext = document.createElement("div");
        arrowNext.className = "arrow arrow-next";
        arrowNext.innerHTML = '>';
        this.root.append(arrowNext);

        let arrowPrev = document.createElement("div");
        arrowPrev.className = "arrow arrow-prev";
        arrowPrev.innerHTML = '<';
        this.root.append(arrowPrev);
    }
}
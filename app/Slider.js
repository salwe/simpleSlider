class Slider {
    constructor(root) {
        this.root = root[0];
        this.sliders = [...root[0].children];

        this.initialize();
    }
    initialize() {
        this.root.className += " sSlider";
        this.activeSlider = 0;

        this.addNavigation();
        this.showSlide();
    }

    showSlide(id = 0) {
        this.sliders.forEach(el => el.style.display = "none");
        this.sliders[id].style.display = "";
        [...document.getElementsByClassName('paging')[0].children].forEach(el => el.classList.remove('active'));
        document.getElementsByClassName('paging')[0].children[id].classList.add('active');
    }
    addNavigation() {
        var nav = this.addElement('navigation', '');
        var paging = this.addElement('paging', '');
        this.addElement('arrow arrow-next', '>', nav, () => {
            this.changeSlider((this.activeSlider < this.sliders.length - 1) ? (this.activeSlider + 1) : 0);
        });
        this.addElement('arrow arrow-prev', '<', nav, () => {
            this.changeSlider((this.activeSlider > 0) ? (this.activeSlider - 1) : (this.sliders.length - 1));
        });

        this.sliders.forEach((el, i) => { return this.addElement('circle', '', paging, () => { this.changeSlider(i) }); });
    }

    changeSlider(id) {
        this.showSlide(id);
        this.activeSlider = id;
    }

    addElement(className, text, parent = this.root, func) {
        let element = document.createElement("div");
        element.className = className;
        element.innerHTML = text;
        element.onclick = func;
        parent.append(element);
        return element;
    }
}
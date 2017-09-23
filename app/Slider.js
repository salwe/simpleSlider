$.fn.sSlide = function(root) {
    var slider = new Slider(this);
    return this;
};

class Slider {
    constructor(root) {
        this.root = root[0];
        this.sliders = [];

        this.initialize();
    }
    initialize() {
        this.root.classList.add('sSlider');
        this.activeSlider = 0;
        [...this.root.children].map(el => el.outerHTML = `<div class="sSlide">${el.outerHTML}</div>`);
        this.sliders = [...this.root.children];

        this.addNavigation();
        this.changeSlide();
    }

    addNavigation() {
        this.root.innerHTML = `<div id='sSlider-wr'>${this.root.innerHTML}</div>`;

        var nav = this.addDOMElement('navigation', '');
        var paging = this.addDOMElement('paging', '');
        this.addDOMElement('arrow arrow-next', '>', nav, () => {
            this.changeSlide((this.activeSlider < this.sliders.length - 1) ? (this.activeSlider + 1) : 0);
        });
        this.addDOMElement('arrow arrow-prev', '<', nav, () => {
            this.changeSlide((this.activeSlider > 0) ? (this.activeSlider - 1) : (this.sliders.length - 1));
        });

        this.sliders.forEach((el, i) => { return this.addDOMElement('circle', '', paging, () => { this.changeSlide(i) }); });
    }

    changeSlide(id = 0) {
        this.activeSlider = id;
        document.getElementById('sSlider-wr').style.transform = `translate3d(-${800*this.activeSlider}px, 0px, 0px)`;
        
        [...document.getElementsByClassName('paging')[0].children].forEach(el => el.classList.remove('active'));
        document.getElementsByClassName('paging')[0].children[id].classList.add('active');
    }

    addDOMElement(className, text, parent = this.root, func) {
        let element = document.createElement("div");
        element.className = className;
        element.innerHTML = text;
        element.onclick = func;
        parent.append(element);
        return element;
    }
}

$.fn.sSlide = function(root) {
    var slider = new Slider(this);
    //slider.sayHi();
    return this;
};

$(document).ready(function() {
    $('.slider').sSlide();

});
// var sl = new Slider('Salwe');
// sl.sayHi();
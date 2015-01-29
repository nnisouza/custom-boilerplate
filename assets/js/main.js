var master = {window: {el: null, width: null, height: null}};


function calc() {
    master.window.height = $(window).height();
    master.window.width = $(window).width();
    
    afterLoaded();
}
function drawPage() {
    
}
function actions() {

}
function afterLoaded() {
    alert('Go!');
}



$(window).load(drawPage);
$(document).ready(actions);
$(window).resize(calc).trigger('resize');
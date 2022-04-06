$(document).ready(function(){
    $("#sliderToggle").click(function(){
        $("#slider").slideToggle();
        $("#sliderSwitchButton").toggleClass('bi bi-toggle-on bi bi-toggle-off');  
        $("#toggleText").text($("#toggleText").text() == 'Display Slider' ? 'Hide Slider' : 'Display Slider');
        });
});

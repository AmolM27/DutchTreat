$(document).ready(function () {
    console.log('hello');

    var theForm = $("#theform");
    theForm.hide();

    var button = $("#buyButton");
    button.on("click", function () {
        console.log('Buying Item')
    });


    var productInfo = $(".product-props li");
    productInfo.on("click", function () {
        console.log("You clicked " + $(this).text());
    })

    $("#loginToggle").on("click", function () {
        $(".popup-form").toggle();
    })
});
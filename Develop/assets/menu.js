$(document).ready(function(){

    $(".drop-down-navigation").on("click", function(){
        $("ul").toggleClass("open");
        $("header").toggleClass("open");

    });

});
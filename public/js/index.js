$(document).ready(function(){

    $("#container1").fadeIn("slow").css("display","flex")

    var storeFile = 1

    $(".arrowNext").click(function(event){

        if($(this).text() == 'About') {
            $(`#container${storeFile}`).fadeOut("slow", function () {
                $("#container2").fadeIn("slow");
                storeFile = 2
            });
        }
        else if($(this).text() == "Home"){
            $(`#container${storeFile}`).fadeOut("slow", function () {
                $("#container1").fadeIn("slow", function () {

                });
                storeFile = 1
            });
        }
        else if($(this).text() == "Blog"){
            $(`#container${storeFile}`).fadeOut("slow", function () {
                $("#container3").fadeIn("slow");
                storeFile = 3
            });
        }



    })

});
$(document).ready(function(){

    $("#arrowNext").click(function(){
        $("#container1").fadeOut("slow", function(){
            $("#container2").fadeIn();
        });
    })

});
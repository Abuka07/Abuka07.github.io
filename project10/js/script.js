    $(document).ready(function () {
$(".item").on("click",function(){
    let elemid = $(this).attr("id");
    console.log(elemid);
    $("body").css("background-color", elemid)
    $("h1").text("цвет страницы " + elemid);

  


})
        $("#img").on("click", function () {
            $("body").css({
                "background-image":"url(./img/1.jpg)",
                "background-size" : "100%",
                "background-repeat" : "no-repeat"
            })
            var content = $('h1').html("Img").css("text-align","center");
        });
    })
    
    $(".randomColor").on("click", function () {
        let randomNumber = Math.round (Math.random() * 255);
        let randomColor = "rgb"(+ randomNumber + "," + randomNumber + "," + randomNumber + ")" );
        $(body).css("background-color", randomColor)
        $("h1").text("цвет страницы случайный";
        console.log(randomColor);

    

    }


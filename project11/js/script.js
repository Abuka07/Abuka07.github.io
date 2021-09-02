$(document).ready(function () {

    let count= 0;

    let x =$(document).width() - 200;
    console.log(x);

    let y =$(document).height() - 200;
    console.log(y);

    $(".shape").on("click", function () {
            let randomPosX = Math.round (Math.random()* x);
            let randomPosY = Math.round (Math.random()* y);
            $(this).css({        
            "top":  randomPosY,
            "left":   randomPosX
            })

            count++
$(".count").text(count);

        })

})

var oUp = document.getElementById("up");
oUp.onclick = function () {
    var time = setInterval(function () {
        document.body.scrollTop -= 10;
        if (document.body.scrollTop == 0){
            clearInterval(time);
        }
    },10)

}
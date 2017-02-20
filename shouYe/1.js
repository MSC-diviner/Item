var navUl = document.getElementsByClassName('nav');
var Lis = navUl[0].getElementsByTagName('li');
var minNew = document.getElementById('minNew');
// var liAll = document.getElementById('liAll');
// var minNewLi = minNew.getElementsByTagName('li');
//var leftUl = document.getElementById('left');
var rightUl = document.getElementById('right');

//var leftUlLi = leftUl.getElementsByTagName('li');
var rightUlLi = rightUl.getElementsByTagName('li');



for(var i = 0;i < Lis.length;i++){
    Lis[i].onmouseover = function () {
        $(this).find('dl').show();
    }
    Lis[i].onmouseout = function () {
        $(this).find('dl').hide();
    }
}
$('.userbar').on('mouseover',function () {
    $('.drap').show();
});
$('.userbar').on('mouseout',function () {
    $('.drap').hide();
});

var timer = setInterval(function () {
    minNew.style.top = minNew.offsetTop - 3 + 'px';
    if(minNew.offsetTop  == -270){
        minNew.style.top = 0 + 'px';
    }
},100);



var timer1 = null;
change(0);
function change(b) {
    timer1 = setInterval(function () {
        for(var i = 0;i < leftUlLi.length;i++){
            leftUlLi[i].style.display = 'none';
            rightUlLi[i].children[0].style.display = 'block';
        }
        leftUlLi[b].style.display = 'block';
        rightUlLi[b].children[0].style.display = 'none';
        b++;
        if(b == 4){
            b = 0;
        }
    },1500);
}



for(var i = 0; i < rightUlLi.length;i++){
    rightUlLi[i].index = i;
    rightUlLi[i].onmouseover = function () {
        clearInterval(timer1);
        for(var j = 0;j < rightUlLi.length;j++){
            leftUlLi[j].style.display = 'none';
            rightUlLi[j].children[0].style.display = 'block';
        }
        this.children[0].style.display = 'none';
        leftUlLi[this.index].style.display = 'block';
    }
    rightUlLi[i].onmouseout = function () {
        change(this.index);
    }
}

//大坑!!!!!!!!
window.onload = function () {
    var rowLineUl = document.getElementById('rowLine');
    var rowLineUlLis = rowLineUl.getElementsByTagName('li');
    console.log(rowLineUlLis);
    console.log(rowLineUlLis.length);

    for(var i = 0;i < rowLineUlLis.length;i++){
        rowLineUlLis[i].onmouseover = function () {
            for(var j = 0; j < rowLineUlLis.length;j++){
                rowLineUlLis[j].style.height = 32 + 'px';
            }
            this.style.height = 150 + 'px';
            // alert('1111111');
        }
    }
}

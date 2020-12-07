$(document).ready(function () {
    //ボタンの「＋」記号を回転
    $('.icon').mouseover(function () {
        $(this).addClass('rotate');
    });
    $('.icon').mouseleave(function () {
        $(this).removeClass('rotate');
    });


});

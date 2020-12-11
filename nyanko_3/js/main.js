$(document).ready(function () {
  //ボタンの「＋」記号を回転
  $(".btn").mouseover(function () {
    $(this).children(".icon").addClass("rotate");
  });
  $(".btn").mouseleave(function () {
    $(this).children(".icon").removeClass("rotate");
  });
});

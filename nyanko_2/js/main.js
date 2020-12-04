$(document).ready(function () {
  //ねこ画像を取得

  $("#nyanko").animate(
    {
      marginLeft: "150px",
    },
    {
      duration: 5000,
    }
  );
  $("#nyanko").animate(
    {
      marginTop: "150px",
    },
    {
      duration: 300,
    }
  );

  $("#nyanko").click(function () {
    console.log(this);
    $(this).toggleClass("nyanko_anime");
  });
});

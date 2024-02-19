$(document).ready(function () {
  $("#menu_button input").click(function () {
    $(".header-pages").slideToggle();
  });

  $(".login-bg").click(function () {
    $(".dropdown").toggleClass("visibility");
  });

  var openModalBtn = $("#openRegisterModal");

  var openModalBtnLogin = $("#openRegisterModal2");

  var closeModalBtn = $("#closeModalBtn");

  var modal = $("#myModal");

  openModalBtn.click(function () {
    modal.css("display", "flex");
  });

  openModalBtnLogin.click(function () {
    modal.css("display", "flex");
  });

  closeModalBtn.click(function () {
    modal.css("display", "none");
  });

  $(window).click(function (event) {
    if (event.target == modal[0]) {
      modal.css("display", "none");
    }
  });

  openModalBtn.click(function () {
    modal2.css("display", "none");
  });

  var openModalBtn2 = $("#openLoginModal");

  var closeModalBtn2 = $("#closeModalBtn2");

  var modal2 = $("#myModal2");

  openModalBtn2.click(function () {
    modal2.css("display", "flex");
  });

  closeModalBtn2.click(function () {
    modal2.css("display", "none");
  });

  $(window).click(function (event) {
    if (event.target == modal2[0]) {
      modal2.css("display", "none");
    }
  });

  openModalBtn2.click(function () {
    modal.css("display", "none");
  });

  openModalBtnLogin.click(function () {
    modal2.css("display", "none");
  });

  // var openModalBtn = $("#openLoginModal");

  // var closeModalBtn = $("#closeModalBtn2");

  // var modal = $("#myModal2");

  // openModalBtn.click(function () {
  //   modal.css("display", "flex");
  // });

  // closeModalBtn.click(function () {
  //   modal.css("display", "none");
  // });

  // $(window).click(function (event) {
  //   if (event.target == modal[0]) {
  //     modal.css("display", "none");
  //   }
  // });

  //   $("a").hover(function (e) {
  //     $(this).attr("data-title", $(this).attr("title"));
  //     $(this).removeAttr("title");
  //   });

  $(".thumbnail-card").click(function () {
    $(".thumbnail-card").removeClass("active");
    $(this).toggleClass("active");
  });

  $(document).ready(function () {
    $(".thumbnail-cards .thumbnail-card").click(function () {
      // Önceki etkin daireyi etkin olmayan hale getir
      $(".thumbnail-cards .thumbnail-card.active").removeClass("active");
      // Tıklanan daireyi etkin hale getir
      $(this).addClass("active");
      // Önceki etkin içeriği gizle
      $(".banner-item.active").removeClass("active");
      // Tıklanan daireye bağlı içeriği göster
      $("#banner-" + $(this).attr("id").split("-")[1]).addClass("active");

      // Tıklanan dairenin ID'sini yazdır
      console.log($(this).attr("id").split("-"));
    });
  });
});

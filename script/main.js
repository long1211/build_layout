$(document).ready(function () {
  $(".slider_banner").slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  $(".slider_instagram").slick({
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 800,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "100px",
          slidesToShow: 1,
        },
      },
    ],
  });

  const titleMain = $("#animatedHeading");
  const titleSubs = titleMain.find("slick-active");

  if (titleMain.length) {
    titleMain.slick({
      autoplay: false,
      arrows: true,
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerPadding: "30px",
      draggable: false,
      infinite: true,
      pauseOnHover: false,
      swipe: false,
      touchMove: false,
      vertical: true,
      speed: 1000,
      autoplaySpeed: 8000,
      useTransform: true,
      cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
      adaptiveHeight: true,
      prevArrow:
      "<button type='button' class='slick-prev'><img src='../assets/images/arr1.png'/></button>",
    nextArrow:
      "<button type='button' class='slick-next'><img src='../assets/images/arr2.png'/></button>",
    });

    // On init
    $(".slick-dupe").each(function (index, el) {
      $("#animatedHeading").slick(
        "slickAdd",
        "<div>" + el.innerHTML + "</div>"
      );
    });

    // Manually refresh positioning of slick
    titleMain.slick("slickPlay");
  }
});


  // ==================================
  const menuToggle = document.getElementsByClassName("menu-toggle");
  const nav = document.getElementsByClassName("nav_menu");

  menuToggle[0].addEventListener("click", () => {
    nav[0].classList.toggle("active");
  });
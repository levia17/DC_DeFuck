$(window).on("scroll", function () {
  if ($(window).scrollTop() > 0) {
    $("header").css({
      // "background-color": "#fff",
      position: "fixed",
      top: "0",
      left: "0",
      "z-index": "1000",
      width: "100%",
    });
    // $(".lg_nav .navbar a").css("color", "#000");
  }
});

var clickToOpen = document.querySelector(".clickToOpen");
var spaceNav = document.querySelector(".spaceNav");
clickToOpen.addEventListener("click", clickEvent);
var barsIcon = document.querySelector(".clickToOpen .fa-solid.fa-bars");
function changeIcon() {
  if (barsIcon.classList[1] == "fa-bars") {
    barsIcon.classList.remove("fa-bars");
    barsIcon.classList.add("fa-xmark");
  } else {
    barsIcon.classList.remove("fa-xmark");
    barsIcon.classList.add("fa-bars");
  }
}
function clickEvent() {
  spaceNav.classList.toggle("activeEffect");
  changeIcon();
}



  const NavbarNav = document.querySelector(".navbar-nav");
  const hm = document.querySelector("#hamburger-menu");

  // Ketika tombol hamburger menu di klik
  hm.onclick = (e) => {
    e.preventDefault();
    NavbarNav.classList.toggle("active");
  };

  // Tombol close untuk hamburger menu (klik di manapun untuk menutup)
  document.addEventListener("click", function (e) {
    if (!hm.contains(e.target) && !NavbarNav.contains(e.target)) {
      NavbarNav.classList.remove("active");
    }
  });

  // Tombol close untuk hamburger menu (klik di manapun untuk menutup)
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      NavbarNav.classList.remove("active");
    }
  });

// carousel start
const carousel = document.querySelector(".carousel"),
  firstImg = carousel.querySelectorAll("img")[0],
  arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false,
  isDragging = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;
const showHideIcons = () => {
  // showing and hiding prev/next gambar/img kalo di scroll
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  // arrowIcons[1].style.display = carousel.scrollLeft <= 0 ? "none" : "block";
  arrowIcons[1].style.display =
    carousel.scrollLeft == scrollWidth ? "none" : "block";
};
arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14; // 14 itu dapat dari margin di css di teg(.carousel img)
    // if clicked icon is left, reduce width value from the carousel scroll left else add to it
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
  });
});
const autoSlide = () => {
  // if there is no image left to scroll then return from here
  if (
    carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 ||
    carousel.scrollLeft <= 0
  )
    return;
  positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
  let firstImgWidth = firstImg.clientWidth + 14;
  // getting difference value that needs to add or reduce from carousel left to take middle img center
  let valDifference = firstImgWidth - positionDiff;
  if (carousel.scrollLeft > prevScrollLeft) {
    // if user is scrolling to the right
    return (carousel.scrollLeft +=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
  }
  // if user is scrolling to the left
  carousel.scrollLeft -=
    positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};
const dragStart = (e) => {
  // updatating global variables value on mouse down event
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};
const dragging = (e) => {
  // scrolling images/carousel to left according to mouse pointer
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};
const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
  if (!isDragging) return;
  isDragging = false;
  autoSlide();
};
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);
// carousel end
//toggle between hiding and showing the dropdown content
function myFunction(e) {
  if(e == 1){

    document.getElementById("myDropdown").classList.toggle("show");
  } else if (e == 2){
    document.getElementById("myDropdown2").classList.toggle("show");
  } else if (e==3){
    document.getElementById("myDropdown3").classList.toggle("show");
  }
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
// carousel end
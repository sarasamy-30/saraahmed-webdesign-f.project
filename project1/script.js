$(document).ready(function () {
  $('#div1').owlCarousel({
    loop: true,
    nav: false,
    items: 8,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 3 },
      768: { items: 8 }
    }
  });

  var owlDiv2 = $('#div2 .owl-carousel');

  owlDiv2.owlCarousel({
    loop: true,
    nav: false,
    items: 5,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 2 },
      768: { items: 5 }
    }
  });
  var owlDiv3 = $('#div3 .owl-carousel');

owlDiv3.owlCarousel({
  loop: true,
  nav: false,
  items: 5,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
    responsive: {
    0: { items:2 },
    768: { items: 5 }
  }
});
var owlDiv4 = $('#div4 .owl-carousel');

owlDiv4.owlCarousel({
  loop: true,
  nav: false,
  items: 5,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: { items: 1 },
    768: { items: 3 }
  }
});



  $('#custom-prev2').click(function(e) {
    e.preventDefault();
    owlDiv2.trigger('prev.owl.carousel');
  });

  $('#custom-next2').click(function(e) {
    e.preventDefault();
    owlDiv2.trigger('next.owl.carousel');
  });

  $('#custom-prev3').click(function(e) {
    e.preventDefault();
    owlDiv3.trigger('prev.owl.carousel');
  });

  $('#custom-next3').click(function(e) {
    e.preventDefault();
    owlDiv3.trigger('next.owl.carousel');
  });
  $('#custom-prev4').click(function(e) {
    e.preventDefault();
    owlDiv4.trigger('prev.owl.carousel');
  });

  $('#custom-next4').click(function(e) {
    e.preventDefault();
    owlDiv4.trigger('next.owl.carousel');
  });
});

const up = document.querySelector("#up"); 

  up.addEventListener("click", function () {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });

  window.addEventListener("scroll", () => {
      if (window.scrollY >200) {
          up.classList.remove("d-none");
      } else {
          up.classList.add("d-none");
      }
  });
    
  window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav"); 
    if (window.scrollY > 300) {
      nav.classList.add("sticky-on-scroll");
    } else {
      nav.classList.remove("sticky-on-scroll");
    }
  });
    const searchInput = document.getElementById("searchInput");
  const dropdown = document.getElementById("searchDropdown");
  const overlay = document.getElementById("searchOverlay");
  searchInput.addEventListener("focus", () => {
    dropdown.classList.remove("d-none");
    overlay.classList.add("position-fixed", "top-0", "start-0", "w-100", "h-100", "bg-white", "opacity-50");
    overlay.style.zIndex = "1000";
  });

 
  overlay.addEventListener("click", () => {
    dropdown.classList.add("d-none");
    overlay.className = ""; 
    overlay.style.zIndex = "auto";
  });
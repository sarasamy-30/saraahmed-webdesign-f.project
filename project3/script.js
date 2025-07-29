  $(document).ready(function () {
        var owl = $(".owl-carousel");

        owl.owlCarousel({
        loop: true,
        nav: false,
        items:5, 
        autoplay: true,              
        autoplayTimeout: 3000,       
        autoplayHoverPause: true,
         responsive: {
            0: { items: 2 },
            768: { items: 5 }
  }
        });

$('.custom-prev').click(function(e) {
  e.preventDefault();
  $('.owl-carousel').trigger('prev.owl.carousel');
});

$('.custom-next').click(function(e) {
  e.preventDefault();
  $('.owl-carousel').trigger('next.owl.carousel');
});

    });
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

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

  $(document).ready(function(){
  $('#zoom-area').zoom(); 
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
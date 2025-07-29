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
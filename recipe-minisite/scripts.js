document.addEventListener("DOMContentLoaded", function () {


  const menuItems = document.querySelectorAll("nav ul.menu > li");

  menuItems.forEach((item) => {
    const submenu = item.querySelector(".submenu");

    if (submenu) {
      item.querySelector("a").addEventListener("click", function (e) {
        e.preventDefault();

        
        menuItems.forEach((otherItem) => {
          if (otherItem !== item) {
            const otherSub = otherItem.querySelector(".submenu");
            if (otherSub) otherSub.style.display = "none";
          }
        });

 
        submenu.style.display = submenu.style.display === "block" ? "none" : "block";
      });
    }
  });

 
  document.addEventListener("click", function (e) {
    const nav = document.querySelector("nav");
    if (!nav.contains(e.target)) {
      menuItems.forEach((item) => {
        const submenu = item.querySelector(".submenu");
        if (submenu) submenu.style.display = "none";
      });
    }
  });


  function handleHover() {
    if (window.innerWidth >= 768) {
      menuItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          const submenu = item.querySelector(".submenu");
          if (submenu) submenu.style.display = "block";
        });
        item.addEventListener("mouseleave", () => {
          const submenu = item.querySelector(".submenu");
          if (submenu) submenu.style.display = "none";
        });
      });
    }
  }
  handleHover();
  window.addEventListener("resize", handleHover);


  const recipeImages = document.querySelectorAll('.recipe-hero-img, .recipe-card img');

  recipeImages.forEach(image => {
    image.addEventListener('click', () => {
      image.classList.toggle('active');
    });
  });
});

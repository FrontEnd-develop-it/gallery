document.querySelectorAll(".img").forEach(function (img) {
    img.addEventListener("click", function () {
      document.querySelectorAll(".img").forEach(function (img) {
        img.classList.toggle("away"); 
      });
      this.classList.remove("away"); 
      this.classList.toggle("active"); 
    });
  });
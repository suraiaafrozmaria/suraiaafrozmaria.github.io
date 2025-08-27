// JavaScript for search functionality
    function searchFunction() {
      let input = document.getElementById("searchInput").value.toLowerCase();
      let items = document.querySelectorAll(".searchable"); // elements to search in

      items.forEach(item => {
        if (item.textContent.toLowerCase().includes(input)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    }

    function searchPage() {
      let input = document.getElementById("searchInput").value.toLowerCase();

      if (!input) {
        alert("Please enter something to search!");
        return;
      }

      // Simple search in page content
      if (document.body.innerText.toLowerCase().includes(input)) {
        window.find(input); // scrolls to the text
      } else {
        alert("No results found for: " + input);
      }
    }

    document.addEventListener("DOMContentLoaded", () => {
      const searchContainer = document.querySelector(".search-container");
      const searchButton = searchContainer.querySelector("button");

      searchButton.addEventListener("click", (e) => {
        // If input is hidden, expand it
        if (!searchContainer.classList.contains("active")) {
          e.preventDefault(); // prevent form submit
          searchContainer.classList.add("active");
          searchContainer.querySelector("input").focus();
        }
      });
    });

// JavaScript for slideshow functionality-------------------------------------------------------

    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }

    // Auto slideshow
    setInterval(() => {
      plusSlides(1);
    }, 5000); // every 5s


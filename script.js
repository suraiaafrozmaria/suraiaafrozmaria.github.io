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
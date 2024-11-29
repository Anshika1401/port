let currentPage = 1;

function turnPage(page) {
  const pages = document.querySelectorAll(".page");

  // Hide the current page
  pages[currentPage - 1].classList.add("hidden");

  // Show the next page
  pages[page].classList.remove("hidden");
  pages[page].style.transform = "rotateY(0deg)";

  currentPage++;
}

function goToPage(pageNumber) {
  const pages = document.querySelectorAll(".page");

  pages.forEach((page, index) => {
    page.classList.toggle("hidden", index !== pageNumber - 1);
  });

  currentPage = pageNumber;
}

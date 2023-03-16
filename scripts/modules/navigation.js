import "../lib/routie.js";
import { getUsername } from "./dom.js";
import { getUserRepositories } from "./api.js";

routie({
  "": function () {
    // code that runs when I got to index page
    hideAllPages();
    const $homepage = document.getElementById("homepage");
    $homepage.classList.remove("hidden");
    // variables
    const $searchButton = document.getElementById("search__button");
    // eventlisteners
    $searchButton.addEventListener("click", () => {
      const username = getUsername();
      routie(`details/${username}`);
    });
  },
  "details/:name": function (name) {
    // code that runs when I got to index page
    hideAllPages();
    const $detailsPage = document.getElementById("details__page");
    $detailsPage.classList.remove("hidden");
    const allRepositories = getUserRepositories(name);
    console.log(allRepositories);
  },
});

function hideAllPages() {
  const $pages = document.querySelectorAll(".page");
  for (const page of $pages) {
    page.classList.add("hidden");
  }
}

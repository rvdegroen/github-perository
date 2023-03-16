import { renderPage } from "./modules/navigation.js";
import { getUserRepositories } from "./modules/api.js";

// variables
const $searchButton = document.getElementById("search__button");

//render the new page on navigation
window.onhashchange = () => renderPage();

// eventlisteners
$searchButton.addEventListener("click", getUserRepositories);
// calling functions
renderPage();

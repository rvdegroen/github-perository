import { renderPage } from "./modules/navigation.js";
import { getUserRepositories } from "./modules/api";
// import { getUserRepositories } from "./modules/api.js";

//render the new page on navigation
window.onhashchange = () => renderPage();

renderPage();

// functions (put later in modules)

// API LINK: https://api.github.com
// "https://api.github.com/users/USER/repos"

// modules: api.js: fetch API data

export function getUsername() {
  const $userInput = document.getElementById("user__input");
  const username = $userInput.value;
  return username;
}

const $searchButton = document.getElementById("search__button");
$searchButton.addEventListener("click", getUserRepositories);

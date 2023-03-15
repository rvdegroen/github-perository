import { renderPage } from "./modules/navigation.js";
import { getUserRepositories } from "./modules/api.js";

//render the new page on navigation
window.onhashchange = () => renderPage();

renderPage();
getUserRepositories()
  .then((data) => console.log(data))
  .catch((reason) => console.log(reason.message));

const $input = document.querySelector("input"),
  $feedback = document.querySelector(".feedback");

// https://api.github.com

import "../lib/routie.js";
import { getUsername } from "./dom.js";
import { getUserRepositories } from "./api.js";

routie({
	"": function () {
		// code that runs when I got to index page
		hideAllPages();
		const $homepage = document.getElementById("homepage");
		// show page
		$homepage.classList.remove("hidden");
		// variables of search button
		const $searchButton = document.getElementById("search__button");
		// eventlisteners of search button
		$searchButton.addEventListener("click", () => {
			const username = getUsername();
			routie(`details/${username}`);
		});
	},
	"details/:name": function (name) {
		// code that runs when I got to index page
		hideAllPages();
		const $detailsPage = document.getElementById("details__page");
		// show page
		$detailsPage.classList.remove("hidden");
		// get all repositories of user
		const allRepositories = getUserRepositories(name);
		console.log(allRepositories);
		// DOES NOT WORK PLS FIX IT
		// variables of search button
		const $searchButton = document.getElementById("search__button");
		// eventlisteners of search button
		$searchButton.addEventListener("click", () => {
			const username = getUsername();
			routie(`details/${username}`);
		});
	},
});

function hideAllPages() {
	const $pages = document.querySelectorAll(".page");
	for (const page of $pages) {
		page.classList.add("hidden");
	}
}

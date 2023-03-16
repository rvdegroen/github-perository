import "../lib/routie.js";
import { getUsername } from "./dom.js";
import { getUserRepositories, getUser } from "./api.js";

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
	"details/:name": async function (name) {
		// code that runs when I got to index page
		const $errorMessage = document.getElementById("error__message__details");
		// to reset it
		$errorMessage.textContent = "";
		const $projects = document.getElementById("projects");
		// to reset it
		$projects.innerHTML = "";
		hideAllPages();
		const $detailsPage = document.getElementById("details__page");
		// show page
		$detailsPage.classList.remove("hidden");
		try {
			// get all repositories of user
			const allRepositories = await getUserRepositories(name);
			// get user information
			const user = await getUser(name);

			// get html elements
			const $username = document.getElementById("username");
			const $avatar = document.getElementById("avatar");
			const $description = document.getElementById("profile__description");

			// show details
			$username.textContent = user.login;
			$avatar.src = user.avatar_url;
			$description.textContent = user.bio;

			// for every item in the array
			for (const repository of allRepositories) {
				// variables
				const url = repository.html_url;
				const name = repository.name;
				const description = repository.description;

				// create elements
				const div = document.createElement("div");
				const h3 = document.createElement("h3");
				const anchor = document.createElement("a");
				const p = document.createElement("p");

				// add data to created html
				h3.textContent = name;
				p.textContent = description;
				anchor.href = url;
				anchor.textContent = "Open project in github";

				// appending
				div.appendChild(h3);
				div.appendChild(p);
				div.appendChild(anchor);

				// For every repo, put the div into $projects div
				$projects.appendChild(div);
			}
		} catch (error) {
			// server side error
			console.log(error.message);
			const errorMessage = error.message;
			$errorMessage.textContent = errorMessage;
		}
		// variables of search button
		const $searchButton = document.getElementById("search__button__details");
		// eventlisteners of search button
		$searchButton.addEventListener("click", () => {
			const $userInput = document.getElementById("user__input__details");
			const username = $userInput.value;
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

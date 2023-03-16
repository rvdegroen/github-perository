// https://api.github.com/users/rvdegroen/repos
export async function getUserRepositories(username) {
	// try is in the navigation.js
	// const username = getUsername();
	// https://api.github.com/users/${username}/repos`
	const response = await fetch(`https://api.github.com/users/${username}/repos`);
	const json = await response.json();
	// client side error
	if (response.status >= 400 && response.status <= 499) {
		const clientErrorMessage = json.message;
		// new instance of error class
		throw new Error(clientErrorMessage);
	}
	// return repos
	console.log(json);
	return json;
}

export async function getUser(username) {
	// try is in the navigation.js
	// const username = getUsername();
	// https://api.github.com/users/${username}/repos`
	const response = await fetch(`https://api.github.com/users/${username}`);
	const json = await response.json();
	// client side error
	if (response.status >= 400 && response.status <= 499) {
		const clientErrorMessage = json.message;
		// new instance of error class
		throw new Error(clientErrorMessage);
	}
	// return repos
	console.log(json);
	return json;
}

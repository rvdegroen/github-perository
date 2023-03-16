// https://api.github.com/users/rvdegroen/repos
export async function getUserRepositories(username) {
  try {
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
  } catch (error) {
    // server side error
    console.log(error.message);
    const $errorMessage = document.getElementById("error__message");
    const errorMessage = error.message;
    $errorMessage.textContent = errorMessage;
  }
}

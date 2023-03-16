// dom functions
export function getUsername() {
  const $userInput = document.getElementById("user__input");
  const username = $userInput.value;
  return username;
}

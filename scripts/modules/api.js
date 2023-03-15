// https://api.github.com/users/rvdegroen/repos

// export async function getUserRepositories() {
//   try {
//     await fetch("https://api.github.com/users/rvdegroen/repos");
//   } catch {

//   }
// }

// async function
export async function getUserRepositories() {
  // await response of fetch call
  let response = await fetch("https://api.github.com/users/rvdegroen/repos");
  // only proceed once promise is resolved
  let data = await response.json();
  // only proceed once second promise is resolved
  return data;
}

// trigger async function
// log response or catch error of fetch promise

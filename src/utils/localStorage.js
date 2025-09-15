// Function to Store data into Local Storage
export const storeInLocalSession = (moviesArray) => {
  localStorage.setItem("movieList", JSON.stringify(moviesArray));
};

// Function to Retrieve data from Local Storage
export function accessFromLocalSession() {
  const str = localStorage.getItem("movieList");
  return str ? JSON.parse(str) : null;
}

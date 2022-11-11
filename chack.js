const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault()
  const listJokes = document.getElementById("listJokes");
  const li = document.createElement("li");
  const responsive = await fetch("https://api.chucknorris.io/jokes/random");
  const res = await responsive.json();
  try {
    li.textContent = res.value;
    listJokes.append(li);
  } catch (error) {
    return error.message;
  }
});


























// const form = document.querySelector('#form')

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const div = document.querySelector('#item')
//     const li = document.createElement('li')
//     const chuck = async () => {
//         try {
//         const responsive = await fetch('https://api.chucknorris.io/jokes/random')
//         const joke = await responsive.json()
//         li.textContent = joke.value
//         } catch (error) {
//             return error.message
//         }
//         div.append(li)
//     }
//     chuck()
// })

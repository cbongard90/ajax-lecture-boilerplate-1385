import Swal from "sweetalert2";

console.log("Hello from JavaScript!");
const url = "https://api.github.com/users/dhh";
console.log("fetch Promise", fetch(url));

fetch(url).then((response) => console.log("Response Promise", response.json()));

fetch(url) // Make the HTTP request
  .then((response) => response.json()) // Wait for the response and parse it as JSON
  .then((data) => {
    console.log("data Information", data); // Wait for parsing, allowing us to manipulate the data
  });

// const reqresURL = "https://reqres.in";

// fetch(`${reqresURL}/api/register`, {
//   method: "POST",
//   body: {
//     "email": "test@test.com",
//     "password": "password1234"
//   }
// }).then((response) => {
//   response.json()
// }).then((data) => {
//   console.log('registered data:', data)
// })
const signUp = (event) => {
  event.preventDefault();
  const emailValue = document.getElementById("email").value;
  const passwordValue = document.getElementById("password").value;
  // Todo: send the request with fetch
  console.log(emailValue);
  console.log(passwordValue);

  console.log(JSON.stringify({ email: emailValue, password: passwordValue }));
  const requestDetails = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: emailValue, password: passwordValue }),
  };
  fetch("https://reqres.in/api/register", requestDetails).then((response) => {
    if (response.status === 200) {
      Swal.fire({
        title: "Success",
        text: "You are connected",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Oups! Something went wrong",
        icon: "error",
      });
    }
  });
};

const form = document.querySelector("#form");
form.addEventListener("submit", signUp);

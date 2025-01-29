/*# sourceMappingURL=main.css.map */

// Обработка формы
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".contact__form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      let isValid = true;
      document.getElementById("nameError").style.display = "none";
      document.getElementById("messageError").style.display = "none";
      document.getElementById("emailError").style.display = "none";
      const name = document.getElementById("name").value;
      if (name === "") {
        document.getElementById("nameError").style.display = "block";
        isValid = false;
      }

      const message = document.getElementById("message").value;
      if (message === "") {
        document.getElementById("messageError").style.display = "block";
        isValid = false;
      }

      const email = document.getElementById("email").value;
      if (email === "") {
        document.getElementById("emailError").style.display = "block";
        isValid = false;
      }
      if (isValid) {
        const formData = {
          name: name,
          message: message,
          email: email,
        };
        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
            alert("Какая же ты молодец");
          })

          .catch((error) => {
            console.error("Error", error);
            alert("Фууу");
          });
      }
    });
});
// События по клику
function asideVisibility() {
  let profile = document.querySelector(".profile");
  let headerSocial = document.querySelector(".header__social");

  if (profile.style.visibility === "hidden") {
    profile.style.visibility = "visible";
    profile.style.width = "15%"; 
    headerSocial.style.visibility = "hidden";
    headerSocial.style.width = "0";
  } else {
    profile.style.visibility = "hidden";
    profile.style.width = "0";
    headerSocial.style.visibility = "visible";
    headerSocial.style.width = "15%";
  }}

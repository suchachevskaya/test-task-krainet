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
            alert("Сообщение отправлено");
          })

          .catch((error) => {
            console.error("Error", error);
            alert("Сообщение не отправлено");
          });
      }
    });
});
// События по клику
function asideVisibility() {
  const headerSocial = document.querySelector('.header__social');
  const profile = document.querySelector('.profile');
  const wrapper = document.querySelector('.wrapper');

  const isHeaderVisible = headerSocial.classList.contains('aside__show');

  headerSocial.classList.toggle('aside__show', !isHeaderVisible);
  headerSocial.classList.toggle('aside__hide', isHeaderVisible);
  profile.classList.toggle('aside__show', isHeaderVisible);
  profile.classList.toggle('aside__hide', !isHeaderVisible);

  if (isHeaderVisible) {
    wrapper.classList.add('filter');
  } else {
    wrapper.classList.remove('filter');
  }
}

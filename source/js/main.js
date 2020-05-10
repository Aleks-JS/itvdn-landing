(function () {
  var openFormButton = document.querySelector(".arrow-down");
  var form = document.querySelector(".form");

  //открытие формы при нажатии на кнопку
  if (openFormButton) {
    openFormButton.addEventListener("click", function (e) {
      e.preventDefault();
      ITVDN.form.open();
    });
  }

  //проверка валидности заполнения полей
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (ITVDN.form.isValid()) {
        console.log("All good");
      } else {
        console.log("Isn't valid!");
      }
    });
  }
})();

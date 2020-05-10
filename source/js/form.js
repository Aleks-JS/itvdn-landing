(function () {
  var me = {};
  var form = document.querySelector(".form-container");
  var clouseButton;

  function onClose(e) {
    console.log(e);
    if (e.keyCode == 27 || "click") {
      me.close();
    }
    clouseButton.removeEventListener("click", onClose);
    window.removeEventListener("keydown", onClose);
    // if (e.keyCode == 27) {
    //   me.close();
    //   console.log(e);
    // }
    // me.close();

    // clouseButton.removeEventListener("click", onClose);
  }

  me.open = function () {
    form.classList.remove("is-hidden");

    clouseButton = document.querySelector(".form__close-button");
    clouseButton.addEventListener("click", onClose);
    window.addEventListener("keydown", onClose);
  };

  me.close = function () {
    form.classList.add("is-hidden");
  };

  me.isValid = function () {
    //проверка всех полей по селектору
    if (
      !me.isAllCompleted(document.querySelectorAll('[data-valid="required"]'))
    ) {
      console.log("Необходимо заполнить все поля");
    } else if (
      !ITVDN.validation.isEmail(document.querySelector("[data-email]").value)
    ) {
      console.log("Заполните Email!");
    } else if (
      !ITVDN.validation.isNumber(document.querySelector("[data-number]").value)
    ) {
      console.log("Заполните номер телефона!");
    } else {
      return true;
    }
  };

  //функция проверки заполнения всех полей
  me.isAllCompleted = function (data) {
    var result = true;
    for (var i = 0; i < data.length; i++) {
      if (!ITVDN.validation.isNotEmpty(data[i].value)) {
        result = false;
        break;
      }
    }
    return result;
  };

  ITVDN.form = me;
})();

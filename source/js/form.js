(function () {
  var me = {};
  var form = document.querySelector(".form-container");
  var clouseButton;

  function onClose(e) {
    e.preventDefault();

    me.close();
    clouseButton.removeEventListener("click", onClose);
  }

  me.open = function () {
    form.classList.remove("is-hidden");

    clouseButton = document.querySelector(".form__close-button");
    clouseButton.addEventListener("click", onClose);
  };

  me.close = function () {
    form.classList.add("is-hidden");
  };

  window.form = me;
})();

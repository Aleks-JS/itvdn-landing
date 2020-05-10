(function () {
  var me = {};

  me.isEmail = function (email) {
    var re = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-0-9A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
    return re.test(email);
  };

  me.isNumber = function (number) {
    var re = /^([+]?[0-9\s-\(\)]{3,25})*$/i;
    return re.test(number);
  };

  me.isNotEmpty = function (str) {
    return !!str;
  };

  ITVDN.validation = me;
})();

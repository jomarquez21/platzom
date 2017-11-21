'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
var reverse = function reverse(str) {
  return str.split('').reverse().join('');
};

var minMay = function minMay(str) {
  var length = str.length;
  var translation = '';
  var capitalize = true;
  for (var i = 0; i < length; i++) {
    var char = str.charAt(i);
    translation += capitalize ? char.toUpperCase() : char.toLowerCase();
    capitalize = !capitalize;
  }
  return translation;
};

function platzom(str) {
  var translation = str;

  if (str === reverse(str)) {
    return minMay(str);
  }

  // si la palabra termina en ar se quitan esa ultimas letras
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  }

  // si la palabra inicia con z se le agrega 'pe' al final
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }

  var length = translation.length;
  if (length >= 10) {
    var first = translation.slice(0, Math.round(length / 2));
    var secund = translation.slice(Math.round(length / 2));
    translation = first + '-' + secund;
  }

  return translation;
}
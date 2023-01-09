"use strict";
/**
 * Tipos de datos: ANY
 */
(function () {
    // Practica no recomendable
    var avenger = 10;
    avenger = 'Iron Man';
    // Casting: Hay dos formas
    // La primera
    console.log(avenger.charAt(0));
    avenger = 10.156891;
    // La segunda
    console.log(avenger.toFixed(2));
})();

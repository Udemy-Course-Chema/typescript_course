"use strict";
(function () {
    // PALABRA RESERVADA DEL TYPESCRIPT: type
    // Como typeof de JavaScript.
    var flash = {
        name: 'Barry Allen',
        powers: ['Velocidad', 'Viajar en el tiempo']
    };
    var superman = {
        name: 'Clark Kent',
        powers: ['Súper velocidad', 'Fuerza sobrehumana'],
        getName: function () {
            return "Nombre: ".concat(this.name);
        }
    };
})();

"use strict";
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    var Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["min"] = 0] = "min";
        Fuerza[Fuerza["less"] = 1] = "less";
        Fuerza[Fuerza["medium"] = 5] = "medium";
        Fuerza[Fuerza["max"] = 100] = "max";
    })(Fuerza || (Fuerza = {}));
    var fuerzaFlash = Fuerza.medium;
    var fuerzaSuperma = Fuerza.max;
    var fuerzaBatman = Fuerza.less;
    var fuerzaAcuaman = Fuerza.min;
    // const fuerzaFlash: Fuerza = 5;
    // const fuerzaSuperma: Fuerza = 100;
    // const fuerzaBatman: Fuerza = 1;
    // const fuerzaAcuaman: Fuerza = 0;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    // const largoDelPoder:number = Number(poder.length);
    console.log(largoDelPoder);
})();

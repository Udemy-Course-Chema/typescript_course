"use strict";
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "El mundo est\u00E1 salvado"; };
    // let myFunction: Function;
    //* Funcion 1 let myFunction: (x:number, y:number) => number;
    //* Funcion 2 let myFunction: (a:string) => string;
    var myFunction; //* Función 3
    // No acepta
    // myFunction = 10;
    // console.log( myFunction );
    //* Funcion 1
    //* myFunction = addNumbers;
    //* console.log( myFunction(1,2) );
    //  * Funcion 2
    //* myFunction = greet;
    //* console.log( myFunction('JOhn') );
    //* Función 3
    myFunction = saveTheWorld;
    console.log(myFunction());
})();

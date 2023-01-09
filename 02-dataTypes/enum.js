"use strict";
/**
 * EL ENUM SÖLO EXISTE EN TYPESCRIPT.
 */
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 5] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio2 = 10;
    var currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(currentAudio2);
})();

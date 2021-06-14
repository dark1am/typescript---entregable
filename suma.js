"use strict";
exports.__esModule = true;
exports.Suma = void 0;
var Suma = /** @class */ (function () {
    function Suma(num1, num2) {
        this._num1 = num1;
        this._num2 = num2;
    }
    Suma.prototype.resultado = function () {
        return this._num1 + this._num2;
    };
    return Suma;
}());
exports.Suma = Suma;

"use strict";
exports.__esModule = true;
exports.Resta = void 0;
var Resta = /** @class */ (function () {
    function Resta(num1, num2) {
        this._num1 = num1;
        this._num2 = num2;
    }
    Resta.prototype.resultado = function () {
        return this._num1 - this._num2;
    };
    return Resta;
}());
exports.Resta = Resta;

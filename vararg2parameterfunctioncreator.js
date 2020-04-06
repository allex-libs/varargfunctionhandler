function createFunctionHandler (lib, mylib) {
  'use strict';

  var _funccreators = [
    function (func) {return func();},
    function (func, a) {return func(a);},
    function (func, a, b) {return func(a, b);},
    function (func, a, b, c) {return func(a, b, c);},
    function (func, a, b, c, d) {return func(a, b, c, d);},
    function (func, a, b, c, d, e) {return func(a, b, c, d, e);},
    function (func, a, b, c, d, e, f) {return func(a, b, c, d, e, f);},
    function (func, a, b, c, d, e, f, g) {return func(a, b, c, d, e, f, g);},
    function (func, a, b, c, d, e, f, g, h) {return func(a, b, c, d, e, f, g, h);},
    function (func, a, b, c, d, e, f, g, h, i) {return func(a, b, c, d, e, f, g, h, i);}
  ];
  function varArg2ParameterFunction (func, paramcount) {
    var fc, f;
    if (!(lib.isNumber(paramcount))) {
      throw new lib.Error('INVALID_PARAMETER_COUNT', 'Must receive the number of parameters');
    }
    fc = _funccreators[paramcount];
    if (!lib.isFunction(fc)) {
      throw new lib.Error('PARAMETER_COUNT_NOT_SUPPORTED', paramcount+' parameters for the function is not a supported case (must be between 0 and '+(_funccreators.length-1)+' inclusive)');
    }
    return fc.bind(null, func);
  }

  mylib.varArg2ParameterFunction = varArg2ParameterFunction;
}
module.exports = createFunctionHandler;

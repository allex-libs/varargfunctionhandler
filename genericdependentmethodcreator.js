function createGenericDependentMethodCreator (lib, mylib) {
  'use strict';

  var qlib = lib.qlib,
    varArg2ParameterFunction = mylib.varArg2ParameterFunction;

  function genericdependentmethod () {
    var args = Array.prototype.slice.call(arguments),
      sink = args.splice(1, 1)[0],
      defer = args.pop();
    return qlib.promise2defer(sink.call.apply(sink, args), defer);
  }

  function genericDependentMethodCreator (methodname, paramcount) {
    return varArg2ParameterFunction(genericdependentmethod.bind(null, methodname), paramcount+2);
  }

  mylib.genericDependentMethodCreator = genericDependentMethodCreator;
}
module.exports = createGenericDependentMethodCreator;

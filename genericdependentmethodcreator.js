function createGenericDependentMethodCreator (lib, mylib) {
  'use strict';

  var q = lib.q,
    qlib = lib.qlib,
    varArg2ParameterFunction = mylib.varArg2ParameterFunction;

  function genericdependentmethod () {
    var args = Array.prototype.slice.call(arguments),
      sink = args.splice(1, 1)[0],
      defer = args.pop(),
      p;
    if (!(defer && defer.promise && q.isThenable(defer.promise))) {
      console.error('Problem with received parameters in genericdependentmethod, args', args, 'defer', defer);
      throw new lib.Error('NO_DEFER', 'genericdependentmethod has got no defer');
    }
    try {
      p = sink.call.apply(sink, args);
    } catch (e) {
      console.error('Problem with calling', args);
      throw e;
    }
    try {
      return qlib.promise2defer(p, defer);
    } catch (e) {
      console.error('Problem with the result of calling', args, '=>', p);
      throw e;
    }
  }

  function genericDependentMethodCreator (methodname, paramcount) {
    return varArg2ParameterFunction(genericdependentmethod.bind(null, methodname), paramcount+2);
  }

  mylib.genericDependentMethodCreator = genericDependentMethodCreator;
}
module.exports = createGenericDependentMethodCreator;

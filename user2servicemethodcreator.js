var prefixnamesuffixJoiner = require('./prefixnamesuffixjoiner');
function createUser2ServiceMethod (lib, mylib) {
  'use strict';

  var q = lib.q,
    qlib = lib.qlib;
  function check (methodname) {
    if (!this.__service) {
      return q.reject(new lib.Error('SERVICE_ALREADY_DEAD', 'The service instance is already dead for this User instance'));
    }
    if (!lib.isFunction(this.__service[methodname])) {
      console.error('no method named', methodname, 'on service');
      return q.reject(new lib.Error('METHODNAME_DOES_NOT_RESOLVE_TO_A_FUNCTION', 'Methodname '+methodname+' did not resolve to a function'));
    }
  }
  var _funccreators = [
    function (methodname) {
      var ret = function (defer) {
        var checks = check.call(this, methodname);
        if (checks) {
          return checks;
        }
        return qlib.promise2defer(this.__service[methodname](), defer);
      };
      ret.destroy = function () {
        methodname = null;
      };
      return ret;
    },
    function (methodname) {
      var ret = function (a, defer) {
        var checks = check.call(this, methodname);
        if (checks) {
          return checks;
        }
        return qlib.promise2defer(this.__service[methodname](a), defer);
      };
      ret.destroy = function () {
        methodname = null;
      };
      return ret;
    },
    function (methodname) {
      var ret = function (a, b, defer) {
        var checks = check.call(this, methodname);
        if (checks) {
          return checks;
        }
        return qlib.promise2defer(this.__service[methodname](a, b), defer);
      };
      ret.destroy = function () {
        methodname = null;
      };
      return ret;
    },
    function (methodname) {
      var ret = function (a, b, c, defer) {
        var checks = check.call(this, methodname);
        if (checks) {
          return checks;
        }
        return qlib.promise2defer(this.__service[methodname](a, b, c), defer);
      };
      ret.destroy = function () {
        methodname = null;
      };
      return ret;
    },
    function (methodname) {
      var ret = function (a, b, c, d, defer) {
        var checks = check.call(this, methodname);
        if (checks) {
          return checks;
        }
        return qlib.promise2defer(this.__service[methodname](a, b, c, d), defer);
      };
      ret.destroy = function () {
        methodname = null;
      };
      return ret;
    },
    function (methodname) {
      var ret = function (a, b, c, d, e, defer) {
        var checks = check.call(this, methodname);
        if (checks) {
          return checks;
        }
        return qlib.promise2defer(this.__service[methodname](a, b, c, d, e), defer);
      };
      ret.destroy = function () {
        methodname = null;
      };
      return ret;
    },
    function (methodname) {
      var ret = function (a, b, c, d, e, f, defer) {
        var checks = check.call(this, methodname);
        if (checks) {
          return checks;
        }
        return qlib.promise2defer(this.__service[methodname](a, b, c, d, e, f), defer);
      };
      ret.destroy = function () {
        methodname = null;
      };
      return ret;
    },
    function (methodname) {
      var ret = function (a, b, c, d, e, f, g, defer) {
        var checks = check.call(this, methodname);
        if (checks) {
          return checks;
        }
        return qlib.promise2defer(this.__service[methodname](a, b, c, d, e, f, g), defer);
      };
      ret.destroy = function () {
        methodname = null;
      };
      return ret;
    },
    function (methodname) {
      var ret = function (a, b, c, d, e, f, g, i, defer) {
        var checks = check.call(this, methodname);
        if (checks) {
          return checks;
        }
        return qlib.promise2defer(this.__service[methodname](a, b, c, d, e, f, g, i), defer);
      };
      ret.destroy = function () {
        methodname = null;
      };
      return ret;
    },
    function (methodname) {
      var ret = function (a, b, c, d, e, f, g, i, j, defer) {
        var checks = check.call(this, methodname);
        if (checks) {
          return checks;
        }
        return qlib.promise2defer(this.__service[methodname](a, b, c, d, e, f, g, i, j), defer);
      };
      ret.destroy = function () {
        methodname = null;
      };
      return ret;
    }
  ];
    

  function user2ServiceMethod (methodname, paramcount) {
    var fc, f;
    if (!(lib.isNumber(paramcount))) {
      throw new lib.Error('INVALID_PARAMETER_COUNT', 'Must receive the number of parameters');
    }
    fc = _funccreators[paramcount];
    if (!lib.isFunction(fc)) {
      throw new lib.Error('PARAMETER_COUNT_NOT_SUPPORTED', paramcount+' parameters for the function is not a supported case (must be between 0 and '+(_funccreators.length-1)+' inclusive)');
    }
    return fc(methodname);
  }

  function userPrototype2ServiceMethod (prototype, methodname, paramcount, prefix, suffix) {
    var mn;
    if (!(lib.isString(methodname) && methodname.length>0)) {
      throw new lib.Error('NO_METHODNAME', 'Methodname has to be a non-zero-length String');
    }
    mn = prefixnamesuffixJoiner(prefix, methodname, suffix);
    prototype[mn] = user2ServiceMethod(mn, paramcount);
  }

  function methoddescriptorer (prototype, prefix, suffix, desc, name) {
    var paramcount = lib.isArray(desc) ? desc.length : 0;
    userPrototype2ServiceMethod(prototype, name, paramcount, prefix, suffix);
  }
  function userPrototype2ServiceMethodViaMethodDescriptors (prototype, methoddescriptors, prefix, suffix) {
    lib.traverseShallow(methoddescriptors, methoddescriptorer.bind(null, prototype, prefix, suffix));
    prototype = null;
    prefix = null;
    suffix = null;
  }

  function mutator (prefix, suffix, ret, desc, name) {
    var mn = prefixnamesuffixJoiner(prefix, name, suffix);
    ret[mn] = desc;
  }
  function mutateMethodDescriptors (methoddescriptors, prefix, suffix) {
    var ret = {}, _ret = ret;
    lib.traverseShallow(methoddescriptors, mutator.bind(null, prefix, suffix, _ret));
    prefix = null;
    suffix = null;
    _ret = null;
    return ret;
  }

  function realmizer (ret, methoddescriptors, realm) {
    lib.extend(ret, mutateMethodDescriptors(methoddescriptors, null, 'On'+realm));
  }
  function realmizeMethodDescriptors (methoddescriptors, realms) {
    var ret, _r;
    ret = {};
    if (!lib.isArray(realms)) {
      realmizer(ret, methoddescriptors, realms);
      return ret;
    }
    _r = ret;
    realms.forEach(realmizer.bind(null, _r, methoddescriptors));
    _r = null;
    methoddescriptors = null;
    return ret;
  }

  mylib.user2ServiceMethod = user2ServiceMethod;
  mylib.userPrototype2ServiceMethod = userPrototype2ServiceMethod;
  mylib.userPrototype2ServiceMethodViaMethodDescriptors = userPrototype2ServiceMethodViaMethodDescriptors;
  mylib.mutateMethodDescriptors = mutateMethodDescriptors;
  mylib.realmizeMethodDescriptors = realmizeMethodDescriptors;
}
module.exports = createUser2ServiceMethod;

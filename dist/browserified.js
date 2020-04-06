(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var lR = ALLEX.execSuite.libRegistry;
lR.register('allex_varargfunctionhandlerlib', require('./index')(ALLEX));

},{"./index":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
function createLib (execlib) {
  'use strict';

  var lib = execlib.lib,
    ret = {};

  require('./vararg2parameterfunctioncreator')(lib, ret);
  require('./genericdependentmethodcreator')(lib, ret);
  require('./user2servicemethodcreator')(lib, ret);
  require('./useruser2servicewithname2hotelmethodcreator')(lib, ret);
  return ret;
}
module.exports = createLib;

},{"./genericdependentmethodcreator":2,"./user2servicemethodcreator":5,"./useruser2servicewithname2hotelmethodcreator":6,"./vararg2parameterfunctioncreator":7}],4:[function(require,module,exports){
module.exports = function (prefix, name, suffix) {
  return (prefix||'')+name+(suffix||'');
}

},{}],5:[function(require,module,exports){
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
      console.error('no method named', methodname);
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

},{"./prefixnamesuffixjoiner":4}],6:[function(require,module,exports){
var prefixnamesuffixJoiner = require('./prefixnamesuffixjoiner');
function createUserUser2ServiceWithName2HotelMethod (lib, mylib) {
  'use strict';

  var q = lib.q,
    qlib = lib.qlib;
  function check (methodname) {
    if (!this.__service) {
      return q.reject(new lib.Error('SERVICE_ALREADY_DEAD', 'The service instance is already dead for this User instance'));
    }
    if (!this.__service.name) {
      return q.reject(new lib.Error('USER_SERVICE_HAS_NO_NAME', 'The User service instance has to have a name'));
    }
    if (!this.__service.__hotel) {
      return q.reject(new lib.Error('USER_SERVICE_HAS_NO_HOTEL', 'The User service instance has to have a __hotel'));
    }
    if (!lib.isFunction(this.__service.__hotel[methodname])) {
      console.error('no method named', methodname);
      return q.reject(new lib.Error('HOTEL_METHODNAME_DOES_NOT_RESOLVE_TO_A_FUNCTION', 'Methodname '+methodname+' did not resolve to a Hotel function'));
    }
  }
  var _funccreators = [
    function (methodname, nameposition) {
      var ret = function (defer) {
        var checks = check.call(this, methodname), p;
        if (checks) {
          console.log('ima checks', checks);
          return checks;
        }
        switch (nameposition) {
          case 0: 
            console.log('zovem hotel', methodname, 'sa', this.__service.name);
            p = this.__service.__hotel[methodname](this.__service.name);
            break;
          default:
            p = this.__service.__hotel[methodname]();
            break;
        }
        return qlib.promise2defer(p, defer);
      };
      ret.destroy = function () {
        methodname = null;
      };
      return ret;
    },
    function (methodname, nameposition) {
      var ret = function (a, defer) {
        var checks = check.call(this, methodname), p;
        if (checks) {
          return checks;
        }
        switch (nameposition) {
          case 0: 
            p = this.__service.__hotel[methodname](this.__service.name, a);
            break;
          case 1: 
            p = this.__service.__hotel[methodname](a, this.__service.name);
            break;
          default:
            p = this.__service.__hotel[methodname](a);
            break;
        }
        return qlib.promise2defer(p, defer);
      };
      ret.destroy = function () {
        methodname = null;
        nameposition = null;
      };
      return ret;
    },
    function (methodname, nameposition) {
      var ret = function (a, b, defer) {
        var checks = check.call(this, methodname), p;
        if (checks) {
          return checks;
        }
        switch (nameposition) {
          case 0: 
            p = this.__service.__hotel[methodname](this.__service.name, a, b);
            break;
          case 1: 
            p = this.__service.__hotel[methodname](a, this.__service.name, b);
            break;
          case 2: 
            p = this.__service.__hotel[methodname](a, b, this.__service.name);
            break;
          default:
            p = this.__service.__hotel[methodname](a, b);
            break;
        }
        return qlib.promise2defer(p, defer);
      };
      ret.destroy = function () {
        methodname = null;
      };
      return ret;
    },
    function (methodname, nameposition) {
      var ret = function (a, b, c, defer) {
        var checks = check.call(this, methodname);
        if (checks) {
          return checks;
        }
        switch (nameposition) {
          case 0: 
            p = this.__service.__hotel[methodname](this.__service.name, a, b, c);
            break;
          case 1: 
            p = this.__service.__hotel[methodname](a, this.__service.name, b, c);
            break;
          case 2: 
            p = this.__service.__hotel[methodname](a, b, this.__service.name, c);
            break;
          case 3: 
            p = this.__service.__hotel[methodname](a, b, c, this.__service.name);
            break;
          default:
            p = this.__service.__hotel[methodname](a, b, c);
            break;
        }
        return qlib.promise2defer(p, defer);
      };
      ret.destroy = function () {
        methodname = null;
      };
      return ret;
    },
    function (methodname, nameposition) {
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
    function (methodname, nameposition) {
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
    function (methodname, nameposition) {
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
    function (methodname, nameposition) {
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
    function (methodname, nameposition) {
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
    function (methodname, nameposition) {
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
    

  function userUser2ServiceWithName2HotelMethod (methodname, paramcount, nameposition) {
    var fc, f;
    if (!(lib.isNumber(paramcount))) {
      throw new lib.Error('INVALID_PARAMETER_COUNT', 'Must receive the number of parameters');
    }
    fc = _funccreators[paramcount];
    if (!lib.isFunction(fc)) {
      throw new lib.Error('PARAMETER_COUNT_NOT_SUPPORTED', paramcount+' parameters for the function is not a supported case (must be between 0 and '+(_funccreators.length-1)+' inclusive)');
    }
    return fc(methodname, nameposition);
  }

  function userUserPrototype2ServiceWithName2HotelMethod (prototype, methodname, paramcount, nameposition, prefix, suffix) {
    var mn = prefixnamesuffixJoiner(prefix, methodname, suffix);
    prototype[mn] = userUser2ServiceWithName2HotelMethod(mn, paramcount, nameposition);
  }
  mylib.userUser2ServiceWithName2HotelMethod = userUser2ServiceWithName2HotelMethod;
  mylib.userUserPrototype2ServiceWithName2HotelMethod = userUserPrototype2ServiceWithName2HotelMethod;
}
module.exports = createUserUser2ServiceWithName2HotelMethod;

},{"./prefixnamesuffixjoiner":4}],7:[function(require,module,exports){
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

},{}]},{},[1]);

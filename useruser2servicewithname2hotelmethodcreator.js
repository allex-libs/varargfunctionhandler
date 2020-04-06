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
  var _servicehotelcallers = [
    [
      function (methodname) {
        return this.__service.__hotel[methodname](this.__service.name);
      },
      function (methodname) {
        return this.__service.__hotel[methodname]();
      }
    ],[
      function (methodname, a) {
        return this.__service.__hotel[methodname](this.__service.name, a);
      },
      function (methodname, a) {
        return this.__service.__hotel[methodname](a, this.__service.name);
      },
      function (methodname, a) {
        return this.__service.__hotel[methodname](a);
      }
    ],[
      function (methodname, a, b) {
        return this.__service.__hotel[methodname](this.__service.name, a, b);
      },
      function (methodname, a, b) {
        return this.__service.__hotel[methodname](a, this.__service.name, b);
      },
      function (methodname, a, b) {
        return this.__service.__hotel[methodname](a, b, this.__service.name);
      },
      function (methodname, a, b) {
        return this.__service.__hotel[methodname](a, b);
      }
    ],[
      function (methodname, a, b, c) {
        return this.__service.__hotel[methodname](this.__service.name, a, b, c);
      },
      function (methodname, a, b, c) {
        return this.__service.__hotel[methodname](a, this.__service.name, b, c);
      },
      function (methodname, a, b, c) {
        return this.__service.__hotel[methodname](a, b, this.__service.name, c);
      },
      function (methodname, a, b, c) {
        return this.__service.__hotel[methodname](a, b, c, this.__service.name);
      },
      function (methodname, a, b, c) {
        return this.__service.__hotel[methodname](a, b, c);
      }
    ],[
      function (methodname, a, b, c, d) {
        return this.__service.__hotel[methodname](this.__service.name, a, b, c, d);
      },
      function (methodname, a, b, c, d) {
        return this.__service.__hotel[methodname](a, this.__service.name, b, c, d);
      },
      function (methodname, a, b, c, d) {
        return this.__service.__hotel[methodname](a, b, this.__service.name, c, d);
      },
      function (methodname, a, b, c, d) {
        return this.__service.__hotel[methodname](a, b, c, this.__service.name, d);
      },
      function (methodname, a, b, c, d) {
        return this.__service.__hotel[methodname](a, b, c, d, this.__service.name);
      },
      function (methodname, a, b, c, d) {
        return this.__service.__hotel[methodname](a, b, c, d);
      }
    ]
  ];
  var _funccreators = [
    function (methodname, servicehotelcaller) {
      var ret = function (defer) {
        var checks = check.call(this, methodname), p;
        if (checks) {
          return checks;
        }
        return qlib.promise2defer(servicehotelcaller.call(this, methodname), defer);
      };
      ret.destroy = function () {
        methodname = null;
        servicehotelcaller = null;
      };
      return ret;
    },
    function (methodname, servicehotelcaller) {
      var ret = function (a, defer) {
        var checks = check.call(this, methodname), p;
        if (checks) {
          return checks;
        }
        return qlib.promise2defer(servicehotelcaller.call(this, methodname, a), defer);
      };
      ret.destroy = function () {
        methodname = null;
        servicehotelcaller = null;
      };
      return ret;
    },
    function (methodname, servicehotelcaller) {
      var ret = function (a, b, defer) {
        var checks = check.call(this, methodname), p;
        if (checks) {
          return checks;
        }
        return qlib.promise2defer(servicehotelcaller.call(this, methodname, a, b), defer);
      };
      ret.destroy = function () {
        methodname = null;
        servicehotelcaller = null;
      };
      return ret;
    },
    function (methodname, servicehotelcaller) {
      var ret = function (a, b, c, defer) {
        var checks = check.call(this, methodname), p;
        if (checks) {
          return checks;
        }
        return qlib.promise2defer(servicehotelcaller.call(this, methodname, a, b, c), defer);
      };
      ret.destroy = function () {
        methodname = null;
        servicehotelcaller = null;
      };
      return ret;
    },
    function (methodname, servicehotelcaller) {
      var ret = function (a, b, c, d, defer) {
        var checks = check.call(this, methodname), p;
        if (checks) {
          return checks;
        }
        return qlib.promise2defer(servicehotelcaller.call(this, methodname, a, b, c, d), defer);
      };
      ret.destroy = function () {
        methodname = null;
        servicehotelcaller = null;
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
    var fc, shci, shc;
    if (!(lib.isNumber(paramcount))) {
      throw new lib.Error('INVALID_PARAMETER_COUNT', 'Must receive the number of parameters');
    }
    fc = _funccreators[paramcount];
    if (!lib.isFunction(fc)) {
      throw new lib.Error('PARAMETER_COUNT_NOT_SUPPORTED', paramcount+' parameters for the function is not a supported case (must be between 0 and '+(_funccreators.length-1)+' inclusive)');
    }
    shci = (nameposition>paramcount || nameposition<0) ? paramcount+1 : nameposition;
    shc = _servicehotelcallers[paramcount][shci];
    if (!lib.isFunction(shc)) {
      throw new lib.Error('PARAMETER_COUNT_NOT_SUPPORTED', paramcount+' parameters for the function is not a supported case (must be between 0 and '+(_funccreators.length-1)+' inclusive)');
    }
    return fc(methodname, shc);
    /*
    var fc;
    if (!(lib.isNumber(paramcount))) {
      throw new lib.Error('INVALID_PARAMETER_COUNT', 'Must receive the number of parameters');
    }
    fc = _funccreators[paramcount];
    if (!lib.isFunction(fc)) {
      throw new lib.Error('PARAMETER_COUNT_NOT_SUPPORTED', paramcount+' parameters for the function is not a supported case (must be between 0 and '+(_funccreators.length-1)+' inclusive)');
    }
    return fc(methodname, nameposition);
    */
  }

  function userUserPrototype2ServiceWithName2HotelMethod (prototype, methodname, paramcount, nameposition, prefix, suffix) {
    var mn = prefixnamesuffixJoiner(prefix, methodname, suffix);
    prototype[mn] = userUser2ServiceWithName2HotelMethod(mn, paramcount, nameposition);
  }
  mylib.userUser2ServiceWithName2HotelMethod = userUser2ServiceWithName2HotelMethod;
  mylib.userUserPrototype2ServiceWithName2HotelMethod = userUserPrototype2ServiceWithName2HotelMethod;
}
module.exports = createUserUser2ServiceWithName2HotelMethod;

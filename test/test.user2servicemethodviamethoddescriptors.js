var _descriptors = {
  doDaDo0: true,
  doDaDo1: [{
    title: 'User Name',
    type: 'string'
  }],
  doDaDo2: [{
    title: 'User Name',
    type: 'string'
  },{
    title: 'Other Name',
    type: 'string'
  }],
  doDaDo3: [{
    title: 'User Name',
    type: 'string'
  },{
    title: 'Other Name',
    type: 'string'
  },{
    title: 'How Many',
    type: 'number'
  }]
};

function Service () {
}
/*
Service.prototype.doDaDo0 = function () {
  return q(arguments.length);
};
Service.prototype.doDaDo1 = function (a) {
  return q(arguments.length);
};
Service.prototype.doDaDo2 = function (a, b) {
  return q(arguments.length);
};
Service.prototype.doDaDo3 = function (a, b, c) {
  return q(arguments.length);
};
*/

function qarglenreturner () {
  return q(arguments.length);
}

function methodCreator (prefix, suffix, methodname, index) {
  var mn = (prefix||'')+methodname+(suffix||'');
  Service.prototype[mn] = Lib.varArg2ParameterFunction(qarglenreturner, index);
}
function serviceMethodCreators (prefix, suffix) {
  Object.keys(_descriptors).forEach(methodCreator.bind(null, prefix, suffix));
  prefix = null;
  suffix = null;
}

var service = new Service();


function User (service) {
  this.__service = service;
}
User.prototype.destroy = function () {
  this.__service = null;
};

user = new User(service);


function testMethodIt (methodname) {
  it('Test method '+methodname, function () {
    var d = q.defer(), args, i, paramcount, _desc;
    _desc = _descriptors[methodname];
    if (!_desc) {
      console.log('kojmoj', _descriptors, methodname, _desc);
      throw new Error(methodname+' is not in method descriptors');
    }
    paramcount = lib.isArray(_desc) ? _desc.length: 0;
    args = [];
    for (i=0; i<paramcount; i++) {
      args.push('param'+i);
    }
    args.push(d);
    user[methodname].apply(user, args);
    methodname = null;
    return expect(d.promise).to.eventually.equal(paramcount);
  });
}

describe('Test User 2 Service via Method Descriptors Creator', function () {
  it('Load Lib', function () {
    return setGlobal('Lib', require('..')(execlib));
  });
  it('Create bare methods on Service', function () {
    serviceMethodCreators();
  });
  it('Do the method descriptors', function () {
    Lib.userPrototype2ServiceMethodViaMethodDescriptors(User.prototype, _descriptors);
  });
  testMethodIt('doDaDo0');
  testMethodIt('doDaDo1');
  testMethodIt('doDaDo2');
  testMethodIt('doDaDo3');
  it('Create suffixed methods on Service', function () {
    serviceMethodCreators('', 'Blah');
  });
  it('Do the method descriptors with suffix', function () {
    Lib.userPrototype2ServiceMethodViaMethodDescriptors(User.prototype, _descriptors, '', 'Blah');
    lib.extend(_descriptors, Lib.mutateMethodDescriptors(_descriptors, '', 'Blah'));
  });
  testMethodIt('doDaDo0Blah');
  testMethodIt('doDaDo1Blah');
  testMethodIt('doDaDo2Blah');
  testMethodIt('doDaDo3Blah');
})


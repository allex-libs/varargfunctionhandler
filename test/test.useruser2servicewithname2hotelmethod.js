var _hoteldescriptors = {
  goFor: [{
    title: 'User Name',
    type: 'string'
  }],
  goForWith: [{
    title: 'User Name',
    type: 'string'
  },{
    title: 'Other Name',
    type: 'string'
  }],
  goForWithFor: [{
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
var _userdescriptors = {
  goFor: true,
  goForWith: [{
    title: 'Other Name',
    type: 'string'
  }],
  goForWithFor: [{
    title: 'Other Name',
    type: 'string'
  },{
    title: 'How Many',
    type: 'number'
  }]
};

function Hotel () {
}

var hotel = new Hotel();

function Service (hotel, name) {
  this.__hotel = hotel;
  this.name = name;
}
Service.prototype.destroy = function () {
  this.name = null;
  this.__hotel = null;
};

function qarglenreturner () {
  console.log('ael neko zvao qarglenreturner?', arguments);
  return q(arguments.length);
}

function methodCreator (serviceprototype, prefix, suffix, desc, methodname) {
  var mn = (prefix||'')+methodname+(suffix||''), paramcount;
  paramcount = lib.isArray(desc) ? desc.length : 0;
  serviceprototype[mn] = Lib.varArg2ParameterFunction(qarglenreturner, paramcount);
}
function serviceMethodCreators (descriptors, serviceprototype, prefix, suffix) {
  lib.traverseShallow(descriptors, methodCreator.bind(null, serviceprototype, prefix, suffix));
  serviceprototype = null;
  prefix = null;
  suffix = null;
}

var service = new Service(hotel, 'mica');


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
    _desc = _userdescriptors[methodname];
    if (!_desc) {
      console.log('kojmoj', _userdescriptors, methodname, _desc);
      throw new Error(methodname+' is not in user method descriptors');
    }
    paramcount = lib.isArray(_desc) ? _desc.length: 0;
    args = [];
    for (i=0; i<paramcount; i++) {
      args.push('param'+i);
    }
    args.push(d);
    /*
    console.log('zovem', methodname, user[methodname].toString());
    console.log('a args su', args);
    */
    user[methodname].apply(user, args);
    methodname = null;
    return expect(d.promise).to.eventually.equal(paramcount+1);
    //paramcount+1 because hotel receives one param more - the name
  });
}

describe('Test User User 2 Service with Name 2 Hotel Method Descriptors Creator', function () {
  it('Load Lib', function () {
    return setGlobal('Lib', require('..')(execlib));
  });
  it('Create suffixed methods on Service', function () {
    serviceMethodCreators(_hoteldescriptors, Hotel.prototype, '', 'Blah');
  });
  it('Do the method descriptors with suffix', function () {
    User.prototype['goForBlah'] = Lib.userUser2ServiceWithName2HotelMethod('goForBlah', 0, 0);
    User.prototype['goForWithBlah'] = Lib.userUser2ServiceWithName2HotelMethod('goForWithBlah', 1, 0);
    lib.extend(_userdescriptors, Lib.mutateMethodDescriptors(_userdescriptors, '', 'Blah'));
  });
  testMethodIt('goForBlah');
  testMethodIt('goForWithBlah');
  /*
  testMethodIt('goForWithForBlah');
  */
})



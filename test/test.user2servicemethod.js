function Service () {
}
Service.prototype.getMessages = function () {
  return q(arguments.length);
};

var service = new Service();


function User (service) {
  this.__service = service;
}
User.prototype.destroy = function () {
  this.__service = null;
};

user = new User(service);

function testFuncIt (paramcount) {
  it('Create and test func for '+paramcount+' params', function () {
    var f = Lib.user2ServiceMethod('getMessages', paramcount), d = q.defer(), args, i;
    User.prototype.getMessages = f;
    args = [];
    for (i=0; i<paramcount; i++) {
      args.push('param'+i);
    }
    args.push(d);
    user.getMessages.apply(user, args);
    expect(d.promise).to.eventually.equal(paramcount);
    paramcount = null;
  });
}
function testProtoIt (paramcount) {
  it('Create and test func prototype for '+paramcount+' params', function () {
    var d = q.defer(), args, i;
    Lib.userPrototype2ServiceMethod(User.prototype, 'getMessages', paramcount);
    args = [];
    for (i=0; i<paramcount; i++) {
      args.push('param'+i);
    }
    args.push(d);
    user.getMessages.apply(user, args);
    expect(d.promise).to.eventually.equal(paramcount);
    paramcount = null;
  });
}

var testcases = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

describe('Test User 2 Service Method Creator', function () {
  it('Load Lib', function () {
    return setGlobal('Lib', require('..')(execlib));
  });
  testcases.forEach(testFuncIt);
  testcases.forEach(testProtoIt);
})


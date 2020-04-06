function Sink () {
}
Sink.prototype.call = function () {
  console.log('call arguments', arguments);
  return q(arguments.length);
};

var sink = new Sink();

describe('Test Generic Dependent Method Creator', function () {
  it('Load Lib', function () {
    return setGlobal('Lib', require('..')(execlib));
  });
  it('Create and test func', function () {
    var f = Lib.genericDependentMethodCreator('getMessages', 2);
    expect(f(sink, 'a', 'b', q.defer())).to.eventually.equal(2+1);
  });
})


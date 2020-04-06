function genericF () {
  //console.log(arguments);
  return arguments.length;
}

function testParamLenIt (paramlen) {
  it('Test a '+paramlen+' parameter function', function () {
    var args = [], i, f;
    for (i=0; i<paramlen; i++) {
      args.push(i);
    }
    f = Lib.varArg2ParameterFunction(genericF, paramlen);
    return
      expect(f.length).to.equal(paramlen) &&
      expect(f.apply(null, args)).to.equal(paramlen);
  });
}

describe('Basic Test', function () {
  it('Load Lib', function () {
    return setGlobal('Lib', require('..')(execlib));
  });
  testParamLenIt(0);
  testParamLenIt(1);
  testParamLenIt(2);
  testParamLenIt(3);
  testParamLenIt(4);
  testParamLenIt(5);
  testParamLenIt(6);
  testParamLenIt(7);
  testParamLenIt(8);
  testParamLenIt(9);
});

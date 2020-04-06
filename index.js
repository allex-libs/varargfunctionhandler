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

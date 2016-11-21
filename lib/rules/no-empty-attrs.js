'use strict';

var utils = require('../../lib/utils/utils');
var ember = require('../../lib/utils/ember');

//------------------------------------------------------------------------------
// Ember Data - Be explicit with Ember data attribute types
//------------------------------------------------------------------------------

module.exports = function(context) {

  var message = 'Supply proper attribute type';

  var report = function(node) {
    context.report(node, message);
  };

  return {
    CallExpression: function(node) {
      if (!ember.isModule(node, 'attr', 'DS')) return;

      if (!node.arguments.length) {
        report(node);
      }
    }
  };

};
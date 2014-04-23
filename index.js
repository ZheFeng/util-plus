var _ = require("lodash");
var han = require('han');
var slug = require('slug');
var uuid = require('node-uuid')
var buildInUtil = require('util');
var util;

module.exports = exports = util = _.cloneDeep(buildInUtil)
delete util._extend

util.endsWith = function(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
};

util.capitalize = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
util.slug = function(text, separator) {
  separator = _.isString(separator) ? separator : '-';
  text = han.letter(text, separator);
  return slug(text);
};
util.trim = function(text) {
  if (_.isString(text)) {
    return text.replace(/^\s+|\s+$/g, "");
  } else {
    return text;
  }
};
util.uuid = function() {
  return uuid.v4().replace(/-/g, '');
};
util.random = function(length, specialChar, specialChance, callback) {
  var chars;
  chars = "`~!@#$%^&*()_+-={}[]|;:,.<>?";
  return crypto.randomBytes(length, function(err, buf) {
    var currentChar, i, key, randomChar, token, _i, _ref;
    if (err) {
      return callback(err);
    }
    key = util.uuid() + buf.toString('base64');
    token = "";
    if (specialChar) {
      for (i = _i = 1, _ref = key.length; 1 <= _ref ? _i <= _ref : _i >= _ref; i = 1 <= _ref ? ++_i : --_i) {
        currentChar = key[i - 1];
        randomChar = chars[_.random(chars.length - 1)];
        token += _.random(specialChance) ? currentChar : randomChar;
      }
    } else {
      token = key;
    }
    return callback(null, token);
  });
};
util.extension = function(fileName) {
  if (fileName.indexOf('.') > 0) {
    return fileName.split('.').pop();
  } else {
    return null;
  }
};
util.removeExtension = function(fileName) {
  return fileName.substr(0, fileName.length - util.extension(fileName).length - 1);
};

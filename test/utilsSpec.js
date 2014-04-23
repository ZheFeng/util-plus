var expect = require('chai').expect;
var util = require('../index');
var _ = require('lodash')

describe("util", function() {
  describe("#endsWith()", function() {
    it("should return true if the string ends with suffix", function() {
      return expect(util.endsWith('abcasfasdfasdf', 'fasdf')).to.be["true"];
    });
    return it("should return false if the string does not ends with suffix", function() {
      return expect(util.endsWith('abcasfasdfasdf', 'fasffdf')).to.be["false"];
    });
  });
  describe("#trim()", function() {
    it("should remove the space in the front of string", function() {
      return expect(util.trim('  abc')).to.equal('abc');
    });
    it("should remove the space in the end of string", function() {
      return expect(util.trim('abc  ')).to.equal('abc');
    });
    return it("should remove the space in both of front and end of string", function() {
      return expect(util.trim('  abc  ')).to.equal('abc');
    });
  });
  describe("#uuid()", function() {
    it("should return a string", function() {
      return expect(util.uuid()).to.be.a('string');
    });
    it("should return a unique fix length string", function() {
      var uuids = []
      var testTimes = 10000
      for(var i = 0; i < testTimes; i++){
        var uuid = util.uuid()
        uuids.push(uuid);
        expect(uuid.length).to.equal(32)
      }
      uuids = _.uniq(uuids)
      expect(uuids.length).to.equal(testTimes)

    });
  });
  describe("#slug()", function() {
    it("should change the space to dash", function() {
      return expect(util.slug('  abc')).to.equal('-abc');
    });
    it("should change the chinese to pinyin with dash", function() {
      return expect(util.slug('  abc 你好 ')).to.equal('-abc-ni-hao-');
    });
    return it("should change the unavailable to dash", function() {
      return expect(util.slug('  abc % 你好 ')).to.equal('-abc-ni-hao-');
    });
  });
  describe("#extension()", function() {
    it("should extract correct extension name", function() {
      return expect(util.extension('file.txt')).to.equal('txt');
    });
    return it("should give null if there is no extension", function() {
      return expect(util.extension('file')).to.be["null"];
    });
  });
  return describe("#removeExtension()", function() {
    return it("should remove correct extension name", function() {
      return expect(util.removeExtension('file.txt')).to.equal('file');
    });
  });
});

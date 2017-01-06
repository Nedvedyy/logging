'use strict';

var expect = require('chai').expect;
var logging = require('../index');

describe('#logging', function() {
    it('check logging instance is created', function() {
        expect(logging.log).to.not.be.an('undefined');
    });
});
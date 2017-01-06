'use strict';

var expect = require('chai').expect;
var logger = require('../index')({
    log_provider: 'logzio',
    level: 'debug',
    apiKey: 'tPTsTdkJjSfvLqFPDgorOyCYfZZiDUvK'
});

logger.customizedFunction();

describe('#logging', function() {
    it('check logger instance is created', function() {
        expect(logger.log).to.not.be.an('undefined');
    });
});
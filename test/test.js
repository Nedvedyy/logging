'use strict';

var expect = require('chai').expect;
var logger = require('../index')({
    log_provider: 'logzio',
    level: 'debug',
    apiKey: 'tPTsTdkJjSfvLqFPDgorOyCYfZZiDUvK'
});

describe('#logging', function() {
    it('check logger instance is created', function() {
        expect(logger.logging).to.not.be.an('undefined');
    });
    it('set/get service\'s name works', function() {
        logger.setServiceName('TestService');
        expect(logger.getServiceName()).to.equal('TestService');
    });
});

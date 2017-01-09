'use strict';

var expect = require('chai').expect;
var logger = require('../index')({
    log_provider: 'logzio',
    level: 'debug',
    apiKey: 'tPTsTdkJjSfvLqFPDgorOyCYfZZiDUvK'
});

logger.logging('info','call it directly to test caller!');

describe('#logging', function() {
    it('check logger instance is created', function() {
        expect(logger.logging).to.not.be.an('undefined');
    });
    it('set/get service\'s name works', function() {
        logger.setServiceName('TestService');
        expect(logger.getServiceName()).to.equal('TestService');
    });
});

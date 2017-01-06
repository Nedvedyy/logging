/*** Created by nedved on 22/12/16.
 *
 *  this is for logging.
 *
 * */

'use strict';

var winston = require('winston');
var logzioWinstonTransport = require('winston-logzio');

var loggerOptions = {
    token: 'tPTsTdkJjSfvLqFPDgorOyCYfZZiDUvK'
};

winston.add(logzioWinstonTransport, loggerOptions);
winston.level = 'debug';
winston.log('info', 'winston logger configured with logzio transport');

module.exports = winston;

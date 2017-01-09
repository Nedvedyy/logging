/*** Created by nedved on 22/12/16.
 *
 *  this is for logging. Based on winston
 *  https://github.com/winstonjs/winston
 * */

'use strict';

/**
 * Takes a number and returns its square value
 *
 * @param {object} params - The config object
 * example:
 * {
 *  log_provider: 'logzio',
 *  level: 'debug',
 *  apiKey: 'apikey'
 * }
 * @return {}
 */
module.exports = function(params) {
    var winston = require('winston'); // this is to hold the winston instance.
    var that = Object.create(winston);
    that.serviceName = '';
    if(params.log_provider){
        if(params.log_provider === 'logzio'){
            var logzioWinstonTransport = require('winston-logzio');
            var loggerOptions = {
                token: params.apiKey
            };
            that.add(logzioWinstonTransport, loggerOptions);
            that.level = params.level;
            that.log('info', 'winston logger configured with logzio transport:'+ loggerOptions.token);
        }
    }else{
      console.log('params.log_provider is undefined')
    }
    /**
     * setServiceName Function
     * this is to set the service name who will be using the log services.
     *
     * @param {string} serviceName - set the service name
     * @return {}
     */
    that.setServiceName = function(serviceName) {
      that.serviceName = serviceName;
    };
    /**
     * getServiceName Function
     * this is to get the service name who will be using the log services.
     *
     * @param {}
     * @return {string} serviceName - return the service name
     */
    that.getServiceName = function() {
        return that.serviceName;
    };
    /**
     * log Function
     *
     * @param {level} log level
     *        {tags}  array of tags.
     *        {message} message to be logged
     * @return {}
     */
    that.logging = function(level,message) {
        var callerName;
        try {
            throw new Error();
        }
        catch (e) {
            var re = /(\w+)@|at (\w+) \(/g, st = e.stack, m;
            re.exec(st), m = re.exec(st);
            console.log('m:'+m);
            callerName = m[1] || m[2];
        }
        if(winston.log){
            winston.log(level, message, { 'serviceName': that.serviceName,'caller':callerName });
        }
    };
    return that;
};

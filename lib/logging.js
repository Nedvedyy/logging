/*** Created by nedved on 10/01/17, 1.4.
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
        if(winston.log){
            winston.log(level, message,
                {   'serviceName': that.serviceName,
                    'caller': {
                      'script':getScriptName()
                    }
                }
            );
        }
    };

    /**
     * get caller's script name
     *
     * @param {}
     * @return {scriptName} the caller's script name
     */

    var getScriptName = function() {
        var error = new Error()
            , source
            , lastStackFrameRegex = new RegExp(/.+\/(.*?):\d+(:\d+)*$/)
            , currentStackFrameRegex = new RegExp(/getScriptName \(.+\/(.*):\d+:\d+\)/);

        if((source = lastStackFrameRegex.exec(error.stack.trim())) && source[1] != "")
            return source[1];
        else if((source = currentStackFrameRegex.exec(error.stack.trim())))
            return source[1];
        else if(error.fileName != undefined)
            return error.fileName;
    }


    return that;
};

/*** Created by nedved on 22/12/16.
 *
 *  this is for logging. Based on winston
 *  https://github.com/winstonjs/winston
 * */

'use strict';

// sample of params
/*
{
log_provider: 'logzio',
level: 'debug',
apiKey: 'apikey'
}
 */
module.exports = function(params) {
    var that = require('winston');
    if(params.log_provider){
        if(params.log_provider === 'logzio'){
            var logzioWinstonTransport = require('winston-logzio');
            var loggerOptions = {
                token: params.apiKey
            };
            that.add(logzioWinstonTransport, loggerOptions);
            that.level = params.level;
            that.log('info', 'winston logger configured with logzio transport');
        }
    }else{
      console.log('params.log_provider is undefined')
    }
    that.customizedFunction = function() {
      if(that.log){
          that.log('info', 'inside of customizedFunction');
      }
    };
    return that;
};

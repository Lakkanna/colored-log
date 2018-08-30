var colors = require('colors');
// debug, info, warning, error, critical

DEBUG = 'debug';
INFO = 'info';
WARNING = 'warning';
ERROR = 'error';
CRITICAL = 'critical';
SUCCESS = 'success';

exports.log = function(message, flag) {
    switch (flag) {
        case 'success':
            console.log(message.green);
            break;
        case 'debug':
            console.log(message.grey);
            break;
        case 'info':
            console.log(message.blue);
            break;
        case 'warning':
            console.log(message.yellow);
            break;
        case 'error':
            console.log(message.red);
            break;
        case 'critical':
            console.log(message.magenta);
            break;
        default:
            console.log(message);
    }
}

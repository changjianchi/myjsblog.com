/* eslint-disable */
'use strict';

function push(receiver, to) {
    return fis.plugin('http-push', {
        receiver: receiver,
        to: to
    });
}

var dev = 'http://115.28.207.231:30000/';

fis.match('*', {
    deploy: push(dev, '/home/work/wwwroot/myjsblog.com')
})

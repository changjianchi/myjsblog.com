/* eslint-disable */
'use strict';

function push(receiver, to) {
    return fis.plugin('http-push', {
        receiver: receiver,
        to: to
    });
}

var dev = 'http://www.febaidu.com:30000/receiver';

fis.match('*', {
    deploy: push(dev, '/home/work/wwwroot/myjsblog.com')
})

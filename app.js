/**
 * [author changjianchi]
 * @type {[type]}
 */
var express = require('express');
var template = require('art-template');
var path = require('path');
/**
 * [config 配置文件]
 * @obj {Object}
 */
var config = require('./config.json');

var dir = path.resolve(config.path);
var app = express();

// 处理模板引擎
template.config('base', '');
template.config('extname', '.html');
app.engine('.html', template.__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/view');

app.use(express.static(config.static));
// 委托其他静态目录
app.use('/', express.static(config.path));

// 渲染模板
app.get('/', function (req, res, next) {
    res.render('./index', {
        config: config,
        dirData: JSON.stringify(req.dirData, null, 4)
    });
});

app.all('/update', function (req, res, next) {
    require('child_process').exec('git pull', {
        cwd: __dirname
    }, function (err) {
        if (err) {
            res.send('update cache err: ' + err.toString());
        }
        else {
            res.send('update cache.');
        }
    });
});

app.use(function (req, res, next) {
    res.end('404');
});

var server = app.listen(config.port);

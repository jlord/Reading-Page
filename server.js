var http = require('http');
var ecstatic = require('ecstatic')(__dirname);

var server = http.createServer(function (req, res) {
     ecstatic(req, res)
});

server.listen(8002);
console.log([
    'Listening on :8002',
].join('\n'));
const http = require('http');
var fs = require('fs');
var readline = require('readline');
var stream = require('stream');
const hostname = '127.0.0.1';
const port = 8081;

var lineCount = 0;
http.createServer(function (req, res) {
  var instream = fs.createReadStream('../../../filenode/readbig/file.xml');
  var outstream = new stream();
  var rl = readline.createInterface(instream, outstream);
  rl.on('line', function(line) {
    lineCount++;
    //Do whatever needs to be done with line
  });
  rl.on('close', function() {
    console.log(lineCount);
    console.timeEnd("Read Ended in: ");
  });
}).listen(port, hostname, () => {
  console.log(`http://${hostname}:${port}/ Just Started`);
});

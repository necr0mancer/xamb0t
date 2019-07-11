var fs = require("fs");
var list = fs.readFileSync("./channellist.txt").toString('utf-8').split(/[\r\n]/);

// var splitLines = list.split("\n").toString('utf-8');
//
// exports.chanlist = splitLines;

exports.chanlist = list;

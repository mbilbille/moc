var fs = require('fs');
var moment = require('moment');

fs.stat("run.js", function(err, stats) {
    if(moment(stats.ctime).isAfter("2014-03-04")) {
        throw new Error("Catch up! You are " + moment(stats.ctime).diff("2014-03-04", 'days') + " days late");
    }
    else {
        console.log("Good boy!")
    }
});

process.on("uncaughtException", function (err) {
    console.log(err);
});

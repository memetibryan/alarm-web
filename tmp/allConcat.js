var Alarm = require('./../js/alarm.js').alarmModule;
var moment = require('moment');

$(document).ready(function() {
  $('#one').click(function(event) {
    event.preventDefault();
    var newAlarm = new Alarm();
    var ring = $('#ring').val();
    var simpleAlarm = new Alarm("");
    var output = simpleAlarm.time(ring);
    output.forEach(function() {
      $('#output').append("<ol>" + currentTime + "</ol>");
    });
  });
});

function Alarm(firstTime) {
  this.first = firstTime;
}

Alarm.prototype.time = function(ring) {
  var output = [];
  var currentTime= $("#ring").val("");
  var index = $("#time").val("");
      if (index === currentTime) {
      output.push("index");
    } else  {
      output.push(currentTime);
    }
  return output;
};

exports.alarmModule = Alarm;

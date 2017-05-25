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

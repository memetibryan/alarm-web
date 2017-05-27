var Alarm = require('./../js/alarm.js').alarmModule;
var moment = require('moment');

$(document).ready(function() {
  $('#one').click(function(event) {
    event.preventDefault();
    var newAlarm = new Alarm();
        var output = newAlarm.time(ring);
  });
});

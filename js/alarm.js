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

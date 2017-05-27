function Alarm(firstTime) {
  this.first = firstTime;
}

Alarm.prototype.time = function(ring) {
  var currentTime= $("#time").val();
  $('#time').val("");
  var index = $("#ring").val();
  $('#ring').val("");
      if (index === currentTime) {
      $('#output').append("<li>" + index + "</li>");
    } else  {
      $('#output').append("<li>" + 'waky waky' + "</li>");
    }
};

exports.alarmModule = Alarm;

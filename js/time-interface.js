var update = function () {
  $('#time').text(moment().format('hh:mm:ss'));
};

$(document).ready(function(){
  update();
  setInterval(update, 1000);
});

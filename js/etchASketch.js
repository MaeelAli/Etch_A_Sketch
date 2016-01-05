$(document).ready(function() {
var tile = $('<div class="tile"></div>');
for (var i = 0; i < 16; i++)
  {
    $('#wrapper').append(tile);
  }
  
  $('.tile').css('border-color', '1px solid #967');
  $('.tile').css('width', '25px');
  $('.tile').css('height', '25px');
  $('.tile').css('display', 'inline-block');
  
});
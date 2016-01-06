//hardcoded for now
  var width = 16;
  var height = 16;
  var pixels = 960;

$(document).ready(function() {

  displayGrid(width, height);

});

function displayGrid(width, height) {

  for (var i = 0; i < height; i++)
  {
    for (var j = 0; j < width; j++)
    {
      //var tile = $('<div class="tile" id="' + j + '"></div>');
      var tile = $('<div class="tile"></div>');
      $('.tile-container').append(tile);
    }
    var tileRow = $('<div class="tileRow" id="' + i + '"></div>');
    $('.tile-container').append(tileRow);
  }
  
  $('.tile').css('width', pixels / width - 2);
  $('.tile').css('height', pixels / height - 2);

}
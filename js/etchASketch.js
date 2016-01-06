//hardcoded for now
  var width = 16;
  var height = 16;
  var pixels = 960;

$(document).ready(function() {

  //displays initial 16x16 grid
  displayGrid(width, height);

  //draws as you mouse over (like a pen)
  defaultSketchBehaviour();


  //hover code to change color to black when mouse leave
  /*
  $('.tile-container').on('mouseleave','.tile', function() {
    var tile = $(this).closest('.tile');
    tile.css('background-color', 'black');
    //tile.fadeIn();
    console.log('i am out a tile now!');
  }); 
  */

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

function defaultSketchBehaviour() {
  $('.tile-container').on('mouseenter','.tile', function() {
    var tile = $(this).closest('.tile');
    tile.css('background-color', 'red');
  }); 
}
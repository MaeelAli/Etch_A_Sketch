//hardcoded for now
  var width = 16;
  var height = 16;
  var pixels = 960;

$(document).ready(function() {

  initGrid(); 

});

function initGrid() {

   //displays initial 16x16 grid
  displayGrid(width, height);

  //draws as you mouse over (like a pen)
  defaultSketchBehaviour();
}

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
    tile.css('background-color', 'white');
    tile.css('opacity', '1');
  });

 $('.tile-container').on('mouseleave','.tile', function() {
    //reset mouseleave event
    var tile = $(this).closest('.tile');
    tile.css('background-color', 'white');
  }); 

}

function fadeBehaviour(){
 $('.tile-container').on('mouseenter','.tile', function() {
    var tile = $(this).closest('.tile');
    tile.css('opacity', '0');
  }); 

  $('.tile-container').on('mouseleave','.tile', function() {
    var tile = $(this).closest('.tile');
    tile.css('background-color', 'red');
    tile.fadeTo("slow", 1);
  }); 
}
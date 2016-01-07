//hardcoded for now
  var pixels = 960;
  var currentDimension = 0;

$(document).ready(function() {

  initGrid(); 

});

function initGrid() {

   //displays initial 16x16 grid
  var dimension = 16;
  displayGrid(dimension);

  //draws as you mouse over (like a pen)
  drawBehaviour();
}

function displayGrid(dimension) {
  for (var i = 0; i < dimension; i++)
  {
    for (var j = 0; j < dimension; j++)
    {
      var tile = $('<div class="tile"></div>');
      $('.tile-container').append(tile);
    }
    var tileRow = $('<div class="tileRow" id="' + i + '"></div>');
    $('.tile-container').append(tileRow);
  }
  
  $('.tile').css('width', pixels / dimension - 2);
  $('.tile').css('height', pixels / dimension - 2);
  
  currentDimension = dimension;

}

function drawBehaviour() {
  $('.tile-container').off();
  $('.tile-container').on('mouseenter','.tile', function() {
    var tile = $(this).closest('.tile');
    tile.css('opacity', '0');
  });

}

function trailBehaviour(){

 $('.tile-container').off();

 $('.tile-container').on('mouseenter','.tile', function() {
    var tile = $(this).closest('.tile');
    tile.css('opacity', '0');
  }); 

  $('.tile-container').on('mouseleave','.tile', function() {
    var tile = $(this).closest('.tile');
    tile.fadeTo("slow", 1);
  }); 
}

function fadeBehaviour(){
 $('.tile-container').off();
 $('.tile-container').on('mouseenter','.tile', function() {
    var tile = $(this).closest('.tile');
    tile.fadeTo("fast", tile.css('opacity') - 0.1);
  });
}

function clearGrid(){
  var dimension = promptGridSize();

  if (dimension > 0)
  {
    $('.tile').remove();
    displayGrid(dimension);
  }

}

function promptGridSize(){
  var sizeInput = prompt("Please enter how many squares per side you want your grid to be (1 < x < 128)", currentDimension);

  var dimension = parseInt(sizeInput);
  console.log(dimension);
  console.log(isNaN(dimension));

  //user clicked cancel on prompt
  if(sizeInput === null && typeof sizeInput === "object")
  {
    return -1;
  }

  //user entered number < 1 or > 128 or not a number
  if (isNaN(dimension) || dimension < 1 || dimension > 128)
  {
    alert("Please enter a valid number from 1 to 128");
    return -1;
  }

  return dimension;
}
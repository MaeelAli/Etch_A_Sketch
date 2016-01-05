# Etch_A_Sketch
This is the repository for the Project: Javascript/jQuery of the Odin Project course where we will create an Etch-A-Sketch

## 1. Create a web page (or use JSFiddle) with a 16x16 grid of square divs.
  Create your divs using Javascript/jQuery... don't try making them by hand with copy-pasting!
  
  Best to put your grid squares inside another "container" div.
  
  If you need to add jQuery to your file, you can grab it directly in your HTML by adding <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script> inside your <head> tag above any other JS files.
  
  There are several different ways to make the divs appear as a grid (versus just one on each line) -- float/clear, using a table, and inline-b  lock displays. Play with each of them.
  
  Careful with your border or margins... they'll add size to the squares!
  
 ### "OMFG, Why isn't my grid being created???"
  
  Open your browser's developer tools
  
  Check if there are any errors in the Javascript console
  
  Check your "elements" pane to see if the elements have actually shown up but are somehow hidden.
  Go willy-nilly and add console.log statements in your javascript to see if it's actually being loaded.
  
## 2. Set up a hover effect so it changes the color of the square when your mouse passes over it, leaving a (pixelated) trail through your grid like a pen would.

  What happens when you hover? Well, you're hovering, you need to enter the div with your mouse and you need to leave the div. Any of those events should be a useful place to start.
  
  There are again several ways to change the color -- adding a new class (addClass()), changing that div's background color individually, etc.

## 3. Add a button to the top of the screen which will clear the current grid and send the user a popup asking for how many squares per side to make the new grid. Once entered, the new grid should be generated in the same total space as before (e.g. 960px wide) and now you've got a new sketch pad.

  Research button tags in HTML and how you can make a javascript function run when one is clicked.
  
  You'll also want to check out prompts.
  
  You should be able to enter 64 and have a new 64x64 grid pop up in front of you without changing the total amount of pixels used.
  
  Why is it so slow?? Remember that when you call a jQuery selector like $(".square"), it actually returns you ALL the elements that fit the description. So if you're doing those types of operations hundreds of times inside a loop, it can get very time consuming... try pulling those outside your loops.
  
  See how many grid squares you can get before it becomes unusably slow.
  
## 4.  (Optional): Instead of just changing the color of your grid from black to white (for example), have each pass through it with the mouse change to a completely random RGB value. Then try having each pass just add another 10% of black to it, so only after 10 passes is the square completely black.

## 5. Push your project to Github
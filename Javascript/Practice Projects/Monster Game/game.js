                     
// JavaScript Document


// create an array of food items for the monster to eat
var foodarr = ['apple', 'banana', 'orange', 'strawberry', 'watermelon', 'blueberry'];
var currentfood = "";

// start the game with a function
function rungame(){
	setfood()
}

// randomly select a food to put in the box
function getfood(){
	var randomfood = Math.floor((Math.random() * foodarr.length) + 0);
}

// put the food in the box
function setfood(food){
	currentfood = food;
	document.getElementById("foodbox").innerHTML = food;
}

function eatit(){
	//if the food is good
	if(currentfood == "apple" || currentfood == "watermelon" || currentfood == "blueberry"){
		document.getElementById("commentbox").innerHTML = "The Food is Good.";
	}
	// if the food is bad
	else{
		document.getElementById("commentbox").innerHTML = "The Food is bad.";
	}
	
}

function trashit(){
	//if the food is good
	if(currentfood == "apple" || currentfood == "watermelon" || currentfood == "blueberry"){
		document.getElementById("commentbox").innerHTML = "The food is good.";
		
	}
	// if the food is bad
	else{
		document.getElementById("commentbox").innerHTML = "The food is bad";
	}
	
}

                     
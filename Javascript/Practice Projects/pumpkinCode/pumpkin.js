// JavaScript Document
var numpumpkins;

var gametitle = "Pumpkin Game";
document.getElementById("title").innerHTML = gametitle;


var mustache = 0;
var grins = 0;
var babys = 0;
var bucktooth = 0;
var scary = 0;
numpumpkins = 0;

var pumpkinpatch = "";


function addPumpkin(event) {

	var xAdjust = 360;
	var yAdjust = 0;
	var x = event.clientX - xAdjust;
	var y = event.clientY + yAdjust;
	var randomPumpkin = Math.floor((Math.random() * 5) + 1);
	pumpkinpatch += "<div class='pumpkin" + randomPumpkin + "' style='left: " + x + "px; top:" + y + "px;'></div>";
	document.getElementById("container").innerHTML = pumpkinpatch;
	switch (randomPumpkin) {
		case 1:
			mustache++;
			document.getElementById('mustaches').innerHTML = mustache;
			break
		case 2:
			bucktooth++;
			document.getElementById('bucktooth').innerHTML = bucktooth;
			break
		case 3:
			grins++;
			document.getElementById('grins').innerHTML = grins;
			break
		case 4:
			babys++;
			document.getElementById('babys').innerHTML = babys;
			break
		case 5:
			scary++;
			document.getElementById('scary').innerHTML = scary;

	}
	numpumpkins++;
	document.getElementById("numbertitle").innerHTML = numpumpkins;
}





// ignore the code down here, it is Jquery.
$("#container").mousemove(function (e) {
	$('.follow').css({ 'top': e.clientY + 20, 'left': e.clientX - 50 });
});
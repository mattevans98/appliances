// JavaScript Document

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

var oldKilowatts = 0;
var oldDollars = 0;
var oldTVbutton = false;
var oldFridgeButton = false;
var oldDishwasherButton = false;
var oldWasherButton = false;
var newKilowatts = 0;
var newDollars = 0;
var newTVbutton = false;
var newFridgeButton = false;
var newDishwasherButton = false;
var newWasherButton = false;


/*exported startUp*/
function startUp()
{
	"use strict";
	
	if (localStorage.oldTV === "plugIn")
	{
		document.getElementById("oldTV").style.visibility = "visible";
		document.getElementById("oldTVpic").style.visibility = "visible";
		oldKilowatts += 168;
		oldDollars += 15;
		oldTVbutton = true;
	}
	
	if (localStorage.oldFridge === "plugIn")
	{
		document.getElementById("oldFridge").style.visibility = "visible";
		document.getElementById("oldFridgePic").style.visibility = "visible";
		oldKilowatts += 2016;
		oldDollars += 181;
		oldFridgeButton = true;
	}
	
	if (localStorage.oldDishwasher === "plugIn")
	{
		document.getElementById("oldDishwasher").style.visibility = "visible";
		document.getElementById("oldDishwasherPic").style.visibility = "visible";
		oldKilowatts += 753;
		oldDollars += 68;
		oldDishwasherButton = true;
	}
	
	if (localStorage.oldWasher === "plugIn")
	{
		document.getElementById("oldWasher").style.visibility = "visible";
		document.getElementById("oldWasherPic").style.visibility = "visible";
		oldKilowatts += 1800;
		oldDollars += 162;
		oldWasherButton = true;
	}
	
	if (localStorage.newTV === "plugIn")
	{
		document.getElementById("newTV").style.visibility = "visible";
		document.getElementById("newTVpic").style.visibility = "visible";
		newKilowatts += 276;
		newDollars += 25;
		newTVbutton = true;
	}
	
	if (localStorage.newFridge === "plugIn")
	{
		document.getElementById("newFridge").style.visibility = "visible";
		document.getElementById("newFridgePic").style.visibility = "visible";
		newKilowatts += 982;
		newDollars += 89;
		newFridgeButton = true;
	}
	
	if (localStorage.newDishwasher === "plugIn")
	{
		document.getElementById("newDishwasher").style.visibility = "visible";
		document.getElementById("newDishwasherPic").style.visibility = "visible";
		newKilowatts += 323;
		newDollars += 29;
		newDishwasherButton = true;
	}
	
	if (localStorage.newWasher === "plugIn")
	{
		document.getElementById("newWasher").style.visibility = "visible";
		document.getElementById("newWasherPic").style.visibility = "visible";
		newKilowatts += 1620;
		newDollars += 146;
		newWasherButton = true;
	}
}

function keyDown()
{
	"use strict";
	//console.log(event.keyCode);
	if (event.keyCode === 65 || event.keyCode === 66)
	{
		console.log("Yay!");
	}
	switch(event.keyCode)
	{
		case 65:
			if (oldTVbutton === false)
			{
				document.getElementById("oldTV").style.visibility = "visible";
				document.getElementById("oldTVpic").style.visibility = "visible";
				oldKilowatts += 168;
				oldDollars += 15;
				document.getElementById("oldkWyear").innerHTML = oldKilowatts;
				document.getElementById("oldCost").innerHTML = oldDollars;
				oldTVbutton = true;
				localStorage.oldTV = "plugIn";
				console.log("test");
			}
			console.log(oldTVbutton);
			break;
		case 66:
			if (oldFridgeButton === false)
			{
				document.getElementById("oldFridge").style.visibility = "visible";
				document.getElementById("oldFridgePic").style.visibility = "visible";
				oldKilowatts += 2016;
				oldDollars += 181;
				document.getElementById("oldkWyear").innerHTML = oldKilowatts;
				document.getElementById("oldCost").innerHTML = oldDollars;
				oldFridgeButton = true;
				localStorage.oldFridge = "plugIn";
				console.log("test");
			}
			console.log(oldFridgeButton);
			break;
		case 75: //k
			if (oldDishwasherButton === false)
			{
				document.getElementById("oldDishwasher").style.visibility = "visible";
				document.getElementById("oldDishwasherPic").style.visibility = "visible";
				oldKilowatts += 753;
				oldDollars += 68;
				document.getElementById("oldkWyear").innerHTML = oldKilowatts;
				document.getElementById("oldCost").innerHTML = oldDollars;
				oldDishwasherButton = true;
				localStorage.oldDishwasher = "plugIn";
			}
			break;
		case 68:
			if (oldWasherButton === false)
			{
				document.getElementById("oldWasher").style.visibility = "visible";
				document.getElementById("oldWasherPic").style.visibility = "visible";
				oldKilowatts += 1800;
				oldDollars += 162;
				document.getElementById("oldkWyear").innerHTML = oldKilowatts;
				document.getElementById("oldCost").innerHTML = oldDollars;
				oldWasherButton = true;
				localStorage.oldWasher = "plugIn";
			}
			break;
		case 69:
			if (newTVbutton === false)
			{
				document.getElementById("newTV").style.visibility = "visible";
				document.getElementById("newTVpic").style.visibility = "visible";
				newKilowatts += 276;
				newDollars += 25;
				document.getElementById("newkWyear").innerHTML = newKilowatts;
				document.getElementById("newCost").innerHTML = oldDollars;
				newTVbutton = true;
				localStorage.newTV = "plugIn";
			}
			break;
		case 70:
			if (newFridgeButton === false)
			{
				document.getElementById("newFridge").style.visibility = "visible";
				document.getElementById("newFridgePic").style.visibility = "visible";
				newKilowatts += 982;
				newDollars += 89;
				document.getElementById("newkWyear").innerHTML = newKilowatts;
				document.getElementById("newCost").innerHTML = newDollars;
				newFridgeButton = true;
				localStorage.newFridge = "plugIn";
			}
			break;
		case 71:
			if (newDishwasherButton === false)
			{
				document.getElementById("newDishwasher").style.visibility = "visible";
				document.getElementById("newDishwasherPic").style.visibility = "visible";
				newKilowatts += 323;
				newDollars += 29;
				document.getElementById("newkWyear").innerHTML = newKilowatts;
				document.getElementById("newCost").innerHTML = newDollars;
				newDishwasherButton = true;
				localStorage.newDishwasher = "plugIn";
			}
			break;
		case 72:
			if (newWasherButton === false)
			{
				document.getElementById("newWasher").style.visibility = "visible";
				document.getElementById("newWasherPic").style.visibility = "visible";
				newKilowatts += 1620;
				newDollars += 146;
				document.getElementById("newkWyear").innerHTML = newKilowatts;
				document.getElementById("newCost").innerHTML = newDollars;
				newWasherButton = true;
				localStorage.newWasher = "plugIn";
			}
			break;
		default:
			return;
	}
}

function keyUp()
{
	"use strict";
	switch(event.keyCode)
	{
		case 65:
			if (oldTVbutton === true)
			{
				document.getElementById("oldTV").style.visibility = "hidden";
				document.getElementById("oldTVpic").style.visibility = "hidden";
				oldKilowatts -= 168;
				oldDollars -= 15;
				document.getElementById("oldkWyear").innerHTML = oldKilowatts;
				document.getElementById("oldCost").innerHTML = oldDollars;
				oldTVbutton = false;
				localStorage.oldTV = "plugOut";
			}
			break;
		case 66:
			if (oldFridgeButton === true)
			{
				document.getElementById("oldFridge").style.visibility = "hidden";
				document.getElementById("oldFridgePic").style.visibility = "hidden";
				oldKilowatts -= 2016;
				oldDollars -= 181;
				document.getElementById("oldkWyear").innerHTML = oldKilowatts;
				document.getElementById("oldCost").innerHTML = oldDollars;
				oldFridgeButton = false;
				localStorage.oldFridge = "plugOut";
			}
			break;
		case 75: //k
			if (oldDishwasherButton === true)
			{
				document.getElementById("oldDishwasher").style.visibility = "hidden";
				document.getElementById("oldDishwasherPic").style.visibility = "hidden";
				oldKilowatts -= 753;
				oldDollars -= 68;
				document.getElementById("oldkWyear").innerHTML = oldKilowatts;
				document.getElementById("oldCost").innerHTML = oldDollars;
				oldDishwasherButton = false;
				localStorage.oldDishwasher = "plugOut";
			}
			break;
		case 68:
			if (oldWasherButton === true)
			{
				document.getElementById("oldWasher").style.visibility = "hidden";
				document.getElementById("oldWasherPic").style.visibility = "hidden";
				oldKilowatts -= 1800;
				oldDollars -= 162;
				document.getElementById("oldkWyear").innerHTML = oldKilowatts;
				document.getElementById("oldCost").innerHTML = oldDollars;
				oldWasherButton = false;
				localStorage.oldWasher = "plugOut";
			}
			break;
		case 69:
			if (newTVbutton === true)
			{
				document.getElementById("newTV").style.visibility = "hidden";
				document.getElementById("newTVpic").style.visibility = "hidden";
				newKilowatts -= 276;
				newDollars -= 25;
				document.getElementById("newkWyear").innerHTML = newKilowatts;
				document.getElementById("newCost").innerHTML = oldDollars;
				newTVbutton = false;
				localStorage.newTV = "plugOut";
			}
			break;
		case 70:
			if (newFridgeButton === true)
			{
				document.getElementById("newFridge").style.visibility = "hidden";
				document.getElementById("newFridgePic").style.visibility = "hidden";
				newKilowatts -= 982;
				newDollars -= 89;
				document.getElementById("newkWyear").innerHTML = newKilowatts;
				document.getElementById("newCost").innerHTML = newDollars;
				newFridgeButton = false;
				localStorage.newFridge = "plugOut";
			}
			break;
		case 71:
			if (newDishwasherButton === true)
			{
				document.getElementById("newDishwasher").style.visibility = "hidden";
				document.getElementById("newDishwasherPic").style.visibility = "hidden";
				newKilowatts -= 323;
				newDollars -= 29;
				document.getElementById("newkWyear").innerHTML = newKilowatts;
				document.getElementById("newCost").innerHTML = newDollars;
				newDishwasherButton = false;
				localStorage.newDishwasher = "plugOut";
			}
			break;
		case 72:
			if (newWasherButton === true)
			{
				document.getElementById("newWasher").style.visibility = "hidden";
				document.getElementById("newWasherPic").style.visibility = "hidden";
				newKilowatts -= 1620;
				newDollars -= 146;
				document.getElementById("newkWyear").innerHTML = newKilowatts;
				document.getElementById("newCost").innerHTML = newDollars;
				newWasherButton = false;
				localStorage.newWasher = "plugOut";
			}
			break;
		default:
			console.log("Up done");
	}
}
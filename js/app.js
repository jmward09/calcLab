var buttons = document.getElementsByClassName('num');


for (var i=0; i<buttons.length; i++){
	buttons[i].addEventListener('click', addToOutput);
	console.log(i);
}
document.getElementById("solve").addEventListener('click',getSolution);
document.getElementById("clear").addEventListener('click',clear);

/* Adding Seperate Listener for Operators
var operators = document.getElementsByClassName('op');
or (var i=0, i<operators.length, i++){
	operators[i].addEventListener('click', addToOutput);
}

function addToOutputs(){
document.getElementById("output").innerHTML = 55;	
}
*/
function addToOutput(){
	console.log(this.innerHTML)
	document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + this.innerHTML;

	}
function getSolution(){
	document.getElementById("output").innerHTML = eval(document.getElementById("output").innerHTML);
}
function clear(){
	document.getElementById("output").innerHTML = null;
}
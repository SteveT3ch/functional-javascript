var result;
function getText(){
	var someText = prompt("Give me something to capitalize");
	capWords(someText);
	console.log(result.join(" "));
}

function capWords(input){
	var counter;
	var inputArr = input.split(" ");
	var transformed = "";
	result = [];
	for (counter = 0; counter < inputArr.length; counter++){
		transformed = [
			inputArr[counter].charAt(0).toUpperCase(),
			inputArr[counter].substring(1)		
		].join("");
		result.push(transformed);
	}
}
document.getElementById("main_button").onClick = getText;
(function(){
	"use strict";
	function capify(str) {
		return [str.charAt(0).toUpperCase(),
				str.substring(1)].join("");
	}
	function processWords(fn, str){
		return str.split(" ").map(fn).join(" ");
	}
	function getValue(e){
		var something = "please buy bitcoin now";
		return processWords(capify, something);
	}
	
	console.log(getValue())
}());
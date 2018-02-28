(function(){
	"use strict";
	var SomeText = function(text){
		this.text = text;
	};
	
	SomeText.prototype.capify = function(str){
		var firstLetter = str.charAt(0);
		var strRemainder = str.substring(1);
		return [firstLetter.toUpperCase(), strRemainder].join("");
	};
	
	SomeText.prototype.capifyWords = function(){
		var result = [];
		var textArray = this.text.split(" ");
		for (var counter = 0; counter < textArray.length; counter++){
			result.push(this.capify(textArray[counter]));
		}
		return result.join(" ");
	}
	
	var newText = new SomeText("buy bitcoin now you lazy bum");
	console.log(newText.capifyWords());
	
}());



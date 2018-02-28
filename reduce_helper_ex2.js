// reduce example
function isBalance(string){
	return string.split("").reduce( (prev, a) => {
		if(prev < 0){ return prev; }
		if(a === '('){
			++prev;
		}else if (a === ')') {
			--prev;
		}else {
			prev;
		}
		if(prev === 0){
			return true;	
		}else {
			return false;
		}
	}, 0)
}

console.log(isBalance('((|)))'));
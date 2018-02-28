function Field(value) {
	this.value = value;
}
Field.prototype.validate = function(){
	return this.value.length > 1;
}

const username = new Field('user1');
const password = new Field('');

const fields = [username, password];
const isValidate = fields.every( field => {
	return field.validate();
})

console.log(isValidate);
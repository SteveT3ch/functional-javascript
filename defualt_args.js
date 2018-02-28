// default argument
function User(id){
	this.id = id;
}

function generatedId(){
	return Math.ceil(Math.random() * 99999);
}

function createAdminUser(user = new User(generatedId())){
	user.admin = true;
	return user;
}

const admin = createAdminUser();
console.log(admin);
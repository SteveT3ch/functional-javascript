// arrow function 
const team = {
	members: ['Jane', 'Bill'],
	teamName: 'Bitcoin Team',
	teamSummary: function(){
		return this.members.map( member => {
			return 	`${member} is on team ${this.teamName}`;
		});
	}
};

console.log(team.teamSummary());
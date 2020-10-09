// [{
// 	id: 'shuahsuahsu',
// 	name: 'Douglas',
// 	room: 'geral'
// }]

class Users {

	constructor() {
		this.users = []
	}

	store(id, name, room) {
		let user = {id, name, room}
		this.users.push(user)
		return user
	}

	getUsernamesFromARoom(room) {
		const users = this.users.filter(user => user.room === room)
		const usernamesFromARoom = users.map(user => user.name)

		return usernamesFromARoom
	}

	getUser(id) {
		return this.users.filter(user => user.id === id)[0]
	}

	remove(id) {
		const user = this.getUser(id)

		if(user)
			this.users = this.users.filter(user => user.id != id)

		return user
	}

}

module.exports = {Users}
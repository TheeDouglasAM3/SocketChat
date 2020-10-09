const expect = require('expect')

const {Users} = require('./users')

describe('Users', () => {

  let users

  beforeEach(() => {
    users = new Users()
    users.users = [
      {
        id: 'hsuahsuah',
        name: 'Douglas',
        room: 'My room'
      },      
      {
        id: 'mwkmekfe',
        name: 'Robert',
        room: 'Robert room'
      },      
      {
        id: 'viofujviooc',
        name: 'Cacatua',
        room: 'Cacatua room'
      },      
      {
        id: 'vdsfiofujviooc',
        name: 'Nava',
        room: 'Cacatua room'
      },      
    ]
  })

  it('should add new user', () => {
    let users = new Users()
    const user = {
      id: 'hsuahsuah',
      name: 'Douglas',
      room: 'My room'
    }

    let reUser = users.store(user.id, user.name, user.room)

    expect(users.users).toEqual([user])
  })

  it('should return names for the Cacatua room', () => {
    const userList = users.getUsernamesFromARoom('Cacatua room')

    expect(userList).toEqual(['Cacatua', 'Nava'])
  })

  it('should return names for the My room', () => {
    const userList = users.getUsernamesFromARoom('My room')

    expect(userList).toEqual(['Douglas'])
  })

  it('should find user by id', () => {
    const userID = 'hsuahsuah'
    const user = users.getUser(userID)

    expect(user.id).toBe(userID)
  })

  it('should not find user by a nonexistent id', () => {
    const userID = 'hsuahsdasdasuah342'
    const user = users.getUser(userID)

    expect(user).toBeUndefined()
  })

  it('should remove a user', () => {
    const userID = 'hsuahsuah'
    const user = users.remove(userID)

    expect(user.id).toBe(userID)
    expect(users.users.length).toBe(3)
  })

  it('should not remove a user', () => {
    const userID = '48239478'
    const user = users.remove(userID)

    expect(user).toBeUndefined
    expect(users.users.length).toBe(4)
  })
})
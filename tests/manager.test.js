const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('newManager', () => {
        it('creates a new Manager object', () => {
            const manager = new Manager('Alfred', 1, 'aaa@a.com', 101);
            expect(manager).toBeInstanceOf(Manager);
        })
    })

    describe('getName', () => {
        it('returns the name of the manager', () => {
            const name = 'Basil';
            const manager = new Manager(name, 2, 'bbb@b.com', 102);
            expect(manager.getName()).toEqual(name);
        })
    })

    describe('getID', () => {
        it('returns the ID of the manager', () => {
            const id = 3;
            const manager = new Manager('Connor', id, 'ccc@c.com', 103);
            expect(manager.getID()).toEqual(id);
        })
    })

    describe('getEmail', () => {
        it('returns the email of the manager', () => {
            const email = 'ddd@d.com';
            const manager = new Manager('Damien', 4, email, 104);
            expect(manager.getEmail()).toEqual(email);
        })
    })

    describe('getOfficeNumber', () => {
        it('returns the office number of the manager', () => {
            const office = 105;
            const manager = new Manager('Ethel', 5, 'eee@e.com', office);
            expect(manager.getOfficeNumber()).toEqual(office);
        })
    })

    describe('getRole', () => {
        it('returns the role of the manager', () => {
            const role = 'Manager';
            const manager = new Manager('Fiora', 6, 'fff@f.com', 106);
            expect(manager.getRole()).toEqual(role);
        })
    })
})
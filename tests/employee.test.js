const Employee = require('../lib/employee');

describe('Employee', () => {

    describe('newEmployee', () => {
        it('creates a new Employee object', () => {
            const employee = new Employee('Alfred', 1, 'aaa@a.com');
            expect(employee).toBeInstanceOf(Employee);
        })
    })

    describe('getName', () => {
        it('returns the name of the employee', () => {
            const name = 'Basil';
            const employee = new Employee(name, 2, 'bbb@b.com');
            expect(employee.getName()).toEqual(name);
        })
    })

    describe('getID', () => {
        it('returns the ID of the employee', () => {
            const id = 3;
            const employee = new Employee('Connor', id, 'ccc@c.com');
            expect(employee.getID()).toEqual(id);
        })
    })

    describe('getEmail', () => {
        it('returns the email of the employee', () => {
            const email = 'ddd@d.com';
            const employee = new Employee('Damien', 4, email);
            expect(employee.getEmail()).toEqual(email);
        })
    })

    describe('getRole', () => {
        it('returns the role of the employee', () => {
            const role = 'Employee';
            const employee = new Employee('Ethel', 5, 'eee@e.com');
            expect(employee.getRole()).toEqual(role);
        })
    })
})
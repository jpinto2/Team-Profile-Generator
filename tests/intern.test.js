const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('newIntern', () => {
        it('creates a new Intern object', () => {
            const intern = new Intern('Alfred', 1, 'aaa@a.com', 'UCDavis');
            expect(intern).toBeInstanceOf(Intern);
        })
    })

    describe('getName', () => {
        it('returns the name of the intern', () => {
            const name = 'Basil';
            const intern = new Intern(name, 2, 'bbb@b.com', 'UCDavis');
            expect(intern.getName()).toEqual(name);
        })
    })

    describe('getID', () => {
        it('returns the ID of the intern', () => {
            const id = 3;
            const intern = new Intern('Connor', id, 'ccc@c.com', 'UCDavis');
            expect(intern.getID()).toEqual(id);
        })
    })

    describe('getEmail', () => {
        it('returns the email of the intern', () => {
            const email = 'ddd@d.com';
            const intern = new Intern('Damien', 4, email, 'UCDavis');
            expect(intern.getEmail()).toEqual(email);
        })
    })

    describe('getSchool', () => {
        it('returns the school of the intern', () => {
            const school = 'UCDavis';
            const intern = new Intern('Ethel', 5, 'eee@e.com', school);
            expect(intern.getSchool()).toEqual(school);
        })
    })

    describe('getRole', () => {
        it('returns the role of the intern', () => {
            const role = 'Intern';
            const intern = new Intern('Fiora', 6, 'fff@f.com', 'UCDavis');
            expect(intern.getRole()).toEqual(role);
        })
    })
})
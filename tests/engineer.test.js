const Engineer = require('../lib/engineer');

describe('Engineer', () => {

    describe('newEngineer', () => {
        it('creates a new Engineer object', () => {
            const engineer = new Engineer('Alfred', 1, 'aaa@a.com', 'GitAl');
            expect(engineer).toBeInstanceOf(Engineer);
        })
    })

    describe('getName', () => {
        it('returns the name of the engineer', () => {
            const name = 'Basil';
            const engineer = new Engineer(name, 2, 'bbb@b.com', 'GitBa');
            expect(engineer.getName()).toEqual(name);
        })
    })

    describe('getID', () => {
        it('returns the ID of the engineer', () => {
            const id = 3;
            const engineer = new Engineer('Connor', id, 'ccc@c.com', 'GitCo');
            expect(engineer.getID()).toEqual(id);
        })
    })

    describe('getEmail', () => {
        it('returns the email of the engineer', () => {
            const email = 'ddd@d.com';
            const engineer = new Engineer('Damien', 4, email, 'GitDa');
            expect(engineer.getEmail()).toEqual(email);
        })
    })

    describe('getGithub', () => {
        it('returns the Github username of the engineer', () => {
            const gitUser = 'GitEt';
            const engineer = new Engineer('Ethel', 5, 'eee@e.com', gitUser);
            expect(engineer.getGithub()).toEqual(gitUser);
        })
    })

    describe('getRole', () => {
        it('returns the role of the engineer', () => {
            const role = 'Engineer';
            const engineer = new Engineer('Fiora', 6, 'fff@f.com', 'GitFi');
            expect(engineer.getRole()).toEqual(role);
        })
    })
})
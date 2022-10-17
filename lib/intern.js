const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, GitHub, school){
        super(name, id, email, GitHub);

        this.school = school;
    }
    getSchool() {
        return `Studied at ${this.school}. `
    }

    getRole() {
        return "Intern"
    }

}

module.exports = Intern;
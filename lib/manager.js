const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, GitHub){
        super(name, id, email, GitHub);
    }
    getRole() {
        return "Manager";
    };
}
module.exports = Manager;
const Employee = require('./employee');

class Engineer extends Employee{
    constructor(name, id, email, GitHub){
        super(name, id, email, GitHub);
    }
        getRole() {
            return "Engineer"
        };

}
module.exports = Engineer;
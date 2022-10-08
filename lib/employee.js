class Employee{
    constructor(name = '', id,email,GitHub) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.GitHub = GitHub;
    }

    getName() {
        return this.name
    };

    getId() {
        return this.id
    };

    getEmail() {
        return this.email
    };

    getGit(){
        return this.GitHub
    };

    getRole() {
        return "Employee";
    };
}
module.exports = Employee;
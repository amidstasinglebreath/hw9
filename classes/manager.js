const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super (name, id, email);
        this.officeNumber = officeNumber;
        this.role = `Manager: ${officeNumber}`;
    }
}

module.exports = Manager;
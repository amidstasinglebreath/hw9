class Employee {
    constructor(name, id, email) {
        if (!name) {
            throw new Error("You are missing the name.");
        }
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "";

    }

    printInfo(){
        console.log(this.name);
        console.log(this.id);
        console.log(this.email);
        console.log(this.role);
    }


}
module.exports = Employee;
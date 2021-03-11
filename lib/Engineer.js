// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer {
    constructor(name, id, email, username) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.username = username;
    }
    getName(name) {
        console.log(`${name}`) 
    }
}

module.exports = Engineer;
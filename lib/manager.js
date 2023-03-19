const Employee = require("./employee");

class Manager extends Employee {

  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

// assuming I'll need get function for this later  
  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }

}

module.exports = Manager;

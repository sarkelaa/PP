/*
Create constructor functions with properties representing the following:
Person: name, surname
Employee: inherits Person and has job and salary
Developer: inherits from Employee and has specialization
Manager: inherits from Employee and has department */

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}


/////////
function Employee(name, surname, job, salary) {

    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;

}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

//////////
function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}



Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function () {
    return "name of spec " + this.specialization;
};
var dev1 = new Developer("ivan", "saric", "agent", "5000eur", "killer");
console.log(dev1.getSpecialization());
/////////
function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;
Manager.prototype.getDepartment = function () {
    return this.department;
}
Manager.prototype.changeDepartment = function (newDepartment) {
    return this.department = newDepartment;
}


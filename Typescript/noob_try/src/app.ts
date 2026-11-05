// class Employee{
//    public name:string;
//    public salary:number;
//     constructor(name:string,salary:number){
// this.name=name,
// this.salary=salary
//     }

// }

// const employee = new Employee("mahir",15000);

// employee.name="siam"

// console.log(employee)

class Employee {
  constructor(
    public name: string,
    public salary: number,
  ) {}

  get employeeName () {
    return this.name;
  }
}

const employee = new Employee("mahir", 15000);

employee.name = "siam";

console.log(employee);


class Manager extends Employee{

}



const myManager = new Manager("sokal",25000)



console.log(myManager)
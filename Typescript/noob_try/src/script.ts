class Employee {
  constructor(
    public name: string,
    private salary: number,
  ) {}
}

const employee = new Employee("mahir", 2000);

console.log(employee.name, employee.salary);

employee.salary = 25000;
console.log(employee.salary);

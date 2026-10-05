console.log("employee details");

let numberofemployee = Number(prompt("enter no.of employee"));
let employee = 0;

for (let employee = 1; employee <= numberofemployee; employee++) {
    console.log("\n=====employee" + employee + "====");

    let name = prompt("enter employee name:");
    let id = String(prompt("enter employee id:"));
    let salary = Number(prompt("enter employee salary:"));
    let department = String(prompt("enter employee department:"));

    console.log("------Result------");
    console.log("employeename:" + name);
    console.log("id:" + id);
    console.log("salary:" + salary);
    console.log("department:" + department);
}
console.log('js');

let employeesArray = [];

class Employee {
    constructor(firstName, lastName, idNumber, jobTitle, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
        this.jobTitle = jobTitle;
        this.annualSalary = annualSalary;
    }
}

// jquery declaration
$(document).ready(onReady);

function onReady() {
  console.log('JQ');
// submit button 
    $('#sumbitButton').on('click', addEmployee);
// delete button
    $('#addedEmployees').on('click','.deleteEmployee', removeEmployeesButton);
}

// Add Employee Function 
function addEmployee(){
    event.preventDefault();
    console.log('button clicked!');
    let firstNameIn = $('#firstName').val();
    let lastNameIn = $('#lastName').val();
    let idNumberIn = $('#idNumber').val();
    let jobTitleIn = $('#jobTitle').val();
    let annualSalaryIn = $('#annualSalary').val();
    let newEmployee = new Employee(firstNameIn, lastNameIn, idNumberIn, jobTitleIn, annualSalaryIn);
    employeesArray.push(newEmployee);
    console.log(employeesArray);
// calling calcuTotalMonthlyCost to caluclate each employees monthy cost
    calcuTotalMonthlyCost ();
// clearing the input values
      $('#firstName').val('');
      $('#lastName').val('');
      $('#idNumber').val('');
      $('#jobTitle').val('');
      $('#annualSalary').val('');
// calling appendEmployeeList to add the employees to the dom
    appendEmployeeList();
}

// appending the Employees to the dom
function appendEmployeeList() {
    console.log('appending employee list');
    let element = $('#addedEmployees');
    element.empty();
    for(let employee of employeesArray) {
        element.append(`<li>` + employee.firstName + ` ` + employee.lastName + ` ` + 
        employee.idNumber + employee.jobTitle + ` ` + employee.annualSalary + ` ` + 
        `<button class="deleteEmployee">Delete Employee</button>
        </li>`);
    }
}

// removing employees and salary value from the arrays and dom
function removeEmployeesButton(){
    console.log('removing employee');
    let selectedItem = $(this).parent().text();
    console.log('targeting selectedItem',selectedItem);
    for(let i = 0; i < employeesArray.length; i++) {
        if(selectedItem.includes(employeesArray[i].idNumber)){
            console.log('deleted',employeesArray[i].idNumber );
            console.log('salary ',employeesArray[i].annualSalary );
            let salary = parseInt(employeesArray[i].annualSalary/12);
            employeesArray.splice(i, 1);
            $(this).parent().remove();
            console.log(employeesArray);
// remove monthly cost if employee is deleted
    console.log('targeting selectedItem',salary);
    for(let i = 0; i < totMonthCostArray.length; i++) {
        console.log('totMonthCostArray[i]',totMonthCostArray[i]);
     if(totMonthCostArray[i] == salary){
         console.log('deleted',totMonthCostArray[i] );
         totMonthCostArray.splice(i, 1);
         console.log(totMonthCostArray);
         calcuTotalMonthlyCost ();
     }
    }
}
}
}
// array to store monthly costs per employee
let totMonthCostArray =[];
// calculates Total monthly cost of each employee added 
function calcuTotalMonthlyCost (){
    console.log('calculating');
    let yearSal = $('#annualSalary').val();
    console.log('this employess yearly salary is', yearSal);
    let individualMonthlyCost= yearSal/12;
    totMonthCostArray.push(individualMonthlyCost);
    console.log('this employee costs',individualMonthlyCost,'each month');
// caluculates the total cost of all the employess added
    let totalMonthlyCost = 0;
    for (let inMonthCost of totMonthCostArray)
        totalMonthlyCost += inMonthCost;
        console.log('totalMonthlyCost', totalMonthlyCost);
// appending total monthly cost to dom
        let element= $('#totalMonlthyCost');
        element.empty();
        element.append('<h3>'+ totalMonthlyCost +'</h3>'); 
}




    

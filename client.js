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

// removing employees 
function removeEmployeesButton(){
    console.log('removing');
    let selectedItem = $(this).parent().text();
    console.log(selectedItem);
    for(let i = 0; i < employeesArray.length; i++) {
        if(selectedItem.includes(employeesArray[i].firstName)){
            console.log('deleted');
            employeesArray.splice(i, 1);
            $(this).parent().remove();
            return true;
        }   
    }
}

// indivdual monthly cost array
let indivdualCostArray=[];

// calculates Total monthly cost of each employee added 
function calcuTotalMonthlyCost (){
    console.log('calculating');
    let yearSal = $('#annualSalary').val();
    let individualmonthlyCost= yearSal/12
    indivdualCostArray.push(individualmonthlyCost);
    console.log('this employee costs',individualmonthlyCost,'each month');
    console.log('monthly cost of employe is', indivdualCostArray);
// caluculates the total cost of all the employess added
    let monthlyCost =0;
    for (let monthCost of indivdualCostArray){
        console.log('in the for');
        monthlyCost = monthlyCost+monthCost;
        console.log('monthlyCost', monthlyCost);
// appending total monthly cost to dom
        let element= $('#totalMonlthyCost');
        element.empty();
        element.append('<h3>'+ monthlyCost +'</h3>'); 
        }
    }

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useEmployees from "../hooks/useEmployees";
 
function EmployeeForm( {employee, mode} ){
    const { addEmployee, updateEmployee } = useEmployees();
    const navigate = useNavigate();

    const [name, setName] = useState( employee ? employee.name : "");
    const [age, setAge] = useState(employee ? employee.age : "");
    const [department, setDepartment] = useState(employee ? employee.department : "");
    const [email, setEmail] = useState(employee ? employee.email : "");
    const [salary, setSalary] = useState(employee ? employee.salary : "");

    function handleSubmit(event) {
        event.preventDefault();

        const employeeData = {
            id: mode === "edit" ? employee.id : Date.now(),
            name,
            age: Number(age),
            department,
            email,
            salary: Number(salary)
        };

        if(mode === "edit"){
            updateEmployee(employeeData);
        }else{
            addEmployee(employeeData);
        }

        navigate("/employees");
        
    }

    return(
        <form onSubmit = {handleSubmit}>
            <input type = "text" placeholder="Employee Name"
                   value = {name} onChange={(e) => setName(e.target.value)} /> <br /><br />
            <input type = "number" placeholder="Age"
                   value = {age} onChange={(e) => setAge(e.target.value)} /> <br /><br />
            <input type = "text" placeholder="Department"
                   value = {department} onChange={(e) => setDepartment(e.target.value)} /> <br /><br />
            <input type = "email" placeholder="Email"
                   value = {email} onChange={(e) => setEmail(e.target.value)} /> <br /><br />
            <input type = "number" placeholder="Salary"
                   value = {salary} onChange={(e) => setSalary(e.target.value)} /> <br /><br />

            <button type="submit">Save Employee</button>
            
        </form>
    );
}

export default EmployeeForm;
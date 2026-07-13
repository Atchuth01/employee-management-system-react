import { useState, useContext } from "react";
import useEmployees from "../hooks/useEmployees";

function EmployeeForm(){
    const { addEmployee } = useEmployees();

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [department, setDepartment] = useState("");
    const [email, setEmail] = useState("");
    const [salary, setSalary] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const newEmployee = {
            id: Date.now(),
            name,
            age: Number(age),
            department,
            email,
            salary: Number(salary)
        };

        addEmployee(newEmployee);

        setName("");
        setAge("");
        setDepartment("");
        setEmail("");
        setSalary("");
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
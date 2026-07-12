import EmployeeCard from "../components/EmployeeCard";
import { useContext } from "react";
import EmployeeContext from "../context/EmployeeContext";

function Employees(){
    const { employees } = useContext(EmployeeContext)

    return(
        <div className = "page">
            <h1>Employees</h1>
            {
                employees.map(employee => (
                    <EmployeeCard key = {employee.id} employee = {employee} />
                ))
            }
        </div>
    );
}

export default Employees;
import { useContext } from "react";
import EmployeeContext from "../context/EmployeeContext";

function useEmployees() {
    const { employees, setEmployees } = useContext(EmployeeContext);

    function addEmployee(employee) {
        setEmployees([...employees, employee]);
    }

    function deleteEmployee(id){
        const updatedEmployees = employees.filter(employee => employee.id != id);
        setEmployees(updatedEmployees);
    }

    return{
        employees, addEmployee, deleteEmployee
    };
}

export default useEmployees;
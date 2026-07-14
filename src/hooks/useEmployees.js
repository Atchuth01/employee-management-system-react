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

    function updateEmployee(updatedEmployee){
        const updatedEmployees = employees.map(employee => 
            employee.id === updatedEmployee.id 
                            ? updatedEmployee 
                            : employee
            );
        setEmployees(updatedEmployees);
    }

    function getEmployeeById(id){
        return employees.find(employee =>
            employee.id === Number(id)
        );
    }

    return{
        employees, addEmployee, deleteEmployee, updateEmployee, getEmployeeById
    };
}

export default useEmployees;
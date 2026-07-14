import { useParams } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";
import useEmployees from "../hooks/useEmployees";

function EditEmployee(){
    const { id } = useParams();

    const { getEmployeeById } = useEmployees();
    const employee = getEmployeeById(id);

    return(
        <div className = "page">
            <h1>Edit Employee</h1>
            <EmployeeForm employee = {employee} mode = "edit" />
        </div>
    )
}

export default EditEmployee;
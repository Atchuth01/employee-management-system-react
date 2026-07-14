import useEmployees from "../hooks/useEmployees";
import { Link } from "react-router-dom";

function EmployeeCard({ employee }){
    const { deleteEmployee } = useEmployees();

    return(
        <div className = "employee-card">
            <h2>{employee.name}</h2>
            <p>
                <strong>Department:</strong>
                {employee.department}
            </p>
            <p>
                <strong>Age:</strong>
                {employee.age}
            </p>
            <p>
                <strong>Email:</strong>
                {employee.email}
            </p>
            <p>
                <strong>Salary:</strong>
                ₹{employee.salary}
            </p>

            <div className = "card-buttons">
                <Link to = {`/edit-employee/${employee.id}`}>
                <button>Edit</button>
                </Link>
                <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
            </div>
        </div>
    )
}

export default EmployeeCard;
function EmployeeCard({ employee }){
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
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default EmployeeCard;
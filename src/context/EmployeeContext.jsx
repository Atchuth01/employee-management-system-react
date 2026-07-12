import { createContext, useState } from "react";

const EmployeeContext = createContext();

function EmployeeProvider({ children }){

    const [employees, setEmployees] = useState([
        {
        id: 1,
        name: "Atchuth",
        age: 22,
        department: "Engineering",
        email: "atchuth@gmail.com",
        salary: 50000,
        },
        {
        id: 2,
        name: "Sai",
        age: 23,
        department: "HR",
        email: "sai@gmail.com",
        salary: 45000,
        },
        {
        id: 3,
        name: "Rahul",
        age: 26,
        department: "Finance",
        email: "rahul@gmail.com",
        salary: 70000,
        },
    ]);

    return (
        <EmployeeContext.Provider value = {{employees, setEmployees, }}>
            {children}
        </EmployeeContext.Provider>
    );
}

export { EmployeeProvider };

export default EmployeeContext;
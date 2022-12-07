import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem name ="Władek" salary={800} increase = 'true'/>
            <EmployeesListItem name ="Michał" salary={3000}/>
            <EmployeesListItem name ="Tomasz" salary={7000}/>
        </ul>
    )
}

export default EmployeesList;
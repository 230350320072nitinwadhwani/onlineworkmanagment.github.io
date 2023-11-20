

const EmployeeDashboard = () => {
    const employeeData = JSON.parse(sessionStorage.getItem("active-employee"));
    const employeeEmail = employeeData ? employeeData.emailId : "";
    return (
        <div className="d-flex justify-content-between align-items-center p-2 " style={{ backgroundColor: '#ADD8E6', height: '60px' }}>
            <b><p className="m-4">Employee Dashboard</p></b>
            <b><div className="me-4">Employee: {" " + employeeEmail} </div></b>
        </div>
    );
};

export default EmployeeDashboard;
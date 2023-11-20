

const ManagerDashboard = () => {

    const managerData = JSON.parse(sessionStorage.getItem("active-manager"));
    const managerEmail = managerData ? managerData.emailId : "";
    return (
        <div className="d-flex justify-content-between align-items-center p-2 " style={{ backgroundColor: '#ADD8E6', height: '60px' }}>
            <b><p className="m-4">Manager Dashboard</p></b>
            <b><div className="me-4">Manager: {" " + managerEmail} </div></b>
        </div>
    );
}; export default ManagerDashboard
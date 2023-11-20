const AdminDashboard = () => {
    const adminData = JSON.parse(sessionStorage.getItem("active-admin"));
    const adminEmail = adminData ? adminData.emailId : "";
    return (
        <div className="d-flex justify-content-between align-items-center p-2 " style={{ backgroundColor: '#ADD8E6', height: '60px' }}>
            <b><p className="m-4">Admin Dashboard</p></b>
            <b><div className="me-4">Admin: {" " + adminEmail} </div></b>
        </div>
    );
};

export default AdminDashboard;
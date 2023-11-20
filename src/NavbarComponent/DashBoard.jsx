
import AdminDashboard from "./AdminDashboard";
import EmployeeDashboard from "./EmployeeDashboard";
import ManagerDashboard from "./ManagerDashboard";

const DashBoard = () => {
    const employee = JSON.parse(sessionStorage.getItem("active-employee"));
    const admin = JSON.parse(sessionStorage.getItem("active-admin"));
    const manager = JSON.parse(sessionStorage.getItem("active-manager"));

    if (admin != null) {
        return <AdminDashboard />;
    } else if (manager != null) {
        return <ManagerDashboard />;
    } else if (employee != null) {
        return <EmployeeDashboard />;
    } else {
        return <div></div>;
    }
};

export default DashBoard;
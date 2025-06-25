import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MatrimonyAdminLogin from "./components/admin/AdminLoginPage";
import AdminDashboard from "./components/admin/AdminDashboardPage";
import AdminNewUserRequest from "./components/admin/AdminNewUserRequest";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public/Home Route */}
        {/* {/* <Route path="/admin/login" element={<AdminLoginPage />} /> */}
        <Route path="/" element={<MatrimonyAdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-new-user-request" element={<AdminNewUserRequest />} />
      </Routes>
    </Router>
  );
}

export default App;

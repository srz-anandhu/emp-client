import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ListEmpPage from "./pages/ListEmpPage";

import AdminLoginPage from "./pages/AdminLoginPage";
import AddEmpPage from "./pages/AddEmpPage";
import AdminDashPage from "./pages/AdminDashPage";
import AddAdminPage from "./pages/AddAdminPage";
import LoginForm from "./pages/LoginForm"
import ProfilePage from "./pages/ProfilePage";

function App() {

  const ProtectedRoutes = ({ children }) => {
    const refreshToken = localStorage.getItem("refreshToken");
   // console.log("REFRESH TOKEN = ", refreshToken);

    if (!refreshToken || refreshToken === "null" || refreshToken === "undefined") {
      return <Navigate to="/" replace />;
    }

    return children
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={< AdminLoginPage />} />
        <Route path="/login" element= { <LoginForm />} />

        {/* Protected Routes */}
        <Route path="/admin/addemployee" element={
          <ProtectedRoutes>
            <AddEmpPage />
          </ProtectedRoutes>} />
        <Route path="/admin/dashboard" element={
          <ProtectedRoutes>
            <AdminDashPage />
          </ProtectedRoutes>} />
        <Route path="/admin/add-admin" element={
          <ProtectedRoutes>
            < AddAdminPage />
          </ProtectedRoutes>} />
        <Route path="/employees" element={
          <ProtectedRoutes>
            <ListEmpPage />
          </ProtectedRoutes>} />

        <Route path="/profile" element={
          <ProtectedRoutes>
            <ProfilePage />
          </ProtectedRoutes> } />
         
      </Routes>
    </BrowserRouter>
  );
}


export default App

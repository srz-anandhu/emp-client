import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
// import SignupForm from "./pages/SignupForm";
import ProfilePage from "./pages/ProfilePage";
import ListEmpPage from "./pages/ListEmpPage";

import AdminLoginPage from "./pages/AdminLoginPage";
import AddEmpPage from "./pages/AddEmpPage";
import AdminDashPage from "./pages/AdminDashPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={ <AdminLoginPage/> } />
        <Route path="/admin/addemployee" element={ <AddEmpPage /> } />
        <Route path="/admin/dashboard" element={ <AdminDashPage />} />

        {/* <Route path="/" element={<SignupForm />} /> */}
        <Route path="/" element={<LoginForm />} />
        <Route path="/profile" element={ <ProfilePage /> } />
        <Route path="/employees" element={ <ListEmpPage /> } />
      </Routes>
    </BrowserRouter>
  );
}


export default App

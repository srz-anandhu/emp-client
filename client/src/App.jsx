import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListEmpPage from "./pages/ListEmpPage";

import AdminLoginPage from "./pages/AdminLoginPage";
import AddEmpPage from "./pages/AddEmpPage";
import AdminDashPage from "./pages/AdminDashPage";
import AddAdminPage from "./pages/AddAdminPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/admin/addemployee" element={ <AddEmpPage /> } />
        <Route path="/admin/dashboard" element={ <AdminDashPage />} />
        <Route path="/admin/add-admin" element={ < AddAdminPage/> } />
        <Route path="/" element={ < AdminLoginPage /> } />

        <Route path="/employees" element={ <ListEmpPage /> } />
      </Routes>
    </BrowserRouter>
  );
}


export default App

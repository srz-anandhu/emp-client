import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import ProfilePage from "./pages/ProfilePage";
import ListEmpPage from "./pages/ListEmpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={ <ProfilePage /> } />
        <Route path="/employees" element={ <ListEmpPage /> } />
      </Routes>
    </BrowserRouter>
  );
}


export default App

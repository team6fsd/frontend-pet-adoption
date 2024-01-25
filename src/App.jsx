import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ListPet from "./pages/ListPet";
import DetailPet from "./pages/DetailPet";
import Login from "./pages/auth/Login";
import AdminLogin from "./pages/auth/admin/Login";
import Register from "./pages/auth/Register";
import HomeDashboard from "./pages/dashboard/Home";
import Users from "./pages/dashboard/User";
import ListPetDashboard from "./pages/dashboard/ListPet";
import UserDashboard from "./pages/dashboard/user/Index"
import AddPetDashboard from "./pages/dashboard/AddPet";
import EditPetDashboard from "./pages/dashboard/EditPet";
import ProsesPetDashboard from "./pages/dashboard/ProsesPet";
import ApprovePetDashboard from "./pages/dashboard/ApprovePet";

function App() {
return (
<>

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/admin/login" element={<AdminLogin />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/pet" element={<ListPet />}/>
            <Route path="/pet/detail/:id" element={<DetailPet/>}/>
            <Route path="/user" element={<UserDashboard/>}/>
            <Route path="/dashboard" element={<HomeDashboard/>}/>
            <Route path="/dashboard/pet" element={<ListPetDashboard/>}/>
            <Route path="/dashboard/user" element={<Users/>}/>
            <Route path="/dashboard/pet/add" element={<AddPetDashboard/>}/>
            <Route path="/dashboard/pet/edit/:id" element={<EditPetDashboard/>}/>
            <Route path="/dashboard/pet/proses" element={<ProsesPetDashboard/>}/>
            <Route path="/dashboard/pet/approve" element={<ApprovePetDashboard/>}/>
        </Routes>
    </BrowserRouter>
</>
);
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeAdmin from "./pages/admin/Home";
import HomeUser from "./pages/common/Home/Home";
import LoginPage from "./pages/common/LoginPage/LoginPage";
import TicketManagement from "./pages/admin/TicketManagement";
import DeviceManagement from "./pages/admin/DeviceManagement";

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/admin/home" element={<HomeAdmin />}></Route>
            <Route path="/" element={<HomeUser />}></Route>
            <Route path="/admin/ticket" element={<TicketManagement />}></Route>
            <Route path="/admin/device" element={<DeviceManagement />}></Route>
         </Routes>
      </Router>
   );
}

export default App;

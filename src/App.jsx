import { Route, Routes } from "react-router-dom";
import "@tremor/react/dist/esm/tremor.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import NewAdmission from "./pages/NewAdmission/NewAdmission";
import AllStudents from "./pages/AllStudents/AllStudents";
import Attendance from "./pages/Attendance/Attendance";

function App() {
  return (
    <div className="flex">
      <aside className="max-w-[64px] xl:w-full xl:max-w-[280px]">
        <Sidebar />
      </aside>
      <div className="w-full overflow-auto">
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/newadmission" element={<NewAdmission />} />
          <Route exact path="/allstudents" element={<AllStudents />} />
          <Route exact path="/attendance" element={<Attendance />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

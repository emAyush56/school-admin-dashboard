import { Route, Routes } from "react-router-dom";
import "@tremor/react/dist/esm/tremor.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import NewAdmission from "./pages/NewAdmission/NewAdmission";
import BulkAdmit from "./pages/NewAdmission/BulkAdmit/BulkAdmit";
import AllStudents from "./pages/AllStudents/AllStudents";
import Attendance from "./pages/Attendance/Attendance";
import SingleStudent from "./pages/AllStudents/SingleStudent";
import StudentUpdate from "./pages/AllStudents/StudentUpdate/StudentUpdate";

function App() {
  return (
    <div className="flex">
      <aside className="max-w-[64px] xl:w-full xl:max-w-[280px]">
        <Sidebar />
      </aside>
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/newadmission">
            <Route exact index element={<NewAdmission />} />
            <Route exact path="bulkadmit" element={<BulkAdmit />} />
          </Route>
          <Route exact path="/allstudents" element={<AllStudents />} />
          <Route
            exact
            path="/allstudents/:studentid"
            element={<SingleStudent />}
          />
          <Route exact path="/attendance" element={<Attendance />} />
          <Route exact path="/update" element={<StudentUpdate />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

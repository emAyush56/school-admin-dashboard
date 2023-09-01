import studentData from "../../data/allStudents.json";
import {
  Badge,
  Button,
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  MultiSelectBox,
  MultiSelectBoxItem,
} from "@tremor/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const AllStudents = () => {
  const [selectedNames, setSelectedNames] = useState([]);

  const isStudentSelected = (student) =>
    selectedNames.includes(student.studentId) || selectedNames.length === 0;

  return (
    <div className="h-full w-full bg-gray-50 px-3 py-5 xl:px-20 xl:py-12">
      <header className="ie-as-header flex w-full justify-between">
        <h3 className="text-xl font-semibold text-gray-900">All Students</h3>
        <div className="flex gap-4">
          <button className="hidden h-9 rounded border border-gray-300 bg-white px-8 text-base font-medium text-gray-700 transition-all hover:border-gray-800 hover:bg-gray-800 hover:text-white sm:block">
            Export
          </button>
        </div>
      </header>
      <div className="ie-as-content mt-5">
        <Card shadow={false}>
          <MultiSelectBox
            onValueChange={(value) => setSelectedNames(value)}
            placeholder="Select by ID..."
            maxWidth="max-w-xs"
          >
            {studentData.map((item) => (
              <MultiSelectBoxItem
                key={item.studentId}
                value={item.studentId}
                text={
                  item.studentId +
                  " : " +
                  item.studentFirstName +
                  " " +
                  item.studentMiddleLastName
                }
              />
            ))}
          </MultiSelectBox>
          <Table marginTop="mt-6">
            <TableHead>
              <TableRow>
                <TableHeaderCell>Student ID</TableHeaderCell>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Class / Section</TableHeaderCell>
                <TableHeaderCell>Date of Admission</TableHeaderCell>
                <TableHeaderCell>Guardian's Name</TableHeaderCell>
                <TableHeaderCell>Guardian's Phone</TableHeaderCell>
                <TableHeaderCell>Actions</TableHeaderCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {studentData
                .filter((item) => isStudentSelected(item))
                .map((item) => (
                  <TableRow key={item.studentId}>
                    <TableCell>
                      <Badge text={item.studentId} size="xs" color="sky" />
                    </TableCell>
                    <TableCell>
                      {item.studentFirstName + " " + item.studentMiddleLastName}
                    </TableCell>
                    <TableCell>
                      {item.classEnrolled + " / " + item.sectionAssigned}
                    </TableCell>
                    <TableCell>{item.dateOfAdmission}</TableCell>
                    <TableCell>{item.guardianFullName}</TableCell>
                    <TableCell>{item.guardianPhone}</TableCell>
                    <TableCell>
                      <Link
                        to={item.studentId.toLowerCase()}
                        className="rounded-full bg-green-200 py-[3px] px-3 text-xs text-green-900 transition-all hover:bg-green-100"
                      >
                        View
                      </Link>
                      <Link
                        to="#"
                        className="ml-3 rounded-full bg-orange-200 py-[3px] px-3 text-xs text-orange-900 transition-all hover:bg-orange-100"
                      >
                        Edit
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default AllStudents;

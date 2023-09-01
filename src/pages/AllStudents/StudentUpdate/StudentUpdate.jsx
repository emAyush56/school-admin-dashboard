import React, { useRef, useState } from "react";
import AcademicDetailsForm from "./sc_forms/AcademicDetailsForm";
import GuardianDetailsForm from "./sc_forms/GuardianDetailsForm";
import IndividualDetailsForm from "./sc_forms/IndividualDetailsForm";
import PreviousSchoolDetailsForm from "./sc_forms/PreviousSchoolDetailsForm";

function UpdateSpan() {
  return <span className="text-gray-300">N/A</span>;
}

function StudentUpdate() {
  const [newStudent, setNewStudent] = useState({
    studentFirstName: "",
    studentMiddleLastName: "",
    studentDateOfBirth: "",
    studentReligion: "",
    studentCaste: "",
    studentEmail: "",
    studentSex: "",
    studentBloodGroup: "",
    fatherFullName: "",
    motherFullName: "",
    addressStreet: "",
    addressCity: "",
    addressState: "",
    addressZipCode: "",
    studentId: "SVPSAS230001",
    dateOfAdmission: "",
    classEnrolled: "",
    sectionAssigned: "",
    guardianFullName: "",
    guardianEmail: "",
    guardianPhone: "",
    guardianWhatsApp: "",
    previousSchoolName: "",
    previousSchoolAddress: "",
  });

  const updateButtonRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
    alert("Form Submitted");
    setNewStudent({
      studentFirstName: "",
      studentMiddleLastName: "",
      studentDateOfBirth: "",
      studentReligion: "",
      studentCaste: "",
      studentEmail: "",
      studentSex: "",
      studentBloodGroup: "",
      fatherFullName: "",
      motherFullName: "",
      addressStreet: "",
      addressCity: "",
      addressState: "",
      addressZipCode: "",
      studentId: "SVPSAS230001",
      dateOfAdmission: "",
      classEnrolled: "",
      sectionAssigned: "",
      guardianFullName: "",
      guardianEmail: "",
      guardianPhone: "",
      guardianWhatsApp: "",
      previousSchoolName: "",
      previousSchoolAddress: "",
    });
  };

  const updateAlt = () => {
    updateButtonRef.current.click();
  };

  return (
    <div className="w-full bg-gray-50 px-3 py-5 xl:px-20 xl:py-12">
      <header className="ie-na-header flex w-full items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Update Details</h3>
        <div className="flex gap-4">
          <button
            onClick={updateAlt}
            className="h-9 rounded border border-blue-700 bg-blue-700 px-8 text-base font-medium text-white transition-all hover:border-blue-800 hover:bg-blue-800"
          >
            Update
          </button>
        </div>
      </header>
      <div className="ie-na-content mt-5 flex w-full flex-col gap-10 2xl:flex-row">
        <form
          onSubmit={submitFormHandler}
          className="flex w-full flex-col items-end gap-10 2xl:max-w-5xl"
        >
          <div className="IndividualDetails w-full rounded-md border border-gray-200 bg-white">
            <div className="border-b border-gray-200 py-4 px-6">
              <span className="text-lg font-medium">Individual Details</span>
            </div>
            <IndividualDetailsForm
              newStudent={newStudent}
              setNewStudent={setNewStudent}
            />
          </div>

          <div className="personalDetails w-full rounded-md border border-gray-200 bg-white">
            <div className="border-b border-gray-200 py-4 px-6">
              <span className="text-lg font-medium">Academic Details</span>
            </div>
            <AcademicDetailsForm
              newStudent={newStudent}
              setNewStudent={setNewStudent}
            />
          </div>

          <div className="personalDetails w-full rounded-md border border-gray-200 bg-white">
            <div className="border-b border-gray-200 py-4 px-6">
              <span className="text-lg font-medium">Guardian Details</span>
            </div>
            <GuardianDetailsForm
              newStudent={newStudent}
              setNewStudent={setNewStudent}
            />
          </div>

          <div
            id="previous-school"
            className="personalDetails w-full rounded-md border border-gray-200 bg-white"
          >
            <div className="border-b border-gray-200 py-4 px-6">
              <span className="text-lg font-medium">
                Previous School Details
              </span>
            </div>
            <PreviousSchoolDetailsForm
              newStudent={newStudent}
              setNewStudent={setNewStudent}
            />
          </div>
          <button
            ref={updateButtonRef}
            type="submit"
            className="rounded border border-blue-700 bg-blue-700 px-10 py-2 text-base font-medium text-white transition-all hover:border-blue-800 hover:bg-blue-800"
          >
            Admit
          </button>
        </form>

        <div className="ie-nc-summary h-fit flex-1 rounded-md border border-gray-200 bg-white py-4 px-6">
          <span className="summaryTitle text-lg font-medium">Summary</span>
          <div className="summaryInfo mt-3 rounded-md bg-gray-50 p-5">
            <span className="text block w-fit rounded-full bg-gray-900 px-3 py-1 text-xs text-white">
              {newStudent.studentId}
            </span>
            <span className="mt-2 block whitespace-normal text-3xl font-semibold text-gray-900">
              {newStudent.studentFirstName != "" ? (
                newStudent.studentFirstName +
                " " +
                newStudent.studentMiddleLastName
              ) : (
                <UpdateSpan />
              )}
            </span>
            <div className="mt-2 text-sm font-medium text-gray-700">
              <span className="font-semibold">Class Enrolled: </span>
              <span>
                {newStudent.classEnrolled != "" ? (
                  newStudent.classEnrolled
                ) : (
                  <UpdateSpan />
                )}
              </span>
            </div>
            <div className="mt-2 text-sm font-medium text-gray-700">
              <span className="font-semibold">Section Assigned: </span>
              <span>
                {newStudent.sectionAssigned != "" ? (
                  newStudent.sectionAssigned
                ) : (
                  <UpdateSpan />
                )}
              </span>
            </div>
            <div className="mt-2 text-sm font-medium text-gray-700">
              <span className="font-semibold">Blood Group: </span>
              <span>
                {newStudent.studentBloodGroup != "" ? (
                  newStudent.studentBloodGroup
                ) : (
                  <UpdateSpan />
                )}
              </span>
            </div>
            <div className="mt-2 text-sm font-medium text-gray-700">
              <span className="font-semibold">Date Of Birth: </span>
              <span>
                {newStudent.studentDateOfBirth != "" ? (
                  newStudent.studentDateOfBirth
                ) : (
                  <UpdateSpan />
                )}
              </span>
            </div>
            <div className="mt-2 text-sm font-medium text-gray-700">
              <span className="font-semibold">Address: </span>
              <span>
                {newStudent.addressStreet != "" ? (
                  newStudent.addressStreet
                ) : (
                  <UpdateSpan />
                )}
              </span>
            </div>
            <div className="mt-2 text-sm font-medium text-gray-700">
              <span className="font-semibold">Guardian's Name: </span>
              <span>
                {newStudent.guardianFullName != "" ? (
                  newStudent.guardianFullName
                ) : (
                  <UpdateSpan />
                )}
              </span>
            </div>
            <div className="mt-2 text-sm font-medium text-gray-700">
              <span className="font-semibold">Phone: </span>
              <span>
                {newStudent.guardianPhone != "" ? (
                  newStudent.guardianPhone
                ) : (
                  <UpdateSpan />
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentUpdate;

import UtilCombobox from "./util/UtilCombobox";

const allSections = [
  { id: 1, name: "NIL" },
  { id: 2, name: "A" },
  { id: 3, name: "B" },
  { id: 4, name: "C" },
  { id: 5, name: "D" },
];

const allClasses = [
  { id: 1, name: "Nursery" },
  { id: 2, name: "LKG" },
  { id: 3, name: "UKG" },
  { id: 4, name: "1" },
  { id: 5, name: "2" },
  { id: 6, name: "3" },
  { id: 7, name: "4" },
  { id: 8, name: "5" },
];

function AcademicDetailsForm({ newStudent, setNewStudent }) {
  const inputChangeHandler = (event) => {
    setNewStudent((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  return (
    <>
      <div className="px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-2">
            <label
              htmlFor="dateOfAdmission"
              className="block text-sm font-medium text-gray-600"
            >
              Date of admission
            </label>
            <input
              type="date"
              name="dateOfAdmission"
              id="dateOfAdmission"
              value={newStudent.dateOfAdmission}
              onChange={inputChangeHandler}
              className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-2">
            <label
              htmlFor="classEnrolled"
              className="block text-sm font-medium text-gray-600"
            >
              Class enrolled
            </label>
            <input
              type="text"
              name="classEnrolled"
              id="classEnrolled"
              value={newStudent.classEnrolled}
              onChange={inputChangeHandler}
              className="bg-gray mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-2">
            <label
              htmlFor="sectionAssigned"
              className="block text-sm font-medium text-gray-600"
            >
              Section assigned
            </label>
            <input
              type="text"
              name="sectionAssigned"
              id="sectionAssigned"
              value={newStudent.sectionAssigned}
              onChange={inputChangeHandler}
              className="bg-gray mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AcademicDetailsForm;

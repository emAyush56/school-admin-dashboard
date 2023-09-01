function IndividualDetailsForm({ newStudent, setNewStudent }) {
  const inputChangeHandler = (event) => {
    setNewStudent((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  return (
    <>
      <div className="overflow-hidden sm:rounded">
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="studentFirstName"
                className="block text-sm font-medium text-gray-600"
              >
                First name
              </label>
              <input
                autoFocus
                required
                type="text"
                name="studentFirstName"
                id="studentFirstName"
                value={newStudent.studentFirstName}
                onChange={inputChangeHandler}
                className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="studentMiddleLastName"
                className="block text-sm font-medium text-gray-600"
              >
                Middle & Last name
              </label>
              <input
                type="text"
                name="studentMiddleLastName"
                id="studentMiddleLastName"
                value={newStudent.studentMiddleLastName}
                onChange={inputChangeHandler}
                className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <label
                htmlFor="studentDateOfBirth"
                className="block text-sm font-medium text-gray-600"
              >
                Date of birth
              </label>
              <input
                type="date"
                name="studentDateOfBirth"
                id="studentDateOfBirth"
                value={newStudent.studentDateOfBirth}
                onChange={inputChangeHandler}
                className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label
                htmlFor="studentReligion"
                className="block text-sm font-medium text-gray-600"
              >
                Religion
              </label>
              <input
                type="text"
                name="studentReligion"
                id="studentReligion"
                value={newStudent.studentReligion}
                onChange={inputChangeHandler}
                className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label
                htmlFor="studentCaste"
                className="block text-sm font-medium text-gray-600"
              >
                Caste
              </label>
              <input
                type="text"
                name="studentCaste"
                id="studentCaste"
                value={newStudent.studentCaste}
                onChange={inputChangeHandler}
                className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-2">
              <label
                htmlFor="studentEmail"
                className="block text-sm font-medium text-gray-600"
              >
                Student email
              </label>
              <input
                type="text"
                name="studentEmail"
                id="studentEmail"
                value={newStudent.studentEmail}
                onChange={inputChangeHandler}
                className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label
                htmlFor="studentSex"
                className="block text-sm font-medium text-gray-600"
              >
                Sex
              </label>
              <input
                type="text"
                name="studentSex"
                id="studentSex"
                value={newStudent.studentSex}
                onChange={inputChangeHandler}
                className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label
                htmlFor="studentBloodGroup"
                className="block text-sm font-medium text-gray-600"
              >
                Blood Group
              </label>
              <input
                type="text"
                name="studentBloodGroup"
                id="studentBloodGroup"
                value={newStudent.studentBloodGroup}
                onChange={inputChangeHandler}
                className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="fatherFullName"
                className="block text-sm font-medium text-gray-600"
              >
                Father's full name
              </label>
              <input
                type="text"
                name="fatherFullName"
                id="fatherFullName"
                value={newStudent.fatherFullName}
                onChange={inputChangeHandler}
                className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="motherFullName"
                className="block text-sm font-medium text-gray-600"
              >
                Mother's full name
              </label>
              <input
                type="text"
                name="motherFullName"
                id="motherFullName"
                value={newStudent.motherFullName}
                onChange={inputChangeHandler}
                className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="addressStreet"
                className="block text-sm font-medium text-gray-600"
              >
                Street address
              </label>
              <input
                type="text"
                name="addressStreet"
                id="addressStreet"
                value={newStudent.addressStreet}
                onChange={inputChangeHandler}
                className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <label
                htmlFor="addressCity"
                className="block text-sm font-medium text-gray-600"
              >
                City
              </label>
              <input
                type="text"
                name="addressCity"
                id="addressCity"
                value={newStudent.addressCity}
                onChange={inputChangeHandler}
                className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label
                htmlFor="addressState"
                className="block text-sm font-medium text-gray-600"
              >
                State / Province
              </label>
              <input
                required
                type="text"
                name="addressState"
                id="addressState"
                value={newStudent.addressState}
                onChange={inputChangeHandler}
                className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label
                htmlFor="addressZipCode"
                className="block text-sm font-medium text-gray-600"
              >
                ZIP / Postal code
              </label>
              <input
                type="text"
                name="addressZipCode"
                id="addressZipCode"
                value={newStudent.addressZipCode}
                onChange={inputChangeHandler}
                className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndividualDetailsForm;

import { useState } from "react";

function GuardianDetailsForm({ newStudent, setNewStudent }) {
  const inputChangeHandler = (event) => {
    setNewStudent((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleWhatsAppCheckbox = (event) => {
    if (event.target.checked) {
      setNewStudent((prev) => {
        return { ...prev, [event.target.name]: event.target.value };
      });
    } else {
      setNewStudent((prev) => {
        return { ...prev, guardianWhatsApp: "" };
      });
    }
  };

  const handleGuardianNameRadio = (event) => {
    if (event.target.checked) {
      setNewStudent((prev) => {
        return { ...newStudent, [event.target.name]: event.target.value };
      });
    }
  };

  return (
    <>
      <div className="overflow-hidden sm:rounded">
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="guardianFullName"
                className="block text-sm font-medium text-gray-600"
              >
                Guardian's full name
              </label>
              <input
                required
                type="text"
                name="guardianFullName"
                id="guardianFullName"
                value={newStudent.guardianFullName}
                onChange={inputChangeHandler}
                className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm"
              />
              <div className="mt-2 flex items-center">
                <input
                  id="sameAsFather"
                  name="guardianFullName"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-blue-700 focus:ring-blue-700"
                  value={newStudent.fatherFullName}
                  onChange={handleGuardianNameRadio}
                />
                <label
                  htmlFor="sameAsFather"
                  className="ml-2 block text-xs text-gray-500 sm:text-sm"
                >
                  Same as father
                </label>
                <input
                  id="sameAsMother"
                  name="guardianFullName"
                  type="radio"
                  className="ml-3 h-4 w-4 border-gray-300 text-blue-700 focus:ring-blue-700"
                  value={newStudent.motherFullName}
                  onChange={handleGuardianNameRadio}
                />
                <label
                  htmlFor="sameAsMother"
                  className="ml-2 block text-xs text-gray-500 sm:text-sm"
                >
                  Same as mother
                </label>
              </div>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="guardianEmail"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                name="guardianEmail"
                id="guardianEmail"
                value={newStudent.guardianEmail}
                onChange={inputChangeHandler}
                className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="guardianPhone"
                className="block text-sm font-medium text-gray-600"
              >
                Phone
              </label>
              <input
                type="tel"
                name="guardianPhone"
                id="guardianPhone"
                value={newStudent.guardianPhone}
                onChange={inputChangeHandler}
                className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="guardianWhatsApp"
                className="block text-sm font-medium text-gray-600"
              >
                WhatsApp
              </label>
              <input
                type="tel"
                name="guardianWhatsApp"
                id="guardianWhatsApp"
                value={newStudent.guardianWhatsApp}
                onChange={inputChangeHandler}
                className="mt-2 block w-full rounded border-gray-300 text-gray-900 transition ease-in focus:border-gray-900 focus:outline-none focus:ring-0 sm:text-sm"
              />
              <div className="mt-2 flex items-center">
                <div className="flex h-5 items-center">
                  <input
                    id="guardianWhatsAppChecked"
                    name="guardianWhatsApp"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-700 focus:ring-blue-700"
                    value={newStudent.guardianPhone}
                    onChange={handleWhatsAppCheckbox}
                  />
                </div>
                <div className="ml-2 text-xs sm:text-sm">
                  <label
                    htmlFor="guardianWhatsAppChecked"
                    className=" text-gray-500"
                  >
                    Same as phone number
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GuardianDetailsForm;

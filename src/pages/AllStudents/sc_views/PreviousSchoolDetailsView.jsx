import React from "react";

function PreviousSchoolDetailsView() {
  return (
    <div className="mb-5 overflow-hidden rounded-md border border-gray-200">
      <div className="bg-white px-4 py-4 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Previous School Details
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">School name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {singleStudent.previousSchoolName}
            </dd>
          </div>
          <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {singleStudent.previousSchoolAddress}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default PreviousSchoolDetailsView;

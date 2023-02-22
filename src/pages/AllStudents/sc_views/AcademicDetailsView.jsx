import React from "react";

function AcademicDetailsView() {
  return (
    <div className="mb-5 overflow-hidden rounded-md border border-gray-200">
      <div className="bg-white px-4 py-4 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Academic Details
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Class</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {singleStudent.classEnrolled}
            </dd>
          </div>
          <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Section</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {singleStudent.sectionAssigned}
            </dd>
          </div>
          <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Date of admission
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {singleStudent.dateOfAdmission}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default AcademicDetailsView;

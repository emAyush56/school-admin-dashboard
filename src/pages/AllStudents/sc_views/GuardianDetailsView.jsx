import React from "react";

function GuardianDetailsView() {
  return (
    <div className="mb-5 overflow-hidden rounded-md border border-gray-200">
      <div className="bg-white px-4 py-4 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Guardian Details
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {singleStudent.guardianFullName}
            </dd>
          </div>
          <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {singleStudent.guardianEmail}
            </dd>
          </div>
          <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Phone</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {singleStudent.guardianPhone}
            </dd>
          </div>
          <div className="border-b border-gray-200 bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">WhatsApp</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {singleStudent.guardianWhatsApp}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default GuardianDetailsView;

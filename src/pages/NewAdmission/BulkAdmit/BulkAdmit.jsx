import React from "react";

function BulkAdmit() {
  return (
    <div className="h-full w-full bg-gray-50 px-3 py-5 xl:px-20 xl:py-12">
      <header className="ie-na-header flex w-full items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Bulk Admit</h3>
      </header>
      <div className="ie-na-content mt-5 flex w-full flex-col gap-4">
        <div>Upload a CSV file to admit students in bulk.</div>
        <input type="file" accept=".csv" />
        <button className="mt-4 h-9 w-fit cursor-not-allowed rounded border border-blue-700/20 bg-blue-700/70 px-8 text-base font-medium text-white transition-all">
          Bulk Admit
        </button>
      </div>
    </div>
  );
}

export default BulkAdmit;

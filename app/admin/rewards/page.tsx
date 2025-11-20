"use client";

import React, { useState } from "react";
import Sidebar from "@/app/_components/sidebar";
import { useRouter } from "next/navigation";
import { navigateData } from "@/app/admin/_components/navigatedata";

// Sample students data
const studentsData = [
  {
    studentId: "123456",
    studentName: "Nguyen Van A",
    participationPercent: 100,
    outcomeStatus: "Good",
  },
  {
    studentId: "123434",
    studentName: "Nguyen Van B",
    participationPercent: 70,
    outcomeStatus: "Medium",
  },
];

export default function AdminRewardsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [fromDate, setFromDate] = useState("2025-04-01");
  const [toDate, setToDate] = useState("2025-04-01");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;
  const totalItems = studentsData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleApplyFilters = () => {
    console.log("Applying filters", {
      searchQuery,
      statusFilter,
      fromDate,
      toDate,
    });
  };

  const handleReward = (studentId: string) => {
    console.log("Reward student", studentId);
    // Handle reward action
  };

  const getParticipationBadgeClass = (percent: number) => {
    if (percent >= 90) return "bg-green-100 text-green-700";
    if (percent >= 70) return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700";
  };

  const getOutcomeBadgeClass = (status: string) => {
    if (status === "Good") return "bg-green-100 text-green-700";
    if (status === "Medium") return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700";
  };

  const paginatedData = studentsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Create uppercase navigation data for sidebar
  const uppercaseNavigateData = navigateData.map((item) => ({
    ...item,
    label: item.label.toUpperCase(),
  }));

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        chosenIndex={2}
        navigateData={uppercaseNavigateData}
        logoutLabel="LOG OUT"
      />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="px-8 py-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">
              OFFICE & DEPARTMENT CENTER
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-gray-600">
                OFFICE/DEPARTMENT CHAIR NAME
              </span>
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-8">
          {/* Student Filters Section */}
          <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Student Filters
            </h2>
            <div className="space-y-4">
              {/* Search Bar */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search Report/Student ID
                </label>
                <input
                  type="text"
                  placeholder="Enter Report ID, Student ID, or Keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Filter Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Filter by Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Filter by Status (Checked-in, Absent)
                  </label>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>All Statuses</option>
                    <option>Checked-in</option>
                    <option>Absent</option>
                  </select>
                </div>

                {/* Filter by Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Filter by time
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="date"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="date"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Apply Filters Button */}
                <div className="flex items-end">
                  <button
                    onClick={handleApplyFilters}
                    className="w-full bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 font-medium"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Students List Section */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Students List
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="text-left py-3 px-4 font-semibold">
                      STUDENT ID
                    </th>
                    <th className="text-left py-3 px-4 font-semibold">
                      STUDENT NAME
                    </th>
                    <th className="text-left py-3 px-4 font-semibold">
                      PARTICIPATION PERCENT
                    </th>
                    <th className="text-left py-3 px-4 font-semibold">
                      OUTCOME STATUS
                    </th>
                    <th className="text-left py-3 px-4 font-semibold">
                      ACTIONS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((student, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-4 px-4 text-gray-700">
                        {student.studentId}
                      </td>
                      <td className="py-4 px-4 text-gray-700">
                        {student.studentName}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getParticipationBadgeClass(
                            student.participationPercent
                          )}`}
                        >
                          {student.participationPercent}%
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getOutcomeBadgeClass(
                            student.outcomeStatus
                          )}`}
                        >
                          {student.outcomeStatus}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <button
                          onClick={() => handleReward(student.studentId)}
                          className="text-blue-600 hover:text-blue-800 underline text-sm"
                        >
                          Reward
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="mt-6 flex justify-end items-center gap-4">
              <span className="text-sm text-gray-600">
                Showing {(currentPage - 1) * itemsPerPage + 1} -{" "}
                {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}{" "}
                reports
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  &lt; Prev
                </button>
                <button
                  className="px-4 py-2 bg-blue-900 text-white rounded-md text-sm font-medium"
                >
                  {currentPage}
                </button>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  Next &gt;
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}


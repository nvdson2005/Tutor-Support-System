"use client";

import React, { useState } from "react";
import Sidebar from "@/app/_components/sidebar";
import { navigateData } from "@/app/admin/_components/navigatedata";
import TopBar from "@/app/_components/topbar";
// 1. Mock Data (Translated to English)
const studentsData = [
  {
    id: "2300015",
    name: "Phan Van An",
    dept: "Computer Science",
    logins: 75,
    courses: 5,
    progress: 92,
    lastActive: "25/10/2024",
    statusColor: "indigo",
  },
  {
    id: "2300016",
    name: "Nguyen Thanh Bao",
    dept: "Mechanical Engineering",
    logins: 68,
    courses: 4,
    progress: 45,
    lastActive: "20/10/2024",
    statusColor: "red",
  },
  {
    id: "2300017",
    name: "Do Thanh Cong",
    dept: "Civil Engineering",
    logins: 150,
    courses: 7,
    progress: 88,
    lastActive: "26/10/2024",
    statusColor: "emerald",
  },
  {
    id: "2300018",
    name: "Le Thi Duyen",
    dept: "Computer Science",
    logins: 90,
    courses: 6,
    progress: 75,
    lastActive: "24/10/2024",
    statusColor: "indigo",
  },
  {
    id: "2300019",
    name: "Tran Van Em",
    dept: "Electrical - Electronic",
    logins: 45,
    courses: 3,
    progress: 30,
    lastActive: "15/10/2024",
    statusColor: "red",
  },
  {
    id: "2300020",
    name: "Hoang Thi Phuong",
    dept: "Mechanical Engineering",
    logins: 120,
    courses: 8,
    progress: 95,
    lastActive: "27/10/2024",
    statusColor: "emerald",
  },
  {
    id: "2300021",
    name: "Vu Van Hung",
    dept: "Civil Engineering",
    logins: 80,
    courses: 5,
    progress: 60,
    lastActive: "22/10/2024",
    statusColor: "indigo",
  },
  {
    id: "2300022",
    name: "Pham Thi Lan",
    dept: "Computer Science",
    logins: 55,
    courses: 4,
    progress: 40,
    lastActive: "18/10/2024",
    statusColor: "red",
  },
  {
    id: "2300023",
    name: "Dang Van Long",
    dept: "Electrical - Electronic",
    logins: 130,
    courses: 7,
    progress: 85,
    lastActive: "26/10/2024",
    statusColor: "emerald",
  },
];
const studentPerPage = 5;

export default function StudentEngagementPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sliceStudents, setSliceStudents] = useState(
    studentsData.slice(0, studentPerPage)
  );
  const totalPages = Math.ceil(studentsData.length / studentPerPage);
  const [semester, setSemester] = useState("2024 - 1");
  const [department, setDepartment] = useState("All");

  const filteredStudentsBySearch = (query: string) => {
    if (!query) {
      setSliceStudents(studentsData.slice(0, studentPerPage));
      return
    }
    const filtered = studentsData.filter((student) =>
      student.name.toLowerCase().includes(query.toLowerCase()) || student.id.includes(query)
  );
    setSliceStudents(filtered.slice(0, studentPerPage));
  };

  const filteredStudentsByDept = (dept: string) => {
    setDepartment(dept);
    if (dept === "All") {
      setSliceStudents(studentsData.slice(0, studentPerPage));
      return;
    }
    const filtered = studentsData.filter(
      (student) => student.dept === dept
    );
    setSliceStudents(filtered.slice(0, studentPerPage));
  };

  const handleExport = () => {
    alert("Exporting student data to CSV...");
  };

  // ... (Các phần imports và logic giữ nguyên)

  return (
    <div className="flex h-screen bg-[#f4f7f9] font-sans overflow-hidden">
      {/* 1. Sidebar giữ nguyên */}
      <Sidebar chosenIndex={1} navigateData={navigateData} />

      {/* 2. Wrapper cho toàn bộ phần bên phải Sidebar */}
      <div className="flex-1 flex flex-col h-screen">
        
        {/* TopBar nằm ở đây: Sẽ sát trên cùng và sát Sidebar */}
        <TopBar username="Admin" dashboardContent="Reports Engagement" />

        {/* 3. Khu vực nội dung chính: Có padding và thanh cuộn riêng */}
        <main className="flex-1 p-8 overflow-y-auto">
          
          {/* Filters & Controls */}
          <section className="bg-white p-6 rounded-xl shadow-sm mb-8">
             {/* ... (Giữ nguyên nội dung bên trong) ... */}
             <div className="flex flex-col md:flex-row justify-between items-end md:items-center space-y-4 md:space-y-0 md:space-x-4">
                {/* Main Filters */}
                <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 w-full md:w-auto">
                  {/* Semester Filter */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="semester"
                      className="text-sm font-medium text-gray-500 mb-1"
                    >
                      Semester
                    </label>
                    <select
                      id="semester"
                      value={semester}
                      onChange={(e) => setSemester(e.target.value)}
                      className="p-2.5 rounded-lg border border-[#e0e7ff] bg-[#f9faff] text-indigo-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-full md:w-48 outline-none"
                    >
                      <option value="2024 - 1">2024 - 1 (Selected)</option>
                      <option value="2023 - 2">2023 - 2</option>
                      <option value="2023 - 1">2023 - 1</option>
                    </select>
                  </div>

                  {/* Department Filter */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="department"
                      className="text-sm font-medium text-gray-500 mb-1"
                    >
                      Faculty/Department
                    </label>
                    <select
                      id="department"
                      value={department}
                      onChange={(e) => 
                        filteredStudentsByDept(e.target.value)
                      }
                      className="p-2.5 rounded-lg border border-[#e0e7ff] bg-[#f9faff] text-indigo-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-full md:w-64 outline-none"
                    >
                      <option value="All">All Faculties</option>
                      <option value="Computer Science">Computer Science & Eng.</option>
                      <option value="Mechanical Engineering">Mechanical Engineering</option>
                      <option value="Civil Engineering">Civil Engineering</option>
                      <option value="Electrical - Electronic">Electrical - Electronic Eng.</option>
                    </select>
                  </div>
                </div>

                {/* Export Button */}
                <button
                  onClick={handleExport}
                  className="bg-[#4CAF50] hover:bg-[#45a049] text-white font-semibold py-2.5 px-6 rounded-lg shadow-md transition-colors duration-200 w-full md:w-auto"
                >
                  Export CSV
                </button>
              </div>
          </section>

          {/* Summary KPIs */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-indigo-500">
              <p className="text-sm font-medium text-gray-500">Active Students</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">2,450</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-emerald-500">
              <p className="text-sm font-medium text-gray-500">
                Avg. Active Time
              </p>
              <p className="text-3xl font-bold text-gray-800 mt-1">18.5 hours</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-yellow-500">
              <p className="text-sm font-medium text-gray-500">
                Avg. Completion Rate
              </p>
              <p className="text-3xl font-bold text-gray-800 mt-1">82%</p>
            </div>
          </section>

          {/* Detailed Data Table */}
          <section className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Student Engagement Details
            </h2>

            {/* Search Bar */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search by Student ID or Name..."
                onChange={(e) => filteredStudentsBySearch(e.target.value)}
                className="text-black p-2 rounded-lg border border-[#e0e7ff] bg-[#f9faff] shadow-sm w-full md:w-1/3 outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#e0e7ff]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-indigo-800 uppercase tracking-wider">
                      Student ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-indigo-800 uppercase tracking-wider">
                      Full Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-indigo-800 uppercase tracking-wider">
                      Faculty
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-bold text-indigo-800 uppercase tracking-wider">
                      Total Logins
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-bold text-indigo-800 uppercase tracking-wider">
                      Courses
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-bold text-indigo-800 uppercase tracking-wider">
                      Avg. Progress
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-indigo-800 uppercase tracking-wider">
                      Last Active
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100 text-sm text-gray-600">
                  {sliceStudents.map((student, index) => (
                    <tr
                      key={index}
                      className="hover:bg-[#f1f5f9] transition-colors h-12"
                    >
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                        {student.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {student.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {student.dept}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        {student.logins}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        {student.courses}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="w-full flex items-center">
                          <div className="w-24 bg-gray-200 rounded-full h-2.5 mr-2">
                            <div
                              className={`h-2.5 rounded-full ${
                                student.statusColor === "indigo"
                                  ? "bg-indigo-500"
                                  : student.statusColor === "red"
                                  ? "bg-red-500"
                                  : "bg-emerald-500"
                              }`}
                              style={{ width: `${student.progress}%` }}
                            ></div>
                          </div>
                          <span
                            className={`text-xs font-semibold ${
                              student.statusColor === "indigo"
                                ? "text-indigo-700"
                                : student.statusColor === "red"
                                ? "text-red-700"
                                : "text-emerald-700"
                            }`}
                          >
                            {student.progress}%
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {student.lastActive}
                      </td>
                    </tr>
                  ))}
                  {
                    sliceStudents.length - studentPerPage < 0 && Array.from({ length: studentPerPage - sliceStudents.length }).map((_, idx) => (
                      <tr key={`empty-${idx}`} className="h-12">
                        <td colSpan={7} className="py-4"></td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
              <span>
                Showing {sliceStudents.length} of {studentsData.length} results
              </span>
              <div className="flex space-x-2">
                <button
                  className="px-3 py-1 border rounded-lg hover:bg-gray-100 disabled:opacity-50"
                  disabled={currentPage === 1}
                  onClick={() => {
                    setCurrentPage(currentPage - 1);
                    setSliceStudents(
                      studentsData.slice(
                        (currentPage - 2) * studentPerPage,
                        (currentPage - 1) * studentPerPage
                      )
                    );
                  }}
                >
                  &lt; Previous
                </button>
                <span className="px-3 py-1 border rounded-lg bg-gray-200">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  className="px-3 py-1 border rounded-lg hover:bg-gray-100"
                  onClick={() => {
                    setCurrentPage(currentPage + 1);
                    setSliceStudents(studentsData.slice(currentPage * studentPerPage, (currentPage + 1) * studentPerPage));
                  }}
                  disabled={currentPage === totalPages}
                >
                  Next &gt;
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )};
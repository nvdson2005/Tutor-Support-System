"use client";

import React, { useState, useMemo } from "react";
import Sidebar from "@/app/_components/sidebar";
import { navigateData } from "../_component/navigatedata";
import TopBar from "@/app/_components/topbar";
// --- MOCK DATA ---

// 1. Dữ liệu Sinh viên (Cập nhật thêm trường 'status' để test bộ lọc)
const studentsData = [
  {
    id: "2300021",
    name: "Le Van C",
    subject: "Calculus 1",
    priority: "High",
    priorityColor: "bg-red-100 text-red-800",
    status: "Unassigned", // Thêm status
  },
  {
    id: "2300025",
    name: "Nguyen Thi D",
    subject: "General Physics",
    priority: "Medium",
    priorityColor: "bg-yellow-100 text-yellow-800",
    status: "Unassigned",
  },
  {
    id: "2300030",
    name: "Pham Van E",
    subject: "Python Programming",
    priority: "Low",
    priorityColor: "bg-green-100 text-green-800",
    status: "Needs Adjustment", // Status khác
  },
  {
    id: "2300035",
    name: "Tran Thi F",
    subject: "Calculus 2",
    priority: "High",
    priorityColor: "bg-red-100 text-red-800",
    status: "Assigned", // Status khác
  },
  {
    id: "2300040",
    name: "Hoang Van G",
    subject: "Python Programming",
    priority: "High",
    priorityColor: "bg-red-100 text-red-800",
    status: "Unassigned",
  },
];

// 2. Tutor Data
const tutorsData = [
  { id: "T001", name: "Dr. Tran Van A (Python, Calculus)" },
  { id: "T005", name: "MSc. Nguyen Thi B (Physics, Mechanics)" },
  { id: "T008", name: "Dr. Le Van C (Algebra, Calculus)" },
];

export default function CoordinatorAssignPage() {
  // --- STATE MANAGEMENT ---
  
  // States cho việc Phân công
  const [selectedStudentIds, setSelectedStudentIds] = useState<string[]>([]);
  const [selectedTutor, setSelectedTutor] = useState("");
  const [schedule, setSchedule] = useState("");
  const [note, setNote] = useState("");

  // States cho Bộ lọc (Filters)
  const [subjectFilter, setSubjectFilter] = useState("All Subjects");
  const [statusFilter, setStatusFilter] = useState("All");

  // --- LOGIC XỬ LÝ ---

  // 1. Logic Lọc dữ liệu (Sử dụng useMemo để tối ưu)
  const filteredStudents = useMemo(() => {
    return studentsData.filter((student) => {
      // Kiểm tra Môn học
      const matchSubject = 
        subjectFilter === "All Subjects" || student.subject === subjectFilter;
      
      // Kiểm tra Trạng thái
      const matchStatus = 
        statusFilter === "All" || student.status === statusFilter;

      return matchSubject && matchStatus;
    });
  }, [subjectFilter, statusFilter]);

  // 2. Handle Checkbox Toggle
  const toggleStudentSelection = (id: string) => {
    setSelectedStudentIds((prev) =>
      prev.includes(id)
        ? prev.filter((studentId) => studentId !== id)
        : [...prev, id]
    );
  };

  // 3. Get names for display
  const getSelectedStudentNames = () => {
    if (selectedStudentIds.length === 0) return "(None selected)";
    return studentsData
      .filter((s) => selectedStudentIds.includes(s.id))
      .map((s) => s.name)
      .join(", ");
  };

  // 4. Handle Form Submission
  const handleAssign = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedStudentIds.length === 0) {
      alert("Please select at least one student.");
      return;
    }
    if (!selectedTutor) {
      alert("Please select a supporting Tutor.");
      return;
    }

    alert(
      `Successfully assigned ${selectedStudentIds.length} students to ${selectedTutor}.`
    );

    // Reset form
    setSelectedStudentIds([]);
    setSelectedTutor("");
    setSchedule("");
    setNote("");
  };

  // 5. Handle Refresh (Reset Filters)
  const handleRefresh = () => {
    setSubjectFilter("All Subjects");
    setStatusFilter("All");
    setSelectedStudentIds([]); // Bỏ chọn luôn sinh viên để tránh nhầm lẫn
  };

  return (
    <div className="flex min-h-screen bg-[#f4f7f9] font-sans">
      <Sidebar chosenIndex={1} navigateData={navigateData} />

      <main className="flex-1 flex flex-col">
        <TopBar username="Coordinator" dashboardContent="Assigning Page" />

        {/* FILTERS SECTION */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-8 mx-8 mt-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Filter Requests
          </h2>
          <div className="flex flex-col md:flex-row flex-wrap gap-4 items-center">
            
            {/* Subject Filter */}
            <div className="flex flex-col flex-1 min-w-[300px]">
              <label className="text-sm font-medium text-gray-500 mb-1">
                Subject/Course
              </label>
              <select
                value={subjectFilter}
                onChange={(e) => setSubjectFilter(e.target.value)}
                className="p-2.5 rounded-lg border border-[#e0e7ff] bg-[#f9faff] text-indigo-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              >
                <option value="All Subjects">All Subjects</option>
                <option value="Python Programming">Python Programming</option>
                <option value="Calculus 1">Calculus 1</option>
                <option value="Calculus 2">Calculus 2</option>
                <option value="General Physics">General Physics</option>
              </select>
            </div>

            {/* Status Filter */}
            <div className="flex flex-col flex-1 min-w-[200px]">
              <label className="text-sm font-medium text-gray-500 mb-1">
                Assignment Status
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="p-2.5 rounded-lg border border-[#e0e7ff] bg-[#f9faff] text-indigo-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              >
                <option value="All">All</option>
                <option value="Unassigned">Unassigned</option>
                <option value="Assigned">Assigned</option>
                <option value="Needs Adjustment">Needs Adjustment</option>
              </select>
            </div>

            {/* Refresh Button */}
            <div className="flex items-end pt-5 md:pt-0">
              <button 
                onClick={handleRefresh}
                className="bg-[#3f51b5] hover:bg-[#5c6bc0] text-white font-semibold py-2.5 px-6 rounded-lg shadow-lg hover:shadow-xl transition-colors"
              >
                Refresh List
              </button>
            </div>
          </div>
        </section>

        {/* DUAL PANEL LAYOUT */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-8 mb-8">
          
          {/* PANEL 1: Waiting List Table */}
          <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Students Needing Support ({filteredStudents.length} Requests)
            </h2>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#e0e7ff]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-indigo-800 uppercase tracking-wider rounded-tl-lg">
                      Student ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-indigo-800 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-indigo-800 uppercase tracking-wider">
                      Requested Subject
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-indigo-800 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-indigo-800 uppercase tracking-wider">
                      Priority
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-bold text-indigo-800 uppercase tracking-wider rounded-tr-lg">
                      Select
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100 text-sm text-gray-600">
                  {filteredStudents.length > 0 ? (
                    filteredStudents.map((student) => (
                      <tr key={student.id} className="hover:bg-[#f1f5f9] transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                          {student.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {student.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {student.subject}
                        </td>
                         <td className="px-6 py-4 whitespace-nowrap">
                           {/* Hiển thị Status Badge */}
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            student.status === "Unassigned" ? "bg-gray-100 text-gray-600" :
                            student.status === "Assigned" ? "bg-green-100 text-green-700" :
                            "bg-orange-100 text-orange-700"
                          }`}>
                            {student.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${student.priorityColor}`}
                          >
                            {student.priority}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <input
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 cursor-pointer"
                            checked={selectedStudentIds.includes(student.id)}
                            onChange={() => toggleStudentSelection(student.id)}
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="text-center py-4 text-gray-500">
                        No students found matching the filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* PANEL 2: Assignment Form */}
          <div className="bg-white rounded-xl shadow-sm p-6 col-span-1 border-t-4 border-indigo-500 h-fit">
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              ASSIGN SUPPORT
            </h2>
            <form onSubmit={handleAssign} className="space-y-4">
              
              {/* Selected Students Display */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Selected Students:
                </label>
                <div className="p-3 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-800 min-h-[50px] break-words">
                  {getSelectedStudentNames()}
                </div>
              </div>

              {/* Tutor Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Supporting Tutor
                </label>
                <select
                  value={selectedTutor}
                  onChange={(e) => setSelectedTutor(e.target.value)}
                  className="block w-full p-2.5 rounded-lg border border-[#e0e7ff] bg-[#f9faff] text-indigo-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                >
                  <option value="">-- Select Tutor (Matched Skill) --</option>
                  {tutorsData.map((tutor) => (
                    <option key={tutor.id} value={tutor.name}>
                      {tutor.id} - {tutor.name}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  Availability: 3/5 slots
                </p>
              </div>

              {/* Schedule Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expected Schedule
                </label>
                <textarea
                  rows={3}
                  value={schedule}
                  onChange={(e) => setSchedule(e.target.value)}
                  placeholder="E.g., Tue (19h-21h), Thu (19h-21h) via Google Meet"
                  className="block w-full p-2.5 rounded-lg border border-[#e0e7ff] bg-[#f9faff] text-indigo-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none"
                ></textarea>
              </div>

              {/* Internal Note */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Internal Note
                </label>
                <input
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="block w-full p-2.5 rounded-lg border border-[#e0e7ff] bg-[#f9faff] text-indigo-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#3f51b5] hover:bg-[#5c6bc0] text-white font-semibold py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-colors mt-4"
              >
                Confirm Assignment
              </button>
            </form>
          </div>
        </section>

      </main>
    </div>
  );
}
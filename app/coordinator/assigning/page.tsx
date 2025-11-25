"use client";

import React, { useState } from "react";
import Sidebar from "@/app/_components/sidebar";
import { navigateData } from "../_component/navigatedata";
// --- MOCK DATA ---

// 1. Navigation Data (Restricted to Dashboard & Assigning as requested)
// const coordinatorNavData = [
//   { label: "DASHBOARD", path: "/coordinator/dashboard" },
//   { label: "ASSIGNING", path: "/coordinator/assigning" },
// ];

// 2. Student Request Data
const studentsData = [
  {
    id: "2300021",
    name: "Le Van C",
    subject: "Calculus 1",
    priority: "High",
    priorityColor: "bg-red-100 text-red-800",
  },
  {
    id: "2300025",
    name: "Nguyen Thi D",
    subject: "General Physics",
    priority: "Medium",
    priorityColor: "bg-yellow-100 text-yellow-800",
  },
  {
    id: "2300030",
    name: "Pham Van E",
    subject: "Python Programming",
    priority: "Low",
    priorityColor: "bg-green-100 text-green-800",
  },
  {
    id: "2300035",
    name: "Tran Thi F",
    subject: "Calculus 2",
    priority: "High",
    priorityColor: "bg-red-100 text-red-800",
  },
];

// 3. Tutor Data
const tutorsData = [
  { id: "T001", name: "Dr. Tran Van A (Python, Calculus)" },
  { id: "T005", name: "MSc. Nguyen Thi B (Physics, Mechanics)" },
  { id: "T008", name: "Dr. Le Van C (Algebra, Calculus)" },
];

export default function CoordinatorAssignPage() {
  // --- STATE MANAGEMENT ---
  const [selectedStudentIds, setSelectedStudentIds] = useState<string[]>([]);
  const [selectedTutor, setSelectedTutor] = useState("");
  const [schedule, setSchedule] = useState("");
  const [note, setNote] = useState("");

  // --- HANDLERS ---

  // Handle Checkbox Toggle
  const toggleStudentSelection = (id: string) => {
    setSelectedStudentIds((prev) =>
      prev.includes(id)
        ? prev.filter((studentId) => studentId !== id) // Remove if exists
        : [...prev, id] // Add if not exists
    );
  };

  // Get names of selected students for display
  const getSelectedStudentNames = () => {
    if (selectedStudentIds.length === 0) return "(None selected)";
    return studentsData
      .filter((s) => selectedStudentIds.includes(s.id))
      .map((s) => s.name)
      .join(", ");
  };

  // Handle Form Submission
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

    // Logic to submit data to backend would go here
    alert(
      `Successfully assigned ${selectedStudentIds.length} students to ${selectedTutor}.`
    );

    // Reset form after success
    setSelectedStudentIds([]);
    setSelectedTutor("");
    setSchedule("");
    setNote("");
  };

  return (
    <div className="flex min-h-screen bg-[#f4f7f9] font-sans">
      {/* SIDEBAR: Using the specific menu items requested */}
      <Sidebar chosenIndex={1} navigateData={navigateData} />

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-8 overflow-y-auto h-screen">
        
        {/* HEADER */}
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
            TUTOR & STUDENT ASSIGNMENT
          </h1>
          <div className="flex items-center space-x-3">
            <span className="text-lg font-medium text-gray-600">
              COORDINATOR NAME
            </span>
            {/* Avatar Placeholder */}
            <div className="w-12 h-12 bg-gray-300 rounded-full border-2 border-indigo-500"></div>
          </div>
        </header>

        {/* FILTERS SECTION */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Filter Requests
          </h2>
          <div className="flex flex-col md:flex-row flex-wrap gap-4 items-center">
            
            {/* Subject Filter */}
            <div className="flex flex-col flex-1 min-w-[300px]">
              <label className="text-sm font-medium text-gray-500 mb-1">
                Subject/Course
              </label>
              <select className="p-2.5 rounded-lg border border-[#e0e7ff] bg-[#f9faff] text-indigo-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none">
                <option>All Subjects</option>
                <option>Python Programming</option>
                <option>Calculus 1</option>
                <option>General Physics</option>
              </select>
            </div>

            {/* Status Filter */}
            <div className="flex flex-col flex-1 min-w-[200px]">
              <label className="text-sm font-medium text-gray-500 mb-1">
                Assignment Status
              </label>
              <select className="p-2.5 rounded-lg border border-[#e0e7ff] bg-[#f9faff] text-indigo-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none">
                <option>All</option>
                <option>Unassigned</option>
                <option>Assigned</option>
                <option>Needs Adjustment</option>
              </select>
            </div>

            {/* Refresh Button */}
            <div className="flex items-end pt-5 md:pt-0">
              <button className="bg-[#3f51b5] hover:bg-[#5c6bc0] text-white font-semibold py-2.5 px-6 rounded-lg shadow-lg hover:shadow-xl transition-colors">
                Refresh List
              </button>
            </div>
          </div>
        </section>

        {/* DUAL PANEL LAYOUT */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* PANEL 1 (2/3): Waiting List Table */}
          <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Students Needing Support (25 Requests)
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
                      Priority
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-bold text-indigo-800 uppercase tracking-wider rounded-tr-lg">
                      Select
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100 text-sm text-gray-600">
                  {studentsData.map((student) => (
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
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* PANEL 2 (1/3): Assignment Form */}
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
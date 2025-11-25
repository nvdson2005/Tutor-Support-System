"use client";

import React from "react";
import Sidebar from "@/app/_components/sidebar";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import { navigateData } from "../_component/navigatedata";
// --- 1. SETUP CHARTS ---
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

// --- 2. DATA ĐỊNH NGHĨA LẠI (QUAN TRỌNG: Đã sửa key thành label/path) ---

// Menu riêng cho Coordinator (Chỉ 2 tab, bỏ User Management)
const coordinatorNavData = [
  { label: "DASHBOARD", path: "/coordinator/dashboard" }, 
  { label: "REPORTS", path: "/coordinator/reports" },
];

// Dữ liệu Queue (Cột 1)
const actionQueueData = [
  {
    title: "Tutor Registration Request",
    count: "2 New",
    color: "text-red-500",
  },
  {
    title: "Course Approval Needed",
    count: "5 To Review",
    color: "text-yellow-600",
  },
  {
    title: "Negative Feedback (Tutor)",
    count: "1 Urgent",
    color: "text-red-500",
  },
  {
    title: "Content Change Request",
    count: "4 Pending",
    color: "text-gray-500",
  },
  {
    title: "Leave Application (Tutor)",
    count: "0 Processed",
    color: "text-gray-500",
  },
];

// Dữ liệu Chart Donut (Cột 2)
const feedbackDonutData = {
  labels: ["Positive", "Neutral", "Negative"],
  datasets: [
    {
      data: [80, 15, 5],
      backgroundColor: ["#10b981", "#f59e0b", "#dc2626"],
      borderWidth: 0,
    },
  ],
};

// Dữ liệu Chart Bar (Cột 3)
const deptFeedbackData = {
  labels: ["CSE", "Mech", "Civil", "Electrical"],
  datasets: [
    {
      label: "Avg Score",
      data: [4.7, 4.2, 3.8, 4.5],
      backgroundColor: ["#3f51b5", "#4f46e5", "#3b82f6", "#5c6bc0"],
      borderRadius: 6,
    },
  ],
};

// Dữ liệu Bảng Sinh viên (Dưới cùng)
const recentActivityData = [
  {
    id: "2300015",
    name: "Phan Van An",
    course: "Python Programming",
    progress: "85%",
    progressColor: "text-green-600",
    time: "Just now",
  },
  {
    id: "2300016",
    name: "Nguyen Thanh Bao",
    course: "Calculus 1",
    progress: "20%",
    progressColor: "text-red-600",
    time: "1 day ago",
  },
  {
    id: "2300017",
    name: "Do Thanh Cong",
    course: "General Physics",
    progress: "55%",
    progressColor: "text-yellow-600",
    time: "3 hours ago",
  },
];

// --- 3. CHART OPTIONS ---
const donutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  cutout: "70%",
};

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    y: {
      beginAtZero: true,
      max: 5,
      display: true,
    },
    x: {
      grid: { display: false },
      border: { display: false },
    },
  },
};

export default function CoordinatorDashboard() {
  return (
    <div className="flex min-h-screen bg-[#f4f7f9] font-sans">
      {/* Sidebar nhận dữ liệu coordinatorNavData chuẩn ({ label, path }).
        Không còn bị lỗi Type Mismatch nữa.
      */}
      <Sidebar chosenIndex={0} navigateData={navigateData} />

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto h-screen">
        
        {/* HEADER */}
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
            DASHBOARD - COORDINATOR
          </h1>
          <div className="flex items-center space-x-3">
            <span className="text-lg font-medium text-gray-600">
              COORDINATOR NAME
            </span>
            <div className="w-12 h-12 bg-gray-300 rounded-full border-2 border-indigo-500"></div>
          </div>
        </header>

        {/* SECTION 1: TOP CARDS */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Card 1: PENDING ACTIONS */}
          <div className="bg-white rounded-xl shadow-sm p-6 col-span-1 border-t-4 border-red-500">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-700">
                PENDING ACTIONS
              </h2>
              <span className="text-2xl font-extrabold text-red-600">12</span>
            </div>

            <div className="space-y-3 overflow-y-auto max-h-[250px] pr-2">
              {actionQueueData.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center text-sm border-b border-gray-100 pb-2 last:border-0"
                >
                  <span className="font-medium text-gray-800">
                    {item.title}
                  </span>
                  <span className={`text-xs font-semibold ${item.color}`}>
                    {item.count}
                  </span>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 py-2 text-indigo-700 font-semibold border border-indigo-200 rounded-lg hover:bg-indigo-50 transition duration-150">
              View Detailed Queue
            </button>
          </div>

          {/* Card 2: SATISFACTION SCORE */}
          <div className="bg-white rounded-xl shadow-sm p-6 col-span-1 border-t-4 border-green-500">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold text-gray-700">SATISFACTION SCORE</h2>
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <p className="text-4xl font-extrabold text-green-600 mb-1">
              4.5 / 5.0
            </p>
            <p className="text-sm text-gray-500 font-semibold mb-4">
              Based on 5,200 recent reviews
            </p>

            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 relative">
                <Doughnut data={feedbackDonutData} options={donutOptions} />
              </div>
              <div className="text-xs space-y-1 text-gray-600">
                <p><span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>Positive (80%)</p>
                <p><span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-1"></span>Neutral (15%)</p>
                <p><span className="inline-block w-2 h-2 bg-red-600 rounded-full mr-1"></span>Negative (5%)</p>
              </div>
            </div>
          </div>

          {/* Card 3: TUTOR ACTIVITY */}
          <div className="bg-white rounded-xl shadow-sm p-6 col-span-1 border-t-4 border-indigo-500">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold text-gray-700">TUTOR ACTIVITY</h2>
              <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
            <p className="text-4xl font-extrabold text-indigo-600 mb-1">
              48 Tutors
            </p>
            <p className="text-sm text-gray-500 font-semibold mb-4">
              Active in the last 7 days
            </p>

            <div className="text-sm space-y-3 mt-6">
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-600">Avg Response / 24h:</span>
                <span className="font-bold text-indigo-600">3.5</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-600">On-time Rate:</span>
                <span className="font-bold text-green-600">92%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Courses to Watch:</span>
                <span className="font-bold text-red-600">15</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: BOTTOM CONTENT */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 4: STUDENT ACTIVITY TABLE */}
          <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-700">
                RECENT STUDENT ACTIVITY
              </h2>
              <button className="text-indigo-600 text-sm font-medium hover:text-indigo-800 transition-colors">
                View Detailed Report
              </button>
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#e0e7ff]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-indigo-800 uppercase tracking-wider">
                      Student ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-indigo-800 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-indigo-800 uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-indigo-800 uppercase tracking-wider">
                      Progress
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-indigo-800 uppercase tracking-wider">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100 text-sm text-gray-600">
                  {recentActivityData.map((student, index) => (
                    <tr key={index} className="hover:bg-[#f1f5f9]">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                        {student.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {student.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {student.course}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`font-bold ${student.progressColor}`}>
                          {student.progress}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {student.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Card 5: FEEDBACK BY DEPT */}
          <div className="bg-white rounded-xl shadow-sm p-6 col-span-1 border-t-4 border-yellow-500">
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              FEEDBACK BY DEPT
            </h2>
            <div className="h-64 w-full">
               <Bar data={deptFeedbackData} options={barOptions} />
            </div>
            <div className="mt-4 text-xs text-gray-500 text-center italic">
              Average feedback score (out of 5) per Department.
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
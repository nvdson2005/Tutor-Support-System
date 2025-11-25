"use client";

import React from "react";
import Sidebar from "@/app/_components/sidebar";
import { navigateData } from "@/app/admin/_components/navigatedata"; // Giữ lại data điều hướng của bạn
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

// 1. Đăng ký các thành phần biểu đồ
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

// 2. Dữ liệu biểu đồ (Chuyển từ script HTML sang Object JS)
const studentStatusData = {
  labels: ["Completed", "Progressed", "Studying"],
  datasets: [
    {
      data: [45, 30, 25],
      backgroundColor: ["#2563eb", "#f59e0b", "#10b981"],
      borderWidth: 0,
    },
  ],
};

const tutorTypeData = {
  labels: ["Teacher Asst", "Lecturer", "Professor"],
  datasets: [
    {
      data: [40, 40, 20],
      backgroundColor: ["#3b82f6", "#4f46e5", "#dc2626"],
      borderWidth: 0,
    },
  ],
};

const visitorData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Visitors",
      data: [300, 450, 600, 750, 550, 900, 800],
      backgroundColor: "#3b82f6",
      borderRadius: 4,
      barThickness: 20,
    },
  ],
};

// Cấu hình biểu đồ (Options)
const donutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
  cutout: "70%",
};

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: {
      beginAtZero: true,
      display: false, // Ẩn trục Y như thiết kế
    },
    x: {
      grid: { display: false },
      border: { display: false },
    },
  },
};

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#f4f7f9] font-sans">
      {/* Sidebar - Sử dụng component có sẵn của bạn */}
      <Sidebar chosenIndex={0} navigateData={navigateData} />

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
            DASHBOARD
          </h1>
          <div className="flex items-center space-x-3">
            <span className="text-lg font-medium text-gray-600">
              ADMINISTRATOR NAME
            </span>
            {/* Avatar Placeholder */}
            <div className="w-12 h-12 bg-gray-300 rounded-full border-2 border-indigo-500"></div>
          </div>
        </header>

        {/* Khu vực Thống kê Chính */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Thẻ 1: Thống kê Sinh viên */}
          <div className="bg-white rounded-xl shadow-sm p-6 col-span-1 border-t-4 border-indigo-500">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold text-gray-700">Students</h2>
              {/* Icon SVG */}
              <svg
                className="w-8 h-8 text-indigo-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20v-2a3 3 0 00-5.356-1.857M10 12v6m6-6v6m4-12a4 4 0 11-8 0 4 4 0 018 0zm-8-4a4 4 0 11-8 0 4 4 0 018 0zm8-4a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            </div>
            <p className="text-4xl font-extrabold text-indigo-600 mb-1">
              20,107K
            </p>
            <p className="text-sm text-green-500 font-semibold mb-4">
              ● Online: 9097
            </p>
            <p className="text-xs text-gray-500 mb-4">
              Overall Completion Rate: 90%
            </p>

            {/* Biểu đồ Donut Sinh viên */}
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 relative">
                <Doughnut data={studentStatusData} options={donutOptions} />
              </div>
              <div className="text-sm space-y-1">
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                  Completed
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                  Progressed
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  Studying
                </div>
              </div>
            </div>
          </div>

          {/* Thẻ 2: Thống kê Giảng viên */}
          <div className="bg-white rounded-xl shadow-sm p-6 col-span-1 border-t-4 border-purple-500">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold text-gray-700">Tutors</h2>
              {/* Icon SVG */}
              <svg
                className="w-8 h-8 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H9a1 1 0 01-.877-.506l-2.071-3.62A3 3 0 016 14v-2c0-.528.208-1.033.582-1.41L12 5l5.418 5.59C17.792 11.467 18 11.972 18 12v2a3 3 0 01-1.052 2.374l-2.07 3.62A1 1 0 0115 21z"
                ></path>
              </svg>
            </div>
            <p className="text-4xl font-extrabold text-purple-600 mb-1">1000</p>
            <p className="text-sm text-green-500 font-semibold mb-4">
              ● Online: 723
            </p>

            {/* Biểu đồ Donut Giảng viên */}
            <div className="flex items-center space-x-6 mt-6">
              <div className="w-20 h-20 relative">
                <Doughnut data={tutorTypeData} options={donutOptions} />
              </div>
              <div className="text-sm space-y-1">
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  Teacher Asst
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-indigo-700 rounded-full mr-2"></span>
                  Lecturer
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-red-600 rounded-full mr-2"></span>
                  Professor
                </div>
              </div>
            </div>
          </div>

          {/* Thẻ 3: Trending Courses */}
          <div className="bg-white rounded-xl shadow-sm p-6 col-span-1 border-t-4 border-teal-500">
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              TRENDING COURSES
            </h2>

            <div className="space-y-4">
              {[
                { name: "DSA", percent: "85%" },
                { name: "Analysis 1", percent: "78%" },
                { name: "Analysis 2", percent: "72%" },
                { name: "Discrete Math", percent: "65%" },
              ].map((course, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-1/3 text-sm text-gray-600 font-medium">
                    {course.name} :
                  </span>
                  <div className="flex-1 h-3 bg-teal-100 rounded-full overflow-hidden">
                    <div
                      className="bg-teal-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: course.percent }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Khu vực Biểu đồ Chi tiết (Visitors) */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-700">VISITORS</h2>
              <button className="text-indigo-600 text-sm font-medium hover:text-indigo-800 transition-colors">
                View more
              </button>
            </div>
            {/* Vùng chứa biểu đồ cột */}
            <div className="h-64 w-full">
              <Bar data={visitorData} options={barOptions} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
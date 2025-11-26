"use client";

import React from "react";
import Sidebar from "@/app/_components/sidebar";
import TopBar from "@/app/_components/topbar";
import { navigateData } from "@/app/admin/_components/navigatedata";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement, // Cần cho biểu đồ đường
  LineElement,  // Cần cho biểu đồ đường
} from "chart.js";
import { Doughnut, Bar, Line } from "react-chartjs-2";

// 1. Đăng ký các thành phần biểu đồ (Thêm PointElement và LineElement)
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement
);

// 2. DỮ LIỆU BIỂU ĐỒ

// Dữ liệu cũ (Donut)
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

// Dữ liệu cũ (Bar) - Visitors
const visitorData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Visitors",
      data: [300, 450, 600, 750, 550, 900, 800],
      backgroundColor: "#3b82f6",
      borderRadius: 4,
      barThickness: 20, // Thu nhỏ độ dày cột lại chút cho đẹp
    },
  ],
};

// Dữ liệu MỚI (Line) - Feedback theo thời gian
const feedbackLineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Student Feedback",
      data: [120, 190, 300, 500, 200, 300],
      borderColor: "#10b981", // Màu xanh lá
      backgroundColor: "#10b981",
      tension: 0.4, // Đường cong mềm mại
    },
    {
      label: "Tutor Feedback",
      data: [80, 100, 150, 200, 180, 220],
      borderColor: "#3b82f6", // Màu xanh dương
      backgroundColor: "#3b82f6",
      tension: 0.4,
    },
  ],
};

// 3. CẤU HÌNH (OPTIONS)

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
      display: false,
    },
    x: {
      grid: { display: false },
      border: { display: false },
    },
  },
};

const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const, // Hiển thị chú thích ở trên
      labels: {
        usePointStyle: true,
        boxWidth: 8,
      }
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "#f3f4f6", // Màu lưới nhạt
      },
    },
    x: {
      grid: { display: false },
    },
  },
};

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-[#f4f7f9] font-sans overflow-hidden">
      {/* Sidebar */}
      <Sidebar chosenIndex={0} navigateData={navigateData} />

      {/* Wrapper bên phải */}
      <div className="flex-1 flex flex-col h-screen">
        
        {/* TopBar cố định ở trên cùng */}
        <TopBar username="Admin" dashboardContent="Tracking Dashboard" />

        {/* Nội dung chính (Scrollable) */}
        <main className="flex-1 p-8 overflow-y-auto">
          
          {/* SECTION 1: Các thẻ thống kê (Top 3 Cards) */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            
            {/* Thẻ 1: Students */}
            <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-indigo-500">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-bold text-gray-700">Students</h2>
                <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20v-2a3 3 0 00-5.356-1.857M10 12v6m6-6v6m4-12a4 4 0 11-8 0 4 4 0 018 0zm-8-4a4 4 0 11-8 0 4 4 0 018 0zm8-4a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <p className="text-4xl font-extrabold text-indigo-600 mb-1">20,107</p>
              <p className="text-sm text-green-500 font-semibold mb-4">● Online: 9097</p>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 relative"> {/* Thu nhỏ chart donut một chút */}
                  <Doughnut data={studentStatusData} options={donutOptions} />
                </div>
                <div className="text-xs space-y-1 text-gray-600">
                  <p><span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-1"></span>Completed</p>
                  <p><span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-1"></span>Progressed</p>
                  <p><span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>Studying</p>
                </div>
              </div>
            </div>

            {/* Thẻ 2: Tutors */}
            <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-purple-500">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-bold text-gray-700">Tutors</h2>
                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H9a1 1 0 01-.877-.506l-2.071-3.62A3 3 0 016 14v-2c0-.528.208-1.033.582-1.41L12 5l5.418 5.59C17.792 11.467 18 11.972 18 12v2a3 3 0 01-1.052 2.374l-2.07 3.62A1 1 0 0115 21z"></path>
                </svg>
              </div>
              <p className="text-4xl font-extrabold text-purple-600 mb-1">1,000</p>
              <p className="text-sm text-green-500 font-semibold mb-4">● Online: 723</p>

              <div className="flex items-center space-x-4 mt-2">
                <div className="w-16 h-16 relative">
                  <Doughnut data={tutorTypeData} options={donutOptions} />
                </div>
                <div className="text-xs space-y-1 text-gray-600">
                  <p><span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-1"></span>TA</p>
                  <p><span className="inline-block w-2 h-2 bg-indigo-700 rounded-full mr-1"></span>Lecturer</p>
                  <p><span className="inline-block w-2 h-2 bg-red-600 rounded-full mr-1"></span>Prof</p>
                </div>
              </div>
            </div>

            {/* Thẻ 3: Trending Courses */}
            <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-teal-500">
              <h2 className="text-xl font-bold text-gray-700 mb-4">TRENDING COURSES</h2>
              <div className="space-y-3">
                {[
                  { name: "DSA", percent: "85%" },
                  { name: "Analysis 1", percent: "78%" },
                  { name: "Analysis 2", percent: "72%" },
                  { name: "Discrete Math", percent: "65%" },
                ].map((course, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <span className="w-1/3 text-gray-600 font-medium truncate pr-2">
                      {course.name}:
                    </span>
                    <div className="flex-1 h-2 bg-teal-100 rounded-full overflow-hidden">
                      <div
                        className="bg-teal-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: course.percent }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 2: Charts Bottom Row (2 Columns) */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Bên trái: Visitor Chart (Đã thu gọn lại thành 1 cột) */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-700">VISITORS</h2>
                <button className="text-indigo-600 text-sm font-medium hover:text-indigo-800 transition-colors">
                  View more
                </button>
              </div>
              <div className="h-64 w-full">
                <Bar data={visitorData} options={barOptions} />
              </div>
            </div>

            {/* Bên phải: Feedback Line Chart (MỚI) */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-700">FEEDBACK TRENDS</h2>
                <select className="text-xs border border-gray-300 rounded px-2 py-1 outline-none text-gray-600">
                  <option>Last 6 Months</option>
                  <option>Last Year</option>
                </select>
              </div>
              <div className="h-64 w-full">
                <Line data={feedbackLineData} options={lineOptions} />
              </div>
            </div>

          </section>

        </main>
      </div>
    </div>
  );
}
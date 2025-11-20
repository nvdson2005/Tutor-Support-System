"use client";
import TopBar from "@/app/_components/topbar";
import React, { useState } from "react";
import Sidebar from "@/app/_components/sidebar";
import { useRouter } from "next/navigation";
import { navigateData } from "@/app/admin/_components/navigatedata";

// Sample feedback data
const recentFeedbacks = [
  {
    studentId: "2300015",
    studentName: "Phan Van An",
    course: "Python Programming",
    rating: 4.5,
    comment: "The course is great!",
    recentlyActivity: "Just now",
  },
  {
    studentId: "2300015",
    studentName: "Phan Van An",
    course: "Python Programming",
    rating: 2.0,
    comment: "I don't like it",
    recentlyActivity: "1 day ago",
  },
];

// Department satisfaction data
const departmentData = [
  { name: "CNTT", score: 4.7 },
  { name: "Cơ khí", score: 4.2 },
  { name: "Xây dựng", score: 3.8 },
  { name: "Điện", score: 4.3 },
];

export default function AdminReportsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");

  const handleApplyFilters = () => {
    console.log("Applying filters", {
      searchQuery,
      statusFilter,
      categoryFilter,
    });
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4.0) return "text-green-600";
    if (rating >= 3.0) return "text-yellow-600";
    return "text-red-600";
  };

  // Donut chart data
  const donutData = [
    { label: "Positive", percentage: 80, color: "#10b981" },
    { label: "Neutral", percentage: 15, color: "#f59e0b" },
    { label: "Negative", percentage: 5, color: "#ef4444" },
  ];

  // Calculate donut chart paths
  const outerRadius = 60;
  const innerRadius = 35;
  const centerX = 80;
  const centerY = 80;
  let currentAngle = -90; // Start from top

  const donutPaths = donutData.map((segment) => {
    const angle = (segment.percentage / 100) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;

    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;

    const x1 = centerX + outerRadius * Math.cos(startAngleRad);
    const y1 = centerY + outerRadius * Math.sin(startAngleRad);
    const x2 = centerX + outerRadius * Math.cos(endAngleRad);
    const y2 = centerY + outerRadius * Math.sin(endAngleRad);

    const x3 = centerX + innerRadius * Math.cos(endAngleRad);
    const y3 = centerY + innerRadius * Math.sin(endAngleRad);
    const x4 = centerX + innerRadius * Math.cos(startAngleRad);
    const y4 = centerY + innerRadius * Math.sin(startAngleRad);

    const largeArcFlag = angle > 180 ? 1 : 0;

    const path = `M ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4} Z`;

    currentAngle = endAngle;

    return {
      path,
      color: segment.color,
      label: segment.label,
      percentage: segment.percentage,
    };
  });

  // Bar chart calculations
  const maxScore = 5.0;
  const barMaxHeight = 120;
  const barWidth = 50;
  const barSpacing = 60;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar chosenIndex={1} navigateData={navigateData} />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Header */}
        <TopBar username="Admin" dashboardContent="Reports Dashboard" />

        {/* Main Content Area */}
        <div className="flex-1 p-8">
          {/* Report Queue Filters Section */}
          <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Report Queue Filters
            </h2>
            <div className="flex flex-wrap gap-4 items-end">
              {/* Search Input */}
              <div className="flex-1 min-w-[250px]">
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

              {/* Filter by Status */}
              <div className="min-w-[180px]">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Status
                </label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>All Statuses</option>
                  <option>Pending</option>
                  <option>Approved</option>
                  <option>Rejected</option>
                </select>
              </div>

              {/* Filter by Category */}
              <div className="min-w-[180px]">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Category
                </label>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>All Categories</option>
                  <option>Course Feedback</option>
                  <option>Session Feedback</option>
                  <option>General Feedback</option>
                </select>
              </div>

              {/* Apply Filters Button */}
              <div>
                <button
                  onClick={handleApplyFilters}
                  className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 font-medium"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </section>

          {/* Dashboard Cards Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Overall Course Satisfaction Card */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Overall Course Satisfaction
                </h2>
                <span className="text-2xl">😊</span>
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                4.5 / 5.0
              </div>
              <div className="text-sm text-gray-500 mb-6">
                Base on 5200 recently rate
              </div>
              <div className="flex items-center justify-center gap-8">
                {/* Donut Chart */}
                <div className="relative">
                  <svg width="160" height="160" viewBox="0 0 160 160">
                    {donutPaths.map((segment, index) => (
                      <path
                        key={index}
                        d={segment.path}
                        fill={segment.color}
                        stroke="white"
                        strokeWidth="1"
                      />
                    ))}
                  </svg>
                </div>
                {/* Legend */}
                <div className="space-y-3">
                  {donutData.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm text-gray-700">
                        {item.label} ({item.percentage}%)
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Response by Department Card */}
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                REPONSE BY DEPARTMENT
              </h2>
              <div className="mb-4">
                {/* Bar Chart */}
                <div className="relative h-40 mb-2">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pr-2">
                    <span>5.0</span>
                    <span>2.75</span>
                    <span>0.5</span>
                  </div>
                  {/* Bars */}
                  <div className="ml-8 flex items-end justify-center gap-4 h-full">
                    {departmentData.map((dept, index) => {
                      const barHeight = (dept.score / maxScore) * barMaxHeight;
                      return (
                        <div key={index} className="flex flex-col items-center h-full">
                          <div className="relative w-12 flex items-end h-full">
                            <div
                              className="bg-blue-600 rounded-t w-full"
                              style={{
                                height: `${barHeight}px`,
                              }}
                            ></div>
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-700 whitespace-nowrap">
                              {dept.score.toFixed(1)}
                            </div>
                          </div>
                          <div className="text-xs text-gray-600 mt-2">
                            {dept.name}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="text-xs text-gray-600 text-center mt-2">
                  Điểm Hài lòng TB
                </div>
              </div>
              <div className="text-sm text-gray-500 mt-4">
                The chart illustrate the satisfaction rate for every Department
              </div>
            </section>
          </div>

          {/* Recent Feedbacks Section */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                RECENT FEEDBACKS
              </h2>
              <button className="text-blue-600 hover:text-blue-800 underline text-sm">
                View detailed activity
              </button>
            </div>
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
                      COURSE
                    </th>
                    <th className="text-left py-3 px-4 font-semibold">
                      RATING
                    </th>
                    <th className="text-left py-3 px-4 font-semibold">
                      RATING (Comment)
                    </th>
                    <th className="text-left py-3 px-4 font-semibold">
                      RECENTLY ACTIVITY
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentFeedbacks.map((feedback, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-4 px-4 text-gray-700">
                        {feedback.studentId}
                      </td>
                      <td className="py-4 px-4 text-gray-700">
                        {feedback.studentName}
                      </td>
                      <td className="py-4 px-4 text-gray-700">
                        {feedback.course}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`font-semibold ${getRatingColor(
                            feedback.rating
                          )}`}
                        >
                          {feedback.rating}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-700">
                        {feedback.comment}
                      </td>
                      <td className="py-4 px-4 text-gray-700">
                        {feedback.recentlyActivity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}


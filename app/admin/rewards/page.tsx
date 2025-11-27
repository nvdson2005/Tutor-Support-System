"use client";
import TopBar from "@/app/_components/topbar";
import { useState, useMemo } from "react";
import Sidebar from "@/app/_components/sidebar";
import { navigateData } from "@/app/admin/_components/navigatedata";

// 1. Dữ liệu mẫu
const studentsData = [
  {
    studentId: "230001",
    studentName: "Nguyen Van A",
    participationPercent: 100,
    outcomeStatus: "Good",
    lastRewardDate: "2025-04-10",
  },
  {
    studentId: "230002",
    studentName: "Tran Thi B",
    participationPercent: 70,
    outcomeStatus: "Medium",
    lastRewardDate: "2025-04-05",
  },
  {
    studentId: "230003",
    studentName: "Le Van C",
    participationPercent: 40,
    outcomeStatus: "Bad",
    lastRewardDate: "2025-03-20",
  },
  {
    studentId: "230004",
    studentName: "Pham Thi D",
    participationPercent: 95,
    outcomeStatus: "Good",
    lastRewardDate: "2025-04-12",
  },
  {
    studentId: "230005",
    studentName: "Hoang Van E",
    participationPercent: 60,
    outcomeStatus: "Medium",
    lastRewardDate: "2025-03-15",
  },
  {
    studentId: "230006",
    studentName: "Do Thi F",
    participationPercent: 100,
    outcomeStatus: "Good",
    lastRewardDate: "2025-04-14",
  },
  {
    studentId: "230007",
    studentName: "Bui Van G",
    participationPercent: 20,
    outcomeStatus: "Bad",
    lastRewardDate: "2025-02-10",
  },
];

// Định nghĩa kiểu dữ liệu cho Student để tránh lỗi any
interface Student {
  studentId: string;
  studentName: string;
  participationPercent: number;
  outcomeStatus: string;
  lastRewardDate: string;
}

export default function AdminRewardsPage() {
  // --- States cho Filter ---
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [fromDate, setFromDate] = useState("2025-01-01");
  const [toDate, setToDate] = useState("2025-12-31");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // --- States cho Reward Modal ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [rewardPoints, setRewardPoints] = useState<number>(0);
  const [rewardNote, setRewardNote] = useState("");

  // --- Logic Filter ---
  const filteredData = useMemo(() => {
    return studentsData.filter((student) => {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        student.studentName.toLowerCase().includes(query) ||
        student.studentId.includes(query);

      const matchesStatus =
        statusFilter === "All Statuses" ||
        student.outcomeStatus === statusFilter;

      const studentDate = new Date(student.lastRewardDate).getTime();
      const start = fromDate ? new Date(fromDate).getTime() : 0;
      const end = toDate ? new Date(toDate).getTime() : Infinity;

      const matchesDate = studentDate >= start && studentDate <= end;

      return matchesSearch && matchesStatus && matchesDate;
    });
  }, [searchQuery, statusFilter, fromDate, toDate]);

  // --- Pagination ---
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [paginatedData, setPaginatedData] = useState(filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  ));

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (
    setter: (value: string) => void,
    value: string
  ) => {
    setter(value);
    setCurrentPage(1);
  };

  const handleApplyFilters = () => {
    console.log("Current Filters:", {
      searchQuery,
      statusFilter,
      fromDate,
      toDate,
    });
    setCurrentPage(1);
  };

  // --- Logic Reward Popup ---
  
  // 1. Hàm mở Modal và tự động tính điểm thưởng gợi ý
  const openRewardModal = (student: Student) => {
    setSelectedStudent(student);
    
    // Logic gợi ý điểm thưởng dựa trên % tham gia
    let suggestedPoints = 0;
    if (student.participationPercent >= 90) suggestedPoints = 500;
    else if (student.participationPercent >= 70) suggestedPoints = 300;
    else if (student.participationPercent >= 50) suggestedPoints = 100;
    
    setRewardPoints(suggestedPoints);
    setRewardNote(""); // Reset ghi chú
    setIsModalOpen(true);
  };

  // 2. Hàm đóng Modal
  const closeRewardModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  // 3. Hàm xác nhận trao thưởng
  const confirmReward = () => {
    if (selectedStudent) {
      // Tại đây bạn sẽ gọi API để lưu xuống database
      alert(
        `SUCCESS: Rewarded ${selectedStudent.studentName} with ${rewardPoints} points!\nNote: ${rewardNote}`
      );
      closeRewardModal();
    }
  };

  // --- Styles ---
  const getParticipationBadgeClass = (percent: number) => {
    if (percent >= 90) return "bg-green-100 text-green-700";
    if (percent >= 70) return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700";
  };

  const getOutcomeBadgeClass = (status: string) => {
    if (status === "Good") return "bg-blue-100 text-blue-700";
    if (status === "Medium") return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700";
  };

  return (
    <div className="flex text-black min-h-screen bg-gray-50 font-sans">
      <Sidebar
        chosenIndex={2}
        navigateData={navigateData}
        logoutLabel="LOG OUT"
      />

      <main className="flex-1 flex flex-col relative">
        <TopBar username="Admin" dashboardContent="Rewards Dashboard" />

        <div className="flex-1 p-8">
          {/* Filters Section */}
          <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Filter Criteria
            </h2>
            <div className="space-y-4">
              {/* Row 1: Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search Student ID or Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Student ID or Name..."
                  value={searchQuery}
                  onChange={(e) =>
                    handleFilterChange(setSearchQuery, e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Row 2: Filters */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Filter by Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Outcome Status
                  </label>
                  <select
                    value={statusFilter}
                    onChange={(e) =>
                      handleFilterChange(setStatusFilter, e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>All Statuses</option>
                    <option>Good</option>
                    <option>Medium</option>
                    <option>Bad</option>
                  </select>
                </div>

                {/* Filter by Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reward Date Range
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="date"
                      value={fromDate}
                      onChange={(e) =>
                        handleFilterChange(setFromDate, e.target.value)
                      }
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    <input
                      type="date"
                      value={toDate}
                      onChange={(e) =>
                        handleFilterChange(setToDate, e.target.value)
                      }
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                </div>

                {/* Apply Button */}
                <div className="flex items-end">
                  <button
                    onClick={handleApplyFilters}
                    className="w-full bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 font-medium"
                  >
                    Apply / Reset Page
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Table Section */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Students Reward List
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="text-left py-3 px-4 font-semibold">
                      STUDENT ID
                    </th>
                    <th className="text-left py-3 px-4 font-semibold">NAME</th>
                    <th className="text-left py-3 px-4 font-semibold">
                      PARTICIPATION
                    </th>
                    <th className="text-left py-3 px-4 font-semibold">
                      STATUS
                    </th>
                    <th className="text-left py-3 px-4 font-semibold">DATE</th>
                    <th className="text-left py-3 px-4 font-semibold">
                      ACTIONS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.length > 0 ? (
                    paginatedData.map((student, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="py-4 px-4 text-gray-700">
                          {student.studentId}
                        </td>
                        <td className="py-4 px-4 text-gray-700 font-medium">
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
                        <td className="py-4 px-4 text-gray-600 text-sm">
                          {student.lastRewardDate}
                        </td>
                        <td className="py-4 px-4">
                          <button
                            onClick={() => openRewardModal(student)}
                            className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 px-3 py-1 rounded border border-indigo-200 text-sm font-medium transition-colors"
                          >
                            Reward
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-gray-500">
                        No students found matching your filters.
                      </td>
                    </tr>
                  )}
                  {paginatedData.length - itemsPerPage < 0 && Array.from({ length: itemsPerPage - paginatedData.length }).map((_, idx) => (
                    <tr key={`empty-${idx}`} className="h-12">
                      <td colSpan={6} className="py-8"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
              <span>
                Showing {paginatedData.length} of {totalItems} results
              </span>
              <div className="flex space-x-2">
                <button
                  className="px-3 py-1 border rounded-lg hover:bg-gray-100 disabled:opacity-50"
                  disabled={currentPage === 1}
                  onClick={() => {
                    setCurrentPage(currentPage - 1);
                    setPaginatedData(
                      filteredData.slice(
                        (currentPage - 2) * itemsPerPage,
                        (currentPage - 1) * itemsPerPage
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
                    setPaginatedData(filteredData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage));
                  }}
                  disabled={currentPage === totalPages}
                >
                  Next &gt;
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* --- REWARD MODAL (POPUP) --- */}
        {isModalOpen && selectedStudent && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100">
              {/* Modal Header */}
              <div className="bg-blue-900 px-6 py-4 flex justify-between items-center">
                <h3 className="text-white text-lg font-bold">
                  Reward Student
                </h3>
                <button
                  onClick={closeRewardModal}
                  className="text-white hover:text-gray-200 text-xl font-bold"
                >
                  &times;
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-4">
                {/* Student Info */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-500 text-sm">Student Name:</span>
                    <span className="font-bold text-gray-800">
                      {selectedStudent.studentName}
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-500 text-sm">Student ID:</span>
                    <span className="font-medium text-gray-800">
                      {selectedStudent.studentId}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Participation:</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getParticipationBadgeClass(
                        selectedStudent.participationPercent
                      )}`}
                    >
                      {selectedStudent.participationPercent}%
                    </span>
                  </div>
                </div>

                {/* Reward Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Reward Points / Gift Value
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
                    <span className="bg-gray-100 px-3 py-2 text-gray-500 font-bold border-r">
                      PTS
                    </span>
                    <input
                      type="number"
                      value={rewardPoints}
                      onChange={(e) => setRewardPoints(Number(e.target.value))}
                      className="w-full px-4 py-2 outline-none text-gray-800 font-medium"
                    />
                  </div>
                  <p className="text-xs text-blue-600 mt-1">
                    * Suggested based on participation score.
                  </p>
                </div>

                {/* Note Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message / Note (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={rewardNote}
                    onChange={(e) => setRewardNote(e.target.value)}
                    placeholder="E.g. Excellent performance in recent workshops..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t flex justify-end gap-3">
                <button
                  onClick={closeRewardModal}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmReward}
                  className="px-4 py-2 bg-blue-900 text-white rounded-md font-medium hover:bg-blue-800 shadow-sm"
                >
                  Confirm Reward
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
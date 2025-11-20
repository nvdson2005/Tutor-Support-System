"use client";
import TopBar from "@/app/_components/topbar";
import { useState } from "react";
import Sidebar from "../../_components/sidebar";
import { navigateData } from "../_components/navigatedata";
const days = [
  { label: "Mon", date: "Oct 24, 2025" },
  { label: "Tue", date: "Oct 25, 2025" },
  { label: "Wed", date: "Oct 26, 2025" },
  { label: "Thu", date: "Oct 27, 2025" },
  { label: "Fri", date: "Oct 28, 2025" },
  { label: "Sat", date: "Oct 29, 2025" },
  { label: "Sun", date: "Oct 30, 2025" },
];

export default function TutorSchedule() {
  // State for schedule slots per day
  const [schedules, setSchedules] = useState<
    Record<string, Array<{ start: string; end: string }>>
  >({
    "Oct 24, 2025": [{ start: "19:00", end: "21:00" }],
    "Oct 25, 2025": [{ start: "15:00", end: "16:30" }],
    "Oct 26, 2025": [{ start: "9:00", end: "10:30" }],
    "Oct 27, 2025": [{ start: "10:00", end: "13:30" }],
    "Oct 28, 2025": [{ start: "8:00", end: "9:30" }],
    "Oct 29, 2025": [],
    "Oct 30, 2025": [],
  });

  // Modal state
  const [modalDay, setModalDay] = useState<string | null>(null);
  const [modal, setModal] = useState(false);

  // New slot state
  const [newDate, setNewDate] = useState<string>("");
  const [newStart, setNewStart] = useState<string>("12:00");
  const [newEnd, setNewEnd] = useState<string>("13:30");

  // Open modal for a day
  const handleOpenModal = (day: string) => {
    setModalDay(day);
    setNewDate(day);
    setNewStart("12:00");
    setNewEnd("13:30");
    setModal(true);
  };

  // Save new slot
  const handleSave = () => {
    setSchedules((prev) => ({
      ...prev,
      [newDate]: [...(prev[newDate] || []), { start: newStart, end: newEnd }],
    }));
    setModal(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-black">
      <Sidebar chosenIndex={1} navigateData={navigateData} />
      <main className="flex-1">
        <TopBar
          username="Nguyen Van A"
          dashboardContent="Tutor Schedule"
        ></TopBar>
        <div className="p-10">
          <div className="mb-6">
            <div className="flex gap-2 items-center mb-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold">
                My Schedule
              </button>
              <button className="bg-red-100 text-red-700 px-4 py-2 rounded font-semibold ml-auto">
                Cancel
              </button>
            </div>
            <div className="grid grid-cols-7 gap-4 bg-white rounded-lg shadow p-6">
              {days.map((day) => (
                <div key={day.date} className="flex flex-col items-center">
                  <div className="font-semibold">{day.label}</div>
                  <div className="text-xs text-gray-500 mb-2">{day.date}</div>
                  <div className="flex flex-col gap-2 w-full">
                    {(schedules[day.date] || []).map((slot, idx) => (
                      <div
                        key={idx}
                        className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs text-center"
                      >
                        {slot.start} - {slot.end}
                      </div>
                    ))}
                  </div>
                  <button
                    className="mt-2 bg-blue-600 text-white px-2 py-1 rounded text-xs hover:bg-blue-700"
                    onClick={() => handleOpenModal(day.date)}
                  >
                    +
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Modal for adding new availability */}
      {modal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-xs p-8 relative">
            <button
              className="absolute top-4 right-4 text-xl font-bold text-gray-400 hover:text-gray-600"
              onClick={() => setModal(false)}
            >
              ×
            </button>
            <h3 className="text-lg font-bold mb-4">Create New Availability</h3>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Date</label>
              <input
                type="text"
                value={newDate}
                readOnly
                className="border rounded px-3 py-2 w-full bg-gray-100"
              />
            </div>
            <div className="mb-4 flex gap-2 items-center">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Time:
                </label>
                <div className="flex gap-2 items-center">
                  <input
                    type="time"
                    value={newStart}
                    onChange={(e) => setNewStart(e.target.value)}
                    className="border rounded px-2 py-1"
                  />
                  <span>-</span>
                  <input
                    type="time"
                    value={newEnd}
                    onChange={(e) => setNewEnd(e.target.value)}
                    className="border rounded px-2 py-1"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-2 justify-end mt-4">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="bg-red-100 text-red-700 px-4 py-2 rounded hover:bg-red-200 font-semibold"
                onClick={() => setModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

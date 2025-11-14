"use client";

import React, { useState } from "react";
import Sidebar from "@/app/_components/sidebar";
import StudentTopBar from "@/app/_components/studenttopbar";
const studentName: string = "Nguyen Van A";
const upcomingSessions = [
  {
    id: 1,
    subject: "Data Structures & Algorithms",
    date: "Saturday, 20/12/2025",
    time: "13:00 - 15:00",
    tutor: "Tutor Name",
    status: "Go Online",
    materials: [
      {
        title: "Data Structures and Algorithms",
        link: "#",
      },
      {
        title: "Khan Academy - Big O Notation",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    subject: "Operating System",
    date: "Thursday, 19/12/2025",
    time: "8:00 - 9:30",
    tutor: "Tutor Name",
    status: "Go Online",
    materials: [],
  },
];

const completedSessions = [
  {
    id: 3,
    subject: "Computer Network",
    date: "10/12/2025",
    time: "10:00 - 11:30",
    tutor: "Tutor Name",
    status: "Rating",
  },
];

export default function StudentDashboard() {
  const [detailSession, setDetailSession] = useState<number | null>(null);

  const sessionDetail = upcomingSessions.find((s) => s.id === detailSession);

  return (
    <div className="flex min-h-screen bg-gray-100 text-black">
      {/* Sidebar */}
      <Sidebar chosenIndex={0}/>

      {/* Main Content */}
      <main className="flex-1">
        <div className="p-10">
          <div className="mb-6">
            <StudentTopBar studentName={studentName}></StudentTopBar>
            <h3 className="text-lg font-semibold mb-2">
              Welcome back, {studentName}!
            </h3>
            <div className="flex gap-6">
              <div className="bg-white rounded shadow p-4 flex-1 text-center">
                <div className="text-sm text-gray-500">Upcoming Sessions</div>
                <div className="text-2xl font-bold mt-2">2</div>
              </div>
              <div className="bg-white rounded shadow p-4 flex-1 text-center">
                <div className="text-sm text-gray-500">Total Hours</div>
                <div className="text-2xl font-bold mt-2">1.5</div>
              </div>
            </div>
          </div>

          {/* Upcoming Sessions */}
          <section className="mb-8">
            <h4 className="text-md font-semibold mb-2">Upcoming Sessions</h4>
            <div className="bg-white rounded shadow p-4">
              {upcomingSessions.map((session) => (
                <div
                  key={session.id}
                  className="border-b last:border-b-0 py-4 flex items-center justify-between"
                >
                  <div>
                    <div className="font-semibold">{session.subject}</div>
                    <div className="text-sm text-gray-500">
                      {session.date} | {session.time}
                    </div>
                    <div className="text-sm text-gray-500">{session.tutor}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-xs">
                      {session.status}
                    </span>
                    <button
                      className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700"
                      onClick={() => setDetailSession(session.id)}
                    >
                      Detail
                    </button>
                    <button className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded text-xs hover:bg-yellow-200">
                      Reschedule
                    </button>
                    <button className="bg-red-100 text-red-700 px-3 py-1 rounded text-xs hover:bg-red-200">
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Completed Sessions */}
          <section>
            <h4 className="text-md font-semibold mb-2">Completed Sessions</h4>
            <div className="bg-white rounded shadow p-4">
              {completedSessions.map((session) => (
                <div
                  key={session.id}
                  className="border-b last:border-b-0 py-4 flex items-center justify-between"
                >
                  <div>
                    <div className="font-semibold">{session.subject}</div>
                    <div className="text-sm text-gray-500">
                      {session.date} | {session.time}
                    </div>
                    <div className="text-sm text-gray-500">{session.tutor}</div>
                  </div>
                  <button className="bg-yellow-300 text-white px-4 py-1 rounded text-xs font-semibold hover:bg-yellow-400">
                    Rating
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Detail Modal */}
      {sessionDetail && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-8 relative">
            <button
              className="absolute top-4 right-4 text-xl font-bold text-gray-400 hover:text-gray-600"
              onClick={() => setDetailSession(null)}
            >
              ×
            </button>
            <h3 className="text-lg font-bold mb-4">{sessionDetail.subject}</h3>
            <div>
              <div className="font-semibold mb-2">Materials from Tutor</div>
              {sessionDetail.materials.length === 0 ? (
                <div className="text-gray-500 text-sm">
                  No materials available.
                </div>
              ) : (
                <ul className="space-y-4">
                  {sessionDetail.materials.map((material, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between bg-gray-100 rounded p-4"
                    >
                      <div className="flex items-center gap-2">
                        <span className="bg-blue-200 text-blue-700 rounded-full p-2">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </span>
                        <span className="font-medium">{material.title}</span>
                      </div>
                      <a
                        href={material.link}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold"
                        download
                      >
                        Download
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import Sidebar from "../../_components/sidebar";
import StudentTopBar from "@/app/_components/topbar";
import { navigateData } from "../_components/navigatedata";
import TopBar from "@/app/_components/topbar";
const oldSessions = [
  {
    id: 1,
    subject: "Web Development",
    date: "Saturday, 29/11/2025",
    time: "14:00 - 16:00",
    tutor: "Tutor Name",
    feedback: {
      rating: 5,
      comment: "Very good",
    },
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
    subject: "Principles of Programming Languages",
    date: "Thursday, 13/11/2025",
    time: "8:00 - 9:30",
    tutor: "Tutor Name",
    feedback: {
      rating: 4,
      comment: "Good session",
    },
    materials: [],
  },
];

export default function OldSessions() {
  const [detailSession, setDetailSession] = useState<number | null>(null);
  const sessionDetail = oldSessions.find((s) => s.id === detailSession);

  return (
    <div className="flex min-h-screen bg-gray-100 text-black">
      <Sidebar chosenIndex={3} navigateData={navigateData} />
      <main className="flex-1">
        <TopBar username="Nguyen Van A" dashboardContent="Old Sessions"></TopBar>
        <div className="p-10">
          <section className="max-w-2xl mx-auto">
            <h3
              className="text-2xl font-bold mb-6 text-center border rounded-lg py-4 bg-white shadow"
              style={{ borderColor: "#3b82f6", borderWidth: "2px" }}
            >
              Old Sessions
            </h3>
            <div className="bg-white rounded shadow p-4">
              {oldSessions.map((session) => (
                <div
                  key={session.id}
                  className="border-b last:border-b-0 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                  onClick={() => setDetailSession(session.id)}
                >
                  <div>
                    <div className="font-semibold">{session.subject}</div>
                    <div className="text-sm text-gray-500">
                      {session.date} | {session.time}
                    </div>
                    <div className="text-sm text-gray-500">{session.tutor}</div>
                  </div>
                  <span className="text-2xl text-gray-400">&gt;</span>
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
            <div className="mb-6">
              <div className="font-semibold mb-2">Your Feedback</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-400 text-lg">★</span>
                <span className="font-semibold">
                  {sessionDetail.feedback.rating}/5
                </span>
              </div>
              <input
                type="text"
                value={sessionDetail.feedback.comment}
                readOnly
                className="w-full border rounded px-3 py-2 bg-gray-100"
              />
            </div>
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

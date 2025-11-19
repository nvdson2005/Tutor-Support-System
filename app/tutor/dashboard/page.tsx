"use client";

import { useState } from "react";
import Sidebar from "../../_components/sidebar";
import { navigateData } from "../_components/navigatedata";
export default function TutorDashboard() {
  const [upcomingSessions, setUpcomingSessions] = useState<
    Array<{
      id: number;
      subject: string;
      date: string;
      time: string;
      student: string;
      inPerson: boolean;
      location: string;
      materials: Array<{ title: string; link: string }>;
    }>
  >([
    {
      id: 1,
      subject: "Database Design",
      date: "Monday, 22/12/2025",
      time: "08:00 - 10:00",
      student: "Student Name",
      inPerson: true,
      location: "BKH6 - 110",
      materials: [
        { title: "Data Structures and Algorithms", link: "#" },
        { title: "Khan Academy - Big O Notation", link: "#" },
      ],
    },
    {
      id: 2,
      subject: "Data Structures & Algorithms",
      date: "Tuesday, 23/12/2025",
      time: "10:00 - 12:00",
      student: "Student Name",
      inPerson: false,
      location: "",
      materials: [],
    },
    {
      id: 3,
      subject: "Web Development",
      date: "Wednesday, 24/12/2025",
      time: "13:00 - 15:00",
      student: "Student Name",
      inPerson: true,
      location: "BKH6 - 110",
      materials: [],
    },
    {
      id: 4,
      subject: "OS Overview",
      date: "Thursday, 25/12/2025",
      time: "08:00 - 09:30",
      student: "Student Name",
      inPerson: true,
      location: "BKH6 - 110",
      materials: [],
    },
    {
      id: 5,
      subject: "Computer Networking",
      date: "Thursday, 25/12/2025",
      time: "10:00 - 11:30",
      student: "Student Name",
      inPerson: false,
      location: "",
      materials: [],
    },
  ]);

  const [pendingRequests, setPendingRequests] = useState([
    {
      id: 6,
      subject: "Topic: Multidisciplinary Project",
      date: "Monday, 22/12/2025",
      time: "08:00 - 10:00",
      student: "Student Name",
      inPerson: true,
      location: "",
    },
    {
      id: 7,
      subject: "Software Architecture",
      date: "Tuesday, 23/12/2025",
      time: "08:00 - 9:30",
      student: "Student Name",
      inPerson: false,
      location: "",
    },
  ]);

  const [completedSessions, setCompletedSessions] = useState([
    {
      id: 8,
      subject: "Topic: Multidisciplinary Project",
      date: "Monday, 22/12/2025",
      time: "08:00 - 10:00",
      student: "Student Name",
      inPerson: true,
      summary: null,
    },
    {
      id: 9,
      subject: "Software Architecture",
      date: "Tuesday, 23/12/2025",
      time: "08:00 - 9:30",
      student: "Student Name",
      inPerson: false,
      summary: null,
    },
  ]);
  const [tab, setTab] = useState<"upcoming" | "pending" | "completed">(
    "completed"
  );
  const [modal, setModal] = useState<null | {
    type: string;
    sessionId?: number;
  }>(null);
  const [progress, setProgress] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [location, setLocation] = useState<string>("BKH6 - 110");
  const [sharedMaterials, setSharedMaterials] = useState(
    upcomingSessions[0].materials
  );

  // Find session for modals
  const sessionDetail =
    tab === "upcoming"
      ? upcomingSessions.find((s) => s.id === modal?.sessionId)
      : tab === "completed"
      ? completedSessions.find((s) => s.id === modal?.sessionId)
      : pendingRequests.find((s) => s.id === modal?.sessionId);

  return (
    <div className="text-black flex min-h-screen bg-gray-100">
      <Sidebar chosenIndex={0} navigateData={navigateData} />
      <main className="flex-1">
        <div className="w-full flex justify-between items-center px-6 py-8 bg-white shadow">
          <h2 className="text-2xl font-bold">Tutor Dashboard</h2>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Tutor Name</span>
            <span className="w-8 h-8 rounded-full bg-gray-300 inline-block"></span>
          </div>
        </div>
        <div className="p-10">
          <h3 className="text-lg font-semibold mb-4">Welcome back!</h3>
          <div className="mb-6">
            <div className="flex gap-2 mb-4">
              <button
                className={`px-4 py-2 rounded ${
                  tab === "upcoming"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 border"
                }`}
                onClick={() => setTab("upcoming")}
              >
                Upcoming Sessions
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  tab === "pending"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 border"
                }`}
                onClick={() => setTab("pending")}
              >
                Pending Requests
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  tab === "completed"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 border"
                }`}
                onClick={() => setTab("completed")}
              >
                Completed Sessions
              </button>
            </div>
            {/* Tab Content */}
            {tab === "upcoming" && (
              <div className="bg-white rounded shadow p-4">
                <h4 className="font-bold mb-2">Upcoming Sessions</h4>
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
                      <div className="text-sm text-gray-500">
                        {session.student}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700"
                        onClick={() =>
                          setModal({ type: "detail", sessionId: session.id })
                        }
                      >
                        Detail
                      </button>
                      <button className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700">
                        Join Meeting
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {tab === "pending" && (
              <div className="bg-white rounded shadow p-4">
                <h4 className="font-bold mb-2">Pending Requests</h4>
                {pendingRequests.map((session) => (
                  <div
                    key={session.id}
                    className="border-b last:border-b-0 py-4 flex items-center justify-between"
                  >
                    <div>
                      <div className="font-semibold">{session.subject}</div>
                      <div className="text-sm text-gray-500">
                        {session.date} | {session.time}
                      </div>
                      <div className="text-sm text-gray-500">
                        {session.student}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700"
                        onClick={() => {
                          if (session.inPerson) {
                            setModal({ type: "accept", sessionId: session.id });
                          } else {
                            setUpcomingSessions((prev) => [
                              ...prev,
                              {
                                id: session.id,
                                subject: session.subject,
                                date: session.date,
                                time: session.time,
                                student: session.student,
                                inPerson: session.inPerson,
                                location: session.location,
                                materials: [],
                              },
                            ]);
                            setPendingRequests((prev) =>
                              prev.filter((s) => s.id !== session.id)
                            );
                            setModal(null);
                          }
                        }}
                      >
                        Accept
                      </button>
                      <button className="bg-red-600 text-white px-3 py-1 rounded text-xs hover:bg-red-700">
                        Decline
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {tab === "completed" && (
              <div className="bg-white rounded shadow p-4">
                <h4 className="font-bold mb-2">Completed Sessions</h4>
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
                      <div className="text-sm text-gray-500">
                        {session.student}
                      </div>
                      <div className="text-sm text-gray-500">
                        {session.inPerson
                          ? "In-Person Session"
                          : "Online Session"}
                      </div>
                    </div>
                    <button
                      className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700"
                      onClick={() =>
                        setModal({ type: "summary", sessionId: session.id })
                      }
                    >
                      Summary
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Modal: Detail (Materials) */}
      {modal?.type === "detail" && sessionDetail && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-8 relative">
            <button
              className="absolute top-4 right-4 text-xl font-bold text-gray-400 hover:text-gray-600"
              onClick={() => setModal(null)}
            >
              ×
            </button>
            <h3 className="text-lg font-bold mb-4">{sessionDetail.subject}</h3>
            <div className="mb-4">
              <div className="font-semibold mb-2">
                Share new materials in this Session
              </div>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Search HCMUT Library for textbooks, articles, ..."
                  className="border rounded px-3 py-2 flex-1"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  🔍
                </button>
              </div>
              <div className="font-semibold mb-2">
                Shared materials for students
              </div>
              <ul className="space-y-4">
                {sharedMaterials.map((material, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between bg-gray-100 rounded p-4"
                  >
                    <span className="font-medium">{material.title}</span>
                    <button
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 font-semibold"
                      onClick={() =>
                        setSharedMaterials(
                          sharedMaterials.filter((_, i) => i !== idx)
                        )
                      }
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Accept (Choose Location) */}
      {modal?.type === "accept" && sessionDetail && sessionDetail.inPerson && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-8 relative">
            <button
              className="absolute top-4 right-4 text-xl font-bold text-gray-400 hover:text-gray-600"
              onClick={() => setModal(null)}
            >
              ×
            </button>
            <h3 className="text-lg font-bold mb-4">Choose Location</h3>
            <div className="mb-4 text-sm">
              This is in-person session. Please choose location.
            </div>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border rounded px-3 py-2 w-full mb-4"
            />
            <div className="flex gap-2 justify-end">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold"
                onClick={() => setModal(null)}
              >
                Accept
              </button>
              <button
                className="bg-red-100 text-red-700 px-4 py-2 rounded hover:bg-red-200 font-semibold"
                onClick={() => setModal(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Summary (Record Session Summary) */}
      {modal?.type === "summary" && sessionDetail && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-8 relative">
            <button
              className="absolute top-4 right-4 text-xl font-bold text-gray-400 hover:text-gray-600"
              onClick={() => setModal(null)}
            >
              ×
            </button>
            <h3 className="text-lg font-bold mb-4">Record Session Summary</h3>
            <div className="mb-6">
              <div className="font-semibold mb-2">
                Student Progress Tracking
              </div>
              <textarea
                value={progress}
                onChange={(e) => setProgress(e.target.value)}
                placeholder="Add new progress note"
                className="border rounded px-3 py-2 w-full mb-2"
                rows={2}
              />
              <button className="text-blue-600 text-sm font-semibold mb-2">
                + Add New Progress Note
              </button>
            </div>
            <div className="mb-6">
              <div className="font-semibold mb-2">Session Summary</div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="border rounded px-3 py-2 w-full"
                rows={3}
              />
            </div>
            <div className="flex gap-2 justify-end">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold"
                onClick={() => setModal(null)}
              >
                Save
              </button>
              <button
                className="bg-red-100 text-red-700 px-4 py-2 rounded hover:bg-red-200 font-semibold"
                onClick={() => setModal(null)}
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

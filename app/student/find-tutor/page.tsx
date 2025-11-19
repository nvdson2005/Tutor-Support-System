"use client";

import { useState } from "react";
import Sidebar from "../../_components/sidebar";
import StudentTopBar from "@/app/_components/studenttopbar";
import { navigateData } from "../_components/navigatedata";
const tutors = [
  {
    id: 1,
    name: "Nguyen Tutor",
    rating: 4.8,
    reviews: 12,
    subjects: ["Data Structures", "Algorithms"],
    profile: "Experienced tutor in Computer Science. Graduated from HCMUT.",
    detail: `Nguyen Tutor has 5 years of experience teaching Data Structures and Algorithms. He is passionate about helping students succeed in computer science.`,
    review: [
      { user: "Student A", rating: 5, comment: "Great tutor!" },
      { user: "Student B", rating: 4, comment: "Very helpful." },
    ],
  },
  {
    id: 2,
    name: "Le Tutor",
    rating: 4.5,
    reviews: 8,
    subjects: ["Operating System", "Networking"],
    profile: "Specialist in OS and Networking. 3 years tutoring experience.",
    detail: `Le Tutor focuses on practical OS and Networking concepts. Students appreciate his clear explanations.`,
    review: [
      { user: "Student C", rating: 5, comment: "Explains well." },
    ],
  },
];

const bookedSessions = [
  {
    id: 1,
    tutor: "Nguyen Tutor",
    date: "2025-12-20",
    time: "13:00 - 15:00",
    topic: "Data Structures",
    status: "Upcoming",
  },
];

export default function FindTutor() {
  const [modal, setModal] = useState<null | { type: string; tutorId?: number; sessionId?: number }>(null);
  const [booking, setBooking] = useState({
    tutorId: null as number | null,
    date: "2025-12-20",
    time: "13:00 - 15:00",
    topic: "",
    description: "",
  });

  // Modal content
  const tutorDetail = tutors.find((t) => t.id === modal?.tutorId);
  const bookedSessionDetail = bookedSessions.find((s) => s.id === modal?.sessionId);

  return (
    <div className="flex min-h-screen bg-gray-100 text-black">
      <Sidebar chosenIndex={1} navigateData={navigateData} />
      <main className="flex-1">
        <StudentTopBar studentName="Nguyen Van A" />
        <div className="p-10">
          <section className="max-w-5xl mx-auto">
            <div className="flex gap-8">
              {/* Tutor List */}
              <div className="flex-1 bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-bold mb-4">Find Tutor</h3>
                <div className="space-y-4">
                  {tutors.map((tutor) => (
                    <div key={tutor.id} className="border rounded-lg p-4 flex items-center justify-between">
                      <div>
                        <div className="font-semibold">{tutor.name}</div>
                        <div className="text-sm text-gray-500">{tutor.subjects.join(", ")}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-yellow-400">★</span>
                          <span>{tutor.rating}</span>
                          <span className="text-xs text-gray-400">({tutor.reviews} reviews)</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700"
                          onClick={() => setModal({ type: "detail", tutorId: tutor.id })}
                        >
                          Detail
                        </button>
                        <button
                          className="bg-yellow-500 text-white px-3 py-1 rounded text-xs hover:bg-yellow-600"
                          onClick={() => setModal({ type: "review", tutorId: tutor.id })}
                        >
                          Review
                        </button>
                        <button
                          className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700"
                          onClick={() => {
                            setBooking({
                              tutorId: tutor.id,
                              date: "2025-12-20",
                              time: "13:00 - 15:00",
                              topic: "",
                              description: "",
                            });
                            setModal({ type: "book", tutorId: tutor.id });
                          }}
                        >
                          Book Tutor
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Booked Sessions */}
              <div className="w-96 bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-4">Book Session</h3>
                <div className="space-y-4">
                  {bookedSessions.map((session) => (
                    <div
                      key={session.id}
                      className="border rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                      onClick={() => setModal({ type: "booked-detail", sessionId: session.id })}
                    >
                      <div>
                        <div className="font-semibold">{session.tutor}</div>
                        <div className="text-sm text-gray-500">{session.date} | {session.time}</div>
                        <div className="text-sm text-gray-500">{session.topic}</div>
                      </div>
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">{session.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Modal: Tutor Detail */}
      {modal?.type === "detail" && tutorDetail && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-8 relative">
            <button
              className="absolute top-4 right-4 text-xl font-bold text-gray-400 hover:text-gray-600"
              onClick={() => setModal(null)}
            >
              ×
            </button>
            <h3 className="text-lg font-bold mb-4">{tutorDetail.name}</h3>
            <div className="mb-2 font-semibold">Subjects: {tutorDetail.subjects.join(", ")}</div>
            <div className="mb-4">{tutorDetail.detail}</div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">★</span>
              <span>{tutorDetail.rating}</span>
              <span className="text-xs text-gray-400">({tutorDetail.reviews} reviews)</span>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Tutor Review */}
      {modal?.type === "review" && tutorDetail && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-8 relative">
            <button
              className="absolute top-4 right-4 text-xl font-bold text-gray-400 hover:text-gray-600"
              onClick={() => setModal(null)}
            >
              ×
            </button>
            <h3 className="text-lg font-bold mb-4">Reviews for {tutorDetail.name}</h3>
            <ul className="space-y-4">
              {tutorDetail.review.map((r, idx) => (
                <li key={idx} className="bg-gray-100 rounded p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-yellow-400">★</span>
                    <span className="font-semibold">{r.rating}</span>
                    <span className="text-gray-700">{r.user}</span>
                  </div>
                  <div className="text-gray-600">{r.comment}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Modal: Book Tutor */}
      {modal?.type === "book" && tutorDetail && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-8 relative">
            <button
              className="absolute top-4 right-4 text-xl font-bold text-gray-400 hover:text-gray-600"
              onClick={() => setModal(null)}
            >
              ×
            </button>
            <h3 className="text-lg font-bold mb-4">Create Booking Request</h3>
            <div className="mb-2">Tutor: <span className="font-semibold">{tutorDetail.name}</span></div>
            <div className="mb-2">Date: <span className="font-semibold">{booking.date}</span></div>
            <div className="mb-2 flex gap-2 items-center">
              <span>Time:</span>
              <input
                type="text"
                value={booking.time}
                onChange={e => setBooking({ ...booking, time: e.target.value })}
                className="border rounded px-2 py-1 w-32"
              />
            </div>
            <div className="mb-2">
              <span>Topic:</span>
              <input
                type="text"
                value={booking.topic}
                onChange={e => setBooking({ ...booking, topic: e.target.value })}
                className="border rounded px-2 py-1 w-full"
              />
            </div>
            <div className="mb-4">
              <span>Description/Question:</span>
              <textarea
                value={booking.description}
                onChange={e => setBooking({ ...booking, description: e.target.value })}
                className="border rounded px-2 py-1 w-full mt-1"
                rows={3}
              />
            </div>
            <div className="flex gap-2 justify-end">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold"
                onClick={() => setModal(null)}
              >
                Confirm
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

      {/* Modal: Booked Session Detail */}
      {modal?.type === "booked-detail" && bookedSessionDetail && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-8 relative">
            <button
              className="absolute top-4 right-4 text-xl font-bold text-gray-400 hover:text-gray-600"
              onClick={() => setModal(null)}
            >
              ×
            </button>
            <h3 className="text-lg font-bold mb-4">Confirm Booking</h3>
            <div className="mb-2">Tutor: <span className="font-semibold">{bookedSessionDetail.tutor}</span></div>
            <div className="mb-2">Date: <span className="font-semibold">{bookedSessionDetail.date}</span></div>
            <div className="mb-2">Time: <span className="font-semibold">{bookedSessionDetail.time}</span></div>
            <div className="mb-2">Topic: <span className="font-semibold">{bookedSessionDetail.topic}</span></div>
            <div className="mb-2">Status: <span className="font-semibold">{bookedSessionDetail.status}</span></div>
            <div className="flex gap-2 justify-end mt-4">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold"
                onClick={() => setModal(null)}
              >
                Confirm
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
"use client";

import { useState } from "react";
import Sidebar from "../../_components/sidebar";
import { navigateData } from "../_components/navigatedata";
import TopBar from "@/app/_components/topbar";

// --- Icons (SVG Components - Đã cập nhật màu sắc) ---
const CalendarIcon = () => (
  <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
);
const ClockIcon = () => (
  <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);
const LocationIcon = () => (
  <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
);
const MonitorIcon = () => (
  <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
);
const UserIcon = () => (
  <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
);
const BookIcon = () => (
  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
);
const ChevronRight = () => (
    <svg className="w-6 h-6 text-gray-300 group-hover:text-[#3B4EAA] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
);
const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
);

// --- Data ---
const oldSessions = [
  {
    id: 1,
    subject: "Web Development",
    date: "Saturday, 25/10/2025",
    time: "14:00 - 16:00",
    tutor: "Tutor NameX",
    mode: "Online Session",
    feedbacks: [
      { user: "Student A", rating: 5, comment: "Very good" },
      { user: "Student B", rating: 5, comment: "Nice Tutor!" },
    ],
    materials: [
      { title: "Data Structrures and Algorithms", author: "By Robert Sedgewick", link: "#" },
      { title: "Khan Academy - Big O Notation", author: "", link: "#" },
    ],
  },
  {
    id: 2,
    subject: "Principles of Programming Languages",
    date: "Thursday, 15/12/2025",
    time: "8:00 - 9:30",
    tutor: "Tutor NameY",
    mode: "BKH3-311",
    feedbacks: [],
    materials: [],
  },
];

export default function TutorOldSessions() {
  const [detailSession, setDetailSession] = useState<number | null>(null);
  const sessionDetail = oldSessions.find(s => s.id === detailSession);

  return (
    <div className="flex min-h-screen bg-gray-50 text-black font-sans">
      <Sidebar chosenIndex={3} navigateData={navigateData} />
      <main className="flex-1">
        <TopBar username="Nguyen Van A" dashboardContent="Old Sessions"></TopBar>
        
        <div className="p-10 max-w-5xl mx-auto">
            {/* Main Card */}
            {/* Thêm border-t (viền trên) màu xanh đậm để tạo điểm nhấn */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 border-t-[6px] border-t-[#3B4EAA] overflow-hidden min-h-[500px]">
                
                {/* Header */}
                <div className="pt-8 pb-4 text-center">
                    <h3 className="text-2xl font-bold text-[#3B4EAA]">Old Sessions</h3>
                </div>

                <div className="px-8 pb-8">
                    {/* Border top decoration inside */}
                    <div className="border-t border-gray-100 mb-4"></div>

                    <div className="divide-y divide-gray-100">
                        {oldSessions.map((session) => (
                            <div
                                key={session.id}
                                // Hover: Đổi sang bg-blue-50/50 thay vì gray-50 để có chút sắc xanh nhẹ
                                className="py-6 flex items-center justify-between cursor-pointer hover:bg-blue-50/50 transition-colors group px-4 rounded-lg -mx-4"
                                onClick={() => setDetailSession(session.id)}
                            >
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#3B4EAA] transition-colors">{session.subject}</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 text-sm text-gray-600">
                                        {/* Các Icon đã có màu riêng ở trên component */}
                                        <div className="flex items-center"><CalendarIcon /> {session.date}</div>
                                        <div className="flex items-center">
                                            {session.mode.includes("Online") ? <MonitorIcon /> : <LocationIcon />}
                                            <span className={`ml-1 font-medium ${session.mode.includes("Online") ? "text-green-600" : "text-gray-700"}`}>
                                              {session.mode}
                                            </span>
                                        </div>
                                        <div className="flex items-center"><ClockIcon /> {session.time}</div>
                                        <div className="flex items-center"><UserIcon /> {session.tutor}</div>
                                    </div>
                                </div>
                                <div className="pl-4">
                                    <ChevronRight />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </main>

      {/* --- Detail Modal --- */}
      {sessionDetail && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in zoom-in duration-200 p-4">
          <div className="bg-[#F3F4F6] rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden relative max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header - Thêm màu nền xanh để nổi bật */}
            <div className="bg-[#3B4EAA] p-6 flex justify-between items-start border-b sticky top-0 z-10">
                 <h3 className="text-2xl font-bold text-white pr-10">{sessionDetail.subject}</h3>
                 <button
                    className="bg-white/20 hover:bg-white/30 text-white rounded-md w-8 h-8 flex items-center justify-center transition absolute top-6 right-6 backdrop-blur-sm"
                    onClick={() => setDetailSession(null)}
                 >
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                 </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-8">
                
                {/* 1. Feedbacks Section */}
                <div>
                    <h4 className="font-bold text-lg mb-4 text-[#3B4EAA]">Feedbacks</h4>
                    {sessionDetail.feedbacks.length > 0 ? (
                        <div className="space-y-4">
                            {sessionDetail.feedbacks.map((fb, idx) => (
                                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="font-bold text-gray-800">{fb.user}</span>
                                        <div className="flex items-center gap-1 font-bold text-sm text-yellow-500">
                                            <StarIcon /> {fb.rating}/5
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded-lg text-gray-700 text-sm border border-gray-100">
                                        {fb.comment}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 italic">No feedbacks recorded.</p>
                    )}
                </div>

                {/* 2. Materials Section */}
                <div>
                    <h4 className="font-bold text-lg mb-4 text-[#3B4EAA]">Materials from Tutor</h4>
                    {sessionDetail.materials.length > 0 ? (
                        <div className="space-y-4">
                            {sessionDetail.materials.map((material, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-blue-600">
                                            <BookIcon />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 text-sm md:text-base">{material.title}</h5>
                                            {material.author && <p className="text-xs text-gray-500">{material.author}</p>}
                                        </div>
                                    </div>
                                    <a 
                                        href={material.link} 
                                        className="bg-[#3B4EAA] hover:bg-blue-800 text-white px-5 py-2 rounded-lg font-bold text-sm shadow-sm transition whitespace-nowrap"
                                        download
                                    >
                                        Download
                                    </a>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 italic">No materials uploaded.</p>
                    )}
                </div>
            </div>

            <div className="h-6"></div>
          </div>
        </div>
      )}
    </div>
  );
}
"use client";

import React, { useState } from "react";
import Sidebar from "@/app/_components/sidebar";
import TopBar from "@/app/_components/topbar";
import { navigateData } from "../_components/navigatedata";

// --- Types & Data ---
const studentName: string = "Nguyen Van A";

const upcomingSessions = [
  {
    id: 1,
    subject: "Data Structures & Algorithms",
    date: "Saturday, 25/10/2025",
    time: "14:00 - 16:00",
    tutor: "Tutor NameX",
    mode: "Online Session",
    status: "Go Online",
    materials: [
      {
        title: "Data Structures and Algorithms",
        author: "By Robert Sedgewick",
        link: "#",
      },
      {
        title: "Khan Academy - Big O Notation",
        author: "By Khan Academy",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    subject: "Operating System",
    date: "Thursday, 15/12/2025",
    time: "8:00 - 9:30",
    tutor: "Tutor NameY",
    mode: "BKH3-311",
    status: "", 
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

// --- Icons (SVG) ---
const CalendarIcon = () => (
  <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
);
const ClockIcon = () => (
  <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);
const MonitorIcon = () => (
  <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
);
const LocationIcon = () => (
  <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
);
const UserIcon = () => (
  <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
);
const BookIcon = () => (
  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
);
const ChevronRightIcon = ({ rotated }: { rotated: boolean }) => (
  <svg 
    className={`w-6 h-6 text-gray-400 transform transition-transform duration-200 ${rotated ? 'rotate-90' : ''}`} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
  </svg>
);

export default function StudentDashboard() {
  const [detailSession, setDetailSession] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null); // State for accordion

  const sessionDetail = upcomingSessions.find((s) => s.id === detailSession);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-black font-sans">
      {/* Sidebar */}
      <Sidebar chosenIndex={0} navigateData={navigateData} />

      {/* Main Content */}
      <main className="flex-1">
        <TopBar username={studentName} dashboardContent="Student Dashboard"></TopBar>
        <div className="p-8 max-w-6xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 font-serif">
              Welcome back, {studentName}!
            </h3>
            <p className="text-gray-500 mb-6 text-sm">Here's what's happening with your tutoring sessions today</p>
            
            <div className="flex gap-6">
              <div className="bg-white rounded-xl shadow-sm border p-6 flex-1 flex items-center justify-between">
                <div>
                  <div className="text-gray-600 font-medium">Upcoming Sessions</div>
                  <div className="text-3xl font-bold mt-1">2</div>
                </div>
                <div className="bg-red-100 p-3 rounded-lg">
                   <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border p-6 flex-1 flex items-center justify-between">
                <div>
                  <div className="text-gray-600 font-medium">Total Hours</div>
                  <div className="text-3xl font-bold mt-1">1.5</div>
                </div>
                 <div className="bg-yellow-100 p-3 rounded-lg">
                   <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Sessions Section (Updated) */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden mb-10">
            {/* Header with Teal Top Border */}
            <div className="border-t-[5px] border-[#0e7490] p-5 text-center border-b">
               <h4 className="text-2xl font-bold text-black">Upcoming Sessions</h4>
            </div>

            {/* List */}
            <div>
              {upcomingSessions.map((session) => {
                const isExpanded = expandedId === session.id;
                return (
                  <div
                    key={session.id}
                    className="border-b last:border-b-0 transition-colors hover:bg-gray-50"
                  >
                    {/* Main Row - Clickable to Expand */}
                    <div 
                      className="p-6 cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                      onClick={() => toggleExpand(session.id)}
                    >
                      {/* Left Info */}
                      <div className="flex-1">
                        <h5 className="text-xl font-bold mb-3 font-serif">{session.subject}</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-12 text-sm text-gray-700">
                          <div className="flex items-center">
                            <CalendarIcon /> {session.date}
                          </div>
                          <div className="flex items-center">
                            {session.mode.includes("Online") ? <MonitorIcon /> : <LocationIcon/>} 
                            {session.mode}
                          </div>
                          <div className="flex items-center">
                            <ClockIcon /> {session.time}
                          </div>
                          <div className="flex items-center">
                            <UserIcon /> {session.tutor}
                          </div>
                        </div>
                      </div>

                      {/* Right Actions & Indicator */}
                      <div className="flex items-center gap-4 self-end md:self-center">
                        {session.status === "Go Online" && (
                           <button 
                             className="bg-[#8EDE61] text-green-900 font-bold px-6 py-2 rounded-full text-sm shadow-sm hover:opacity-90 transition"
                             onClick={(e) => e.stopPropagation()} // Prevent expansion when clicking Go Online
                           >
                             Go Online
                           </button>
                        )}
                        <ChevronRightIcon rotated={isExpanded} />
                      </div>
                    </div>

                    {/* Expanded Actions */}
                    {isExpanded && (
                      <div className="px-6 pb-6 pt-0 flex gap-3 animate-in slide-in-from-top-2 duration-200">
                         <div className="w-full h-px bg-gray-100 mb-4 hidden"></div>
                         <button 
                            onClick={() => setDetailSession(session.id)}
                            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition"
                         >
                           Detail
                         </button>
                         <button className="border border-yellow-500 text-yellow-600 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-50 transition">
                           Reschedule
                         </button>
                         <button className="border border-red-500 text-red-500 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-red-50 transition">
                           Cancel
                         </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Completed Sessions */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden mt-8">
             <div className="border-t-[5px] border-[#22c55e] p-4 text-center border-b">
               <h4 className="text-2xl font-bold text-black">Completed Sessions</h4>
            </div>
            <div className="p-0">
              {completedSessions.map((session) => (
                <div
                  key={session.id}
                  className="border-b last:border-b-0 p-6 flex items-center justify-between"
                >
                  <div>
                    <div className="font-bold text-xl font-serif">{session.subject}</div>
                    <div className="text-sm text-gray-500 mt-1 flex gap-4">
                      <span>{session.date} | {session.time}</span>
                    </div>
                    <div className="text-sm text-gray-500 flex items-center mt-1">
                        <UserIcon/> {session.tutor}
                    </div>
                  </div>
                  <button className="bg-yellow-300 text-black px-8 py-2 rounded-lg text-md font-medium shadow-sm hover:bg-yellow-400">
                    Rating
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* --- Detail Modal --- */}
      {sessionDetail && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#F3F4F6] rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden relative animate-in fade-in zoom-in duration-200">
            
            {/* Header */}
            <div className="bg-white p-6 border-b flex justify-between items-start">
                 <h3 className="text-2xl font-bold text-gray-800 pr-10">
                    {sessionDetail.subject}
                 </h3>
                 <button
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-md w-8 h-8 flex items-center justify-center transition absolute top-6 right-6"
                    onClick={() => setDetailSession(null)}
                 >
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                 </button>
            </div>

            {/* Body */}
            <div className="p-8">
              <div className="font-bold text-lg mb-4 text-gray-800">Materials from Tutor</div>
              
              {sessionDetail.materials.length === 0 ? (
                <div className="text-center py-10 bg-white rounded-lg border border-dashed text-gray-400">
                  No materials uploaded for this session.
                </div>
              ) : (
                <div className="space-y-4">
                  {sessionDetail.materials.map((material, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-4">
                        <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                           <BookIcon />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 leading-tight">{material.title}</h4>
                          {material.author && (
                              <p className="text-xs text-gray-400 mt-1">{material.author}</p>
                          )}
                        </div>
                      </div>
                      
                      <a
                        href={material.link}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-sm transition whitespace-nowrap"
                        download
                      >
                        Download
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="h-4 bg-[#F3F4F6]"></div>
          </div>
        </div>
      )}
    </div>
  );
}
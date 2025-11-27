"use client";

import { useState } from "react";
import Sidebar from "../../_components/sidebar";
import { navigateData } from "../_components/navigatedata";
import TopBar from "@/app/_components/topbar";

// --- Icons (SVG Components) ---
const CalendarIcon = () => (
  <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
);
const ClockIcon = () => (
  <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);
const LocationIcon = () => (
  <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
);
const MonitorIcon = () => (
  <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
);
const BookIcon = () => (
  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
);
const SearchIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
);
const ExclamationIcon = () => (
  <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
);
const PlusIcon = () => (
   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"></path></svg>
);

export default function TutorDashboard() {
  // ... (Phần Data State giữ nguyên như cũ)
  const [upcomingSessions, setUpcomingSessions] = useState<
    Array<{
      id: number;
      subject: string;
      date: string;
      time: string;
      student: string;
      inPerson: boolean;
      location: string;
      materials: Array<{ title: string; author?: string; link: string }>;
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
        { title: "Data Structrures and Algorithms", author: "By Robert Sedgewick", link: "#" },
        { title: "Khan Academy - Big O Notation", author: "", link: "#" },
      ],
    },
    {
      id: 2,
      subject: "Data Structures & Algorithms",
      date: "Tuesday, 23/12/2025",
      time: "10:00 - 12:00",
      student: "Student Name",
      inPerson: false,
      location: "Online Session",
      materials: [],
    },
    {
       id: 3,
       subject: "Web Development",
       date: "Wednesday, 24/12/2025",
       time: "13:00 - 15:00",
       student: "Student Name",
       inPerson: false,
       location: "Online Session",
       materials: [],
     },
  ]);

  const [pendingRequests, setPendingRequests] = useState([
     {
      id: 6,
      subject: "Topic in Multidisciplinary Project",
      date: "15/1/2026",
      time: "8:00 - 9:30",
      student: "Student Name",
      inPerson: false,
      location: "",
    },
    {
      id: 7,
      subject: "Software Architecture",
      date: "19/1/2026",
      time: "8:00 - 9:30",
      student: "Student Name",
      inPerson: true,
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

  const [tab, setTab] = useState<"upcoming" | "pending" | "completed">("upcoming");
  const [modal, setModal] = useState<null | {
    type: string;
    sessionId?: number;
  }>(null);
  const [progress, setProgress] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [location, setLocation] = useState<string>("BKH6 - 110");
  const [sharedMaterials, setSharedMaterials] = useState<any[]>([]);

  const openDetailModal = (session: any) => {
      setSharedMaterials(session.materials || []);
      setModal({ type: "detail", sessionId: session.id });
  };

  const sessionDetail =
    tab === "upcoming"
      ? upcomingSessions.find((s) => s.id === modal?.sessionId)
      : tab === "completed"
      ? completedSessions.find((s) => s.id === modal?.sessionId)
      : pendingRequests.find((s) => s.id === modal?.sessionId);

  return (
    <div className="text-black flex min-h-screen bg-gray-50 font-sans">
      <Sidebar chosenIndex={0} navigateData={navigateData} />
      <main className="flex-1">
        <TopBar username="Nguyen Van A" dashboardContent="Tutor Dashboard"></TopBar>
        
        <div className="p-8 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Welcome back!</h3>
          
          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-8">
            {[
              { id: "upcoming", label: "Upcoming Sessions" },
              { id: "pending", label: "Pending Requests" },
              { id: "completed", label: "Completed Sessions" }
            ].map((t) => (
              <button
                key={t.id}
                className={`px-6 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                  tab === t.id
                    ? "bg-[#3B4EAA] text-white border-[#3B4EAA]"
                    : "bg-white text-[#3B4EAA] border-[#3B4EAA] hover:bg-blue-50"
                }`}
                onClick={() => setTab(t.id as any)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-sm border overflow-hidden min-h-[400px]">
            {/* ... (Các tab Upcoming và Pending giữ nguyên) ... */}
            {tab === "upcoming" && (
              <>
                 <div className="p-4 border-b flex items-center gap-2">
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <h4 className="font-bold text-lg">Upcoming Sessions</h4>
                 </div>
                 <div className="divide-y">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1 space-y-2">
                           <h5 className="text-lg font-bold text-black">{session.subject}</h5>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-8 text-sm text-gray-600">
                              <div className="flex items-center"><CalendarIcon/> {session.date}</div>
                              <div className="flex items-center"><ClockIcon/> {session.time}</div>
                              <div className="flex items-center">
                                {session.inPerson ? <LocationIcon/> : <MonitorIcon/>}
                                {session.inPerson ? session.location : "Online Session"}
                              </div>
                           </div>
                        </div>
                        <div className="flex items-center gap-3">
                           {!session.inPerson && (
                              <button className="bg-[#65E956] text-white font-bold px-6 py-2 rounded-full text-sm shadow-sm hover:opacity-90 transition">
                                Join Meeting
                              </button>
                           )}
                           <button onClick={() => openDetailModal(session)} className="border border-[#3B4EAA] text-[#3B4EAA] font-semibold px-8 py-2 rounded-full text-sm hover:bg-blue-50 transition">
                             Detail
                           </button>
                        </div>
                      </div>
                    </div>
                  ))}
                 </div>
              </>
            )}
            
            {tab === "pending" && (
               <>
                 <div className="p-4 border-b flex items-center gap-2 bg-white">
                    <ExclamationIcon />
                    <h4 className="font-bold text-xl">Pending Requests</h4>
                 </div>
                 <div className="divide-y">
                   {pendingRequests.map((session) => (
                     <div key={session.id} className="p-6 hover:bg-gray-50 transition-colors flex justify-between items-start">
                        <div>
                           <div className="font-bold text-lg mb-2 text-black">{session.subject}</div>
                           <div className="text-sm text-gray-600 mb-1 font-medium">Proposed: {session.date} at {session.time}</div>
                           <div className="text-sm text-gray-600 font-medium">Session Type: {session.inPerson ? "In-person" : "Online"}</div>
                        </div>
                        <div className="flex flex-col gap-3 min-w-[120px]">
                           <button className="border border-[#3B4EAA] text-[#3B4EAA] px-6 py-1.5 rounded-full text-sm font-semibold hover:bg-blue-50 transition" onClick={() => { if (session.inPerson) { setModal({ type: "accept", sessionId: session.id }); } else { setUpcomingSessions(prev => [...prev, { ...session, inPerson: session.inPerson, location: "Online Session", materials: [] } as any]); setPendingRequests(prev => prev.filter(s => s.id !== session.id)); } }}>Accept</button>
                           <button className="bg-[#FF5D5D] text-white px-6 py-1.5 rounded-full text-sm font-semibold hover:bg-red-600 transition shadow-sm">Decline</button>
                        </div>
                     </div>
                   ))}
                 </div>
               </>
            )}

            {tab === "completed" && (
              <>
                 <div className="p-4 border-b flex items-center gap-2 bg-green-50">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h4 className="font-bold text-lg">Completed Sessions</h4>
                 </div>
                 <div className="divide-y">
                  {completedSessions.map((session) => (
                    <div key={session.id} className="p-6 hover:bg-gray-50 transition-colors flex justify-between items-center">
                       <div>
                          <div className="font-bold text-lg mb-1">{session.subject}</div>
                          <div className="text-sm text-gray-500 flex gap-4">
                             <span>{session.date}</span> | <span>{session.time}</span>
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                             {session.inPerson ? "In-Person" : "Online"} • {session.student}
                          </div>
                       </div>
                       <button className="border border-[#3B4EAA] text-[#3B4EAA] px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-50" onClick={() => setModal({ type: "summary", sessionId: session.id })}>Summary</button>
                    </div>
                  ))}
                 </div>
              </>
            )}
          </div>
        </div>
      </main>

      {/* --- MODALS --- */}
      {/* ... (Các modal Detail, Accept giữ nguyên) ... */}
      {modal?.type === "detail" && sessionDetail && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in zoom-in duration-200">
          <div className="bg-[#F3F4F6] rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden relative">
            <div className="bg-white p-6 flex justify-between items-start border-b">
                 <h3 className="text-2xl font-bold text-gray-800">{sessionDetail.subject}</h3>
                 <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md w-8 h-8 flex items-center justify-center transition" onClick={() => setModal(null)}>
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                 </button>
            </div>
            <div className="p-8 space-y-6">
               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="font-bold text-lg mb-4 text-gray-900">Share new materials in this Session</div>
                  <div className="flex gap-2">
                     <input type="text" placeholder="Search HCMUT Libary..." className="flex-1 bg-gray-100 border-none rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"/>
                     <button className="bg-[#123067] hover:bg-blue-900 text-white rounded-lg w-12 flex items-center justify-center"><SearchIcon /></button>
                  </div>
               </div>
               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-h-[200px]">
                  <div className="font-bold text-lg mb-4 text-gray-900">Shared materials for students</div>
                  <div className="space-y-4">
                    {sharedMaterials.map((m, idx) => (
                       <div key={idx} className="bg-white border rounded-xl p-4 flex items-center justify-between gap-4 shadow-sm">
                          <div className="flex items-center gap-4">
                             <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"><BookIcon /></div>
                             <div><h4 className="font-bold text-gray-900 text-sm md:text-base">{m.title}</h4>{m.author && <p className="text-xs text-gray-500">{m.author}</p>}</div>
                          </div>
                          <button onClick={() => setSharedMaterials(sharedMaterials.filter((_, i) => i !== idx))} className="bg-[#3B4EAA] hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-bold text-sm">Remove</button>
                       </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      )}

      {modal?.type === "accept" && (
         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in zoom-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-10 relative text-center">
               <h3 className="text-3xl font-bold mb-6 text-black">Choose Location</h3>
               <p className="text-lg text-black mb-8 leading-relaxed">This is in-person session.<br/>Please choose location.</p>
               <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full bg-[#F3F4F6] border border-gray-300 rounded-xl px-4 py-4 text-center text-xl text-black mb-10 outline-none focus:ring-2 focus:ring-blue-500 transition"/>
               <div className="flex justify-center gap-6">
                  <button onClick={() => setModal(null)} className="bg-[#3B4EAA] hover:bg-blue-800 text-white font-bold text-xl py-2.5 px-10 rounded-xl transition shadow-md hover:shadow-lg">Accept</button>
                  <button onClick={() => setModal(null)} className="bg-[#FF5D5D] hover:bg-red-600 text-white font-bold text-xl py-2.5 px-10 rounded-xl transition shadow-md hover:shadow-lg">Cancel</button>
               </div>
            </div>
         </div>
      )}

      {/* --- MODAL SUMMARY (UPDATED) --- */}
      {modal?.type === "summary" && (
         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in zoom-in duration-200">
            <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-2xl p-10 relative">
               
               {/* Title */}
               <h2 className="text-3xl font-bold text-center mb-8 text-black">Record Session Summary</h2>

               {/* Section 1: Progress Tracking */}
               <div className="border border-gray-300 rounded-xl mb-6 overflow-hidden">
                  <div className="border-b border-gray-300 p-4 bg-white">
                     <h3 className="text-[#3B4EAA] font-bold text-lg">Student Progress Tracking</h3>
                  </div>
                  <div className="p-0">
                     {/* Mock Data Display (Nếu có note trước đó) */}
                     {/* <div className="p-4 border-b border-gray-100">
                        <div className="font-bold">Student Name: ABCXYZ</div>
                        <div className="text-sm text-gray-500 mb-2">ID: 2313862</div>
                        <p className="text-sm text-gray-700">Solid understanding of quicksort and merge sort...</p>
                     </div> 
                     */}
                     
                     {/* Add Button */}
                     <button className="w-full py-4 text-[#3B4EAA] font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition">
                        <PlusIcon /> Add New Progress Note
                     </button>
                  </div>
               </div>

               {/* Section 2: Session Summary */}
               <div className="border border-gray-300 rounded-xl mb-10 overflow-hidden">
                  <div className="border-b border-gray-300 p-4 bg-white">
                     <h3 className="text-[#3B4EAA] font-bold text-lg">Session Summary</h3>
                  </div>
                  <div className="p-6">
                     <label className="block text-black font-bold mb-2">Description</label>
                     <textarea 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        className="w-full bg-[#F3F4F6] rounded-xl p-4 text-black outline-none focus:ring-2 focus:ring-blue-200 h-32 resize-none border-none placeholder-gray-400"
                        placeholder="Description"
                     ></textarea>
                  </div>
               </div>

               {/* Footer Buttons */}
               <div className="flex justify-center gap-6">
                  <button 
                     onClick={() => setModal(null)} 
                     className="bg-[#3B4EAA] hover:bg-blue-800 text-white font-bold text-xl py-2.5 px-12 rounded-xl transition shadow-md"
                  >
                     Save
                  </button>
                  <button 
                     onClick={() => setModal(null)} 
                     className="bg-[#FF5D5D] hover:bg-red-600 text-white font-bold text-xl py-2.5 px-12 rounded-xl transition shadow-md"
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
"use client";

import TopBar from "@/app/_components/topbar";
import { useState } from "react";
import Sidebar from "../../_components/sidebar";
import { navigateData } from "../_components/navigatedata";

// --- Icons (Updated Style) ---
const ChevronLeft = () => (
  <svg className="w-10 h-10 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full p-2 transition-all cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
);
const ChevronRight = () => (
  <svg className="w-10 h-10 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full p-2 transition-all cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
);
const PlusCircle = () => (
  <svg className="w-8 h-8 text-indigo-500 hover:text-indigo-700 cursor-pointer transition-transform hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);
const MinusCircle = () => (
  <svg className="w-8 h-8 text-indigo-300 hover:text-indigo-500 cursor-pointer transition-transform hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

// --- Data ---
const days = [
  { day: "Mon", date: "Oct 24", isToday: false },
  { day: "Tue", date: "Oct 25", isToday: true }, // Giả lập hôm nay
  { day: "Wed", date: "Oct 26", isToday: false },
  { day: "Thu", date: "Oct 27", isToday: false },
  { day: "Fri", date: "Oct 28", isToday: false },
  { day: "Sat", date: "Oct 29", isToday: false },
  { day: "Sun", date: "Oct 30", isToday: false },
];

export default function TutorSchedule() {
  const [schedules, setSchedules] = useState<
    Record<string, Array<{ start: string; end: string }>>
  >({
    "Oct 24": [{ start: "07:00", end: "09:00" }, { start: "18:00", end: "20:00" }],
    "Oct 25": [{ start: "15:00", end: "16:30" }],
    "Oct 26": [{ start: "12:00", end: "13:30" }],
    "Oct 27": [],
    "Oct 28": [{ start: "13:00", end: "17:30" }],
    "Oct 29": [],
    "Oct 30": [],
  });

  const [modal, setModal] = useState(false);
  const [newDate, setNewDate] = useState<string>("");
  const [newStart, setNewStart] = useState<string>("12:00");
  const [newEnd, setNewEnd] = useState<string>("13:30");

  const handleOpenModal = (dayDate: string) => {
    setNewDate(dayDate);
    setModal(true);
  };

  const handleSave = () => {
    setSchedules((prev) => ({
      ...prev,
      [newDate]: [...(prev[newDate] || []), { start: newStart, end: newEnd }],
    }));
    setModal(false);
  };

  return (
    <div className="flex min-h-screen bg-[#F0F2F5] text-gray-800 font-sans">
      <Sidebar chosenIndex={1} navigateData={navigateData} />
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <TopBar username="Nguyen Van A" dashboardContent="Tutor Dashboard" />
        
        <div className="flex-1 p-6 md:p-10 overflow-hidden flex flex-col">
          
          {/* Calendar Card Container */}
          <div className="bg-white rounded-[2rem] shadow-xl border border-white flex flex-col flex-1 overflow-hidden relative">
            
            {/* 1. Header Navigation */}
            <div className="px-8 py-6 flex justify-between items-center border-b border-gray-100 bg-white z-10">
               <div className="flex items-center gap-6">
                  <div className="flex gap-2">
                    <ChevronLeft />
                    <ChevronRight />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 tracking-tight">October 2025</h2>
               </div>
               
               <button className="bg-white border border-red-200 text-red-500 hover:bg-red-50 hover:border-red-300 px-6 py-2.5 rounded-full font-bold text-sm shadow-sm transition-all">
                 Cancel Selection
               </button>
            </div>

            {/* 2. Days Header */}
            <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-100">
              {days.map((d, idx) => (
                <div key={idx} className={`py-4 text-center border-r border-gray-100 last:border-r-0 ${d.isToday ? 'bg-blue-50/50' : ''}`}>
                  <div className={`font-bold text-lg ${d.isToday ? 'text-indigo-600' : 'text-gray-400'}`}>{d.day}</div>
                  <div className={`font-bold text-sm mt-1 inline-block px-3 py-0.5 rounded-full ${d.isToday ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-800'}`}>
                    {d.date.split(' ')[1]}
                  </div>
                </div>
              ))}
            </div>

            {/* 3. Grid Body (Scrollable) */}
            <div className="grid grid-cols-7 flex-1 overflow-y-auto divide-x divide-gray-100">
              {days.map((d, colIdx) => (
                <div 
                  key={colIdx} 
                  className={`
                    p-3 min-h-[400px] relative transition-all duration-200 group
                    ${colIdx % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}
                    hover:bg-indigo-50/30 cursor-pointer
                  `}
                  onClick={() => handleOpenModal(d.date)}
                >
                  {/* Slots Container */}
                  <div className="flex flex-col gap-3 pt-2">
                    {(schedules[d.date] || []).map((slot, idx) => (
                      <div
                        key={idx}
                        onClick={(e) => e.stopPropagation()}
                        className="
                          bg-white border-l-4 border-indigo-500 pl-3 pr-2 py-3 
                          rounded-lg shadow-sm hover:shadow-md hover:translate-y-[-2px] 
                          transition-all cursor-pointer group/slot
                        "
                      >
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Available</div>
                        <div className="text-sm font-bold text-indigo-900">
                          {slot.start} - {slot.end}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* "Add" Ghost Button (Visible on Hover) */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center">
                     <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shadow-sm">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* --- MODAL: GLASSMORPHISM STYLE --- */}
      {modal && (
        <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-md flex items-center justify-center z-50 animate-in fade-in zoom-in duration-300">
          <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-md p-8 relative border border-white/50">
            
            {/* Decoration Header */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-t-[2rem]"></div>

            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Add Availability</h3>

            {/* Date Display */}
            <div className="mb-8 flex justify-center">
               <div className="bg-indigo-50 text-indigo-800 px-6 py-2 rounded-full font-bold text-lg border border-indigo-100 shadow-sm">
                 {newDate}, 2025
               </div>
            </div>

            {/* Time Selection */}
            <div className="mb-10">
              <div className="flex items-center justify-between gap-4">
                
                {/* Start Time */}
                <div className="flex-1">
                   <label className="block text-xs font-bold text-gray-400 uppercase mb-2 text-center">Start Time</label>
                   <input
                    type="time"
                    value={newStart}
                    onChange={(e) => setNewStart(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-2 py-3 text-center font-bold text-xl text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all shadow-inner"
                  />
                </div>
                
                <div className="text-gray-300 font-light text-2xl mt-6">→</div>
                
                {/* End Time */}
                <div className="flex-1">
                   <label className="block text-xs font-bold text-gray-400 uppercase mb-2 text-center">End Time</label>
                   <input
                    type="time"
                    value={newEnd}
                    onChange={(e) => setNewEnd(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-2 py-3 text-center font-bold text-xl text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all shadow-inner"
                  />
                </div>
              </div>

              {/* Quick Adjust Buttons */}
              <div className="flex justify-center mt-6 gap-6 opacity-60 hover:opacity-100 transition-opacity">
                 <div className="flex flex-col items-center gap-1 cursor-pointer group">
                    <MinusCircle />
                    <span className="text-[10px] font-bold text-gray-400">Reduce</span>
                 </div>
                 <div className="flex flex-col items-center gap-1 cursor-pointer group">
                    <PlusCircle />
                    <span className="text-[10px] font-bold text-gray-400">Extend</span>
                 </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button
                className="flex-1 bg-white border border-gray-200 text-gray-600 py-3.5 rounded-xl font-bold hover:bg-gray-50 hover:border-gray-300 transition-all"
                onClick={() => setModal(false)}
              >
                Cancel
              </button>
              <button
                className="flex-1 bg-indigo-600 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-xl hover:translate-y-[-1px] transition-all"
                onClick={handleSave}
              >
                Save Slot
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
"use client";
import React from "react";
import TopBar from '@/app/_components/topbar';
import Sidebar from '../../_components/sidebar';
import { navigateData } from '../_components/navigatedata';

// --- Components con (Tái sử dụng style từ Student Profile) ---

// 1. Dòng thông tin có Icon
const InfoItem = ({ icon, label, value, isLink = false }: { icon: React.ReactNode, label: string, value: string, isLink?: boolean }) => (
  <div className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
    <div className="text-blue-600 mt-0.5 mr-3 flex-shrink-0">{icon}</div>
    <div>
      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{label}</p>
      {isLink ? (
        <a href={`mailto:${value}`} className="text-blue-700 font-medium hover:underline break-all">
          {value}
        </a>
      ) : (
        <p className="text-gray-900 font-medium leading-snug">{value}</p>
      )}
    </div>
  </div>
);

// 2. Thẻ chỉ số (Stats)
const StatCard = ({ label, value, subValue, colorClass }: { label: string, value: string, subValue?: string, colorClass: string }) => (
  <div className={`flex flex-col items-center justify-center px-6 py-3 rounded-2xl ${colorClass} text-white shadow-sm min-w-[140px]`}>
    <span className="text-2xl font-bold">{value}</span>
    {subValue && <span className="text-[10px] opacity-90 font-medium">{subValue}</span>}
    <span className="text-xs font-semibold opacity-80 uppercase mt-1">{label}</span>
  </div>
);

// 3. Section Title
const SectionTitle = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
  <h3 className="text-lg font-bold text-[#1e3a8a] mb-5 flex items-center gap-2 border-b pb-2">
    {icon}
    {title}
  </h3>
);

// --- Main Component ---
export default function TutorProfile() {
  return (
    <div className="flex min-h-screen bg-[#F3F4F6] text-black font-sans">
      <Sidebar chosenIndex={2} navigateData={navigateData} />
      
      <main className="flex-1 flex flex-col">
        <TopBar username="Nguyen Van A" dashboardContent="Tutor Profile" />
        
        <div className="flex-1 p-8 md:p-12 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            
            {/* --- Main Card --- */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              
              {/* 1. Header Banner */}
              <div className="h-36 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] relative">
                <div className="absolute top-4 left-6 text-white/80 text-xs uppercase font-bold tracking-wider">
                  Academic Profile
                </div>
                <button className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/40 px-6 py-2 rounded-full font-semibold transition-all text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                  Edit Profile
                </button>
              </div>

              <div className="px-8 pb-10 relative">
                
                {/* 2. Avatar, Name & Stats */}
                <div className="flex flex-col md:flex-row items-center md:items-end -mt-12 mb-10 gap-8">
                  
                  {/* Avatar */}
                  <div className="w-36 h-36 rounded-full border-[6px] border-white bg-white shadow-lg flex items-center justify-center overflow-hidden z-10 flex-shrink-0">
                     <div className="bg-gray-100 w-full h-full flex items-center justify-center text-gray-400">
                        {/* Placeholder Icon */}
                        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                     </div>
                  </div>
                  
                  {/* Name & Title */}
                  <div className="flex-1 text-center md:text-left mb-2 md:mb-1">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Tutor Name</h1>
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-2 text-gray-600">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded border border-blue-200 font-bold tracking-wide uppercase">Associate Professor</span>
                      <span className="hidden md:inline text-gray-300">|</span>
                      <span className="text-sm font-medium">Software Engineering Dept.</span>
                    </div>
                  </div>

                  {/* Stats (Customized for Tutor) */}
                  <div className="flex gap-4 md:mb-0 mt-4 md:mt-0">
                    <StatCard 
                      label="PhD Supervised" 
                      value="11" 
                      subValue="(5 done / 6 active)"
                      colorClass="bg-[#00B050]" 
                    />
                    <StatCard 
                      label="Master's Theses" 
                      value="104" 
                      colorClass="bg-[#FF6600]" 
                    />
                  </div>
                </div>

                <div className="w-full h-px bg-gray-100 mb-10"></div>

                {/* 3. Info Grid (Personal & Academic) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 mb-10">
                  
                  {/* Left Column: Personal & Contact */}
                  <section>
                    <SectionTitle 
                      icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
                      title="Personal & Contact Info"
                    />
                    <div className="space-y-4">
                      <InfoItem 
                        icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                        label="Date of Birth" 
                        value="April 1, 1990" 
                      />
                      <InfoItem 
                        icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                        label="Contact Phone" 
                        value="38647256" 
                      />
                       <InfoItem 
                        icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                        label="Email Address" 
                        value="abcxyz@hcmut.edu.vn"
                        isLink={true}
                      />
                      <InfoItem 
                        icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                        label="Country of Graduation" 
                        value="Singapore" 
                      />
                    </div>
                  </section>

                  {/* Right Column: Academic Details */}
                  <section>
                    <SectionTitle 
                      icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
                      title="Academic Information"
                    />
                    <div className="space-y-4">
                       <InfoItem 
                        icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
                        label="Faculty / Department" 
                        value="Computer Science and Engineering / Software Engineering" 
                      />
                      <InfoItem 
                        icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>}
                        label="Academic Degree" 
                        value="PhD (Computer Science)" 
                      />
                      <InfoItem 
                        icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>}
                        label="Specialization & Expertise" 
                        value="Computer Science" 
                      />
                      <InfoItem 
                        icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>}
                        label="Title Awarded" 
                        value="Associate Professor (2012)" 
                      />
                    </div>
                  </section>
                </div>

                <div className="w-full h-px bg-gray-100 mb-10"></div>

                {/* 4. Research & Teaching Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
                   
                   {/* Research Interests */}
                   <section>
                      <SectionTitle 
                        icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>}
                        title="Main Research Interests"
                      />
                      <div className="flex flex-wrap gap-2">
                        {["Software Engineering", "Software Testing", "Artificial Intelligence", "System Design"].map((item, idx) => (
                           <span key={idx} className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg text-sm font-semibold border border-indigo-100">
                              {item}
                           </span>
                        ))}
                      </div>
                   </section>

                   {/* Courses Taught */}
                   <section>
                      <SectionTitle 
                        icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}
                        title="Postgraduate Courses Taught"
                      />
                      <ul className="grid grid-cols-1 gap-2">
                        {[
                          "Research Seminar: Artificial Intelligence",
                          "Modern Approaches in NLP",
                          "Advanced Algorithms",
                          "Intelligent Systems",
                          "Machine Learning and Applications",
                          "Software Testing",
                          "Advanced Programming",
                          "Software Design Patterns"
                        ].map((course, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-700 text-sm p-2 hover:bg-gray-50 rounded">
                             <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                             {course}
                          </li>
                        ))}
                      </ul>
                   </section>
                </div>

              </div>
            </div>
            
            {/* Footer */}
            <div className="mt-6 text-center text-sm text-gray-500">
              Information provided by VNU-HCM
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
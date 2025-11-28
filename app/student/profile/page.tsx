"use client";
import React from "react";
import TopBar from "@/app/_components/topbar";
import Sidebar from "../../_components/sidebar";
import { navigateData } from "../_components/navigatedata";
import { useSelector } from "react-redux";
import { User } from "@/app/_lib/store";
const InfoItem = ({
  icon,
  label,
  value,
  isLink = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  isLink?: boolean;
}) => (
  <div className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
    <div className="text-blue-600 mt-0.5 mr-3">{icon}</div>
    <div>
      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
        {label}
      </p>
      {isLink ? (
        <a
          href={`mailto:${value}`}
          className="text-blue-700 font-medium hover:underline break-all"
        >
          {value}
        </a>
      ) : (
        <p className="text-gray-900 font-medium">{value}</p>
      )}
    </div>
  </div>
);

const StatCard = ({
  label,
  value,
  colorClass,
}: {
  label: string;
  value: string;
  colorClass: string;
}) => (
  <div
    className={`flex flex-col items-center justify-center px-5 py-4 rounded-2xl ${colorClass} text-white shadow-sm min-w-[110px]`}
  >
    <span className="text-3xl font-bold">{value}</span>
    <span className="text-xs font-semibold opacity-90 uppercase mt-1">
      {label}
    </span>
  </div>
);

export default function StudentProfile() {
  const [supportNeeds, setSupportNeeds] = React.useState({
    isEditing: false,
    needs: [
      "Academic counseling",
      "Mental health support",
      "Financial aid advice",
      "Career guidance",
    ],
  });
  const user = useSelector((state: {auth: {user: User}}) => state.auth.user);
  return (
    <div className="flex min-h-screen bg-[#F3F4F6] text-black font-sans">
      <Sidebar chosenIndex={2} navigateData={navigateData} />

      <main className="flex-1 flex flex-col">
        <TopBar username="Nguyen Van A" dashboardContent="Student Profile" />

        <div className="flex-1 p-8 md:p-12 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            {/* --- Main Card --- */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              {/* 1. Header Banner*/}
              <div className="h-36 bg-linear-to-r from-[#1e3a8a] to-[#3b82f6] relative">
                <button
                  onClick={() =>
                    setSupportNeeds({
                      ...supportNeeds,
                      isEditing: !supportNeeds.isEditing,
                    })
                  }
                  className={`absolute top-4 right-6 ${
                    supportNeeds.isEditing
                      ? "bg-green-500 hover:bg-green-400"
                      : "bg-white/20 hover:bg-white/30"
                  } backdrop-blur-sm text-white border border-white/40 px-6 py-2 rounded-full font-semibold transition-all text-sm flex items-center gap-2`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                  {supportNeeds.isEditing ? "Save Changes" : "Edit Needs"}
                </button>
                <button
                  onClick={() =>
                    setSupportNeeds({
                      ...supportNeeds,
                      isEditing: false,
                    })
                  }
                  className={`absolute top-16 right-6 bg-red-600 hover:bg-red-500 backdrop-blur-sm text-white border border-white/40 px-6 py-2 rounded-full font-semibold transition-all text-sm flex items-center gap-2 ${supportNeeds.isEditing ? "" : "hidden"}`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Cancel
                </button>
              </div>

              <div className="px-8 pb-10 relative">
                {/* 2. Avatar, Name & Stats Section */}
                <div className="flex flex-col md:flex-row items-center md:items-end -mt-12 mb-8 gap-6">
                  {/* Avatar */}
                  <div className="w-36 h-36 rounded-full border-[6px] border-white bg-white shadow-lg flex items-center justify-center overflow-hidden z-10 flex-shrink-0">
                    <div className="bg-gray-100 w-full h-full flex items-center justify-center text-gray-400">
                      <svg
                        className="w-20 h-20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  </div>

                  {/* Name & ID */}
                  <div className="flex-1 text-center md:text-left mb-2 md:mb-1">
                    <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
                      {user?.name || "Nguyen Van A"}
                    </h1>
                    <div className="flex items-center justify-center md:justify-start gap-3 mt-2 text-gray-600">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded border border-blue-200 font-bold tracking-wide">
                        STUDENT
                      </span>
                      <span className="text-sm">
                        ID:{" "}
                        <span className="text-black font-bold font-mono text-base">
                          2313862
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Stats (GPA & Credits) */}
                  <div className="flex gap-4 md:mb-4 mt-4 md:mt-0">
                    <StatCard
                      label="GPA"
                      value="3.2"
                      colorClass="bg-[#00B050]"
                    />
                    <StatCard
                      label="Credits"
                      value="78"
                      colorClass="bg-[#FF6600]"
                    />
                  </div>
                </div>

                <div className="w-full h-px bg-gray-100 mb-8"></div>

                {/* 3. Detailed Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                  {/* Column 1 */}
                  <section>
                    <h3 className="text-lg font-bold text-[#1e3a8a] mb-5 flex items-center gap-2 border-b pb-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      Personal Information
                    </h3>
                    <div className="space-y-4">
                      <InfoItem
                        icon={
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        }
                        label="Date of Birth"
                        value="12/08/2005"
                      />
                      <InfoItem
                        icon={
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        }
                        label="Phone Number"
                        value="012345678"
                      />
                      <InfoItem
                        icon={
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        }
                        label="Email Address"
                        value="studentemail@hcmut.edu.vn"
                        isLink={true}
                      />
                    </div>
                  </section>

                  {/* Column 2 */}
                  <section>
                    <h3 className="text-lg font-bold text-[#1e3a8a] mb-5 flex items-center gap-2 border-b pb-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      Academic Information
                    </h3>
                    <div className="space-y-4">
                      <InfoItem
                        icon={
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        }
                        label="Faculty"
                        value="Computer Science and Engineering"
                      />
                      <InfoItem
                        icon={
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        }
                        label="Major"
                        value="Computer Science"
                      />
                      <InfoItem
                        icon={
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        }
                        label="Class"
                        value="MT23KHM5"
                      />
                    </div>
                  </section>
                </div>
                <div className="w-full mt-6">
                  <section>
                    <h3 className="text-lg font-bold text-[#1e3a8a] mb-5 flex items-center gap-2 border-b pb-2">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                      Support needs
                    </h3>
                    <div className="space-y-4 flex flex-col items-start ">
                      {supportNeeds.needs.map((need, index) => (
                        <input
                          type="text"
                          key={index}
                          className={`transition-colors duration-200 text-slate-900 w-full px-3 py-2 focus:outline-none focus:ring-blue-500 ${
                            supportNeeds.isEditing
                              ? "border-b border-blue-600 bg-slate-100"
                              : "border-b border-gray-300 bg-slate-50"
                          }`}
                          onChange={(e) => {
                            const newNeeds = [...supportNeeds.needs];
                            newNeeds[index] = e.target.value;
                            setSupportNeeds({
                              ...supportNeeds,
                              needs: newNeeds,
                            });
                          }}
                          defaultValue={need}
                          disabled={!supportNeeds.isEditing}
                        />
                      ))}
                    </div>
                    <button
                      onClick={() =>
                        setSupportNeeds({
                          ...supportNeeds,
                          needs: [...supportNeeds.needs, ""],
                        })
                      }
                      className={`mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                        supportNeeds.isEditing ? "" : "hidden"
                      }`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      Add Need
                    </button>
                  </section>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
              Last updated on November 27, 2025
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

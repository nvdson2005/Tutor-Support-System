"use client";
import TopBar from "@/app/_components/topbar";
import Sidebar from "../../_components/sidebar";
import { navigateData } from "../_components/navigatedata";
export default function StudentProfile() {
  return (
    <div className="flex min-h-screen bg-gray-100 text-black">
      <Sidebar chosenIndex={2} navigateData={navigateData} />
      <main className="flex-1">
        <TopBar username="Nguyen Van A" dashboardContent="Student Profile"></TopBar>
        <div className="p-10">
          <section className="max-w-3xl mx-auto bg-white rounded-lg shadow p-8">
            <div className="flex justify-between items-center mb-6">
              <span className="font-semibold tracking-wide text-center w-full">
                ACADEMIC PROFILE
              </span>
              <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 font-semibold">
                Edit
              </button>
            </div>
            <div className="flex gap-8 items-center">
              <div className="flex flex-col items-center">
                <div className="border rounded-lg w-32 h-32 flex items-center justify-center bg-gray-100 mb-2">
                  <svg
                    className="w-16 h-16 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M6 20c0-2.2 3.6-4 6-4s6 1.8 6 4" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-2 text-black">
                <div>
                  <div>
                    Full Name:{" "}
                    <span className="font-semibold">Student Name</span>
                  </div>
                  <div>
                    ID: <span className="font-semibold">2313862</span>
                  </div>
                  <div>
                    Email:{" "}
                    <a
                      href="mailto:abcxyz@hcmut.edu.vn"
                      className="text-blue-700 underline"
                    >
                      abcxyz@hcmut.edu.vn
                    </a>
                  </div>
                  <div>Class: MT23KHM5</div>
                  <div>GPA: 3.2</div>
                  <div>Total Credits: 78</div>
                </div>
                <div>
                  <div>Date of Birth: 12/08/2005</div>
                  <div>
                    Faculty: Faculty of Computer Science and Engineering.
                  </div>
                  <div>Contact Phone: 012345678</div>
                  <div>Major: Computer Science</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

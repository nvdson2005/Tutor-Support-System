'use client';
import TopBar from '@/app/_components/topbar';
import Sidebar from '../../_components/sidebar';
import { navigateData } from '../_components/navigatedata';
export default function TutorProfile() {
  return (
    <div className="flex min-h-screen bg-gray-100 text-black">
      <Sidebar chosenIndex={2} navigateData={navigateData} />
      <main className="flex-1">
        <TopBar username="Nguyen Van A" dashboardContent="Tutor Profile"></TopBar>
        <div className="p-10">
          <section className="max-w-3xl mx-auto bg-white rounded-lg shadow p-8">
            <div className="flex justify-between items-center mb-6">
              <span className="font-semibold tracking-wide text-center w-full">
                ACADEMIC PROFILE<br />
                <span className="text-sm font-normal">
                  (For faculty members of postgraduate programs at Ho Chi Minh City University of Technology, VNU-HCM)
                </span>
              </span>
              <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 font-semibold">
                Edit
              </button>
            </div>
            <div className="flex gap-8 items-start">
              <div className="flex flex-col items-center">
                <div className="border rounded-lg w-32 h-32 flex items-center justify-center bg-gray-100 mb-2">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M6 20c0-2.2 3.6-4 6-4s6 1.8 6 4" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 text-black text-sm">
                <div>Full Name: Tutor name</div>
                <div>Date of Birth: April 1, 1990</div>
                <div>Faculty: Faculty of Computer Science and Engineering, Department: Software Engineering</div>
                <div>Contact Phone: 38647256</div>
                <div>
                  Email: <a href="mailto:abcxyz@hcmut.edu.vn" className="text-blue-700 underline">abcxyz@hcmut.edu.vn</a>
                </div>
                <div>Academic Degree: PhD</div>
                <div>Country of Graduation: Singapore</div>
                <div>Major: Specialization: Computer Science</div>
                <div>Academic Title: Associate Professor, Year Awarded: 2012</div>
                <div>Current Field of Expertise: Computer Science</div>
                <div>Main Research Interests:</div>
                <ul className="list-disc ml-6">
                  <li>Software Engineering</li>
                  <li>Software Testing</li>
                </ul>
                <div>
                  Number of PhD dissertations supervised at HCMUT (since 2004): 5 successfully supervised / 6 currently supervising
                </div>
                <div>
                  Number of students theses successfully supervised at HCMUT (since 2004): 104
                </div>
                <div>Postgraduate Courses Taught:</div>
                <ul className="list-disc ml-6">
                  <li>Research Seminar: Artificial Intelligence</li>
                  <li>Modern Approaches in Natural Language Processing</li>
                  <li>Advanced Algorithms</li>
                  <li>Intelligent Systems (Computer Science)</li>
                  <li>Machine Learning and Applications</li>
                  <li>Software Testing (Computer Science)</li>
                  <li>Advanced Programming</li>
                  <li>Modeling and Specification of Software Requirements</li>
                  <li>Principles of Software Design and Architecture</li>
                  <li>Object-Oriented Software Design</li>
                  <li>Software Design Patterns</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
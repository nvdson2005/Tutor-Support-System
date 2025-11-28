"use client";

import { useMemo, useState } from "react";
import Sidebar from "@/app/_components/sidebar";
import TopBar from "@/app/_components/topbar";
import { navigateData } from "../_components/navigatedata";
import * as w from "@/app/_lib/weekday";
type Review = {
  user: string;
  rating: number;
  comment: string;
};
type TutorProfile = {
  fullName: string;
  dob: string;
  faculty: string;
  phone: string;
  email: string;
  degree: string;
  country: string;
  specialization: string;
  title: string;
  field: string;
  interests: string[];
  theses: string;
  courses: string[];
};
type Tutor = {
  id: number;
  name: string;
  major: string;
  rating: number;
  ratingCount: number;
  bio: string;
  schedule: {
    [w.Weekday.MON]?: w.TimeSlot[];
    [w.Weekday.TUE]?: w.TimeSlot[];
    [w.Weekday.WED]?: w.TimeSlot[];
    [w.Weekday.THU]?: w.TimeSlot[];
    [w.Weekday.FRI]?: w.TimeSlot[];
    [w.Weekday.SAT]?: w.TimeSlot[];
    [w.Weekday.SUN]?: w.TimeSlot[];
  };
  profileDetail?: TutorProfile;
  reviews?: Review[];
};
const tutorsData: Tutor[] = [
  {
    id: 1,
    name: "Tutor's Name",
    major: "Software Engineering",
    rating: 5,
    ratingCount: 120,
    bio: "Experienced software engineer with 8 years in the industry. Specializing in teaching core CS concepts and preparing students for technical interviews.",
    schedule: {
      [w.Weekday.MON]: [
        w.convertToTimeSlots(w.Weekday.MON, "09:00", "11:00"),
        w.convertToTimeSlots(w.Weekday.MON, "14:00", "15:30"),
      ],
      [w.Weekday.TUE]: [
        w.convertToTimeSlots(w.Weekday.TUE, "15:00", "17:30"),
        w.convertToTimeSlots(w.Weekday.TUE, "19:00", "20:30"),
      ],
      [w.Weekday.WED]: [w.convertToTimeSlots(w.Weekday.WED, "10:00", "12:00")],
      [w.Weekday.THU]: [w.convertToTimeSlots(w.Weekday.THU, "19:00", "21:00")],
      [w.Weekday.FRI]: [w.convertToTimeSlots(w.Weekday.FRI, "08:00", "10:00")],
      [w.Weekday.SAT]: [
        w.convertToTimeSlots(w.Weekday.SAT, "10:00", "14:30"),
        w.convertToTimeSlots(w.Weekday.SAT, "17:00", "20:00"),
      ],
      [w.Weekday.SUN]: [w.convertToTimeSlots(w.Weekday.SUN, "09:00", "12:00")],
    },
    // Dữ liệu chi tiết cho Modal Profile
    profileDetail: {
      fullName: "Tutor name",
      dob: "April 1, 1990",
      faculty:
        "Faculty of Computer Science and Engineering, Department: Software Engineering",
      phone: "38647256",
      email: "abcxyz@hcmut.edu.vn",
      degree: "PhD",
      country: "Singapore",
      specialization: "Computer Science",
      title: "Associate Professor, Year Awarded: 2012",
      field: "Computer Science",
      interests: ["Software Engineering", "Software Testing"],
      theses:
        "Number of PhD dissertations supervised: 5. Number of Master's theses: 104.",
      courses: [
        "Research Seminar: Artificial Intelligence",
        "Modern Approaches in Natural Language Processing",
        "Advanced Algorithms",
        "Intelligent Systems (Computer Science)",
        "Machine Learning and Applications",
        "Software Testing (Computer Science)",
        "Advanced Programming",
        "Modeling and Specification of Software Requirements",
        "Principles of Software Design and Architecture",
        "Object-Oriented Software Design",
        "Software Design Patterns",
      ],
    },
    reviews: [
      { user: "Student 1", rating: 5, comment: "Very good" },
      { user: "Student 2", rating: 5, comment: "Very good" },
      { user: "Student 3", rating: 5, comment: "Very good" },
      { user: "Student 4", rating: 5, comment: "Very good" },
    ],
  },
  {
    id: 2,
    name: "Tutor's Name",
    major: "Calculus 1",
    rating: 4.9,
    ratingCount: 20,
    bio: "Short Description about tutor",
    schedule: {
      [w.Weekday.MON]: [w.convertToTimeSlots(w.Weekday.MON, "13:00", "15:00")],
      [w.Weekday.TUE]: [w.convertToTimeSlots(w.Weekday.TUE, "10:00", "12:00")],
      [w.Weekday.WED]: [w.convertToTimeSlots(w.Weekday.WED, "14:00", "16:00")],
      [w.Weekday.THU]: [w.convertToTimeSlots(w.Weekday.THU, "09:00", "11:00")],
    },
    profileDetail: undefined,
    reviews: [],
  },
  {
    id: 3,
    name: "Pham Van C",
    major: "Data Structures",
    rating: 4.8,
    ratingCount: 48,
    bio: "Focuses on problem solving and algorithmic thinking. Helps students prepare for coding interviews.",
    schedule: {
      [w.Weekday.MON]: [
        w.convertToTimeSlots(w.Weekday.MON, "09:00", "11:00"),
        w.convertToTimeSlots(w.Weekday.MON, "14:00", "15:30"),
      ],
      [w.Weekday.TUE]: [
        w.convertToTimeSlots(w.Weekday.TUE, "15:00", "17:30"),
        w.convertToTimeSlots(w.Weekday.TUE, "19:00", "20:30"),
      ],
      [w.Weekday.WED]: [w.convertToTimeSlots(w.Weekday.WED, "10:00", "12:00")],
      [w.Weekday.THU]: [w.convertToTimeSlots(w.Weekday.THU, "19:00", "21:00")],
      [w.Weekday.FRI]: [w.convertToTimeSlots(w.Weekday.FRI, "08:00", "10:00")],
      [w.Weekday.SAT]: [
        w.convertToTimeSlots(w.Weekday.SAT, "10:00", "14:30"),
        w.convertToTimeSlots(w.Weekday.SAT, "17:00", "20:00"),
      ],
      [w.Weekday.SUN]: [w.convertToTimeSlots(w.Weekday.SUN, "09:00", "12:00")],
    },
    profileDetail: {
      fullName: "Pham Van C",
      dob: "May 10, 1992",
      faculty: "Faculty of Computer Science and Engineering",
      phone: "0912345678",
      email: "phamvc@hcmut.edu.vn",
      degree: "MSc",
      country: "Vietnam",
      specialization: "Algorithms & Data Structures",
      title: "Lecturer",
      field: "Computer Science",
      interests: ["Algorithms", "Competitive Programming"],
      theses: "Supervised several undergraduate projects on algorithms.",
      courses: ["Algorithms I", "Data Structures"],
    },
    reviews: [
      { user: "Student A", rating: 5, comment: "Clear explanations." },
      { user: "Student B", rating: 4, comment: "Very helpful." },
    ],
  },
  {
    id: 4,
    name: "Tran Thi D",
    major: "Operating Systems",
    rating: 4.7,
    ratingCount: 36,
    bio: "Teaches OS fundamentals with practical examples and labs.",
    schedule: {
      [w.Weekday.MON]: [w.convertToTimeSlots(w.Weekday.MON, "13:00", "15:00")],
      [w.Weekday.TUE]: [
        w.convertToTimeSlots(w.Weekday.TUE, "08:00", "10:00"),
        w.convertToTimeSlots(w.Weekday.TUE, "16:00", "18:00"),
      ],
      [w.Weekday.WED]: [],
      [w.Weekday.THU]: [w.convertToTimeSlots(w.Weekday.THU, "13:00", "15:00")],
      [w.Weekday.FRI]: [w.convertToTimeSlots(w.Weekday.FRI, "18:00", "20:00")],
      [w.Weekday.SAT]: [],
      [w.Weekday.SUN]: [],
    },
    profileDetail: undefined,
    reviews: [
      { user: "Student C", rating: 5, comment: "Excellent lab demos." },
    ],
  },
  {
    id: 5,
    name: "Le Van E",
    major: "Computer Networks",
    rating: 4.6,
    ratingCount: 29,
    bio: "Specializes in network protocols and practical configuration labs.",
    schedule: {
      [w.Weekday.MON]: [w.convertToTimeSlots(w.Weekday.MON, "10:00", "12:00")],
      [w.Weekday.WED]: [w.convertToTimeSlots(w.Weekday.WED, "15:00", "17:00")],
      [w.Weekday.FRI]: [w.convertToTimeSlots(w.Weekday.FRI, "09:00", "11:00")],
      [w.Weekday.SUN]: [w.convertToTimeSlots(w.Weekday.SUN, "10:00", "12:00")],
    },
    profileDetail: {
      fullName: "Le Van E",
      dob: "June 2, 1988",
      faculty: "Faculty of Electronics and Telecommunications",
      phone: "0987654321",
      email: "leven@hcmut.edu.vn",
      degree: "MEng",
      country: "Vietnam",
      specialization: "Networks",
      title: "Industry Expert",
      field: "Computer Networks",
      interests: ["Routing", "Network Security"],
      theses: "Authored papers on QoS in wireless networks.",
      courses: ["Computer Networks", "Network Security"],
    },
    reviews: [],
  },
  {
    id: 6,
    name: "Hoang Thi F",
    major: "Discrete Mathematics",
    rating: 4.9,
    ratingCount: 64,
    bio: "Patient tutor with strong background in proofs and discrete topics.",
    schedule: {
      [w.Weekday.TUE]: [w.convertToTimeSlots(w.Weekday.TUE, "14:00", "16:00")],
      [w.Weekday.WED]: [
        w.convertToTimeSlots(w.Weekday.WED, "08:00", "09:30"),
        w.convertToTimeSlots(w.Weekday.WED, "18:00", "19:30"),
      ],
      [w.Weekday.FRI]: [w.convertToTimeSlots(w.Weekday.FRI, "14:00", "16:00")],
      [w.Weekday.SAT]: [w.convertToTimeSlots(w.Weekday.SAT, "10:00", "12:00")],
      [w.Weekday.SUN]: [w.convertToTimeSlots(w.Weekday.SUN, "09:00", "11:00")],
    },
    profileDetail: undefined,
    reviews: [
      { user: "Student D", rating: 5, comment: "Makes hard concepts easy." },
    ],
  },
  {
    id: 7,
    name: "Nguyen Van G",
    major: "Algorithms",
    rating: 5,
    ratingCount: 90,
    bio: "Competitive programming coach and algorithm enthusiast.",
    schedule: {
      [w.Weekday.MON]: [w.convertToTimeSlots(w.Weekday.MON, "17:00", "19:00")],
      [w.Weekday.TUE]: [w.convertToTimeSlots(w.Weekday.TUE, "17:00", "19:00")],
      [w.Weekday.THU]: [w.convertToTimeSlots(w.Weekday.THU, "17:00", "19:00")],
      [w.Weekday.SAT]: [w.convertToTimeSlots(w.Weekday.SAT, "09:00", "12:00")],
    },
    profileDetail: {
      fullName: "Nguyen Van G",
      dob: "December 12, 1990",
      faculty: "Faculty of Computer Science and Engineering",
      phone: "0901111222",
      email: "nguyeng@hcmut.edu.vn",
      degree: "PhD",
      country: "Vietnam",
      specialization: "Algorithms",
      title: "Assistant Professor",
      field: "Algorithms",
      interests: ["Competitive Programming", "Graph Algorithms"],
      theses: "Research on graph optimization algorithms.",
      courses: ["Algorithms II", "Advanced Problem Solving"],
    },
    reviews: [{ user: "Student E", rating: 5, comment: "Best coach!" }],
  },
  {
    id: 8,
    name: "Vo Thi H",
    major: "Database Systems",
    rating: 4.4,
    ratingCount: 12,
    bio: "Teaches practical database design and SQL tuning.",
    schedule: {
      [w.Weekday.WED]: [w.convertToTimeSlots(w.Weekday.WED, "13:00", "15:00")],
      [w.Weekday.THU]: [w.convertToTimeSlots(w.Weekday.THU, "10:00", "12:00")],
      [w.Weekday.FRI]: [w.convertToTimeSlots(w.Weekday.FRI, "15:00", "17:00")],
    },
    profileDetail: undefined,
    reviews: [],
  },
];

// --- Components nhỏ ---
const StarIcon = () => (
  <svg
    className="w-5 h-5 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const UserAvatar = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizeClass =
    size === "lg" ? "w-24 h-24" : size === "md" ? "w-16 h-16" : "w-12 h-12";
  return (
    <div
      className={`${sizeClass} rounded-full bg-gray-200 flex items-center justify-center shrink-0 text-gray-400`}
    >
      <svg className="w-1/2 h-1/2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    </div>
  );
};

export default function FindTutorPage() {
  const [chosenDate, setChosenDate] = useState<w.Weekday>(w.Weekday.ALL);
  const [search, setSearch] = useState("");
  const [chosenTimeRange, setChosenTimeRange] = useState<string>("All Time");
  const filteredTutors = useMemo(() => {
    let filtered = tutorsData;
    if (search) {
      filtered = filtered.filter((tutor) =>
        tutor.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (chosenDate !== w.Weekday.ALL) {
      filtered = filtered.filter(
        (tutor) =>
          tutor.schedule[chosenDate] && tutor.schedule[chosenDate]!.length > 0
      );
    }
    if (chosenTimeRange !== "All Time") {
      switch (chosenTimeRange) {
        case "Morning":
          if (chosenDate !== w.Weekday.ALL) {
            filtered = filtered.filter((tutor) =>
              tutor.schedule[chosenDate as keyof typeof tutor.schedule]?.some(
                (slot) => slot.start >= 6 * 60 && slot.end <= 12 * 60
              )
            );
          }
          break;
        case "Afternoon":
          if (chosenDate === w.Weekday.ALL) break;
          filtered = filtered.filter((tutor) =>
            tutor.schedule[chosenDate]?.some(
              (slot) => slot.start >= 12 * 60 && slot.end <= 18 * 60
            )
          );
          break;
        case "Evening":
          if (chosenDate === w.Weekday.ALL) break;
          filtered = filtered.filter((tutor) =>
            tutor.schedule[chosenDate]?.some(
              (slot) => slot.start >= 18 * 60 && slot.end <= 22 * 60
            )
          );
          break;
      }
    }
    return filtered;
  }, [search, chosenDate, chosenTimeRange]);

  const [modalType, setModalType] = useState<
    "detail" | "review" | "book" | "ai" | null
  >(null);
  const [selectedTutor, setSelectedTutor] = useState<Tutor | undefined>();

  // For AI modal
  const [aiTutor, setAiTutor] = useState<Tutor | undefined>();

  const openModal = (type: "detail" | "review" | "book", tutor: Tutor) => {
    setSelectedTutor(tutor);
    setModalType(type);
  };

  const closeModal = () => {
    if (aiTutor != undefined){
      setSelectedTutor(aiTutor);
      setModalType("ai");
      return
    }
    setModalType(null);
    setSelectedTutor(undefined);
  };

  const closeAiModal = () => {
    setAiTutor(undefined);
    setModalType(null);
  };

  const openAiModal = () => {
    // Pick a random tutor
    const idx = Math.floor(Math.random() * tutorsData.length);
    setAiTutor(tutorsData[idx]);
    setModalType("ai");
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-black font-sans">
      <Sidebar chosenIndex={1} navigateData={navigateData} />

      <main className="flex-1 flex flex-col">
        <TopBar username="Student Name" dashboardContent="Find Tutor" />

        <div className="p-8 max-w-7xl mx-auto w-full">
          <div className="mb-6 text-gray-500 text-sm">
            Search and access to qualified&#39;s tutors
          </div>

          {/* Search Bar */}
          <div className="flex gap-4 mb-8">
            <div className="flex-1 relative">
              <span className="absolute left-4 top-3.5 text-gray-400">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </span>
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tutors by name, expertise ..."
                className="w-full bg-[#F3F4F6] border-none rounded-xl py-3 pl-12 pr-4 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <button
              className="bg-[#3B4EAA] hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold shadow-sm transition"
              onClick={openAiModal}
            >
              Find Tutor by AI
            </button>
            {/* AI Tutor Modal */}
            {modalType === "ai" && aiTutor && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white w-full max-w-md rounded-lg shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
                  <div className="flex justify-between items-center border-b p-4">
                    <h3 className="font-bold text-lg">AI Recommended Tutor</h3>
                    <button
                      onClick={closeAiModal}
                      className="bg-blue-700 text-white rounded p-1 hover:bg-blue-800"
                    >
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="p-6 flex flex-col items-center">
                    <UserAvatar size="lg" />
                    <div className="mt-4 text-center">
                      <h4 className="text-xl font-bold text-gray-900">
                        {aiTutor.name}
                      </h4>
                      <p className="text-gray-500">{aiTutor.major}</p>
                      <div className="flex items-center justify-center gap-1 mt-2">
                        <StarIcon />
                        <span className="font-bold">{aiTutor.rating}/5</span>
                        <span className="text-gray-400">
                          ({aiTutor.ratingCount} ratings)
                        </span>
                      </div>
                      <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                        {aiTutor.bio}
                      </p>
                    </div>
                    <div className="flex gap-4 mt-6">
                      <button
                        onClick={() => {
                          setSelectedTutor(aiTutor);
                          setModalType("detail");
                        }}
                        className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 text-sm font-semibold bg-white hover:bg-blue-50"
                      >
                        Detail
                      </button>
                      <button
                        onClick={() => {
                          setSelectedTutor(aiTutor);
                          setModalType("review");
                        }}
                        className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 text-sm font-semibold bg-white hover:bg-blue-50"
                      >
                        Review
                      </button>
                      <button
                        onClick={() => {
                          setSelectedTutor(aiTutor);
                          setModalType("book");
                        }}
                        className="px-6 py-2 rounded-full bg-[#E69B56] text-white text-sm font-semibold hover:bg-orange-500"
                      >
                        Book Tutor
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-8 items-start">
            {/* Left Filter Column */}
            <div className="w-64 bg-white p-6 rounded-xl border shadow-sm space-y-8 flex-shrink-0">
              {/* Date Filter */}
              <div>
                <h4 className="font-semibold mb-3 text-sm text-gray-800 text-center">
                  Date
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  {[
                    w.Weekday.ALL,
                    w.Weekday.MON,
                    w.Weekday.TUE,
                    w.Weekday.WED,
                    w.Weekday.THU,
                    w.Weekday.FRI,
                    w.Weekday.SAT,
                    w.Weekday.SUN,
                  ].map((item, idx) => (
                    <label
                      key={idx}
                      className="flex items-center space-x-3 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="date"
                        defaultChecked={idx === 0}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        onChange={() => setChosenDate(item)}
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>
              <hr />
              {/* Time Filter */}
              <div>
                <h4 className="font-semibold mb-3 text-sm text-gray-800 text-center">
                  Time
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  {[
                    { label: "All Time", sub: "" },
                    { label: "Morning", sub: "6:00 - 12:00" },
                    { label: "Afternoon", sub: "12:00 - 18:00" },
                    { label: "Evening", sub: "18:00 - 22:00" },
                  ].map((item, idx) => (
                    <label
                      key={idx}
                      className="flex items-start space-x-3 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="time"
                        defaultChecked={idx === 0}
                        className="w-4 h-4 mt-0.5 text-blue-600 border-gray-300 focus:ring-blue-500"
                        onChange={() => setChosenTimeRange(item.label)}
                      />
                      <div className="flex flex-col">
                        <span>{item.label}</span>
                        {item.sub && (
                          <span className="text-xs text-gray-400">
                            {item.sub}
                          </span>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              {/* <hr /> */}
              {/* Session Type
              <div>
                <h4 className="font-semibold mb-3 text-sm text-gray-800 text-center">
                  Session Type
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  {["All Types", "Online", "In-person"].map((item, idx) => (
                    <label
                      key={idx}
                      className="flex items-center space-x-3 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="type"
                        defaultChecked={idx === 0}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div> */}
            </div>

            {/* Right Tutor List */}
            <div className="flex-1 space-y-6">
              {filteredTutors.map((tutor) => (
                <div
                  key={tutor.id}
                  className="bg-white rounded-xl border shadow-sm p-6 relative"
                >
                  <div className="flex gap-4 mb-4">
                    <UserAvatar size="md" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {tutor.name}
                          </h3>
                          <p className="text-sm text-gray-500">{tutor.major}</p>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <StarIcon />
                          <span className="font-bold">{tutor.rating}/5</span>
                          <span className="text-gray-400">
                            ({tutor.ratingCount} ratings)
                          </span>
                        </div>
                      </div>
                      <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                        {tutor.bio}
                      </p>
                    </div>
                  </div>

                  {/* Schedule Grid */}
                  <div className="border-t border-b py-3 my-4">
                    <div className="grid grid-cols-7 gap-2 text-center">
                      {["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"].map(
                        (d) => (
                          <div
                            key={d}
                            className="text-xs font-bold text-gray-800"
                          >
                            {d}
                          </div>
                        )
                      )}
                      {/* Render Time Slots */}
                      {[
                        w.Weekday.MON,
                        w.Weekday.TUE,
                        w.Weekday.WED,
                        w.Weekday.THU,
                        w.Weekday.FRI,
                        w.Weekday.SAT,
                        w.Weekday.SUN,
                      ].map((day) => (
                        <div
                          key={day}
                          className="text-[10px] text-gray-600 h-16 flex flex-col justify-start items-center gap-1"
                        >
                          {tutor.schedule[
                            day as keyof typeof tutor.schedule
                          ]?.map((slot, i) => (
                            <span key={i} className="whitespace-nowrap">
                              {w.toHourMinuteString(slot.start)} -{" "}
                              {w.toHourMinuteString(slot.end)}
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-end gap-3 mt-4 relative z-10">
                    {/* Decorative Line (Optional mimic from design) */}
                    {/* <div className="absolute top-1/2 w-full h-px bg-green-200 -z-10 left-0"></div> */}

                    <button
                      onClick={() => openModal("detail", tutor)}
                      className="px-6 py-1.5 rounded-full border border-blue-600 text-blue-600 text-sm font-semibold bg-white hover:bg-blue-50"
                    >
                      Detail
                    </button>
                    <button
                      onClick={() => openModal("review", tutor)}
                      className="px-6 py-1.5 rounded-full border border-blue-600 text-blue-600 text-sm font-semibold bg-white hover:bg-blue-50"
                    >
                      Review
                    </button>
                    <button
                      onClick={() => openModal("book", tutor)}
                      className="px-6 py-1.5 rounded-full bg-[#E69B56] text-white text-sm font-semibold hover:bg-orange-500"
                    >
                      Book Tutor
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* ================= MODALS ================= */}

      {/* 1. ACADEMIC PROFILE MODAL (DETAIL) */}
      {modalType === "detail" &&
        selectedTutor &&
        selectedTutor.profileDetail && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white w-full max-w-4xl rounded-lg shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white z-10 border-b p-4 flex justify-between items-center">
                <div className="w-full text-center">
                  <h3 className="font-bold text-lg">ACADEMIC PROFILE</h3>
                  <p className="text-xs text-gray-500">
                    (For faculty members of postgraduate programs at Ho Chi Minh
                    City University of Technology, VNU-HCM)
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="bg-blue-700 text-white rounded p-1 hover:bg-blue-800 absolute right-4"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="p-8 flex gap-8">
                {/* Left: Avatar */}
                <div className="flex-shrink-0">
                  <UserAvatar size="lg" />
                </div>

                {/* Right: Text Info */}
                <div className="text-sm text-gray-800 space-y-1">
                  <p>
                    <span className="font-semibold">Full Name:</span>{" "}
                    {selectedTutor.profileDetail.fullName}
                  </p>
                  <p>
                    <span className="font-semibold">Date of Birth:</span>{" "}
                    {selectedTutor.profileDetail.dob}
                  </p>
                  <p>
                    <span className="font-semibold">Faculty:</span>{" "}
                    {selectedTutor.profileDetail.faculty}
                  </p>
                  <p>
                    <span className="font-semibold">Contact Phone:</span>{" "}
                    {selectedTutor.profileDetail.phone}
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    <a
                      href={`mailto:${selectedTutor.profileDetail.email}`}
                      className="text-blue-600 underline"
                    >
                      {selectedTutor.profileDetail.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Academic Degree:</span>{" "}
                    {selectedTutor.profileDetail.degree}
                  </p>
                  <p>
                    <span className="font-semibold">
                      Country of Graduation:
                    </span>{" "}
                    {selectedTutor.profileDetail.country}
                  </p>
                  <p>
                    <span className="font-semibold">
                      Major: Specialization:
                    </span>{" "}
                    {selectedTutor.profileDetail.specialization}
                  </p>
                  <p>
                    <span className="font-semibold">Academic Title:</span>{" "}
                    {selectedTutor.profileDetail.title}
                  </p>
                  <p>
                    <span className="font-semibold">
                      Current Field of Expertise:
                    </span>{" "}
                    {selectedTutor.profileDetail.field}
                  </p>

                  <div className="mt-2">
                    <p className="font-semibold">Main Research Interests:</p>
                    <ul className="list-disc pl-5">
                      {selectedTutor.profileDetail.interests.map(
                        (int: string, i: number) => (
                          <li key={i}>{int}</li>
                        )
                      )}
                    </ul>
                  </div>

                  <p className="mt-2 text-justify">
                    {selectedTutor.profileDetail.theses}
                  </p>

                  <div className="mt-2">
                    <p className="font-semibold">
                      Postgraduate Courses Taught:
                    </p>
                    <ul className="list-disc pl-5">
                      {selectedTutor.profileDetail.courses.map(
                        (course: string, i: number) => (
                          <li key={i}>{course}</li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      {/* 2. REVIEW MODAL */}
      {modalType === "review" && selectedTutor && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-2xl rounded-lg shadow-xl overflow-hidden relative animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b flex justify-between items-center">
              <div className="flex items-center gap-4">
                <UserAvatar size="md" />
                <div>
                  <h3 className="font-bold text-xl text-gray-900">
                    {selectedTutor.name}
                  </h3>
                  <p className="text-gray-500">{selectedTutor.major}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-lg font-bold text-gray-700">
                <StarIcon /> {selectedTutor.rating}/5{" "}
                <span className="text-gray-400 text-base font-normal">
                  ({selectedTutor.ratingCount} ratings)
                </span>
                <button
                  onClick={closeModal}
                  className="bg-blue-700 text-white rounded p-1 ml-4 hover:bg-blue-800"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6 bg-gray-50 space-y-4 max-h-[60vh] overflow-y-auto">
              {selectedTutor.reviews && selectedTutor.reviews.length > 0 ? (
                selectedTutor.reviews.map((rev: Review, idx: number) => (
                  <div
                    key={idx}
                    className="bg-gray-100 rounded-xl p-4 flex items-center justify-between border"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                      <div>
                        <div className="font-semibold text-gray-700">
                          {rev.user}
                        </div>
                        <div className="font-bold text-gray-900">
                          {rev.comment}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 font-bold text-gray-800">
                      <StarIcon /> {rev.rating}/5
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500">No reviews yet.</div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 3. BOOK TUTOR MODAL (Placeholder logic) */}
      {modalType === "book" && selectedTutor && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-xl max-w-md w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-black"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <h3 className="text-xl font-bold mb-4">
              Book Session with {selectedTutor.name}
            </h3>
            <p className="text-gray-600 mb-6">
              Booking form functionality would go here...
            </p>
            <button
              onClick={closeModal}
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

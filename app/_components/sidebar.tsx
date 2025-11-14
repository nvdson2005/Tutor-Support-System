import { useRouter } from "next/navigation";
export default function Sidebar({chosenIndex}: {chosenIndex: number}) {
    const router = useRouter();
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <aside className="w-64 bg-blue-900 text-white flex flex-col py-8 px-6">
      <div className="text-2xl font-bold mb-10 tracking-wide">HCMUT TUTOR</div>
      <nav className="flex-1 space-y-4">
        <button className={`w-full text-left py-2 px-4 rounded ${chosenIndex === 0 ? 'bg-blue-800' : 'hover:bg-blue-800'}`} onClick={() => handleNavigation("/student/dashboard")}>Dashboard</button>
        <button className={`w-full text-left py-2 px-4 rounded ${chosenIndex === 1 ? 'bg-blue-800' : 'hover:bg-blue-800'}`} onClick={() => handleNavigation("/student/find-tutor")}>Find Tutor</button>
        <button className={`w-full text-left py-2 px-4 rounded ${chosenIndex === 2 ? 'bg-blue-800' : 'hover:bg-blue-800'}`} onClick={() => handleNavigation("/student/profile")}>My Profile</button>
        <button className={`w-full text-left py-2 px-4 rounded ${chosenIndex === 3 ? 'bg-blue-800' : 'hover:bg-blue-800'}`} onClick={() => handleNavigation("/student/old-sessions")}>Old Sessions</button>
      </nav>
      <button className="mt-10 py-2 px-4 rounded bg-blue-700 hover:bg-blue-800">Logout</button>
    </aside>
  );
}
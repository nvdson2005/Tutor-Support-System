import { useRouter } from "next/navigation";
export default function Sidebar({chosenIndex, navigateData}: {chosenIndex: number, navigateData?: Array<{path: string, label: string}>}) {
    const router = useRouter();
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <aside className="w-64 bg-blue-900 text-white flex flex-col py-8 px-6">
      <div className="text-2xl font-bold mb-10 tracking-wide">HCMUT TUTOR</div>
      <nav className="flex-1 space-y-4">
        {navigateData?.map((item, index) => (
          <button
            key={index}
            className={`w-full text-left py-2 px-4 rounded ${chosenIndex === index ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
            onClick={() => handleNavigation(item.path)}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <button className="mt-10 py-2 px-4 rounded bg-blue-700 hover:bg-blue-800">Logout</button>
    </aside>
  );
}
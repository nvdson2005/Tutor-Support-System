
export default function TopBar({ username, dashboardContent }: { username: string, dashboardContent?: string }) {
  return (
    <div className="w-full flex justify-between items-center px-6 py-8 bg-white shadow">
      <h2 className="text-2xl font-semibold text-black">{dashboardContent}</h2>
      <span className="text-gray-500">{username}</span>
    </div>
  );
}

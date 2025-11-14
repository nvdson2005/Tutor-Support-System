export default function StudentTopBar({ studentName }: { studentName: string }) {
  return (
    <div className="w-full flex justify-between items-center px-6 py-8 bg-white shadow">
      <h2 className="text-2xl font-semibold">Student Dashboard</h2>
      <span className="text-gray-500">{studentName}</span>
    </div>
  );
}

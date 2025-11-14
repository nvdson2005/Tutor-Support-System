import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-zinc-100 to-zinc-200 flex items-center justify-center font-sans">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome to the Home Page</h1>
        <p className="text-gray-700 mb-4">
          This is a sample home page. You can navigate to the login page by clicking the button below.
        </p>
        <div className="text-center">
        </div>
      </div>
    </div>
  );
}

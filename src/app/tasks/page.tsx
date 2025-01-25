'use client';
import { useStore } from "@/store/store";
import Link from "next/link";

export default function ViewTasks() {
  const tasks = useStore((state) => state.tasks);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-4">All Tasks</h1>
      <ol className="w-full max-w-md list-decimal list-inside bg-gray-800 p-4 rounded-lg border border-gray-700">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <li key={index} className="p-2 border-b border-gray-700 last:border-none">
              {task.work}
            </li>
          ))
        ) : (
          <p className="text-gray-400">No tasks available.</p>
        )}
      </ol>
      <Link href="/" className="font-bold text-xl text-red-600">Home</Link>
    </div>
  );
}

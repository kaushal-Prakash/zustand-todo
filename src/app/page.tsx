'use client';
import { useStore } from "@/store/store";
import Link from "next/link";
import { useState } from "react";
import { FaCheck, FaTrash, FaPlusCircle } from "react-icons/fa";

export default function Home() {
  const tasks = useStore((state) => state.tasks);
  const addTask = useStore((state) => state.addTask);
  const toggleTask = useStore((state) => state.toggleTask);
  const deleteTask = useStore((state) => state.deleteTask);
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim() !== "") {
      addTask(input);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-4">ToDo List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
          placeholder="Enter a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleAddTask}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all"
        >
          <FaPlusCircle size={20} /> Add
        </button>
      </div>
      <ul className="w-full max-w-md">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex justify-between items-center bg-gray-800 p-3 rounded-lg mb-2 border border-gray-700 ${task.completed ? "line-through text-gray-400" : ""}`}
          >
            {task.work}
            <div className="flex gap-2">
              <button
                onClick={() => toggleTask(index)}
                className="p-2 bg-green-600 hover:bg-green-700 rounded-lg transition-all"
              >
                <FaCheck size={20} />
              </button>
              <button
                onClick={() => deleteTask(index)}
                className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition-all"
              >
                <FaTrash size={20} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <Link href="/tasks" className="font-bold text-xl text-red-600">View All Tasks</Link>
      </div>
    </div>
  );
}

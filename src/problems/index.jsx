import { useState, useEffect } from "react";
import axiosInstance from "../axiosInstance";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Submissions from "./components/Submissions";

const Problems = () => {
  const [problems, setProblems] = useState([]);
  const Tags = [
    "DP",
    "Graph",
    "Greedy",
    "Math",
    "String",
    "Tree",
    "Array",
    "Hashing",
    "Sorting",
    "Searching",
    "Dynamic Programming",
    "Bit Manipulation",
  ];

  const getProblems = async () => {
    try {
      const res = await axiosInstance.get("/problems/getProblems");
      console.log(res.data);
      setProblems(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProblems();
  }, []);

  return (
    <div className="flex flex-row gap-2 justify-center dark:bg-black">
      <div className="w-full h-screen max-w-[1200px] px-6 shadow-2xl">
        <div className="flex flex-col w-full my-16 items-center gap-2">
          <h1 className="text-3xl font-bold">Battle Practice</h1>
          <p className="text-lg">Here are some problems to solve</p>
        </div>
        <div className="flex flex-row gap-3">
          <div className="flex flex-col w-2/3 border-gray-400 border rounded-md border-opacity-50 p-4">
            <div className="flex flex-row justify-between items-center">
              <h2 className="font-bold text-xl">Problem Set</h2>
              <a href="/problems/add" className="text-sm text-green-500">
                + Add Your Own Problem
              </a>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row gap-2 w-full my-3">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Problems" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Solved">Solved</SelectItem>
                    <SelectItem value="Unsolved">Unsolved</SelectItem>
                    <SelectItem value="Attempted">Attempted</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Easy">Easy</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Tags" />
                  </SelectTrigger>
                  <SelectContent>
                    {Tags.map((tag, index) => (
                      <SelectItem key={index} value={tag}>
                        {tag}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col rounded-lg">
                <table className="table-auto text-left">
                  <tr className="text-sm border-b-2 border-opacity-50">
                    <th className="font-normal p-2">Status</th>
                    <th className="font-normal p-2">Title</th>
                    <th className="font-normal p-2">Difficulty</th>
                    <th className="font-normal p-2">Tags</th>
                  </tr>
                  {problems &&
                    problems.map((problem, index) => (
                      <tr key={index}>
                        <td className="font-normal p-2">✅</td>
                        <td className="font-normal p-2">{problem.title}</td>
                        <td className="font-normal p-2">
                          {problem.difficulty}
                        </td>
                        <td className="font-normal p-2">{problem.tags[0]}</td>
                      </tr>
                    ))}
                </table>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/3 border-gray-400 border rounded-md border-opacity-50 p-4">
            <div>
              <h2 className="font-bold text-xl">Recent Submissions</h2>
            </div>
            <Submissions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problems;

import React, { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance";
import LoadingPage from "@/components/custom/LoadingPage";
import NotFoundPage from "@/components/custom/NotFoundPage";

const ProblemSet = ({ contest }) => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchedProblems = new Set();

  const getProblems = async () => {
    for (const index in contest.contestProblems) {
      const p = contest.contestProblems[index].problem;
      try {
        const res = await axiosInstance.get(`/problems/getProblemById/${p}`);
        const newProblem = { ...res.data, score: 100 };
        if (!fetchedProblems.has(newProblem.problemId)) {
          fetchedProblems.add(newProblem.problemId);
          setProblems((prevProblems) => [...prevProblems, newProblem]);
        }
      } catch (error) {
        console.log(error);
        break;
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    if (problems.length === 0) getProblems();
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : problems ? (
        <div className="border-4 border-gray-500 rounded-lg shadow-lg">
          <div className="bg-gray-500 uppercase font-bold">Problems</div>
          <div>
            <table>
              <thead>
                <tr className="uppercase font-semibold">
                  <th className="border-primary/20 border-[2px] px-7">#</th>
                  <th className="border-primary/20 border-[2px] w-full text-center">
                    Title
                  </th>
                  <th className="border-primary/20 border-[2px] px-5">
                    Difficulty
                  </th>
                  <th className="border-primary/20 border-[2px] px-5">Score</th>
                </tr>
              </thead>
              <tbody>
                {problems &&
                  problems.map((problem, index) => {
                    const diffColor =
                      problem.difficulty === "Easy"
                        ? "text-green-700"
                        : problem.difficulty === "Medium"
                        ? "text-yellow-700"
                        : "text-red-700";

                    return (
                      <tr key={index}>
                        <td className="border-primary/20 border-[2px] text-center">
                          {index + 1}
                        </td>
                        <td className="border-primary/20 border-[2px] pl-2">
                          <a href={`/problems/${problem.problemId}`}>
                            {problem.title}
                          </a>
                        </td>
                        <td
                          className={`border-primary/20 border-[2px] text-center ${diffColor}`}
                        >
                          {problem.difficulty}
                        </td>
                        <td
                          className={`border-primary/20 border-[2px] text-center`}
                        >
                          {problem.score}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <NotFoundPage />
      )}
    </div>
  );
};

export default ProblemSet;

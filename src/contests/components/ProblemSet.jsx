import React from "react";

const problems = [
  {
    problemId: 1,
    title: "A+B Again?",
    difficulty: "Easy",
    status: "Accepted",
  },
  {
    problemId: 2,
    title: "Card Games",
    difficulty: "Easy",
    status: "Accepted",
  },
  {
    problemId: 3,
    title: "Showering",
    difficulty: "Medium",
    status: "Wrong Answer",
  },
  {
    problemId: 4,
    title: "Slavic's Exam",
    difficulty: "Hard",
    status: "",
  },
];

const ProblemSet = () => {
  return (
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
              <th className="border-primary/20 border-[2px] px-7">Status</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((problem, index) => {
              const bgVar = problem.status
                ? problem.status === "Accepted"
                  ? "bg-green-300/20"
                  : "bg-red-300/20"
                : "";

              const diffColor =
                problem.difficulty === "Easy"
                  ? "text-green-700"
                  : problem.difficulty === "Medium"
                  ? "text-yellow-700"
                  : "text-red-700";
              return (
                <tr key={index} className={bgVar}>
                  <td className="border-primary/20 border-[2px] text-center">
                    {index + 1}
                  </td>
                  <td className="border-primary/20 border-[2px] pl-2">
                    {problem.title}
                  </td>
                  <td
                    className={`border-primary/20 border-[2px] text-center ${diffColor}`}
                  >
                    {problem.difficulty}
                  </td>
                  <td className="border-primary/20 border-[2px] text-center">
                    {problem.status}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProblemSet;

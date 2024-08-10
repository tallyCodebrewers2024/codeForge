import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import ProblemSet from "../components/ProblemSet";

const ContestPage = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="w-full flex justify-center">
      <div className="mt-10 w-[1200px]">
        <div className="flex flex-row gap-2">
          <Button
            className={`p-2 ${
              index === 0
                ? "bg-primary text-secondary"
                : "bg-secondary text-primary"
            } hover:bg-gray-600`}
            onClick={() => setIndex(0)}
          >
            Problems
          </Button>
          <Button
            className={`p-2 ${
              index === 1
                ? "bg-primary text-secondary"
                : "bg-secondary text-primary"
            } hover:bg-gray-600`}
            onClick={() => setIndex(1)}
          >
            Submissions
          </Button>
          <Button
            className={`p-2 ${
              index === 2
                ? "bg-primary text-secondary"
                : "bg-secondary text-primary"
            } hover:bg-gray-600`}
            onClick={() => setIndex(2)}
          >
            Standings
          </Button>
        </div>
        <div className="mt-5">{index === 0 && <ProblemSet />}</div>
      </div>
    </div>
  );
};

export default ContestPage;

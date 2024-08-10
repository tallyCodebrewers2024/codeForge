import Split from "react-split";
import ProblemStatement from "../components/ProblemStatement";
import CodeEditor from "../components/CodeEditor";
import OutputWindow from "../components/OutputWindow";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
import LoadingPage from "@/components/custom/LoadingPage";
import NotFoundPage from "@/components/custom/NotFoundPage";

const ProblemPage = () => {
  const [problem, setProblem] = useState();
  const [loading, setLoading] = useState(true);
  const { problemId } = useParams();

  const getProblem = async () => {
    console.log(problemId);
    try {
      const res = await axiosInstance.get(`/problems/getProblem/${problemId}`);
      setProblem(res.data);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    getProblem();
  }, []);

  return (
    <div className="flex flex-row p-4 gap-2 h-[95vh] w-full">
      {loading ? (
        <LoadingPage />
      ) : problem ? (
        <Split className="split flex flex-row w-full">
          <ProblemStatement problem={problem} />
          <Split className="split flex flex-col" direction="vertical">
            <CodeEditor />
            <OutputWindow />
          </Split>
        </Split>
      ) : (
        <NotFoundPage />
      )}
    </div>
  );
};

export default ProblemPage;

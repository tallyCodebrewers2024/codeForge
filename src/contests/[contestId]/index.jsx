import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import ProblemSet from "../components/ProblemSet";
import { useParams } from "react-router-dom";
import LoadingPage from "@/components/custom/LoadingPage";
import NotFoundPage from "@/components/custom/NotFoundPage";
import axiosInstance from "../../axiosInstance";

const ContestPage = () => {
  const [contest, setContest] = useState();
  const [loading, setLoading] = useState(true);
  const { contestId } = useParams();
  const [index, setIndex] = useState(0);

  const getContest = async () => {
    try {
      const res = await axiosInstance.get(`/contests/getContest/${contestId}`);
      setContest(res.data);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    getContest();
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : contest ? (
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
                Standings
              </Button>
            </div>
            <div className="mt-5">
              {index === 0 && <ProblemSet contest={contest} />}
            </div>
          </div>
        </div>
      ) : (
        <NotFoundPage />
      )}
    </div>
  );
};

export default ContestPage;

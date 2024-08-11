import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import ProblemSet from "../components/ProblemSet";
import { useParams } from "react-router-dom";
import LoadingPage from "@/components/custom/LoadingPage";
import NotFoundPage from "@/components/custom/NotFoundPage";
import axiosInstance from "../../axiosInstance";
import Countdown from "react-countdown";

const ContestPage = () => {
	const [contest, setContest] = useState();
	const [loading, setLoading] = useState(true);
	const { contestId } = useParams();
	const [index, setIndex] = useState(0);

	const getContest = async () => {
		try {
			const res = await axiosInstance.get(
				`/contests/getContest/${contestId}`
			);
			setContest(res.data);
		} catch (error) {
			console.log(error);
		}

		setLoading(false);
	};

	useEffect(() => {
		getContest();
	}, []);

	if (loading) {
		return <LoadingPage />;
	}

	if (!contest) {
		return <NotFoundPage />;
	}

	const now = new Date();
	const startTime = new Date(contest.startTime);
	const endTime = new Date(contest.endTime);

	const isLive = now >= startTime && now <= endTime;

	return (
		<div>
			{startTime > now ? (
				<div className="flex flex-col items-center mt-10">
					<h2 className="text-2xl font-bold text-center">
						Contest starts in:
					</h2>
					<Countdown
						date={startTime}
						className="text-2xl font-normal dark:text-gray-300"
					/>
				</div>
			) : (
				<div className="w-full flex justify-center">
					<div className="mt-10 w-[1200px]">
						{isLive && (
							<div className="mb-4">
								<h2 className="text-xl font-bold">
									Contest Timings:
								</h2>
								<p>Start Time: {startTime.toLocaleString()}</p>
								<p>End Time: {endTime.toLocaleString()}</p>
								<h2 className="text-xl font-bold">
									Time Remaining:
								</h2>
								<Countdown
									date={endTime}
									className="text-2xl font-normal dark:text-gray-300"
								/>
							</div>
						)}
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
			)}
		</div>
	);
};

export default ContestPage;

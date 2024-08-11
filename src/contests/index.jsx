import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import axiosInstance from "../axiosInstance";

const Contests = () => {
	const [contests, setContests] = useState([]);
	const [upcomingContests, setUpcomingContests] = useState([]);
	const [pastContests, setPastContests] = useState([]);

	const getAllContests = async () => {
		try {
			const res = await axiosInstance.get("/contests/getAllContests");
			setContests(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllContests();
	}, []);

	useEffect(() => {
		const categorizeContests = (contests) => {
			const now = new Date();
			const upcoming = contests.filter(
				(contest) => new Date(contest.startTime) > now
			);
			const past = contests.filter(
				(contest) => new Date(contest.endTime) < now
			);
			setUpcomingContests(upcoming);
			setPastContests(past);
		};

		categorizeContests(contests);
	}, [contests]);

	return (
		<div className="flex w-full h-full justify-center">
			<div className="w-full h-screen max-w-[1200px] px-6 shadow-2xl">
				<div className="flex flex-col w-full my-16 items-center gap-2">
					<h1 className="text-3xl font-bold">Coding Battleground</h1>
					<p className="text-lg">
						Compete with others and improve your skills
					</p>
				</div>
				<div className="w-full flex justify-between font-bold">
					<div className="text-xl">Upcoming Contests</div>
					<a href="/contests/add" className="text-green-600">
						+ Host Your Own Contest
					</a>
				</div>
				<div className="flex flex-col gap-2 px-14 my-3 py-5">
					<div className="w-full h-[200px]">
						<Carousel className="w-full">
							<CarouselContent className="-ml-1">
								{upcomingContests.map((contest, index) => (
									<CarouselItem
										key={index}
										className="bg-black/50 h-[200px] ml-2 rounded-lg dark:bg-[#30303077] bg-[#d4d4d4] grid place-items-center md:basis-1/3 lg:basis-1/3"
									>
										<a
											href={`/contests/${contest.contestId}`}
										>
											<div className="p-1 flex flex-col items-center justify-center">
												<h2 className="text-2xl font-bold">
													{contest.title}
												</h2>
												<h5 className="text-sm text-gray-300">
													{new Date(
														contest.startTime
													).toLocaleDateString()}
													<br />
													{new Date(
														contest.startTime
													).toLocaleTimeString()}{" "}
												</h5>
											</div>
										</a>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious />
							<CarouselNext />
						</Carousel>
					</div>
				</div>
				<div className="flex flex-row gap-3">
					<div className="flex flex-col w-2/3 border-gray-400 border rounded-md border-opacity-50 p-4">
						<div className="margin-bottom-2 border-b-2 border-opacity-50 pb-3">
							<h2 className="font-bold text-xl">Past Contests</h2>
						</div>
						<div className="flex flex-col rounded-lg">
							<ol className="list-decimal list-inside">
								{pastContests.map((contest) => (
									<li
										className="flex flex-row font-normal p-2 items-center justify-between"
										key={contest._id}
									>
										<div className="flex flex-col text-lg">
											<span>{contest.title}</span>
											<span className="text-sm text-gray-500">
												{new Date(
													contest.startTime
												).toLocaleDateString()}
												{" - "}
												{new Date(
													contest.startTime
												).toLocaleTimeString()}
											</span>
										</div>
										<div>
											<a
												href={`/contests/${contest.contestId}`}
											>
												<Button>View Contest</Button>
											</a>
										</div>
									</li>
								))}
							</ol>
						</div>
					</div>
					<div className="flex flex-col w-1/3 border-gray-400 border rounded-md border-opacity-50 p-4">
						<div>
							<h2 className="font-bold text-xl">Leaderboard</h2>
						</div>
						<div className="flex flex-col mt-3 rounded-lg">
							<ol className="list-decimal list-inside">
								<li className="flex space-x-4 font-normal p-2 odd:bg-gray-100 dark:odd:bg-[rgba(255,255,255,0.1)] rounded-sm">
									<span>1.</span>
									<span>coder_god</span>
								</li>
								<li className="flex space-x-4 font-normal p-2 odd:bg-gray-100 dark:odd:bg-[rgba(255,255,255,0.1)] rounded-sm">
									<span>2.</span>
									<span>nitinraj</span>
								</li>
								<li className="flex space-x-4 font-normal p-2 odd:bg-gray-100 dark:odd:bg-[rgba(255,255,255,0.1)] rounded-sm">
									<span>3.</span>
									<span>nikhil007</span>
								</li>
								<li className="flex space-x-4 font-normal p-2 odd:bg-gray-100 dark:odd:bg-[rgba(255,255,255,0.1)] rounded-sm">
									<span>4.</span>
									<span>vamshi333</span>
								</li>
								<li className="flex space-x-4 font-normal p-2 odd:bg-gray-100 dark:odd:bg-[rgba(255,255,255,0.1)] rounded-sm">
									<span>5.</span>
									<span>eqlipse</span>
								</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contests;

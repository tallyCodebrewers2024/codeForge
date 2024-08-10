import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const Contests = () => {
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
								{Array.from({ length: 10 }).map((_, index) => (
									<CarouselItem
										key={index}
										className="bg-black/50 h-[200px] ml-2 rounded-lg dark:bg-[#30303077] bg-[#d4d4d4] grid place-items-center md:basis-1/3 lg:basis-1/3"
									>
										<div className="p-1">
											<h2>Contest {index + 1}</h2>
											<h5>Aug 1,2024</h5>
										</div>
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
								<li className="flex flex-row font-normal p-2 items-center justify-between">
									<div className="flex flex-col text-lg">
										<span>Contest 1</span>
										<span className="text-sm text-gray-500">
											Aug 12, 2024
										</span>
									</div>
									<div>
										<Button>View Contest</Button>
									</div>
								</li>
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
									<span>Item 1</span>
								</li>
								<li className="flex space-x-4 font-normal p-2 odd:bg-gray-100 dark:odd:bg-[rgba(255,255,255,0.1)] rounded-sm">
									<span>2.</span>
									<span>Item 2</span>
								</li>
								<li className="flex space-x-4 font-normal p-2 odd:bg-gray-100 dark:odd:bg-[rgba(255,255,255,0.1)] rounded-sm">
									<span>3.</span>
									<span>Item 3</span>
								</li>
								<li className="flex space-x-4 font-normal p-2 odd:bg-gray-100 dark:odd:bg-[rgba(255,255,255,0.1)] rounded-sm">
									<span>4.</span>
									<span>Item 4</span>
								</li>
								<li className="flex space-x-4 font-normal p-2 odd:bg-gray-100 dark:odd:bg-[rgba(255,255,255,0.1)] rounded-sm">
									<span>5.</span>
									<span>Item 5</span>
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

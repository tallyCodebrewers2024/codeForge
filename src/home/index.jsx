import { Button } from "@/components/ui/button";

const Home = () => {
	return (
		<div className="flex flex-row justify-center items-center h-full">
			<div className="w-full max-w-[1200px] px-6 shadow-2xl">
				<section className="flex flex-col items-center w-full py-[100px]">
					<img
						src="/logo_large.png"
						alt="OneCode Logo"
						className="w-1/2 h-auto mb-6"
					/>
					<p className="text-4xl text-center font-semibold">
						Welcome to OneCode!
						<br />
					</p>
					<p className="text-2xl text-gray-400 mt-2">
						A platform to practice and play with code
					</p>
				</section>
				<section className="flex flex-row items-center w-full py-[50px]">
					<img
						src="/about.png"
						alt="About"
						className="w-1/2 h-auto"
					/>
					<div>
						<p className="text-4xl font-semibold">About OneCode</p>
						<p className="text-xl mt-4 font-normal text-gray-400">
							OneCode is a platform to practice and play with
							code. You can write code, run it, and share it with
							others.
							<br />
							<br />
							Here you can participate in coding contests, and
							even create your own contests. You can also create
							your own problems and share them with others.
						</p>
					</div>
				</section>
				<section className="flex flex-col items-center w-full py-[50px]">
					<p className="text-4xl text-center font-semibold">
						Features
					</p>
					<p className="text-xl text-gray-400 mt-2 text-center">
						It comes with several features to help you practice and
						play with code.
					</p>
					<div className="grid grid-cols-3 gap-4 mt-6">
						<div className="flex flex-col items-center">
							<img
								src="/practice.png"
								alt="Feature 1"
								className="w-1/4 h-auto"
							/>
							<p className="text-xl mt-4">Practice Code</p>
						</div>
						<div className="flex flex-col items-center">
							<img
								src="/compete.png"
								alt="Feature 2"
								className="w-1/4 h-auto"
							/>
							<p className="text-xl mt-4">Compete in Contests</p>
						</div>
						<div className="flex flex-col items-center">
							<img
								src="/create.png"
								alt="Feature 3"
								className="w-1/4 h-auto"
							/>
							<p className="text-xl mt-4">Create Contests</p>
						</div>
					</div>
				</section>
				<section className="flex flex-col items-center w-full pb-[100px] pt-[40px]">
					<p className="text-6xl text-center font-semibold">
						Happy Coding!
					</p>
					<Button className="mt-10 bg-blue-500 text-xl px-4 py-2">
						Get Started
					</Button>
				</section>
			</div>
		</div>
	);
};

export default Home;

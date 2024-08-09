import { Button } from "@/components/ui/button";

const OutputWindow = () => {
	return (
		<div className="flex w-full flex-col border-gray-400 border rounded-md border-opacity-50 p-4">
			<div className="flex flex-row justify-between items-center text-white">
				<p className="font-semibold text-lg dark:text-white text-black">
					Output
				</p>
				<div className="flex gap-2">
					<Button className="bg-blue-500 px-2 py-1 rounded h-[2rem]">
						Run Sample
					</Button>
					<Button className="bg-green-500 px-2 py-1 rounded h-[2rem]">
						Submit
					</Button>
				</div>
			</div>
			<div className="flex flex-col gap-2 p-2">
				<div>
					<p>Sample Output</p>
					<p>Sample Output</p>
					<p>Sample Output</p>
					<p>Sample Output</p>
				</div>
			</div>
		</div>
	);
};

export default OutputWindow;

import CodeEditor from "@/problems/components/CodeEditor";
import { useState } from "react";

const Playground = () => {
	const [showInput, setShowInput] = useState(true);

	return (
		<div className="flex flex-row justify-center">
			<div className="w-full max-w-[1200px] px-6 shadow-2xl">
				<div className="flex flex-col w-full mt-4 items-center gap-2">
					<h1 className="text-3xl font-bold">Coding Playground</h1>
				</div>
				<div className="flex flex-col min-h-[95vh] p-4 gap-2 w-full">
					<div className="h-[60vh]">
						<CodeEditor />
					</div>
					<div className="flex flex-col gap-2">
						<div className="flex flex-row justify-between">
							<label htmlFor="input" className="font-medium">
								Input
							</label>
							<div className="flex flex-row gap-2 items-center">
								<input
									type="checkbox"
									name="showHide"
									id="showHide"
									className="border border-gray-300 rounded-md p-2 focus:text-black focus:outline-none"
									onChange={() => setShowInput(!showInput)}
								/>
								<p className="text-sm text-gray-500">
									Show/Hide
								</p>
							</div>
						</div>
						{showInput && (
							<textarea
								type="text"
								name="name"
								className="px-4 py-2 border border-gray-300 rounded-md min-h-[80px] outline-none dark:bg-gray-900"
							/>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="output" className="font-medium">
							Output
						</label>
						<textarea
							type="text"
							name="output"
							placeholder="Output will be shown here"
							value={"Output will be shown here"}
							className="px-4 py-2 border border-gray-300 rounded-md min-h-[80px] outline-none dark:bg-gray-900"
							readOnly
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Playground;

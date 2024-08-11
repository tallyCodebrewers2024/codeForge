import CodeEditor from "@/problems/components/CodeEditor";
import { useEffect, useState } from "react";

const Playground = () => {
	const [showInput, setShowInput] = useState(true);
	const [inputString, setInputString] = useState("");
	const [outputString, setOutputString] = useState("Output will be shown here");
	const [outputRuntime, setOutputRuntime] = useState(" -- ");
	const [outputMemory, setOutputMemory] = useState(" -- ");
	const [outputError, setOutputError] = useState("");

	const outputMethods = {
		setOutputMemory,
		setOutputRuntime,
		setOutputString,
		setOutputError
	}

	return (
		<div className="flex flex-row justify-center">
			<div className="w-full max-w-[1200px] px-6 shadow-2xl">
				{/* <div className="flex flex-col w-full mt-4 items-center gap-2">
					<h1 className="text-3xl font-bold">Coding Playground</h1>
				</div> */}
				<div className="flex flex-col min-h-[95vh] p-4 gap-2 w-full">
					<div className="h-[60vh]">
						<CodeEditor inputString={inputString} outputMethods={outputMethods} />
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
								value={inputString}
								onChange={(e) => setInputString(e.target.value)}
							/>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<div>
							<label htmlFor="output" className="font-medium">
								Output
							</label>
							<span className="output-details">
								Time: <span className="color-green">{outputRuntime} ms</span>
							</span>
							<span className="output-details">
								Memory: <span className="color-green">{outputMemory} Kb</span>
							</span>
						</div>
						<textarea
							type="text"
							name="output"
							placeholder="Output will be shown here"
							value={outputError === "" ? outputString : outputError}
							className={`px-4 py-2 border border-gray-300 rounded-md min-h-[80px] outline-none dark:bg-gray-900`}
							readOnly
							style={{
								color: `${(outputError === "") ? "white" : "#b73636"}`
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Playground;

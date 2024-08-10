import { useState } from "react";

const AddProblemPage = () => {
	const [formData, setFormData] = useState({
		problemId: "",
		title: "",
		difficulty: "Easy",
		tags: [],
		description: "",
		problemStatement: "",
		inputFormat: "",
		outputFormat: "",
		constraints: [""],
		examples: [{ input: "", output: "", explanation: "" }],
		testCases: [{ input: "", output: "" }],
		author: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		setFormData({
			...formData,
			[name]: value,
		});
		console.log(formData);
	};

	const handleExampleChange = (e, index) => {
		const examplesCopy = [...formData.examples];
		const { name, value } = e.target;
		examplesCopy[index][name] = value;
		setFormData({
			...formData,
			["examples"]: examplesCopy,
		});
	};

	const handleSubmit = () => {};

	return (
		<div className="w-full flex justify-center mb-4">
			<div className="max-w-[1200px] w-full">
				<div className="text-center font-bold text-3xl my-6">
					Create Problem
				</div>
				<div className="w-full">
					<form
						onSubmit={handleSubmit}
						className="grid grid-cols-3 gap-4"
					>
						<input
							onChange={(e) => handleInputChange(e)}
							className="form_input col-span-2"
							name="title"
							type="text"
							placeholder="Problem Title"
						/>
						<select
							className="form_input w-full"
							name="difficulty"
							onChange={(e) => handleInputChange(e)}
							defaultValue={formData.difficulty}
						>
							<option
								value="Easy"
								className="dark:text-black light:text-white"
							>
								Easy
							</option>
							<option
								value="Medium"
								className="dark:text-black light:text-white"
							>
								Medium
							</option>
							<option
								value="Hard"
								className="dark:text-black light:text-white"
							>
								Hard
							</option>
						</select>
						<textarea
							onChange={(e) => handleInputChange(e)}
							className="form_input col-span-3 min-h-[150px]"
							name="problemStatement"
							type="area"
							placeholder="Problem Statement"
						/>
						<textarea
							onChange={(e) => handleInputChange(e)}
							className="form_input col-span-3 min-h-[150px]"
							name="description"
							type="area"
							placeholder="Description"
						/>
						<div className="flex flex-row gap-3 col-span-3">
							<textarea
								onChange={(e) => handleInputChange(e)}
								className="form_input min-h-[100px] w-full"
								name="inputFormat"
								type="area"
								placeholder="Input Format"
							/>
							<textarea
								onChange={(e) => handleInputChange(e)}
								className="form_input min-h-[100px] w-full"
								name="outputFormat"
								type="area"
								placeholder="Output Format"
							/>
						</div>
						<div className="flex flex-col gap-3 col-span-3">
							<div className="w-full">
								{formData.examples &&
									formData.examples.map((example, index) => {
										return (
											<div
												className="grid grid-cols-3 gap-3"
												key={index}
											>
												<textarea
													onChange={(e) =>
														handleExampleChange(
															e,
															index
														)
													}
													className="form_input min-h-[100px] w-full"
													name="exampleInput"
													type="area"
													placeholder="Example Input"
													value={example.input}
												/>
												<textarea
													onChange={(e) =>
														handleExampleChange(
															e,
															index
														)
													}
													className="form_input min-h-[100px] w-full"
													name="exampleOutput"
													type="area"
													placeholder="Example Output"
													value={example.output}
												/>
												<textarea
													onChange={(e) =>
														handleExampleChange(
															e,
															index
														)
													}
													className="form_input min-h-[100px] w-full"
													name="explanation"
													type="area"
													placeholder="Explanation"
													value={example.explanation}
												/>
											</div>
										);
									})}
							</div>
						</div>
						<div className="flex flex-row gap-3 col-span-3">
							<textarea
								onChange={(e) => handleInputChange(e)}
								className="form_input min-h-[100px] w-full"
								name="testCases"
								type="area"
								placeholder="Test Cases"
							/>
							<textarea
								onChange={(e) => handleInputChange(e)}
								className="form_input min-h-[100px] w-full"
								name="testCasesOutput"
								type="area"
								placeholder="Test Cases Output"
							/>
						</div>
						<textarea
							onChange={(e) => handleInputChange(e)}
							className="form_input min-h-[100px] col-span-3 w-full"
							name="solution"
							type="text"
							placeholder="Solution Code"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddProblemPage;

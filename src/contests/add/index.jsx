import { Button } from "@/components/ui/button";
import { useState } from "react";

const AddContestPage = () => {
	const [fromData, setFormData] = useState({
		title: "",
		description: "",
		startTime: "",
		endTime: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = () => {};

	return (
		<div className="w-full flex justify-center mb-8">
			<div className="max-w-[1200px] w-full">
				<div className="text-center font-bold text-3xl my-6">
					Create Contest
				</div>
				<div className="w-full">
					<form
						onSubmit={handleSubmit}
						className="grid grid-cols-3 gap-4"
					>
						<input
							onChange={(e) => handleInputChange(e)}
							className="form_input col-span-3"
							name="title"
							type="text"
							placeholder="Contest Title"
						/>
						<input
							onChange={(e) => handleInputChange(e)}
							className="form_input"
							name="startTime"
							type="datetime-local"
						/>
						<input
							onChange={(e) => handleInputChange(e)}
							className="form_input"
							name="endTime"
							type="datetime-local"
						/>
						<textarea
							onChange={(e) => handleInputChange(e)}
							className="form_input col-span-3"
							name="description"
							placeholder="Contest Description"
						/>
						<Button
							type="submit"
							className="col-span-3 bg-blue-500"
						>
							Create Contest
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddContestPage;

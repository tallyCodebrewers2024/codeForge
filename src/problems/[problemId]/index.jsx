import { useParams } from "react-router-dom";
import ProblemStatement from "../components/ProblemStatement";
import CodeEditor from "../components/CodeEditor";
import OutputWindow from "../components/OutputWindow";

const ProblemPage = () => {
	const params = useParams();
	return (
		<div className="flex flex-row gap-5">
			<div className="w-full h-screen p-4">
				<ProblemStatement />
			</div>
			<div className="flex flex-col gap-3 w-full h-screen p-4">
				<div className="h-full">
					<CodeEditor />
				</div>
				<div className="h-full">
					<OutputWindow />
				</div>
			</div>
		</div>
	);
};

export default ProblemPage;

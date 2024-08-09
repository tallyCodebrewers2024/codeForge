// import { useParams } from "react-router-dom";
import ProblemStatement from "../components/ProblemStatement";
import CodeEditor from "../components/CodeEditor";
import OutputWindow from "../components/OutputWindow";

const ProblemPage = () => {
	// const params = useParams();
	return (
		<div className="flex flex-row p-4 gap-2 h-full w-full">
			<div className="w-full h-screen">
				<ProblemStatement />
			</div>
			<div className="flex flex-col gap-3 w-full h-screen">
				<div>
					<CodeEditor />
				</div>
				<div>
					<OutputWindow />
				</div>
			</div>
		</div>
	);
};

export default ProblemPage;

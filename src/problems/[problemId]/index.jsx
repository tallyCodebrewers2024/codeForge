import Split from "react-split";
// import { useParams } from "react-router-dom";
import ProblemStatement from "../components/ProblemStatement";
import CodeEditor from "../components/CodeEditor";
import OutputWindow from "../components/OutputWindow";

const ProblemPage = () => {
	// const params = useParams();
	return (
		<div className="flex flex-row p-4 gap-2 h-[95vh] w-full">
			<Split className="split flex flex-row">
				<ProblemStatement />
				<Split className="split flex flex-col" direction="vertical">
					<CodeEditor />
					<OutputWindow />
				</Split>
			</Split>
		</div>
	);
};

export default ProblemPage;

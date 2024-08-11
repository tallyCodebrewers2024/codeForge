import { CODE_SNIPPETS } from "@/constants";
import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageSelector from "./components/LanguageSelector";
import { Button } from "@/components/ui/button";
import axiosInstance from "../../axiosInstance";

const CodeEditor = ({ inputString, problem, outputMethods }) => {
	const editorRef = useRef();
	const [language, setLanguage] = useState("cpp");
	const [code, setCode] = useState(CODE_SNIPPETS["cpp"]);

	const onMount = (editor) => {
		editorRef.current = editor;
		editor.focus();
	};

	const onSelect = (language) => {
		setLanguage(language);
		setCode(CODE_SNIPPETS[language]);
	};

	const handleRunCode = async (e) => {
		e.preventDefault();

		try {
			const response = await axiosInstance.post("/compiler/runcode", {
				language,
				code,
				input: inputString,
			});

      // console.log(response.data);

			outputMethods.setOutputString(response.data.output);
			outputMethods.setOutputMemory(response.data.memory);
			outputMethods.setOutputRuntime(response.data.runtime);
			outputMethods.setOutputError(response.data.error);
			// console.log(response.data.outputString);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex flex-col w-full h-[100%] border-gray-400 border rounded-md border-opacity-50 p-4 gap-2">
			<div className="flex justify-between items-center">
				<LanguageSelector language={language} onSelect={onSelect} />
        { !problem &&
  				<Button onClick={handleRunCode} className="py-1 px-4">
					Run Code
				</Button>
        }
			</div>
			<Editor
				height={"100%"}
				theme="vs-dark"
				language={language}
				onMount={onMount}
				value={code}
				onChange={(e) => setCode(e)}
			/>
		</div>
	);
};

export default CodeEditor;

import Split from "react-split";
import ProblemStatement from "../components/ProblemStatement";
import CodeEditor from "../components/CodeEditor";
import OutputWindow from "../components/OutputWindow";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
import LoadingPage from "@/components/custom/LoadingPage";
import NotFoundPage from "@/components/custom/NotFoundPage";
import LanguageSelector from "../components/components/LanguageSelector";
import { CODE_SNIPPETS } from "@/constants";
import { Editor } from "@monaco-editor/react";

const ProblemPage = () => {
    const editorRef = useRef();
    const [problem, setProblem] = useState();
    const [loading, setLoading] = useState(true);
    const { problemId } = useParams();
    const [language, setLanguage] = useState("cpp");
    const [code, setCode] = useState(CODE_SNIPPETS[language]);

  const getProblem = async () => {
    try {
      const res = await axiosInstance.get(`/problems/getProblem/${problemId}`);
      setProblem(res.data);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

    useEffect(() => {
        getProblem();
    }, []);

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };

    const onSelect = (language) => {
        setLanguage(language);
        setCode(CODE_SNIPPETS[language]);
    };

    return (
        <div className="flex flex-row p-4 gap-2 h-[95vh] w-full">
            {loading ? (
                <LoadingPage />
            ) : problem ? (
                <Split className="split flex flex-row w-full">
                    <ProblemStatement problem={problem} />
                    <Split className="split flex flex-col" direction="vertical">
                        <div className="flex flex-col w-full h-[100%] border-gray-400 border rounded-md border-opacity-50 p-4 gap-2">
                            <div>
                                <LanguageSelector
                                    language={language}
                                    onSelect={onSelect}
                                />
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
                        {/* <CodeEditor problem={problem} /> */}
                        <OutputWindow problem={problem} code={code} language={language} />
                    </Split>
                </Split>
            ) : (
                <NotFoundPage />
            )}
        </div>
    );
};

export default ProblemPage;

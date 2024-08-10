import { CODE_SNIPPETS } from "@/constants";
import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageSelector from "./components/LanguageSelector";

const CodeEditor = ({ problem }) => {
  const editorRef = useRef();
  const [language, setLanguage] = useState("cpp");
  const [value, setValue] = useState(CODE_SNIPPETS["cpp"]);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <div className="flex flex-col w-full h-[100%] border-gray-400 border rounded-md border-opacity-50 p-4 gap-2">
      <LanguageSelector language={language} onSelect={onSelect} />
      <Editor
        height={"100%"}
        theme="vs-dark"
        language={language}
        onMount={onMount}
        value={value}
        onChange={(v) => setValue(v)}
      />
    </div>
  );
};

export default CodeEditor;

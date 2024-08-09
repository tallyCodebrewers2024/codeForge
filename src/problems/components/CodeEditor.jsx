import { CODE_SNIPPETS } from "@/constants";
import { Editor } from "@monaco-editor/react";
import React, { useRef, useState } from "react";
import LanguageSelector from "./components/LanguageSelector";

const CodeEditor = ({ problem }) => {
  const editorRef = useRef();
  const [language, setLanguage] = useState("javascript");
  const [value, setValue] = useState(CODE_SNIPPETS["javascript"]);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <div>
      <LanguageSelector language={language} onSelect={onSelect} />
      <Editor
        height="50vh"
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

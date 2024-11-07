import Editor from '@monaco-editor/react';
import logo from "../../assets/logo.svg";
import "./App.css";

function App() {
  return (
    <Editor height="90vh" defaultLanguage="javascript" defaultValue="// some comment" />
  );
}

export default App;
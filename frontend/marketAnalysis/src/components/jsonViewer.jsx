import Editor from "@monaco-editor/react";

function JsonViewer(props) {
  const json = props.json

  return (
    <Editor
      height="250px"
      defaultLanguage="json"
      value={JSON.stringify(json, null, 2)}
      theme="vs-dark"
      options={{
        readOnly: true,
        minimap: { enabled: false },
        fontSize: 14,
        wordWrap: "on",
      }}
    />
  );
}

export default JsonViewer;
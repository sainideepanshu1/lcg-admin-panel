/* eslint-disable react/prop-types */
import { useState, useRef, useMemo, useEffect } from "react";
import JoditEditor from "jodit-react";

const Editor = ({ initialContent, updateDescription, placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState(initialContent);

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Start typing...",
    }),
    [placeholder]
  );

  // Update content when the initialContent prop changes
  useEffect(() => {
    setContent(initialContent);
  }, [initialContent]);

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      tabIndex={1}
      onBlur={(newContent) => {
        setContent(newContent);
        updateDescription(newContent);
      }}
    />
  );
};

export default Editor;

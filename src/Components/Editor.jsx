import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

const Editor = ({ description, updateDescription, placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState(description);

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Start typing...",
    }),
    [placeholder]
  );

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

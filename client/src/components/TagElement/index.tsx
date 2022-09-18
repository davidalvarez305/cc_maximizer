import React from "react";
import "./TagElement.css";

interface Props {
  tag: string;
}

const TagElement: React.FC<Props> = ({ tag }) => {
  return (
    <div className={`element-tags-f5-f5-fa-on-light-2`}>
      <div className="tag-3 x12px--bold">{tag}</div>
    </div>
  );
};

export default TagElement;

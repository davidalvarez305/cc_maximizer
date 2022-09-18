import React, { useState } from "react";
import "./TagElement.css";

interface Props {
  tag: string;
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const TagElement: React.FC<Props> = ({ tag, handleClick }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div className={`element-tags-f5-f5-fa-on-light-2`}>
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{ cursor: isHovering ? "pointer" : undefined }}
        onClick={handleClick}
        className="tag-3 x12px--bold"
      >
        {tag}
      </div>
    </div>
  );
};

export default TagElement;

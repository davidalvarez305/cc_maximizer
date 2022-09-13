import React from "react";
import "./IconButton.css";

interface Props {
  children: React.ReactNode;
  className: string;
}

const IconButton: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`buttons-icon-outline-resting-on-light ${className || ""}`}>
      <div className="icon-2 materialiconsoutlined-regular-normal-black-18px">
        {children}
      </div>
    </div>
  );
};

export default IconButton;

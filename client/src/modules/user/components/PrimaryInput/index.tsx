import React from "react";
import "./PrimaryInput.css";

interface Props {
    fieldTitle: string;
    placeholder: string;
    icon: any;
}

const PrimaryInput: React.FC<Props> = ({ fieldTitle, placeholder, icon }) => {

  return (
    <div className="forms-primary-select-activeon-light">
      <div className="field-title x12px--bold">{fieldTitle}</div>
      <div className="overlap-group">
        <div className="placeholder x14px--regular">{placeholder}</div>
        <div className="icon materialiconsoutlined-regular-normal-black-18px">{icon}</div>
      </div>
    </div>
  );
}

export default PrimaryInput;

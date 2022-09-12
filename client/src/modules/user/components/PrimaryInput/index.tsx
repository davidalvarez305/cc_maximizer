import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";
import "./PrimaryInput.css";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  icon: any;
};

const PrimaryInput: React.FC<Props> = ({
  label,
  name,
  size: _,
  icon,
  ...props
}) => {
  const [field, meta] = useField(name);

  return (
    <div className="forms-primary-select-activeon-light">
      <div className="field-title x12px--bold">{label}</div>
      <div className="overlap-group">
        <input {...props} {...field} className="placeholder x14px--regular" />
        <div className="icon materialiconsoutlined-regular-normal-black-18px">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default PrimaryInput;

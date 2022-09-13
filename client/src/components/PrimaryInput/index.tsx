import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";
import "./PrimaryInput.css";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

const PrimaryInput: React.FC<Props> = ({
  label,
  name,
  size: _,
  ...props
}) => {
  const [field, meta] = useField(name);

  return (
    <div className="forms-primary-select-activeon-light">
      <div className="field-title x12px--bold">{label}</div>
      <input {...props} {...field} className="overlap-group" />
    </div>
  );
};

export default PrimaryInput;

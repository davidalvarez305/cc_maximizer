import React, { useState } from "react";
import "./Button.css";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode;
  className: "Dark" | "Light" | "Blue" | "LightBlue";
};

const Button: React.FC<Props> = ({ children, className, ...props }) => {
  const [isHovering, setIsHovering] = useState(false);
  const buttonOptions = {
    Dark: "button-dark",
    Light: "button-light",
    Blue: "button-blue",
    LightBlue: "button-light",
  };

  const labelOptions = {
    Dark: "label-dark",
    Light: "label-light",
    Blue: "label-dark",
    LightBlue: "label-light",
  };

  return (
    <button
      style={{
        cursor: isHovering ? "pointer" : undefined,
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
      className={buttonOptions[className]}
    >
      <div className={labelOptions[className]}>{children}</div>
    </button>
  );
};

export default Button;

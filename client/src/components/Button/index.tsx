import React from "react";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode;
};

const DarkButton: React.FC<Props> = ({ children, ...props }) => {
  const styles = {
    buttonDarkLabel: {
      alignItems: "flex-start",
      backgroundColor: "#000000",
      borderRadius: "8px",
      display: "flex",
      height: "56px",
      justifyContent: "flex-end",
      minWidth: "125px",
      padding: "17px 43px",
    },
    label: {
      color: "rgba(255, 255, 255, 1)",
      fontWeight: 700,
      lineHeight: "21px",
      minHeight: "21px",
      minWidth: "38px",
    },
  };

  return (
    <button {...props} style={{ ...styles.buttonDarkLabel }}>
      <div
        style={{ ...styles.label, textAlign: "center", whiteSpace: "nowrap" }}
      >
        {children}
      </div>
    </button>
  );
};

export default DarkButton;

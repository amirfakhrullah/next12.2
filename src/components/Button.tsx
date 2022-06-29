import React from "react";

const Button: React.FunctionComponent<{
  children: string;
  onClick: () => void;
}> = ({ children, onClick }) => {
  return (
    <button
      onClick={() => onClick && onClick()}
      style={{
        maxWidth: 400,
      }}
    >
      {children}
    </button>
  );
};

export default Button;

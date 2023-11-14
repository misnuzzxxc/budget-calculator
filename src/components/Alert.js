import React from "react";

// Alert 컴포넌트는 type과 text를 받아와 해당하는 스타일과 텍스트를 표시합니다.
const Alert = ({ type, text }) => {
  return (
    <div className={`alert alert-${type}`}>
      {text}
    </div>
  );
};

export default Alert;

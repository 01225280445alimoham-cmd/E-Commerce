import React from "react";
import "../CSS/Title.css";

const Title = ({ text1, text2 }) => {
  return (
    <div className="title">
      <div className="title-heading">
        <p className="title-text-light">{text1}</p>
        <p>{text2}</p>
        <hr className="title-line" />
      </div>
    </div>
  );
};

export default Title;

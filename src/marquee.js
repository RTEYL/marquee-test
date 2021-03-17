import React from "react";
import Arrow from "./arrow.svg";

const Marquee = ({ data }) => {
  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.blocks[0].subhead}</p>
      <div>
        <h3>{data.blocks[0].cta}</h3>
        <p>
          LET"S TALK. <img src={Arrow} alt="arrow-icon" />
        </p>
      </div>
    </>
  );
};

export default Marquee;

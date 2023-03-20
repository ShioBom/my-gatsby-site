import React from "react";
import {
  container,
  header,
  footer,
  main,
  sidebar,
  gridItem1,
} from "./card.module.css";

const gridAutoFlow: React.CSSProperties = {
  display: "grid",
  /* grid-template-rows: repeat(4, auto); */
  gridTemplateRows: `repeat(4, 40px)`,
  gridAutoFlow: "column",
  gridTemplateColumns: `repeat(3, auto)`,
  gridAutoColumns: 200,
  // gridAutoRows: 200,
};

const gridContainer2 = {
  display: "grid",
  gridTemplateColumns: `150px 150px 150px`,
  // gridAutoColumns: `100px 200px`, // 补了四列，列宽分别为100px 200px
  gridAutoColumns: 100, // 补了四列 单列100px
};

const gridContainer3 = {
  display: "grid",
  // gridAutoColumns: `min-content`,
  // gridAutoColumns: `max-content`,

  // gridAutoColumns: `auto`,
  gridAutoFlow: "column",
  // gridAutoColumns: `30vmin`,
  gridAutoColumns: `auto 0.8fr auto`,
  // gridAutoColumns: `fit-content(50rem)`,
  // gridAutoColumns: `minmax(300px, 2fr)`,
};

export default function index() {
  return (
    <>
      <div className={container} style={gridAutoFlow}>
        {new Array(13).fill("").map((item, ind) => (
          <div key={ind}>
            <span>{ind + 1}</span>
          </div>
        ))}
      </div>
      <div className={container} style={gridContainer2}>
        {new Array(3).fill("").map((item, ind) => (
          <div className={gridItem1} key={ind}>
            <span>{ind + 1}</span>
          </div>
        ))}
      </div>
      <div className={container} style={gridContainer3}>
        {new Array(3).fill("").map((item, ind) => (
          <div key={ind}>
            <span>{ind + 1}</span>
          </div>
        ))}
      </div>
    </>
  );
}

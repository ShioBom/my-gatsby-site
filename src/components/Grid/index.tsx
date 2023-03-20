import React from "react";
import { Link } from "gatsby";
import {
  container,
  header,
  footer,
  main,
  sidebar,
} from "./styles/grid.module.css";
import Card from "../Grid/Card";

const Grid = () => {
  return (
    <main className={container}>
      <header className={header}>
        <Link to="/">Back to Home</Link>
      </header>
      <section className={main}>
        <Card />
      </section>
      <code className={sidebar}>展示区</code>
      <footer className={footer}>工具栏</footer>
    </main>
  );
};

export default Grid;

import React from "react";
import { Link } from "gatsby";
import Grid from "../components/Grid";


const ExcisePage = () => {
  return (
    <main>
      <Link to="/">Back to Home</Link>
      <Grid />
    </main>
  );
};

export const Head = () => <title>Excise</title>;

export default ExcisePage;

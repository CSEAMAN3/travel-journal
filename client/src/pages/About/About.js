import React from "react";
import "./About.css";

import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About my travel journal</title>
        <meta name="description" content="Learn all about me and my travels" />
      </Helmet>
      <main className="about-main">
        <div className="about-main-container container">
          <h1>This is the About page</h1>
        </div>
      </main>
    </>
  );
}

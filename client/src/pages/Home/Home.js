import React from "react";
import "./Home.css";

import { Helmet } from "react-helmet-async";

import { data } from "../../data";
import Card from "../../components/Card/Card";

export default function Home() {
  const cards = data.map((card) => {
    return (
      <div className="card-holder">
        <Card key={card.id} {...card} />
      </div>
    );
  });

  return (
    <>
      <Helmet>
        <title>Travel Journal homepage</title>
        <meta name="description" content="This is the homepage for my travel journal" />
      </Helmet>
      <main className="home-main">
        <div className="home-main-container container">
          <div className="cards-container">{cards}</div>
        </div>
      </main>
    </>
  );
}

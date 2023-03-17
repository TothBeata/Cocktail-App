import React from "react";
import { Link } from "react-router-dom";
import cocktails from "../../assets/cocktails.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="about-container container mt-5">
      <h3 style={{ color: "#fff" }}>Cliff Cocktails List</h3>
      <p className="h4 text-center font-italic" style={{ color: "#fff" }}>
        Welcome to our cocktail website! Here you will find everything you need
        to delight your taste buds and impress your guests at your next party or
        event. With a wide range of classic and innovative cocktail recipes, you
        will be able to choose your favorite drink and learn how to prepare it
        at home with ease. You'll find a variety of cocktail categories on our
        site, including gin, tequila, vodka, whiskey, rum and more. Also, the
        world so they can save our delicious drinks. Whether you're a cocktail
        expert or a novice, you'll find plenty of useful information on our
        site. From step-by-step instructions and tips for making cocktails, to
        information on the history and provenance of the drinks, you'll find
        everything you need to enjoy the perfect cocktail experience.
      </p>
      <img src={cocktails} alt="bg-cocktails" />
      <Link to="/">
        <button
          className="btn"
          style={{ marginTop: "15px", marginBottom: "15px" }}
        >
          Go back to find your favorite cocktail !
        </button>
      </Link>
    </div>
  );
};

export default About;

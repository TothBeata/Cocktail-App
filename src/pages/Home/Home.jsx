import React from "react";
import CocktailList from "../../components/CocktailList/CocktailList";
import SearchInput from "../../components/Search/SearchInput";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <SearchInput />
      <CocktailList />
    </div>
  );
};

export default Home;

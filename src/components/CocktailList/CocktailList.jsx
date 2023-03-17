import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "../../redux/features/cocktailSlice";
import { Link } from "react-router-dom";
import "./CocktailList.css";

const CocktailList = () => {
  const { cocktails, loading } = useSelector((state) => ({ ...state.app }));
  const [modifiedCocktail, setModifiedCocktail] = useState([]);
  const dispatch = useDispatch();

  console.log("LISTA COCKTAILS>>", modifiedCocktail);

  useEffect(() => {
    dispatch(fetchCocktails());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
          item;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setModifiedCocktail(newCocktails);
    } else {
      setModifiedCocktail([]);
    }
  }, [cocktails]);

  if (loading) {
    return (
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (!cocktails) {
    return <h2>No Cocktails matched your search criteria.</h2>;
  }

  return (
    <div className="container my-5" style={{ paddingTop: "170px" }}>
      <div className="row row-cols-xs row-cols-2 row-cols-md-3 row-cols-lg-4  g-5">
        {modifiedCocktail.map((item) => {
          const { id, name, image, glass, info } = item;
          return (
            <div className="col g-4" key={id}>
              <div className="card h-2" style={{ width: "250px" }}>
                <img src={image} alt={name} className="card-img-top" />
                <div
                  className="card-body card-body-ind"
                  style={{ textAlign: "left" }}
                >
                  <h5 className="card-title">{name}</h5>
                  <h4 className="card-title">{glass}</h4>
                  <p className="card-text">{info}</p>
                  <Link to={`/cocktail/${id}`}>
                    <button className="details-btn btn">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CocktailList;

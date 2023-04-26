import React from "react";
import { actors } from "../data";

const Actors = () => {
  const renderMovies = (movies) => {
    return movies.map((movie) => <li key={movie}>{movie}</li>);
  };

  const renderActors = () => {
    return actors.map((actor) => {
      return (
        <div key={actor.name}>
          <h2>Name: {actor.name}</h2>
          <p>Movies: </p>
          <ul>{renderMovies(actor.movies)}</ul>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;

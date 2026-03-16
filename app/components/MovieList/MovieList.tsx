"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Movie } from "@/app/types/types";
import MovieCard from "../MovieCard/MovieCard";



export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/popular",
      params: {
        api_key: "9d4ee78ffa64aa2dbf83b77ab79a4921",
        language: "pt-BR",
      },
    }).then((response) => {
      setMovies(response.data.results);
    });
  };

  return (
    <ul className="movie-container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

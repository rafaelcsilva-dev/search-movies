import { Movie } from "@/app/types/types";
import StarRating from "../StarRating/StarRating";

export interface Props {
  movie: Movie;
}

export default function MovieCard(props: Props) {
  const movie = props.movie;
  return (
    <li className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt=""
      />

      <div className="movie-infos">
        <span>{movie.title}</span>
        {movie.vote_average > 0 && <StarRating movie={movie} />}

        <p className="movie-hidden">
          {" "}
          {movie.overview.length > 100
            ? `${movie.overview.substring(0, 100)} ...`
            : movie.overview}
        </p>
      </div>
    </li>
  );
}

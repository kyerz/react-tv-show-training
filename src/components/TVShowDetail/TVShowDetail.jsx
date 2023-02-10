import { FiveStarRating } from "../FiveStarRating/FiveStarRating";
import style from "./TVShowDetail.module.css";

export function TVShowDetail({ tvShow }) {
  const rating = tvShow.vote_average / 2;

  return (
    <div>
      <div className={style.title}>{tvShow.name}</div>
      <div className={style.rating_container}>
        <FiveStarRating rating={rating} />
        <div className={style.rating}>{rating}/5</div>
      </div>
      <div className={style.overview}>{tvShow.overview}</div>
    </div>
  );
}

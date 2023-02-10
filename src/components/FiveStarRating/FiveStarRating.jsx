import style from "./FiveStarRating.module.css";
import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
  const starList = [];
  const totalStars = 5;
  const starFillCount = Math.floor(rating);
  let isStarHalf = rating - starFillCount >= 0.5;

  for (let i = 1; i <= totalStars; i++) {
    if (i <= starFillCount) {
      starList.push(<StarFill key={"star-fill" + i} />);
    } else if (isStarHalf) {
      starList.push(<StarHalf key={"star-fill" + i} />);
      isStarHalf = null;
    } else {
      starList.push(<StarEmpty key={"star-fill" + i} />);
    }
  }

  return <div className={style.stars_container}>{starList.map((star) => star)}</div>;
}

import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import style from "./TVShowList.module.css";

export function TVShowList({ TVShowList, onClickItem }) {
  return (
    <>
      <div className={style.title}>You might also like:</div>
      <div className={style.list}>
        {TVShowList.map((TVShow) => (
          <TVShowListItem key={TVShow.id} tvShow={TVShow} onclick={onClickItem} />
        ))}
      </div>
    </>
  );
}

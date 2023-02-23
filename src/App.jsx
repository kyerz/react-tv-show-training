import { useState, useEffect } from "react";
import { TVShowAPI } from "./api/tv-show";
import { BACKDROP_BASE_URL } from "./config";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { Logo } from "./components/Logo/Logo";
import { TVShowList } from "./components/TVShowList/TVShowList";
import "./global.css";
import style from "./style.module.css";
import logo from "./assets/logo.png";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommandationList, setRecommandationList] = useState([]);

  const fetchPopularsShows = async () => {
    try {
      const populars = await TVShowAPI.fetchPopulars();
      if (populars.length > 0) {
        setCurrentTVShow(populars[0]);
      }
    } catch (err) {
      alert("Erreur durant la recherche des séries polulaires " + err.message);
    }
  };

  const fetchRecommandations = async (tvShowId) => {
    try {
      if (currentTVShow) {
        const recommandations = await TVShowAPI.fetchRecommandations(tvShowId);
        if (recommandations.length > 0) {
          setRecommandationList(recommandations.slice(0, 10));
        }
      }
    } catch (err) {
      alert("Erreur lors de la récupération des séries recommandées " + err.message);
    }
  };

  useEffect(() => {
    fetchPopularsShows();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommandations(currentTVShow.id);
    }
  }, [currentTVShow]);

  const searchTVShow = async (tvShowName) => {
    try {
      const searchResponse = await TVShowAPI.fetchByTitle(tvShowName);
      if (searchResponse.length > 0) {
        setCurrentTVShow(searchResponse[0]);
      }
    } catch (err) {
      alert("Erreur lors de la recherche de la série" + err.message);
    }
  };

  return (
    <div
      className={style.main_background}
      style={{
        background: currentTVShow
          ? `linear-gradient( rgba(0,0,0,0.5), rgba(0,0,0,0.5)), no-repeat center/ cover url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}")`
          : "black",
      }}
    >
      <div className={style.main_container}>
        <div className={style.header}>
          <div className="row align-items-center">
            <div className="col-4">
              <div>
                <Logo title="Popcorn TV" subtitle={"Find a show right now !"} image={logo} />
              </div>
            </div>
            <div className={`col-sm-12 col-md-4 ${style["search-container"]}`}>
              <SearchBar onSubmit={searchTVShow} />
            </div>
          </div>
        </div>
        <div className={style.tv_show_detail}>{currentTVShow && <TVShowDetail tvShow={currentTVShow} />}</div>
        <div className={style.recommandations}>
          {recommandationList.length > 0 && (
            <TVShowList TVShowList={recommandationList} onClickItem={setCurrentTVShow} />
          )}
        </div>
      </div>
    </div>
  );
}

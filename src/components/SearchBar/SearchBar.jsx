import style from "./SearchBar.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ onSubmit }) {
  const submit = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      e.target.value = "";
    }
  };

  return (
    <>
      <SearchIcon size={27} className={style.search_icon} />
      <input
        onKeyUp={submit}
        className={style.input}
        style={{ width: "100%" }}
        type="text"
        placeholder="Search a tv show..."
      ></input>
    </>
  );
}

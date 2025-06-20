import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const handleFilter = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div className={s.wrapper}>
      <p className={s.title}>Find contacts by name</p>
      <input className={s.text} type="text" onChange={handleFilter} />
    </div>
  );
};

export default SearchBox;

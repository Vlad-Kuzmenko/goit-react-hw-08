import { Navigation } from "../Navigation/Navigation";
import { useSelector } from "react-redux";
import { AuthNav } from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./AppBar.module.css";
import { UserMenu } from "../UserMenu/UserMenu";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

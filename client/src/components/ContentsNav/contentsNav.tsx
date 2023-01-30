import { NavLink } from "react-router-dom";
import * as S from './styled';

export function ContentsNav() {
  return (
    <S.Container>
      <NavLink to="/"><i className="fa-solid fa-house fa-2xl" id="home" /></NavLink>
      <NavLink to="/profile"><i className="fa-solid fa-address-book fa-2xl" id="profile" /></NavLink>
      <NavLink to="/portfolio"><i className="fa-solid fa-file fa-2xl" id="portfolio" /></NavLink>
    </S.Container>
  );
}
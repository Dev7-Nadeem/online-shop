import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { FaShoppingCart } from "react-icons/fa";

import "./Header.css";
import { useSelector } from "react-redux";
// import { logoutUser } from "./../../actions/login";

function Header() {
  const count = useSelector((state) => state.cart.count);
  // const dispatch = useDispatch();
  return (
    <Nav>
      <Bars />
      <NavMenu>
        <NavLink to="/" activeStyle>
          Products
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/cart">
          cart
          <FaShoppingCart /> {count}
        </NavBtnLink>
        {/* <NavBtnLink to="/SignIn" onClick={() => dispatch(logoutUser())}>
          SignOut
        </NavBtnLink> */}
      </NavBtn>
    </Nav>
  );
}

export default Header;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  let [width, setWidth] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authenticate = useSelector((state) => state.auth.authenticate);

  const goToLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT_SUCCESS" });
  };

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className="nav-header" style={{ marginRight: "30px" }}>
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        {authenticate ? (
          <div className="login-button" onClick={handleLogout}>
            <FontAwesomeIcon icon={faUser} />
            <span className="login-area" style={{ cursor: "pointer" }}>
              로그아웃
            </span>
          </div>
        ) : (
          <div className="login-button" onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span className="login-area" style={{ cursor: "pointer" }}>
              로그인
            </span>
          </div>
        )}
      </div>

      <div className="nav-section">
        <Link to="/">
          <img
            width={100}
            src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
          />
        </Link>
      </div>

      <div class="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>
              <a href="#" key={index}>
                {menu}
              </a>
            </li>
          ))}
        </ul>

        <div className="search-box" style={{ marginRight: "20px" }}>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyPress={(event) => search(event)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

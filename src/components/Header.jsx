import React, { useContext, useEffect } from "react";
import { SearchContext } from "../context/search/searchContext";

const Header = () => {

  const { searchText, setText } = useContext(SearchContext);

  useEffect(() => {
    console.log(searchText)
  })

  return (
    <>
      <header class="search">
        <div class="search__inner">
          <div class="search__input">
            <input type="text" placeholder="Введите текст для поиска..." value={searchText} onChange={(e) => {
              setText(e.target.value)
            }}/>
          </div>

          <div class="profile">
            <div class="profile__name">Shamil' Dzhanhotov</div>
            <div class="profile__logo">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

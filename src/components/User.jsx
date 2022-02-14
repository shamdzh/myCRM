import React, { useContext } from "react";
import avatar from "../assets/img/user.png";
import { SearchContext } from "../context/search/searchContext";

export const User = ({ users }) => {
  const { searchText } = useContext(SearchContext);


  const filteredItems = users.filter(user => {
    return user.name.toLowerCase().includes(searchText)
  })

  return filteredItems.map((user) => (
    <>
      <div className="card">
        <div className="card__inner">
          <div className="card__img">
            <img src={avatar} alt="" />
          </div>
          <div className="card__name">{user.name}</div>
          <div className="card__email">{user.email}</div>
          <div className="card__phone">{user.phone}</div>
        </div>
      </div>
    </>
  ));
};

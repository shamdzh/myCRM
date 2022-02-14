import React, { useState } from "react";

const Filter = () => {

  const [filter, setFilter] = useState(false);

  return (
    <>
      <div class={`filter ${filter ? 'open' : ''}`}>
        <div class="filter__toggle" onClick={() => {
          setFilter(!filter);
        }}>
          <i class="bx bx-slider"></i>
        </div>
        <div class="filter__inner">
          <input type="text" class="filter__input" placeholder="Дата от" />
          <input type="text" class="filter__input" placeholder="Дата до" />
          <input type="text" class="filter__input" placeholder="Имя клиента" />
          <input type="text" class="filter__input" placeholder="Телефон" />
          <input type="text" class="filter__input" placeholder="E-Mail" />
          <input type="text" class="filter__input" placeholder="Адрес" />
        </div>
      </div>
    </>
  );
};

export default Filter;

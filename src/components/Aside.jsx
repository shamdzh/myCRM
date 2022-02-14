import React, { useState } from "react";
import logo from "../assets/img/logo.png"

const Aside = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav class={`sidebar ${toggle ? '' : 'close'}`} onClick={() => setToggle(!toggle)}>
        <header>
          <div class="image-text">
            <span class="image">
              <img src={logo} alt="" />
            </span>

            <div class="text logo-text">
              <span class="name">CRM System</span>
              <span class="profession">by Sh. Dzhanhotov</span>
            </div>
          </div>
        </header>

        <div class="menu-bar">
          <div class="menu">

            <ul class="menu-links">
              <li class="nav-link">
                <a href="#">
                  <i class="bx bx-home-alt icon"></i>
                  <span class="text nav-text">Главная</span>
                </a>
              </li>

              <li class="nav-link">
                <a href="#">
                  <i class="bx bx-bar-chart-alt-2 icon"></i>
                  <span class="text nav-text">Доходы</span>
                </a>
              </li>

              <li class="nav-link">
                <a href="#">
                  <i class="bx bx-bell icon"></i>
                  <span class="text nav-text">Уведомления</span>
                </a>
              </li>

              <li class="nav-link">
                <a href="#">
                  <i class="bx bx-pie-chart-alt icon"></i>
                  <span class="text nav-text">Аналитика</span>
                </a>
              </li>

              <li class="nav-link">
                <a href="#">
                  <i class="bx bx-heart icon"></i>
                  <span class="text nav-text">Взаимодействия</span>
                </a>
              </li>

              <li class="nav-link">
                <a href="#">
                  <i class="bx bx-wallet icon"></i>
                  <span class="text nav-text">Общий счет</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="bottom-content">
            <li class="">
              <a href="#">
                <i class="bx bx-log-out icon"></i>
                <span class="text nav-text">Выход</span>
              </a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Aside;

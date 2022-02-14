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
              <span class="name">Codinglab</span>
              <span class="profession">Web developer</span>
            </div>
          </div>
        </header>

        <div class="menu-bar">
          <div class="menu">
            <li class="search-box">
              <i class="bx bx-search icon"></i>
              <input type="text" placeholder="Search..." />
            </li>

            <ul class="menu-links">
              <li class="nav-link">
                <a href="#">
                  <i class="bx bx-home-alt icon"></i>
                  <span class="text nav-text">Dashboard</span>
                </a>
              </li>

              <li class="nav-link">
                <a href="#">
                  <i class="bx bx-bar-chart-alt-2 icon"></i>
                  <span class="text nav-text">Revenue</span>
                </a>
              </li>

              <li class="nav-link">
                <a href="#">
                  <i class="bx bx-bell icon"></i>
                  <span class="text nav-text">Notifications</span>
                </a>
              </li>

              <li class="nav-link">
                <a href="#">
                  <i class="bx bx-pie-chart-alt icon"></i>
                  <span class="text nav-text">Analytics</span>
                </a>
              </li>

              <li class="nav-link">
                <a href="#">
                  <i class="bx bx-heart icon"></i>
                  <span class="text nav-text">Likes</span>
                </a>
              </li>

              <li class="nav-link">
                <a href="#">
                  <i class="bx bx-wallet icon"></i>
                  <span class="text nav-text">Wallets</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="bottom-content">
            <li class="">
              <a href="#">
                <i class="bx bx-log-out icon"></i>
                <span class="text nav-text">Logout</span>
              </a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Aside;

import React from "react";
import { User } from "./User";
import users from "../assets/users.json";

const Home = () => {
  return (
    <>
      <section class="home">
        <h1 class="name">Список пользователей</h1>
        <div class="users">
          <User users={users} />
        </div>
      </section>
    </>
  );
};

export default Home;

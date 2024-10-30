import "./userinfo.css";
import React from "react";
import { useUserStore } from "../../../lib/userStore";

const Userinfo = () => {
  const { currentUser } = useUserStore();

  return (
    <div className="userInfo">
      <div className="user">
        <img src={currentUser.avatar || "./img/user_female.jpg"} alt="user" />
        <h2>{currentUser.username}</h2>
      </div>
      <div className="icons">
        <img src="./menu.png" alt="menu" />
        <img src="./edit.png" alt="edit" />
        <img src="./video.png" alt="video.png" />
      </div>
    </div>
  );
};
export default Userinfo;

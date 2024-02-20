import React, { useState } from "react";
import styles from "../../css/main/Main.module.css";

// 유저 정보 불러오는 함수
function LoadInfo() {
  const [userInfo, setUserInfo] = useState({
    // DB에서 유저 정보 불러오기
    id: 1,
    name: "홍길동",
    called: "공주님",
    profile_img: "",
  });

  if (userInfo.profile_img === "") {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      profile_img: "../../img/profile_img.png",
    }));
  }

  return (
    <div>
      <ShowInfo
        key={userInfo.id}
        name={userInfo.name}
        called={userInfo.called}
        profile_img={userInfo.profile_img}
      />
    </div>
  );
}

// 유저 정보 보여주는 함수
function ShowInfo({ name, called, profile_img }) {
  return (
    <div className={styles["user-info"]}>
      <div className={styles["line-box"]}>
        <div className={styles["user-profile-img"]}>
          <img src={profile_img} alt="user" width={"130px"} />
        </div>
        <div className={styles["user-info-text"]}>
          <div className={styles["crown"]}>
            <img src="../../../img/crown.png" alt="" />
          </div>
          <div className={styles["user-name"]}>
            <p>{name}</p>
          </div>
          <div className={styles["user-called"]}>
            <p>{called}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div>
      <LoadInfo />
    </div>
  );
}

export default Main;

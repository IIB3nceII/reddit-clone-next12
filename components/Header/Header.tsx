import Image from "next/image";
import React from "react";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <Image objectFit="contain" src="https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png" layout="fill" />
      </div>
    </div>
  );
};

export default Header;

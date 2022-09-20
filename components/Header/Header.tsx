import Image from "next/image";
import React from "react";
import s from "./Header.module.scss";
import {
  HomeIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  BellIcon,
  ChatBubbleOvalLeftIcon,
  GlobeAmericasIcon,
  PlusIcon,
  PhoneIcon,
  VideoCameraIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { Divider } from "../../common";

const Header = () => {
  return (
    <header className={s.container}>
      <div className={s.imageContainer}>
        <Image objectFit="contain" src="https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png" layout="fill" />
      </div>

      <div className={s.options}>
        <HomeIcon className={s.icon} />
        <p>Home</p>
        <ChevronDownIcon className={s.icon} />
      </div>

      <form>
        <MagnifyingGlassIcon className={s.icon} />
        <input type="text" placeholder="Search Reddit..." />
        <button type="submit" hidden></button>
      </form>

      <nav>
        <SparklesIcon className={s.icon} />
        <GlobeAmericasIcon className={s.icon} />
        <VideoCameraIcon className={s.icon} />
        <Divider />
        <ChatBubbleOvalLeftIcon className={s.icon} />
        <BellIcon className={s.icon} />
        <PlusIcon className={s.icon} />
        <PhoneIcon className={s.icon} />
      </nav>
    </header>
  );
};

export default Header;

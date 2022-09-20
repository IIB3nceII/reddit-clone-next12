/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
import Image from "next/image";
import React, { FC } from "react";
import { HomeIcon, ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import {
  BellIcon,
  ChatBubbleOvalLeftIcon,
  GlobeAmericasIcon,
  PlusIcon,
  PhoneIcon,
  VideoCameraIcon,
  SparklesIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { signIn } from "next-auth/react";
import s from "./Header.module.scss";
import { Divider } from "../../common";

const Header: FC = () => {
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
        <button type="submit" hidden />
      </form>

      <nav>
        <SparklesIcon className="icon" />
        <GlobeAmericasIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <Divider />
        <ChatBubbleOvalLeftIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <PhoneIcon className="icon" />
      </nav>

      <div className={s.hamburgerContainer}>
        <Bars3Icon className="icon" />
      </div>

      <div className={s.signIn} onClick={() => signIn()}>
        <div className={s.imageContainer}>
          <Image src="https://img.favpng.com/5/19/1/reddit-logo-computer-icons-png-favpng-VY0U5enmF1wyyK3Hk98zJmBNx.jpg" layout="fill" />
        </div>
        <p>Sign In</p>
      </div>
    </header>
  );
};

export default Header;

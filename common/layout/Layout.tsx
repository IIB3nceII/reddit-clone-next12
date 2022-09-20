import React, { FC, ReactNode } from "react";
import { Header } from "../../components";
import s from "./Layout.module.scss";

interface ILayoutProps {
  children: ReactNode | ReactNode[];
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={s.container}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;

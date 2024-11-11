"use client";
import { FC, ReactNode, useEffect, useState } from "react";
import scss from "./LayoutSite.module.scss";
import Loader from "../loader/Loader";
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface LayoutSiteProps {
  children: ReactNode;
}
const LayoutSite: FC<LayoutSiteProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={scss.LayoutSite}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSite;

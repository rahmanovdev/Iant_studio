"use client";
import { usePathname } from "next/navigation";
import scss from "./Header.module.scss";
import logo from "../../../../../assets/images/iant╤Г.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <Image src={logo} alt="img" width={700} height={500} quality={90} />
          <div className={scss.header_nav}>
            <div
              className={`${scss.nav_link} ${
                pathname === "/" ? scss.active : ""
              }`}
            >
              <Link href={"/"}>
                <span className={scss.link_content}>
                  <span className={scss.text_top}>Главная</span>
                  <span className={scss.text_bottom}>Главная</span>
                </span>
              </Link>
            </div>
            <div
              className={`${scss.nav_link} ${
                pathname === "/about_me" ? scss.active : ""
              }`}
            >
              <Link href={"/about_me"}>
                <span className={scss.link_content}>
                  <span className={scss.text_top}>О нас</span>
                  <span className={scss.text_bottom}>О нас</span>
                </span>
              </Link>
            </div>
            <div
              className={`${scss.nav_link} ${
                pathname === "/our_works" ? scss.active : ""
              }`}
            >
              <Link href={"/our_works"}>
                <span className={scss.link_content}>
                  <span className={scss.text_top}>Портфолио</span>
                  <span className={scss.text_bottom}>Портфолио</span>
                </span>
              </Link>
            </div>
            <div
              className={`${scss.nav_link} ${
                pathname === "/our_services" ? scss.active : ""
              }`}
            >
              <Link href={"/our_services"}>
                <span className={scss.link_content}>
                  <span className={scss.text_top}>Услуги</span>
                  <span className={scss.text_bottom}>Услуги</span>
                </span>
              </Link>
            </div>
            <div
              className={`${scss.nav_link} ${
                pathname === "/contacts" ? scss.active : ""
              }`}
            >
              <Link href={"/contacts"}>
                <span className={scss.link_content}>
                  <span className={scss.text_top}>Контакты</span>
                  <span className={scss.text_bottom}>Контакты</span>
                </span>
              </Link>
            </div>
          </div>
          <div className={scss.container_btn}>
            <button className={scss.button}>Заказать сайт</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

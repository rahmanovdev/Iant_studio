"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";
import IAntLogo from "@/assets/IAntLogo";
import useModalStore from "@/store/useModalStore";
// import Modal from "@/ui/modal/Modal";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useModalStore();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          {/* <Image src={logo} alt="img" width={700} height={500} quality={90} /> */}
          <Link href="/">
          <div className={scss.logo}>
            <IAntLogo />
          </div>
          </Link>
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
          <div className={scss.burger}>
            <div className={scss.burger_icon} onClick={toggleMenu}>
              <span
                className={`${scss.line} ${isOpen ? scss.active : ""}`}
              ></span>
              <span
                className={`${scss.line} ${isOpen ? scss.active : ""}`}
              ></span>
              <span
                className={`${scss.line} ${isOpen ? scss.active : ""}`}
              ></span>
            </div>
            <div className={`${scss.burger_menu} ${isOpen ? scss.active : ""}`}>
              <Link href="/" onClick={toggleMenu}>
                Главная
              </Link>
              <Link href="/about_me" onClick={toggleMenu}>
                О нас
              </Link>
              <Link href="/our_works" onClick={toggleMenu}>
                Портфолио
              </Link>
              <Link href="/our_services" onClick={toggleMenu}>
                Услуги
              </Link>
              <Link href="/contacts" onClick={toggleMenu}>
                Контакты
              </Link>
            </div>
          </div>
          <div className={scss.container_btn}>
            <button onClick={openModal} className={scss.button}>Заказать сайт</button>
          </div>
        </div>
      </div>


      {/* <Modal/> */}
    </header>
  );
};

export default Header;

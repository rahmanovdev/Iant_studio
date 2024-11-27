import Image from "next/image";
import scss from "./Footer.module.scss";
import logo from "../../././../../../assets/images/iant╤Г.png";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { IoLogoTiktok } from "react-icons/io5";
import { GoPaperAirplane } from "react-icons/go";
import { FaRegCopyright } from "react-icons/fa6";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IContact {
  email: string; 
}

const Footer = () => {
  const { register, handleSubmit, reset } = useForm<IContact>();
  function telegram() {
    window.open("https://t.me/c/2305441839/285");
  }
  function instagram() {
    window.open(
      "https://www.instagram.com/iantstudio/profilecard/?igsh=cG9oeHdlc2ZnaDJj"
    );
  }
  function linkedin() {
    window.open("");
  }
  function tiktok() {
    window.open("");
  }

  const onOrder: SubmitHandler<IContact> = (contact) => {
    const my_id = `-1002155692436`;
    const token = `7379926721:AAGdHk5RpkeAFr5TOZApxisySaGqta-Lws4`;
    const api_key = ` https://api.telegram.org/bot${token}/sendMessage`;

    const newProduct = {
      chat_id: my_id,
      parse_model: "html",
      text: `
      iANT Studio!
        Client email/phone: ${contact.email}
      `,
    };

    toast.success("Сообщение отправлено дождитесь ответа!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    axios.post(api_key, newProduct);
    reset();
  };

  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.main}>
            <div className={scss.logo}>
              <Image src={logo} alt="" width={100} />
              <div className={scss.hr}></div>
              <h4>
                iANT <br /> group
              </h4>
            </div>
            <h4>Свяжитес с нами:</h4>
            <form onSubmit={handleSubmit(onOrder)} className={scss.input}>
              <input
                type="text"
                placeholder="E-mail почта, номер телефона..."
                {...register("email", { required: true })}
              />
              <button type="submit">
                <GoPaperAirplane />
              </button>
            </form>
          </div>
          <div className={scss.block}>
            <h3>Услуги</h3>
            <Link href={"/"}>Построение отдела продаж</Link>
            <Link href={"/"}>Разработка сайтов</Link>
            <Link href={"/"}>Улучшить ваш бизнес</Link>
          </div>
          <div className={scss.block}>
            <h3>О компании</h3>
            <Link href={"/"}>Политика конфиденциальности</Link>
            <Link href={"/"}>Наши клиенты</Link>
            <Link href={"/"}>Инструкции</Link>
            <Link href={"/"}>Блог</Link>
            <Link href={"/"}></Link>
            <Link href={"/"}></Link>
            <Link href={"/"}></Link>
          </div>
          <div className={scss.block}>
            <h3>Лицензии</h3>
            <Link href={"/"}>Лицензии iant</Link>
            <Link href={"/"}>Лицензии iant</Link>
            <Link href={"/"}>Лицензии iant</Link>
          </div>
          <div className={scss.block}>
            <h3>Контакты</h3>
            <a>Кыргызстан, г. Бишкек</a>
            <a>+996 999 999 999</a>
            <a>Соц сети:</a>
            <div className={scss.web}>
              <a onClick={() => instagram()}>
                <AiFillInstagram />
              </a>
              <a onClick={() => telegram()}>
                <FaTelegramPlane />
              </a>
              <a onClick={() => linkedin()}>
                <RiLinkedinFill />
              </a>
              <a onClick={() => tiktok()}>
                <IoLogoTiktok />
              </a>
            </div>
          </div>
        </div>
        <h6>
          <FaRegCopyright /> iANT 2024. Все права защищены
        </h6>
        <ToastContainer />
      </div>
    </footer>
  );
};

export default Footer;

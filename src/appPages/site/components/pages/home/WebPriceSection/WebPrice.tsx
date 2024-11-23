"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import scss from "./WebPrice.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { IoLogoTiktok } from "react-icons/io5";

interface IWebPrice {
  name: string;
  phone: number;
  category: string;
}

const WebPrice = () => {
  const { register, handleSubmit, reset } = useForm<IWebPrice>();
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

  const onWebPrice: SubmitHandler<IWebPrice> = (data) => {
    let my_id = `-1002155692436`;
    let token = `7379926721:AAGdHk5RpkeAFr5TOZApxisySaGqta-Lws4`;
    let api_key = ` https://api.telegram.org/bot${token}/sendMessage`;

    let newProduct = {
      chat_id: my_id,
      parse_model: "html",
      text: `
      iANT studio webSite Price?
        Client name: ${data.name}
        Client price: ${data.phone}
        Client category: ${data.category}
      `,
    };

    toast.success("Ваш запрос отправлен успешно, мы свами свяжемся!", {
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
    <section className={scss.webPrice}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.webPriceText}>
            <h3>
              Рассчитайте стоимость создания <span>сайта</span>
            </h3>
            <p>
              Выберите какой сайт вам нужен и мы перезвоним в течение 15 минут,
              зададим уточняющие вопросы и скажем стоимость разработки
              интересующего Вас сайта
            </p>
            <div className={scss.info}>
              <h3>+996 999-999-999</h3>
              <div className={scss.hr}></div>
              <h3>iant@gmail.com</h3>
            </div>
            <div className={scss.address}>
              <h6>Адрес</h6>
              <h5>Кыргызстан, Бишкек, ул.Куренкеева 138</h5>
            </div>
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
          <form onSubmit={handleSubmit(onWebPrice)}>
            <h4>Форма обратной связи</h4>
            <input
              type="text"
              placeholder="Ваше имя *"
              {...register("name", { required: true })}
            />
            <input
              type="number"
              placeholder="Номер телефона *"
              {...register("phone", { required: true })}
            />
            <select {...register("category", { required: true })}>
              <option value="">Выберите тип сайта</option>
              <option value="Корпоративный сайт">Корпоративный сайт</option>
              <option value="Интернет магазин">Интернет магазин</option>
              <option value="Пока не знаю">Пока не знаю</option>
            </select>
            <button type="submit">Оставить заявку</button>
            <p>
              Нажимая на кнопку, вы даете согласие на обработку персональных
              данных и соглашаетесь c <span>политикой конфиденциальности</span>
            </p>
          </form>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
};

export default WebPrice;

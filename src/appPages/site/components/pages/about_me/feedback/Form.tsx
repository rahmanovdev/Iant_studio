"use client";
import React from "react";
import scss from "./Form.module.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
interface IFormTelegram {
  name: string;
  phone: string;
}

/// imports from ENV
const TG_TOKEN = process.env.NEXT_PUBLIC_IANT_APPLICATIONS_FOR_ORDER_SERVICES_TELEGRAM_TOKEN;
const CHAD_ID = process.env.NEXT_PUBLIC_IANT_APPLICATIONS_FOR_ORDER_SERVICES_TELEGRAM_CHAD_ID;
/// imports from ENV

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IFormTelegram>({ 
    mode: "onChange",
  });

  const botsMessageModel = (data: IFormTelegram) => {
    let messageTG = `Client's name: <b>${data.name}</b>\n`;
    messageTG += `Client's phone: <b>${data.phone}</b>\n`;
    return messageTG;
  };

  const onSumbit: SubmitHandler<IFormTelegram> = async (data) => {
    try {
      await axios.post(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
        chat_id: CHAD_ID,
        parse_mode: "html",
        text: botsMessageModel(data),
      });
      reset();
      toast.success("Сообщение успешно отправлено!", {
        className: "toast-custom",
        autoClose: 2000,
      });
    } catch (error) {
      toast.error("Пожалуйста, попробуйте позже.", {
        className: "toast-custom",
        autoClose: 2000,
      });
      console.log(error);
    }
  };

  return (
    <section className={scss.Form}>
      <div className="container">
        <div className={scss.content}>
          <h5>Форма обратной связи *</h5>
          <form onSubmit={handleSubmit(onSumbit)}>
            <input
              type="text"
              placeholder="Ваше имя"
              {...(register("name"), { required: true })}
            />
            <input
              type="text"
              placeholder="Ваше номер телефона"
              {...register("phone", { required: true })}
            />
            {isSubmitting ? (
              <button disabled>Процесс...</button>
            ) : (
              <button>Оставить заявку</button>
            )}
          </form>
          <p>
            Нажимая на кнопку, вы даете согласие на обработку <br />{" "}
            персональных данных и соглашаетесь c{" "}
            <span>
              политикой <br /> конфиденциальности
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Form;

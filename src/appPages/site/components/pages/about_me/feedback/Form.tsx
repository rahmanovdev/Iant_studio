"use client";
import React from "react";
import scss from "./Form.module.scss";

const Form = () => {
  return (
    <section className={scss.Form}>
      <div className="container">
        <div className={scss.content}>
          <h5>Форма обратной связи *</h5>
          <form>
            <input type="text" placeholder="Ваше имя" />
            <input type="text" placeholder="Ваше номер телефона" />
            <button>Оставить заявку</button>
          </form>
          <p>
            Нажимая на кнопку, вы даете согласие на обработку <br />
            персональных данных и соглашаетесь c
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

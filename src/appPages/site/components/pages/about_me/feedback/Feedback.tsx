  "use client";

  import scss from "./Feedback.module.scss";
  import { FaInstagram } from "react-icons/fa";
  import { FaTelegram } from "react-icons/fa6";
  import { FaLinkedinIn } from 'react-icons/fa';
  import Form from './Form';
  import SocialIcons from '@/ui/SocialIcons';
  import DgisMap from '@/components/DgisMap/DgisMap';
  import Link from "next/link";

  const Feedback = () => {
    return (
      <section className={scss.Main}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.left}>
              <h5>КОНТАКТЫ</h5>
              <h1>
                Консультация <span>по проекту</span>
              </h1>
              <p>
                Заполните заявку, либо позвоните нам для бесплатной консультации:
                мы обсудим <br /> ваши бизнес-потребности и предложим оптимальные
                решения для вашей компании.
              </p>
              <div className={scss.number_info_block}>
                <p>+996 559 70 85 15</p>
                <div className={scss.line}></div>
                <span>iantstudiokg@gmail.com</span>
              </div>

              <div className={scss.addres_info_block}>
                <span>Адрес</span>
                <p>Кыргызстан, г. Бишкек, ул. Жибек-жолу</p>
              </div>

              <div className={scss.social_block}>
                <Link href="https://www.instagram.com/iantstudio/">
                  <FaInstagram />
                </Link>
                <Link href='https://t.me/abdurahmandev'>
                <FaTelegram />
                </Link>
                <Link href='https://www.linkedin.com/company/i-ant-it-company/posts/?feedView=all'>
                <FaLinkedinIn />
                </Link>
              </div>
            </div>

            <div className={scss.right}>
              <Form />
            </div>
          </div>

          <div className={scss.feedback_map}>
            <DgisMap 
              width="100%"
              height="450px"
            />
          </div>
        </div>

        <SocialIcons />
      </section>
    );
  };

  export default Feedback;

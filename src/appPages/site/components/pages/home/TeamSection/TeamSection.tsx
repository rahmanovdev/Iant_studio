"use client";
import Image from "next/image";
import scss from "./TeamSection.module.scss";
import { AiOutlineRight } from "react-icons/ai";
import { useRouter } from "next/navigation";

const TeamSection = () => {
  const router = useRouter();

  const team = [
    {
      name: "Nikola Jackson",
      work: "Front End Developer",
      img: "https://static.vecteezy.com/system/resources/thumbnails/044/245/414/small_2x/confident-young-businessman-writing-on-a-clipboard-png.png",
    },
    {
      name: "Nikola Jackson",
      work: "Front End Developer",
      img: "https://static.vecteezy.com/system/resources/thumbnails/044/245/414/small_2x/confident-young-businessman-writing-on-a-clipboard-png.png",
    },
    {
      name: "Nikola Jackson",
      work: "Front End Developer",
      img: "https://static.vecteezy.com/system/resources/thumbnails/044/245/414/small_2x/confident-young-businessman-writing-on-a-clipboard-png.png",
    },
    {
      name: "Nikola Jackson",
      work: "Front End Developer",
      img: "https://static.vecteezy.com/system/resources/thumbnails/044/245/414/small_2x/confident-young-businessman-writing-on-a-clipboard-png.png",
    },
  ];

  return (
    <section className={scss.teamSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.teamText}>
            <h2>Команда профессионалов</h2>
            <p>
              Наша команда опытных и квалифицированных специалистов, которые
              объединяют свои знания и навыки для достижения общих целей. Они
              эффективно работают вместе, предлагая высокое качество решений и
              гарантируя надежный результат.
            </p>
          </div>

          <div className={scss.teamUsers}>
            {team.map((el, idx) => (
              <div className={scss.user} key={idx}>
                <Image src={el.img} alt="" width={280} height={400} />
                <div className={scss.text}>
                  <h3>{el.name}</h3>
                  <h5>{el.work}</h5>
                </div>
                <div className={scss.bg}></div>
              </div>
            ))}
          </div>
          <button onClick={() => router.push("/about_me")}>
            Вся команда <AiOutlineRight />
          </button>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

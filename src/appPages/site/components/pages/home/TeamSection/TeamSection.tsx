"use client";
import { useRouter } from "next/navigation"; // Подключаем роутер из next/navigation
import { AiOutlineRight } from "react-icons/ai";
import scss from "./TeamSection.module.scss";
import Image from "next/image";

interface TeamMember {
  name: string;
  work: string;
  img: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Jumadil Rakhmonov",
    work: "CO-Founder",
    img: "https://static.vecteezy.com/system/resources/thumbnails/044/245/414/small_2x/confident-young-businessman-writing-on-a-clipboard-png.png",
  },
  {
    name: "Belek Asrarov",
    work: "CO-Founder",
    img: "https://static.vecteezy.com/system/resources/thumbnails/044/245/414/small_2x/confident-young-businessman-writing-on-a-clipboard-png.png",
  },
  {
    name: "Adyl Salijanov",
    work: "CO-Founder",
    img: "https://static.vecteezy.com/system/resources/thumbnails/044/245/414/small_2x/confident-young-businessman-writing-on-a-clipboard-png.png",
  },
  {
    name: "Arlen Ismailov",
    work: "CO-Founder",
    img: "https://static.vecteezy.com/system/resources/thumbnails/044/245/414/small_2x/confident-young-businessman-writing-on-a-clipboard-png.png",
  },
];

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <div className={scss.user}>
    <Image
      src={member.img}
      alt={`${member.name} - ${member.work}`}
      width={700}
      height={500}
      quality={90}
    />
    <div className={scss.text}>
      <h3>{member.name}</h3>
      <h5>{member.work}</h5>
    </div>
  </div>
);

const TeamSection = () => {
  const router = useRouter();

  const scrollToSection = () => {
    router.push("/about_me#team-block");
  };

  return (
    <section className={scss.teamSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.teamText}>
            <h2>Команда профессионалов</h2>
            <p>
              Наша команда опытных и квалифицированных специалистов, которые
              объединяют свои знания и навыки для достижения общих целей.
            </p>
          </div>

          <div className={scss.teamUsers}>
            {teamMembers.map((member, idx) => (
              <TeamMemberCard key={`${member.name}-${idx}`} member={member} />
            ))}
          </div>

          <button
            onClick={scrollToSection}
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            Вся команда <AiOutlineRight />
          </button>

          <hr />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

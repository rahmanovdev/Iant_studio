"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AiOutlineRight } from "react-icons/ai";
import scss from "./TeamSection.module.scss";

interface TeamMember {
  name: string;
  work: string;
  img: string;
}

const teamMembers: TeamMember[] = [
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

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <div className={scss.user}>
    <Image
      src={member.img}
      alt={`${member.name} - ${member.work}`}
      width={280}
      height={400}
      loading="lazy"
      quality={75}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJiEwVz0+O1E5R0RUYXp8ZT9DXXd6eX+Ij4qSlZaVR1BRYWdgZmByfoX/2wBDARUXFx4aHR4eHoVDOUOFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYX/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    />
    <div className={scss.text}>
      <h3>{member.name}</h3>
      <h5>{member.work}</h5>
    </div>
    <div className={scss.bg}></div>
  </div>
);

const TeamSection = () => {
  const router = useRouter();

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
            {teamMembers.map((member, idx) => (
              <TeamMemberCard key={`${member.name}-${idx}`} member={member} />
            ))}
          </div>

          <button
            onClick={() => router.push("/about_me")}
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

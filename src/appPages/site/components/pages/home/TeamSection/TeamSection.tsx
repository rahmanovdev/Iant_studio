'use client';
import { useRouter } from 'next/navigation';
import { AiOutlineRight } from 'react-icons/ai';
import scss from './TeamSection.module.scss';
import Image from 'next/image';
import Arlen from '../../../../../../../public/mans/photo_2024-06-13_12-39-18.jpg';
import Jumadil from '../../../../../../../public/mans/Jumadil.jpg';
import Adylbek from '../../../../../../../public/mans/Adyl.jpg';
import Belek from '../../../../../../../public/mans/Belek.jpg';

interface TeamMember {
	name: string;
	work: string;
	img: string | import('next/image').StaticImageData;
}

const teamMembers: TeamMember[] = [
	{
		name: 'Жумадил Рахмонов',
		work: 'Сооснователь',
		img: Jumadil
	},
	{
		name: 'Белек Асраров',
		work: 'Сооснователь',
		img: Belek
	},
	{
		name: 'Адылбек Салижанов',
		work: 'Сооснователь',
		img: Adylbek
	},
	{
		name: 'Арлен Исмаилов',
		work: 'Сооснователь',
		img: Arlen // Түз эле импорттолгон сүрөт
	}
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
		router.push('/about_me#team-block');
	};

	return (
		<section className={scss.teamSection}>
			<div className='container'>
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
						className='flex items-center gap-2 hover:opacity-90 transition-opacity'
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

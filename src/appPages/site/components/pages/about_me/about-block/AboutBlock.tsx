'use client';
import { memo, useEffect, useState } from 'react';
import scss from './AboutBlock.module.scss';

const useCountUp = (
	target: number,
	isVisible: boolean,
	duration: number = 2000
): number => {
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		if (!isVisible) return;

		const increment = Math.ceil(target / (duration / 10));
		const interval = setInterval(() => {
			setCount(prev => {
				if (prev + increment >= target) {
					clearInterval(interval);
					return target;
				}
				return prev + increment;
			});
		}, 80);

		return () => clearInterval(interval);
	}, [isVisible, target, duration]);

	return count;
};

const AboutBlock = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	useEffect(() => {
		const digitalBlock = document.querySelector(`.${scss.digital_block}`);
		if (!digitalBlock) return;

		const observer = new IntersectionObserver(
			([entry]) => setIsVisible(entry.isIntersecting),
			{ threshold: 0.3 }
		);

		observer.observe(digitalBlock);
		return () => observer.unobserve(digitalBlock);
	}, []);

	const expertsCount = useCountUp(20, isVisible, 6000);
	const implementationsCount = useCountUp(10, isVisible, 10000);
	const clientsCount = useCountUp(13, isVisible, 6000);

	return (
		<section className={scss.Main}>
			<div className='container'>
				<div className={scss.content}>
					<div className={scss.about_block}>
						<div className={scss.about_text}>
							<h5>О КОМПАНИИ</h5>
							<h1>
								Немного <span>о нас</span>
							</h1>
							<h4>
								«Мы делаем больше, чем просто программы <br /> для автоматизации
								бизнес-процессов»
							</h4>
							<p>
								Наша задача — помочь бизнесу выйти на максимальную <br />
								эффективность, экономя массу времени и денег, при помощи <br />
								технологий для упрощения ежедневных процессов, а также <br />
								инструментов для управления клиентами и умной аналитики, <br />
								которые помогают всегда оставаться на высоте.
							</p>
						</div>
						<div className={scss.about_img}></div>
					</div>

					<div className={scss.digital_block}>
						<div className={scss.block1}>
							<h6>
								Компания I<span>ANT</span> Studio в цифрах: <br />
								<span>комплексная автоматизация</span> <br /> управления
								бизнесом
							</h6>
							<div className={scss.under_block}>
								<div className={scss.year_block}>
									<p>На рынке с</p>
									<h5>2024</h5>
								</div>
								<div className={scss.underline}></div>
								<p>
									Внедряем <br /> только лучшие <br /> инструменты
								</p>
							</div>
						</div>

						<div className={scss.main_dig_block}>
							{[
								{
									count: expertsCount,
									title: 'Экспертов',
									text: `В команде более ${expertsCount} сертифицированных специалистов по автоматизации.`
								},
								{
									count: implementationsCount,
									title: 'Внедрений',
									text: `Мы автоматизировали более ${implementationsCount} компаний в Кыргызстане и за его пределами.`
								},
								{
									count: clientsCount,
									title: 'Клиентов',
									text: `Оказываем тех поддержку, сопровождение и постпродажное обслуживание более ${clientsCount} нашим постоянным клиентам.`
								}
							].map((item, index) => (
								<div key={index} className={scss[`block${index + 2}`]}>
									<h4>
										{item.count} {item.title}
									</h4>
									<p>{item.text}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default memo(AboutBlock);

'use client';
import { usePathname } from 'next/navigation';
import { useState, useCallback } from 'react';
import { memo } from 'react';
import scss from './Header.module.scss';
import Link from 'next/link';
import IAntLogo from '@/assets/IAntLogo';
import useModalStore from '@/store/useModalStore';

const NAV_ITEMS = [
	{ href: '/', label: 'Главная' },
	{ href: '/about_me', label: 'О нас' },
	{ href: '/our_works', label: 'Портфолио' },
	{ href: '/our_services', label: 'Услуги' },
	{ href: '/contacts', label: 'Контакты' }
];

const Header = () => {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const { openModal } = useModalStore();

	const toggleMenu = useCallback(() => {
		setIsOpen(prev => !prev);
	}, []);

	const renderNavLinks = () =>
		NAV_ITEMS.map(item => (
			<div
				key={item.href}
				className={`${scss.nav_link} ${
					pathname === item.href ? scss.active : ''
				}`}
			>
				<Link href={item.href}>
					<span className={scss.link_content}>
						<span className={scss.text_top}>{item.label}</span>
						<span className={scss.text_bottom}>{item.label}</span>
					</span>
				</Link>
			</div>
		));

	const renderBurgerLinks = () =>
		NAV_ITEMS.map(item => (
			<Link key={item.href} href={item.href} onClick={toggleMenu}>
				{item.label}
			</Link>
		));

	return (
		<header className={scss.header}>
			<div className='container'>
				<div className={scss.content}>
					<Link href='/'>
						<div className={scss.logo}>
							<IAntLogo />
						</div>
					</Link>

					<nav className={scss.header_nav}>{renderNavLinks()}</nav>

					<div className={scss.burger}>
						<div className={scss.burger_icon} onClick={toggleMenu}>
							<span
								className={`${scss.line} ${isOpen ? scss.active : ''}`}
							></span>
							<span
								className={`${scss.line} ${isOpen ? scss.active : ''}`}
							></span>
							<span
								className={`${scss.line} ${isOpen ? scss.active : ''}`}
							></span>
						</div>
						<div className={`${scss.burger_menu} ${isOpen ? scss.active : ''}`}>
							{renderBurgerLinks()}
						</div>
					</div>

					<div className={scss.container_btn}>
						<button onClick={openModal} className={scss.button}>
							Заказать сайт
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default memo(Header);

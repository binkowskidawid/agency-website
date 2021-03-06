import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

export default function Navigation() {
	const menuHrefAttr = [
		{
			href: "/",
			text: "home"
		},
		{
			href: "/about",
			text: "about"
		},
		{
			href: "/learning",
			text: "learning"
		},
		{
			href: "/contact",
			text: "contact"
		}
	];

	const [openMenu, setOpenMenu] = useState(false);
	const handleClickOnMobileMenuIcon = () => setOpenMenu(!openMenu);
	const closeMobileMenu = () => setOpenMenu(false);

	return (
		<nav className="nav h-12 md:h-12 flex justify-between items-center fixed  w-full px-4 lg:m-auto bg-[#380D6B] z-10">
			<div className="flex justify-center items-center">
				<Link href="/" passHref className="nav__logo flex">
					<div className="flex items-center cursor-pointer">
						<Image
							className=""
							src="/images/bilion-logo-white-nobackground.png"
							alt="Bilion Agency Logo"
							width={50}
							height={50}
							quality={100}
						/>
						<span className="font-['Faster_One'] text-white text-xl pl-2">
							BILION
						</span>
					</div>
				</Link>
			</div>
			<div
				className={
					openMenu
						? "nav__menu show__menu fixed md:static top-12 md:top-0 right-0 w-full h-full text-white text-2xl md:text-[1.25rem] p-16 md:p-2 text-center bg-[#380D6B] md:bg-transparent ease-out duration-500 md:duration-[0ms] md:transition-none backdrop-blur md:backdrop-blur-none font-['Antic_Didone']"
						: "nav__menu fixed md:static top-12 md:top-0 -right-full md:right-0 w-full h-full text-white text-2xl md:text-[1.25rem] p-16 md:p-2 text-center bg-[#380D6B] md:bg-transparent ease-out duration-500 md:duration-[0ms] md:transition-none backdrop-blur md:backdrop-blur-none font-['Antic_Didone']"
				}
				id="nav-menu"
			>
				<ul className="nav__list md:flex md:justify-end md:mr-4">
					{menuHrefAttr.map((el) => (
						<li
							className="nav__item mb-8 md:ml-8 md:mb-0 hover:text-fuchsia-600 transition duration-300"
							key={el.text}
						>
							<Link
								href={el.href}
								className="nav__link relative hover:text-fuchsia-600 transition duration-300"
								onClick={closeMobileMenu}
							>
								{el.text.charAt(0).toUpperCase() +
									el.text.slice(1)}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div
				className="nav__toggle text-white text-2xl cursor-pointer md:hidden"
				id="nav-toggle"
			>
				<button id="menu-icon" onClick={handleClickOnMobileMenuIcon}>
					{openMenu ? (
						<XIcon className="h-6 w-6 text-white" />
					) : (
						<MenuIcon className="h-6 w-6 text-white" />
					)}
				</button>
			</div>
		</nav>
	);
}

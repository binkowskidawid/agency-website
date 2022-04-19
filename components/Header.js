import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

export default function Header() {
	const [openMenu, setOpenMenu] = useState(false);
	const handleClickOnMobileMenuIcon = () => setOpenMenu(!openMenu);
	const closeMobileMenu = () => setOpenMenu(false);

	return (
		<>
			<header
				className="l-header w-full min-h-full absolute top-0 left-0 bg-top  bg-gradient-to-b from-[#330867] to-[#764ba2]
			scroll-smooth"
			>
				<div className="stars w-full md:w-1/2 h-10 md:h-20 absolute top-12 left-[2%] bg-[url('/images/stars.png')] bg-center bg-contain mix-blend-lighten"></div>
				<nav className="nav h-12 md:h-12 flex justify-between items-center max-w-5xl mx-4 lg:m-auto">
					<div className="flex justify-center items-center">
						<a href="#" className="nav__logo flex">
							<Image
								className="cursor-pointer"
								src="/images/bilion-logo-white-nobackground.png"
								alt="Bilion Agency Logo"
								width={50}
								height={50}
								quality={100}
							/>
						</a>
						<span className="font-['Faster_One'] text-white text-xl pl-2">
							BILION
						</span>
					</div>
					<div
						className={
							openMenu
								? "nav__menu show__menu fixed md:static top-12 md:top-0 right-0 w-full h-full text-white text-2xl md:text-[1rem] p-16 md:p-2 text-center bg-black md:bg-transparent opacity-70 md:opacity-100 ease-out duration-500 md:duration-[0ms] md:transition-none backdrop-blur md:backdrop-blur-none"
								: "nav__menu fixed md:static top-12 md:top-0 -right-full md:right-0 w-full h-full text-white text-2xl md:text-[1rem] p-16 md:p-2 text-center bg-black md:bg-transparent opacity-70 md:opacity-100 backdrop-blur md:backdrop-blur-none"
						}
						id="nav-menu"
					>
						<ul className="nav__list md:flex md:justify-end md:mr-4">
							<li className="nav__item mb-8 md:ml-8 md:mb-0">
								<a
									href="#home"
									className="nav__link relative hover:text-blue-500 transition duration-300"
									onClick={closeMobileMenu}
								>
									Home
								</a>
							</li>
							<li className="nav__item mb-8 md:ml-8 md:mb-0">
								<a
									href="#about"
									className="nav__link relative hover:text-blue-500 transition duration-300"
									onClick={closeMobileMenu}
								>
									About Us
								</a>
							</li>
							<li className="nav__item mb-8 md:ml-8 md:mb-0">
								<a
									href="#learning"
									className="nav__link relative hover:text-blue-500 transition duration-300"
									onClick={closeMobileMenu}
								>
									Learning
								</a>
							</li>
							<li className="nav__item mb-8 md:ml-8 md:mb-0">
								<a
									href="#contact"
									className="nav__link relative hover:text-blue-500 transition duration-300"
									onClick={closeMobileMenu}
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
					<div
						className="nav__toggle text-white text-2xl cursor-pointer md:hidden"
						id="nav-toggle"
					>
						<button
							id="menu-icon"
							onClick={handleClickOnMobileMenuIcon}
						>
							{openMenu ? (
								<XIcon className="h-6 w-6 text-white" />
							) : (
								<MenuIcon className="h-6 w-6 text-white" />
							)}
						</button>
					</div>
				</nav>
				<div className="flex flex-col md:flex-row items-center justify-around pt-20 pb-10 px-16">
					<div>
						<Image
							className="cursor-pointer"
							src="/images/innovation-team.png"
							alt="Bilion Agency Logo"
							width={450}
							height={450}
							quality={100}
						/>
					</div>
					<div className="flex flex-col items-center justify-center text-white">
						<h3 className="text-6xl font-bold">INNOVATION</h3>
						<span>is OUR tradition</span>
						<button className="mt-12 py-4 px-8 bg-fuchsia-600 rounded text-lg font-bold tracking-wider">
							EXPLORE
						</button>
					</div>
				</div>
			</header>
		</>
	);
}

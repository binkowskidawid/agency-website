import Image from "next/image";

export default function Header() {
	return (
		<>
			<header
			id="home"
				className="l-header w-full min-h-full absolute top-3 left-0 bg-top bg-gradient-to-b from-[#330867] to-[#774da4]
			scroll-smooth"
			>
				<div className="stars w-full md:w-[65%] h-10 md:h-20 absolute top-12 left-0 bg-[url('/images/stars.png')] bg-center bg-contain mix-blend-lighten"></div>
				<div className="flex flex-col md:flex-row items-center justify-around pt-28 md:pt-40 pb-10 px-16">
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
						<h3 className="text-5xl md:text-6xl font-bold">INNOVATION</h3>
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

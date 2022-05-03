import Image from "next/image";

export default function Header() {
	return (
		<>
			<header
				id="home"
				className="l-header w-full min-h-full relative top-3 left-0 bg-top bg-gradient-to-b from-[#330867] to-[#774da4]
			scroll-smooth"
			>
				<div className="stars w-full md:w-[65%] h-10 md:h-20 absolute top-12 left-0 bg-[url('/images/stars.png')] bg-center bg-contain mix-blend-lighten"></div>
				<div className="flex flex-col md:flex-row items-center justify-around pt-20 md:pt-40 pb-10 px-6 md:px-16">
					<div className="w-3/4 md:w-1/2">
						<Image
							className="cursor-pointer"
							src="/images/innovation-team.png"
							alt="Team work"
							width={550}
							height={550}
							quality={100}
						/>
					</div>
					<div className="flex flex-col items-center justify-center text-white text-center">
						<h3 className="text-4xl md:text-7xl font-bold font-['Antic_Didone']">
							YOUR GROWTH
						</h3>
						<span className="md:text-2xl font-['Antic_Didone']">
							is Our ROAR
						</span>
						<button className="mt-12 py-4 px-8 bg-fuchsia-600 rounded text-lg font-bold tracking-wider">
							EXPLORE
						</button>
					</div>
				</div>
			</header>
		</>
	);
}

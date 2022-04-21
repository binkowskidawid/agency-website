import Image from "next/image";

export default function Main() {
	return (
		<main
		id="about"
			className="l-header w-full min-h-full absolute top-full left-0 bg-top  bg-gradient-to-b from-[#764ba2] to-[#667eea]
        scroll-smooth"
		>
			<div className="flex flex-col md:flex-row items-center justify-around pt-20 md:pt-28 pb-10 px-16">
				<div className="flex flex-col flex-1 items-start justify-around text-white">
					<h3 className="text-4xl md:text-5xl font-bold pb-4">About Us</h3>
					<p className="pl-8">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Ipsam incidunt molestiae facere, et libero
						provident eaque id quas porro perferendis? Nesciunt nam
						qui sed blanditiis dignissimos laudantium fuga hic
						itaque! Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. Voluptates aspernatur sapiente
						asperiores accusamus ea necessitatibus velit nisi
						laudantium omnis facilis, sequi possimus? Minus dolorem
						doloremque eveniet saepe maxime officia quasi?
					</p>
					<div className="pl-8">
					<button className="mt-10 py-3 px-8 rounded border-2 text-sm font-bold tracking-wider">
						Read more...
					</button>
					</div>
				</div>
				<div className="">
					<Image
						className="cursor-pointer"
						src="/images/innovation-team-about.png"
						alt="Bilion Agency Logo"
						width={350}
						height={350}
						quality={100}
					/>
				</div>
			</div>
		</main>
	);
}

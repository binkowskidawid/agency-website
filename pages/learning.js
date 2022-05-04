import Image from "next/image";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function PageLearning() {
	return (
		<>
			<Navigation />
			<section
				className="l-header w-full relative top-3 left-0 bg-top bg-gradient-to-b from-[#330867] to-[#774da4]
			scroll-smooth"
			>
				<div className="h-screen flex flex-col md:flex-row items-center justify-around pt-20 md:pt-28 pb-10 px-6 md:px-16">
					<div className="flex flex-col flex-1 items-start justify-around text-white">
						<h3 className="text-4xl md:text-5xl font-bold pb-4 font-['Antic_Didone']">
							Learning
						</h3>
						<p className="pl-8 font-['Antic_Didone']">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Ipsam incidunt molestiae facere, et libero
							provident eaque id quas porro perferendis? Nesciunt
							nam qui sed blanditiis dignissimos laudantium fuga
							hic itaque! Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. Voluptates aspernatur sapiente
							asperiores accusamus ea necessitatibus velit nisi
							laudantium omnis facilis, sequi possimus? Minus
							dolorem doloremque eveniet saepe maxime officia
							quasi?
						</p>
					</div>
					<div className="">
						<Image
							className="cursor-pointer"
							src="/images/library.png"
							alt="Learning"
							width={350}
							height={350}
							quality={100}
						/>
					</div>
				</div>
				<Footer />
			</section>
		</>
	);
}

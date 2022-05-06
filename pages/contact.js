import Image from "next/image";
// import dynamic from "next/dynamic";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Map from "../components/Map";
// const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function PageContact() {
	return (
		<>
			<Navigation />
			<section
				className="l-header w-full bg-top bg-gradient-to-b from-[#330867] to-[#774da4]
			scroll-smooth"
			>
				<div className="h-screen md:h-full flex flex-col md:flex-row items-center justify-around pt-20 md:pt-12">
					<div className="w-full flex flex-1 flex-col px-6 md:pl-16">
						<div className="flex md:flex-1 flex-col items-start justify-start text-white">
							<h3 className="text-4xl md:text-5xl font-bold pb-4 font-['Antic_Didone']">
								Contact
							</h3>
							<div className="flex flex-col">
								<p className="pl-4 font-['Antic_Didone']">
									Czestochowa
								</p>
								<p className="pl-4 font-['Antic_Didone']">
									Poland
								</p>
							</div>
						</div>
						<div className="">
							<Image
								className="cursor-pointer"
								src="/images/contact.png"
								alt="Contact"
								width={150}
								height={150}
								quality={100}
							/>
						</div>
					</div>
					<Map />
				</div>
			</section>
			<Footer />
		</>
	);
}

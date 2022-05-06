import Image from "next/image";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

export async function getServerSideProps(context) {
	const { id } = context.params;
	const facilitiesElement = [
		{
			imageUrl: "/images/classroom.png",
			name: "Smart Classroom",
			text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit unde tempore aliquid voluptatibus earum natus eos aspernatur ratione perferendis cum. Consectetur quis illo quaerat commodi repellendus reiciendis totam alias molestiae.",
			buttonHref: "smart-classroom"
		},
		{
			imageUrl: "/images/library.png",
			name: "Advanced Library",
			text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit unde tempore aliquid voluptatibus earum natus eos aspernatur ratione perferendis cum. Consectetur quis illo quaerat commodi repellendus reiciendis totam alias molestiae.",
			buttonHref: "advanced-library"
		},
		{
			imageUrl: "/images/science-zones.png",
			name: "Science zones",
			text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit unde tempore aliquid voluptatibus earum natus eos aspernatur ratione perferendis cum. Consectetur quis illo quaerat commodi repellendus reiciendis totam alias molestiae.",
			buttonHref: "science-zones"
		}
	];

	const facility = facilitiesElement.find(
		(facility) => facility.buttonHref === id
	);
	return {
		props: {
			facility
		} // will be passed to the page component as props
	};
}

export default function Facility({ facility }) {
	return (
		<>
			<Navigation />
			<section className="l-header min-h-screen w-full relative top-3 left-0 scroll-smooth pb-2">
				<div className="flex flex-col md:flex-row items-center justify-around pt-10 md:pt-28 pb-4 px-6 md:px-16">
					<div className="flex flex-col flex-1 items-start justify-around">
						<h3 className="text-4xl md:text-5xl font-bold pb-2 pt-10 md:pt-16 text-[#380D6B] font-['Antic_Didone']">
							Facility
						</h3>
						<div className="flex flex-col md:flex-row justify-center items-center">
						<div
							className="flex flex-1 flex-col items-start justify-center px-6 mb-2 md:mb-0"
							key={facility.name}
						>
							<h4 className="text-3xl font-bold font-['Antic_Didone'] text-[#380D6B] py-5">
								{facility.name}
							</h4>
							<p className="pb-2 font-['Antic_Didone']">
								{facility.text}
							</p>
						</div>
						<div className="">
							<Image
								className="object-bottom align-bottom"
								src={facility.imageUrl}
								alt={facility.name}
								width={300}
								height={300}
								quality={100}
							/>
						</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

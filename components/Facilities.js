import Image from "next/image";
import Link from "next/link";

export default function Facilities() {
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
	return (
		<section id="about" className="l-header w-full scroll-smooth pb-6">
			<h3 className="text-4xl md:text-5xl font-bold pb-2 px-6 md:px-16 pt-10 md:pt-16 text-[#380D6B] font-['Antic_Didone']">
				Our Facilities
			</h3>
			<div className="flex flex-col md:flex-row items-center justify-around pt-2 pb-10 px-6 md:px-16">
				{facilitiesElement.map((facility) => (
					<div
						className="flex-1 items-center justify-center text-center px-4 mb-8 md:mb-0"
						key={facility.name}
					>
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
						<h4 className="text-3xl font-bold font-['Antic_Didone'] text-[#380D6B] py-5">
							{facility.name}
						</h4>
						<p className="pb-8 font-['Antic_Didone']">
							{facility.text}
						</p>
						<div className="">
							<Link
								href={`/facilities/${facility.buttonHref}`}
								passHref
							>
								<button className="mt-2 py-3 px-8 rounded border-2 border-gray-700 hover:bg-[#380D6B] text-sm text-gray-700 hover:text-gray-100 duration-200 font-bold tracking-wider">
									Read more...
								</button>
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

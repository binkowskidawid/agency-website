import Image from "next/image";

export default function Facilities() {
	const facilitiesElement = [
		{
			imageUrl: "/images/classroom.png",
			name: "Smart Classroom",
			text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit unde tempore aliquid voluptatibus earum natus eos aspernatur ratione perferendis cum. Consectetur quis illo quaerat commodi repellendus reiciendis totam alias molestiae.",
			buttonHref: "#"
		},
		{
			imageUrl: "/images/library.png",
			name: "Advanced Library",
			text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit unde tempore aliquid voluptatibus earum natus eos aspernatur ratione perferendis cum. Consectetur quis illo quaerat commodi repellendus reiciendis totam alias molestiae.",
			buttonHref: "#"
		}
	];

	return (
		<section id="about" className="l-header w-full scroll-smooth">
			<h3 className="text-4xl md:text-5xl font-bold pb-4 px-6 md:px-16 pt-10 md:pt-16 text-[#380D6B]">
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
								className="object-bottom"
								src={facility.imageUrl}
								alt={facility.name}
								width={300}
								height={300}
								quality={100}
							/>
						</div>
                        <h4 className="text-2xl md:text-3xl font-bold text-[#380D6B] pb-5">
				{facility.name}
			</h4>
            <p className="pb-8">{facility.text}</p>
						<div className="">
							<a
								href={facility.buttonHref}
								className="mt-10 py-3 px-8 rounded border-2 border-gray-700 hover:bg-[#380D6B] text-sm text-gray-700 hover:text-gray-100 transition-shadow font-bold tracking-wider"
							>
								Read more...
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
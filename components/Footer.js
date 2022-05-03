import Image from "next/image";

export default function Footer() {
	return (
		<>
			<footer
				id="home"
				className="l-header w-full bg-gray-400 scroll-smooth pb-2"
			>
				<div className="flex flex-col md:flex-row justify-around items-center text-center md:text-left">
					<div className="p-6">
						<Image
							src="/images/bilion-logo-transparent.png"
							alt="Bilion logo"
							width={100}
							height={100}
							quality={100}
						/>
					</div>
                    <div className="font-['Antic_Didone']">
                        <h4 className="text-xl py-2">For Enquiry Regarding Admission</h4>
                        <span className="text-sm py-2">Copyright &#169; 2022 Bilion Learning Agency  </span>
                    </div>
				</div>
			</footer>
		</>
	);
}

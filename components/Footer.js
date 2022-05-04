import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<>
			<footer
				id="home"
				className="l-header w-full bg-gray-400 scroll-smooth pb-2"
			>
				<div className="flex flex-col md:flex-row justify-around items-center text-center md:text-left">
					<div className="p-6 cursor-pointer">
						<Link href="/" passHref>
							<Image
								src="/images/bilion-logo-transparent.png"
								alt="Bilion logo"
								width={100}
								height={100}
								quality={100}
							/>
						</Link>
					</div>
					<div className="">
						<div className="flex flex-col md:flex-row">
							<h4 className="text-xl py-2 font-['Antic_Didone']">
								For Enquiry Regarding Admission
							</h4>
							<a
								href="mailto:" //TODO: add email address
								className="w-36 mx-auto md:mx-2 leading-10 px-5 rounded border-2 border-gray-700 bg-gray-100 hover:bg-[#380D6B] text-sm text-red-600 hover:text-gray-100 font-bold tracking-wider text-center duration-200"
							>
								Write to us
							</a>
						</div>
						<span className="text-sm py-2 font-['Antic_Didone']">
							Copyright &#169; 2022 Bilion Learning Agency{" "}
						</span>
					</div>
				</div>
			</footer>
		</>
	);
}

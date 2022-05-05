import Image from "next/image";
import Facilities from "../../components/Facilities";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

export async function getServerSideProps() {
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
		},
		{
			imageUrl: "/images/science-zones.png",
			name: "Science zones",
			text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit unde tempore aliquid voluptatibus earum natus eos aspernatur ratione perferendis cum. Consectetur quis illo quaerat commodi repellendus reiciendis totam alias molestiae.",
			buttonHref: "#"
		}
	];

	return {
		props: {
			facilitiesElement
		} // will be passed to the page component as props
	};
}

export default function PageFacilities({ facilitiesElement }) {
	return (
		<>
			<Navigation />
			<Facilities />
			<Footer />
		</>
	);
}

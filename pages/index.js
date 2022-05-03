// import Head from 'next/head'
// import Image from 'next/image'

import Navigation from "../components/Navigation";
import Header from "../components/Header";
import About from "../components/About";
import Facilities from "../components/Facilities";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<div className="wrapper w-full">
			<Navigation />
			<Header />
			<About />
			<Facilities />
			<Footer />
		</div>
	);
}

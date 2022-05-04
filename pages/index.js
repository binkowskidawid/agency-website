import Head from "next/head";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import About from "../components/About";
import Facilities from "../components/Facilities";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1"
				/>
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
				<meta name="theme-color" content="#380D6B" />
				<meta
					name="description"
					content="Bilion Learning Agency is a leading education and training company in the country. We offer a wide range of training and education solutions to meet the needs of our clients."
				/>
				<meta
					name="keywords"
					content="Bilion Learning Agency, school, learn, get new skills"
				/>
				<meta name="robots" content="index, follow" />
				<meta name="googlebot" content="index,follow" />
				<meta property="og:locale" content="en_EN" />
				<meta property="og:type" content="article" />
				<meta
					name="url"
					content="https://agency-website-binkowskidawid.vercel.app"
				/>
				<meta property="og:title" content="Bilion Learning Agency" />
				<meta
					property="og:description"
					content="Bilion Learning Agency is a leading education and training company in the country. We offer a wide range of training and education solutions to meet the needs of our clients."
				/>
				<meta
					property="og:site_name"
					content="Bilion Learning Agency"
				/>
				<meta
					name="twitter:description"
					content="Bilion Learning Agency is a leading education and training company in the country. We offer a wide range of training and education solutions to meet the needs of our clients."
				/>
				<meta name="twitter:title" content="Bilion Learning Agency" />
				<title>Bilion Learning Agency</title>
			</Head>
			<div className="wrapper w-full">
				<Navigation />
				<Header />
				<About />
				<Facilities />
				<Footer />
			</div>
		</>
	);
}

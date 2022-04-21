// import Head from 'next/head'
// import Image from 'next/image'

import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
	return (
		<div className="wrapper w-full">
			<Navigation/>
			<Header />
			<Main/>
		</div>
	);
}

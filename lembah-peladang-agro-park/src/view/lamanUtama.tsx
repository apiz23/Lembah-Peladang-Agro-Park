import React from "react";
import logo from "../assets/logo1.svg";
import vidBg from "../assets/vidBg.mp4";

const LamanUtama: React.FC = () => {
	return (
		<>
			<div
				className="min-h-screen pt-32 p-5 text-center relative overflow-hidden"
				id="laman-utama"
			>
				<video
					autoPlay
					loop
					muted
					playsInline
					className="absolute inset-0 w-full h-full object-cover"
				>
					<source src={vidBg} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<div className="relative z-5 mt-14" id="textLaman">
					<img src={logo} alt="logo" className="mx-auto" />
					<h1 className="scroll-m-20 text-6xl my-6 font-extrabold tracking-wide lg:text-6xl text-white">
						LEMBAH PELADANG
						<br /> AGRO PARK
					</h1>
					<h3 className="scroll-m-20 text-2xl font-medium tracking-tight text-white">
						RANCANG AKTIVITI ANDA BERSAMA KAMI
					</h3>
				</div>
			</div>
		</>
	);
};

export default LamanUtama;

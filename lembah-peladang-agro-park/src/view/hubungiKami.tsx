import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { Textarea } from "@/components/ui/textarea";
import { LuAsterisk } from "react-icons/lu";
import bgH from "../assets/img/bgH.jpg";
import axios from "axios";
import { apiUrl, getTimeCurrent } from "@/utils/api";

export const HubungiKami: React.FC = () => {
	const [nama, setName] = useState<string>();
	const [email, setEmail] = useState<string>();
	const [mesej, setMesej] = useState<string>();
	const url = apiUrl;

	const handleChangeName = (e: any) => {
		setName(e.target.value);
	};
	const handleChangeEmail = (e: any) => {
		setEmail(e.target.value);
	};
	const hanldeChangeMesej = (e: any) => {
		setMesej(e.target.value);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const response = await axios.post(`${url}addMessage`, {
				name: nama,
				email: email,
				message: mesej,
				created_date: getTimeCurrent()
			});

			console.log(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<div
				className="min-h-screen pt-20 p-5 bg-cover bg-center bg-no-repeat"
				id="hubungi-kami"
				style={{
					backgroundImage: `url(${bgH})`,
				}}
			>
				<h1 className="scroll-m-20 text-4xl text-white text-center font-extrabold tracking-tight lg:text-5xl">
					HUBUNGI KAMI
				</h1>
				<div className="max-w-4xl mx-auto my-10">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-20">
						<Card className="border-none shadow-none bg-transparent text-white">
							<CardContent className="max-w-2xl border rounded-md text-black bg-white p-6">
								<form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
									<div className="mb-5">
										<label
											htmlFor="nama"
											className="flex mb-2 text-sm font-medium text-green-700 dark:text-white"
										>
											Nama <LuAsterisk className="w-3 h-3" />
										</label>
										<input
											type="text"
											id="nama"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="Masukkan nama anda"
											required
											onChange={handleChangeName}
										/>
									</div>
									<div className="mb-5">
										<label
											htmlFor="email"
											className="flex mb-2 text-sm font-medium text-green-700 dark:text-white"
										>
											Email <LuAsterisk className="w-3 h-3" />
										</label>
										<input
											type="email"
											id="email"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="Masukkan email anda"
											required
											onChange={handleChangeEmail}
										/>
									</div>
									<div className="mb-5">
										<label
											htmlFor="textArea"
											className="block mb-2 text-sm font-medium text-green-700 dark:text-white"
										>
											Mesej
										</label>
										<Textarea
											id="textArea"
											placeholder="Tuliskan mesej atau pertanyaan anda"
											onChange={hanldeChangeMesej}
										/>
									</div>
									<div className="flex justify-center">
										<button
											type="submit"
											className="text-white bg-green-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
										>
											Hantar
										</button>
									</div>
								</form>
							</CardContent>
						</Card>
						<Card className="border-none shadow-none bg-transparent">
							<CardContent className="mt-8">
								<ul className="max-w-md space-y-5 text-white list-none list-inside dark:text-gray-400">
									<li className="flex">
										<FaLocationDot className="w-8 h-8 me-5 " />
										Wisma Peladang Kuala Selangor
										<br /> Lot 5108 Pekan Sungai Buloh (Sasaran)
										<br />
										45800 Jeram, Selangor Darul Ehsan
									</li>
									<li className="flex">
										<FaPhone className="w-8 h-8 me-5 " />
										03-3264 7042
									</li>
									<li className="flex">
										<MdEmail className="w-8 h-8 me-5 " />
										ppkks0118@gmail.com
									</li>
									<li className="flex">
										<IoLogoWhatsapp className="w-8 h-8 me-5 " />
										014-3011843 ( Admin )
									</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
			<div className="h-fit">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.608380843342!2d101.4669533290543!3d3.1971359245235575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc5b4aea6e1e07%3A0xb21f9f0c58bb4a53!2sLembah%20Peladang%20Agro%20Park%20Campsite!5e0!3m2!1sen!2smy!4v1704878289250!5m2!1sen!2smy"
					width="100%"
					height="400"
					style={{ border: "0" }}
					allowFullScreen={true}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</>
	);
};

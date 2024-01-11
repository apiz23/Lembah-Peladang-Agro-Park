import React from "react";
import {
	Card,
	CardContent,
} from "@/components/ui/card";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { GrView } from "react-icons/gr";

import ph1 from "../../assets/img/campsite/1.jpg";
import ph2 from "../../assets/img/campsite/2.jpg";
import ph3 from "../../assets/img/campsite/3.jpg";
import ph4 from "../../assets/img/campsite/4.jpg";
import ph5 from "../../assets/img/campsite/5.jpg";
import ph6 from "../../assets/img/campsite/6.jpg";
import ph7 from "../../assets/img/campsite/7.jpg";
import ph8 from "../../assets/img/campsite/8.jpg";
import ph9 from "../../assets/img/campsite/9.jpg";
import ph10 from "../../assets/img/campsite/10.jpg";
import ph11 from "../../assets/img/campsite/11.jpg";
import ph12 from "../../assets/img/campsite/12.jpg";
import ph13 from "../../assets/img/campsite/13.jpg";
import ph14 from "../../assets/img/campsite/14.jpg";
import ph15 from "../../assets/img/campsite/15.jpg";
import w1 from "../../assets/w.svg";

export const TapakCampsite: React.FC = () => {
	const imageUrls = [
		ph1,
		ph2,
		ph3,
		ph4,
		ph5,
		ph6,
		ph7,
		ph8,
		ph9,
		ph10,
		ph11,
		ph12,
		ph13,
		ph14,
		ph15,
	];

	return (
		<>
			<div
				className="h-fit pt-20 p-5 bg-white bg-cover bg-left bg-no-repeat"
				id="tapakCampsite"
				style={{ backgroundImage: `url(${w1})` }}
			>
				<div className="text-center text-white">
					<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
						AKTIVITI
					</h1>
					<h2 className="scroll-m-20 mt-10 text-3xl font-semibold tracking-tight first:mt-0">
						TAPAK CAMPSITE
					</h2>
				</div>
				<div className="max-w-6xl my-10 mx-auto">
					<Card className="bg-transparent border-none shadow-none">
						<CardContent>
							<div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-10">
								{imageUrls.map((imageUrl, index) => (
									<div key={index} className="relative overflow-hidden group">
										<img
											className="h-64 w-full object-cover rounded-lg transition-transform duration-300 transform scale-100 group-hover:scale-110"
											src={imageUrl}
											alt={`Image ${index + 1}`}
										/>
										<Dialog>
											<DialogTrigger>
												<button className="absolute bottom-0 right-0 mb-10 mr-2 p-2 text-gray-700 rounded-md hover:bg-gray-200 transition">
													<GrView className="w-6 h-6" />
												</button>
											</DialogTrigger>
											<DialogContent className="h-fit bg-gray-50 bg-opacity-50 border-none">
												<DialogHeader className="w-full">
													<DialogTitle>Preview</DialogTitle>
													<DialogDescription>
														<img
															src={imageUrl}
															alt={`Image ${index + 1}`}
															className="rounded-lg shadow-lg"
														/>
													</DialogDescription>
												</DialogHeader>
											</DialogContent>
										</Dialog>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</>
	);
};

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { GrView } from "react-icons/gr";

import ph1 from "../../assets/img/bow/1 (1).jpg";
import ph2 from "../../assets/img/bow/1 (2).jpg";
import ph3 from "../../assets/img/bow/1 (3).jpg";
import ph4 from "../../assets/img/bow/1 (4).jpg";
import ph5 from "../../assets/img/bow/1 (5).jpg";
import ph6 from "../../assets/img/bow/1 (6).jpg";
import ph7 from "../../assets/img/bow/1 (7).jpg";
import ph8 from "../../assets/img/bow/1 (8).jpg";
import ph9 from "../../assets/img/bow/1 (9).jpg";

export const MemanahKuda: React.FC = () => {
	const imageUrls = [ph1, ph2, ph3, ph4, ph5, ph6, ph7, ph8, ph9];

	return (
		<>
			<div className="min-h-screen pt-20 p-5 bg-white" id="memanahKuda">
				<div className="text-center">
					<div className="max-w-lg mx-auto mb-5">
						<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
							MEMANAH DAN BERKUDA
						</h1>
					</div>
					<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
						( BOW & ARROW ACADEMY )
					</h4>
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

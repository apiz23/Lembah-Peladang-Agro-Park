import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import ph1 from "../assets/img/1.jpg";
import ph2 from "../assets/img/2.jpg";
import ph3 from "../assets/img/3.jpg";
import ph4 from "../assets/img/4.jpg";
import w2 from "../assets/w2.svg";

export const Kemudahan: React.FC = () => {
	return (
		<>
			<div
				className="min-h-screen pt-20 p-5 bg-gray-300 bg-cover bg-left bg-no-repeat"
				id="kemudahan"
				style={{ backgroundImage: `url(${w2})` }}
			>
				<h1 className="scroll-m-20 text-4xl text-center font-extrabold tracking-tight lg:text-5xl">
					KEMUDAHAN
				</h1>
				<div className="max-w-5xl mx-auto my-10 bg-none">
					<Card className="border-none shadow-none bg-transparent">
						<CardHeader className="text-center">
							<CardTitle>SURAU</CardTitle>
							<CardDescription>( LELAKI DAN PEREMPUAN )</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid md:grid-cols-2 grid-cols-1 gap-4">
								<div className="md:me-5">
									<img
										src={ph3}
										alt=""
										className="w-full h-full object-cover rounded-lg"
									/>
								</div>
								<div className="md:ms-5">
									<img
										src={ph2}
										alt=""
										className="w-full h-full object-cover rounded-lg"
									/>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
				<div className="max-w-2xl mx-auto my-10">
					<Card className="border-none shadow-none bg-transparent">
						<CardHeader className="text-center">
							<CardTitle>TANDAS</CardTitle>
							<CardDescription>( LELAKI DAN PEREMPUAN )</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid grid-cols-1">
								<div>
									<img src={ph1} alt="" className="rounded-lg" />
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
				<div className="max-w-2xl mx-auto my-10">
					<Card className="border-none shadow-none bg-transparent">
						<CardHeader className="text-center text-white">
							<CardTitle>TANDAS</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="grid grid-cols-1">
								<div>
									<img src={ph4} alt="" className="rounded-lg" />
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</>
	);
};

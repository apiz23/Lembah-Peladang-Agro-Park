import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export const Pakej: React.FC = () => {
	return (
		<>
			<div
				className="h-fit pt-20 p-5 bg-cover bg-center bg-no-repeat bg-teal-700"
				id="pakej"
			>
				<div className="text-white">
					<h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
						PAKEJ
					</h1>
					<h3 className="scroll-m-20 text-2xl text-center py-5 font-semibold tracking-tight">
						Kami menawarkan pakej dengan harga mampu milik
					</h3>
				</div>

				<div className="max-w-6xl mx-auto my-5">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
						<Card className="bg-transparent border-none shadow-none overflow-hidden">
							<CardContent className="relative group">
								<div className="max-w-2xl">
									<img
										src="https://gohubcampsite.blob.core.windows.net/image-accommodation-live/93802c17-8340-4c30-86f2-d4c5e39fda2f.jpg"
										alt=""
										className="rounded-lg w-full h-60 object-cover transition-transform duration-300 transform scale-100 group-hover:scale-105"
									/>
								</div>
								<div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
									<p className="text-white text-lg font-bold">TAPAK PERKHEMAHAN</p>
								</div>
							</CardContent>
						</Card>
						<Card className="bg-transparent border-none shadow-none overflow-hidden">
							<CardContent className="relative group">
								<div className="max-w-2xl">
									<img
										src="https://gohubcampsite.blob.core.windows.net/image-accommodation-live/5ae1cd2d-90e2-4de4-8352-49aa9ca1f0ff.jpg"
										alt=""
										className="rounded-lg w-full h-60 object-cover transition-transform duration-300 transform scale-100 group-hover:scale-105"
									/>
								</div>
								<div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
									<p className="text-white text-lg font-bold">CABINSTAY</p>
								</div>
							</CardContent>
						</Card>
						<Card className="bg-transparent border-none shadow-none overflow-hidden">
							<CardContent className="relative group">
								<div className="max-w-2xl">
									<img
										src="https://gohubcampsite.blob.core.windows.net/image-accommodation-live/377e3da4-1876-4501-9dd0-e897269b35bb.jpg"
										alt=""
										className="rounded-lg w-full h-60 object-cover transition-transform duration-300 transform scale-100 group-hover:scale-105"
									/>
								</div>
								<div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
									<p className="text-white text-lg font-bold">CAMP DECK</p>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</>
	);
};

import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export const Tapak: React.FC = () => {
	const data = [
		{
			name: "Camp Deck",
			src: "https://gohubcampsite.blob.core.windows.net/image-accommodation-live/377e3da4-1876-4501-9dd0-e897269b35bb.jpg",
			alt: "campDeck",
		},
		{
			name: "Ground",
			src: "https://gohubcampsite.blob.core.windows.net/image-accommodation-live/abcba29a-8088-4270-810b-c14d4c340a43.jpg",
			alt: "ground",
		},
		{
			name: "Cabin Stay",
			src: "https://gohubcampsite.blob.core.windows.net/image-cms-live/6c95a24d-ae1a-4fb5-b81b-db25e75fb7c1.jpg",
			alt: "cabinStay",
		},
	];

	return (
		<>
			<div className="min-h-screen pt-14 p-5" id="jenis-tapak">
				<div className="max-w-2xl mx-auto text-center">
					<Card className="border-none shadow-none">
						<CardHeader>
							<CardTitle>
								<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
									TAPAK
								</h1>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="leading-7 text-lg [&:not(:first-child)]:mt-6">
								Kami menyediakan 3 jenis tapak untuk anda!
							</p>
						</CardContent>
					</Card>
				</div>
				<div className="flex justify-center md:px-0 px-10">
					<Carousel
						opts={{
							align: "start",
						}}
						className="w-full max-w-5xl"
					>
						<CarouselContent>
							{data.map((item, index) => (
								<CarouselItem key={index} className="md:basis-1/2">
									<div className="p-1 relative">
										<Card className="border-none shadow-none">
											<CardContent className="flex aspect-square items-center justify-center p-6">
												<img
													src={item.src}
													alt={item.alt}
													className="w-full h-full object-cover"
												/>
												<span className="text-3xl text-gray-900 font-semibold absolute z-10">
													{item.name}
												</span>
											</CardContent>
										</Card>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
				<div className="max-w-2xl mt-10 mx-auto text-center">
					<Card className="border-none shadow-none">
						<CardContent>
							<p className="leading-7 text-lg [&:not(:first-child)]:mt-6">
								Maksimum 200 orang peserta untuk satu tempoh masa
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</>
	);
};

export default Tapak;

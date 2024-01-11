import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const TentangKami: React.FC = () => {
	const backgroundImageUrl = "https://malaysiacamping.com/wp-content/uploads/2021/10/agro1-1.jpg";

	return (
		<>
			<div
				className="min-h-screen pt-32 p-5 text-center "
				style={{ backgroundImage: `url(${backgroundImageUrl})` }}
				id="tentang-kami"
			>
				<Card className="max-w-xl mx-auto transform transition-transform duration-500 hover:scale-110">
					<CardHeader>
						<CardTitle>
							<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
								TENTANG KAMI
							</h1>
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="justify-center text-lg py-4 mx-5 leading-7 [&:not(:first-child)]:mt-6">
							Kawasan lembah yang aman daman sesuai untuk menjalankan aktiviti bersama
							keluarga tersayang serta ia juga membantu mendekatkan diri dengan suasana
							alam semulajadi dan dapat memberikan ketenangan minda, terapi kejiwaan,
							sangat bagus untuk kesihatan fizikal dan mental. Terletak di Saujana
							Utama, iaitu 26km dari Bandar Shah Alam, di dalam kawasan berpagar,
							tempat letak kenderaan yang luas, kemudahan surau, wakaf dan tandas
							disediakan.
						</p>
					</CardContent>
				</Card>
			</div>
		</>
	);
};

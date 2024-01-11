import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { FaFacebookF, FaTiktok } from "react-icons/fa";

export const Footer: React.FC = () => {
	return (
		<>
			<div className="h-fit pt-20 p-5 bg-stone-900" id="kemudahan">
				<div className="max-w-5xl mx-auto">
					<div className="grid md:grid-cols-3 grid-cols-1 gap-4">
						<Card className="border-none shadow-none bg-transparent text-white">
							<CardHeader className="text-left">
								<CardTitle>
									<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
										Lembah Peladang Agro Parks
									</h4>
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="leading-7 [&:not(:first-child)]:mt-6">
									Lembah Peladang Agro Park, <br />
									Bandar Saujana Utama,
									<br />
									47000 Sungai Buloh,
									<br />
									Selangor <br />
									Tel: 03-3264 7042
								</p>
							</CardContent>
						</Card>
						<Card className="border-none shadow-none bg-transparent text-white">
							<CardHeader className="text-left md:text-center">
								<CardTitle>
									<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
										Sosial
									</h4>
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="flex justify-start md:justify-center leading-7 [&:not(:first-child)]:mt-6">
									<a
										href="https://www.facebook.com/people/Pertubuhan-Peladang-Kawasan-Kuala-Selangor/100083728745426/?locale=fo_FO&paipv=0&eav=AfZ_Fevnzde-taYEmNQCbF0ezR1H23e9PJxUjmzC8AYZEvxwOjHtvb4FYb3mCcd_j9A&_rdr"
										target="_blank"
									>
										<FaFacebookF className="h-6 w-6 me-5 hover:text-blue-500" />
									</a>
									<a
										href="https://www.tiktok.com/@lembahpeladangagropark?is_from_webapp=1&sender_device=pc"
										target="_blank"
									>
										<FaTiktok className="h-6 w-6 hover:text-slate-500" />
									</a>
								</p>
							</CardContent>
						</Card>
						<Card className="border-none shadow-none bg-transparent text-white">
							<CardContent className="mt-6">
								<p className="leading-7 text-white [&:not(:first-child)]:mt-6">
									Hak Cipta Terpelihara <br />© 2023 Lembah Peladang Agro Park
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</>
	);
};

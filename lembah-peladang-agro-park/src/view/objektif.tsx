import React from "react";
import { MdPeopleOutline } from "react-icons/md";
import bg1 from "../assets/img/bg1.png";
import bg2 from "../assets/img/bg2.png";
import bg3 from "../assets/img/bg3.png";

const Objektif: React.FC = () => {
	return (
		<>
			<div className="min-h-screen pt-32 p-5 bg-teal-700 text-white" id="objektif">
				<div className="max-w-full mx-auto px-20">
					<h2 className="scroll-m-20 mb-20 text-center text-5xl tracking-wider font-semibold first:mt-0">
						OBJEKTIF
					</h2>
					<div className="mb-5 md:mb-14 grid grid-cols-1 md:grid-cols-3 gap-4 md:px-32">
						<div className="col-span-1 flex">
							<MdPeopleOutline className="w-14 h-14 md:me-5" />
							<p className="justify-start">
								Menarik minat pengunjung dalam industri pelancongan
							</p>
						</div>
						<div className="col-span-1 flex">
							<MdPeopleOutline className="w-14 h-14 md:me-5" />
							<p>Memperkenalkan pelbagai jenis tanaman kepada pengunjung</p>
						</div>
						<div className="col-span-1 flex">
							<MdPeopleOutline className="w-14 h-14 md:me-5" />
							<p>
								Mempromosikan produk-produk tanaman, hiliran, berkhemah dan keindahan
								alam semulajadi
							</p>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:px-52">
						<div className="col-span-1 flex">
							<MdPeopleOutline className="w-14 h-14 md:me-5" />
							<p>
								Menyampaikan maklumat kepada pengunjung berkenaan pertanian, penternakan
								dan alam semulajadi
							</p>
						</div>
						<div className="col-span-1 flex">
							<MdPeopleOutline className="w-14 h-14 md:me-5" />
							<p>Menyediakan aktiviti yang menarik dan mencabar kepada pengunjung</p>
						</div>
					</div>
				</div>
				<div className="max-w-full my-10 md:px-40">
					<div className="grid md:grid-cols-3 grid-cols-1 gap-4">
						<div className="mt-6 relative">
							<div
								className="h-64 bg-contain bg-no-repeat bg-center"
								style={{
									backgroundImage: `url(${bg1})`,
								}}
							></div>
							<div className="absolute inset-0 flex flex-col items-center justify-center">
								<h4 className="text-center text-xl font-semibold text-white tracking-tight">
									MISI
								</h4>
								<p className="text-white leading-7 mt-6">
									Memberikan perkhidmatan & pengalaman terbaik kepada pengunjung
								</p>
							</div>
						</div>
						<div className="mt-6 relative">
							<div
								className="h-64 bg-contain bg-no-repeat bg-center"
								style={{
									backgroundImage: `url(${bg2})`,
								}}
							></div>
							<div className="absolute inset-0 flex flex-col items-center justify-center">
								<h4 className="text-center text-xl font-semibold text-white tracking-tight">
									WAWASAN
								</h4>
								<p className="text-white leading-7 mt-6">
									Menjadikan Lembah Peladang Agro Park sebagai sebuah pusat
									Agropelancongan yang sesuai dengan semua peringkat umur dan memberikan
									pengalaman yang menakjubkan kepada pengunjung
								</p>
							</div>
						</div>

						<div className="mt-6 relative">
							<div
								className="h-64 bg-contain bg-no-repeat bg-center"
								style={{
									backgroundImage: `url(${bg3})`,
								}}
							></div>
							<div className="absolute inset-0 flex flex-col items-center justify-center">
								<h4 className="text-center text-xl font-semibold text-white tracking-tight">
									SLOGAN
								</h4>
								<blockquote className="mt-6 border-l-2 pl-6 italic text-white">
									"Pertanian dan Pelancongan Bergerak Seiring"
								</blockquote>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Objektif;

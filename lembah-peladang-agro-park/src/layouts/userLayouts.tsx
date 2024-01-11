import { Navbar } from "@/components/navbar";
import { Berbasikal } from "@/view/aktiviti/berbasikal";
import { MemanahKuda } from "@/view/aktiviti/memanahKuda";
import { TapakCampsite } from "@/view/aktiviti/tapakCampsite";
import { TeamBuilding } from "@/view/aktiviti/teamBuilding";
import { Footer } from "@/view/footer";
import { HubungiKami } from "@/view/hubungiKami";
import { Kemudahan } from "@/view/kemudahan";
import LamanUtama from "@/view/lamanUtama";
import Objektif from "@/view/objektif";
import { Pakej } from "@/view/pakej";
import { Tapak } from "@/view/tapak";
import { TentangKami } from "@/view/tentangKami";
import React from "react";

export const UserLayouts: React.FC = () => {
	return (
		<>
			<Navbar />
			<LamanUtama />
			<TentangKami />
			<Objektif />
			<Tapak />
			<Pakej />
			<Kemudahan />
			<TapakCampsite />
			<TeamBuilding />
			<MemanahKuda />
			<Berbasikal />
			<HubungiKami />
			<Footer />
		</>
	);
};

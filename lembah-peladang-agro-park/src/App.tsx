import { Routes, Route } from "react-router-dom";
import { UserLayouts } from "./layouts/userLayouts";
import { Dashboard } from "./view/admin/dashboard";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<UserLayouts />} />
				<Route path="/admin" element={<Dashboard />} />
			</Routes>
		</>
	);
}

export default App;

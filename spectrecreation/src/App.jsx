import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import Heading from "./components/heading/heading";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import NotFound from "./components/notFound/notFound";

export default function App() {
	return (
		<BrowserRouter>
			<div className="flex flex-col gap-6">
				<Heading />
				<Hero />
				<About />
				<Contact />
				<Routes>
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

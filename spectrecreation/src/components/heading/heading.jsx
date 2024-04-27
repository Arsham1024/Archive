import { NavLink } from "react-router-dom";
import { Navbar } from "flowbite-react";
import logo from "../../assets/hourglass.svg";

export default function Heading() {
	return (
		<div className="sticky top-0 z-50 bg-transparent shadow-l">
			<Navbar
				className="bg-white bg-opacity-30 backdrop-blur-lg"
				fluid
				rounded
			>
				<img src={logo} alt="spectre creation logo" className="w-12 h-12" />
				<Navbar.Toggle className="" />
				<Navbar.Collapse className="text-center text-xl px-10">
					<Navbar.Link
						className="p-4 bg-iphone-natural rounded-xl border-b-0 m-6"
						as={NavLink}
						to="/"
						end
					>
						Home
					</Navbar.Link>
					<Navbar.Link
						className="p-4 bg-iphone-natural rounded-xl border-b-0 m-6"
						as={NavLink}
						to="/about"
					>
						About
					</Navbar.Link>

					<Navbar.Link
						className="p-4 bg-iphone-natural rounded-xl border-b-0 m-6"
						as={NavLink}
						to="/contact"
					>
						Contact
					</Navbar.Link>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

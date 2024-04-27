import heroImage from "../../assets/hero-developer-mobile.jpg";
import heroImageLarge from "../../assets/hero-developer.jpg";

export default function Hero() {
	return (
		<>
			<div className="bg-iphone-blue w-full h-screen flex flex-col justify-between">
				{/* Hero Image */}
				<div className="relative h-2/3 w-full">
					{/* Image for small screens */}
					<img
						src={heroImage}
						className="md:hidden absolute h-full w-full object-cover"
						alt="Hero Developer"
					/>
					{/* Image for medium screens and up */}
					<img
						src={heroImageLarge}
						className="hidden md:block absolute h-full w-full object-cover"
						alt="Hero Developer"
					/>
					{/* Gradient overlay */}
					<div className="absolute inset-0 bg-gradient-to-t from-iphone-blue to-transparent"></div>
				</div>

				<div className="flex flex-col gap-6 relative -translate-y-28">
					{/* Spectre Create Title */}
					<h1 className="text-7xl font-bold mx-6">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-transparent via-iphone-natural to-iphone-natural inline-block ml-16">
							Spectre
						</span>
						<br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-iphone-natural via-iphone-natural to-transparent inline-block">
							Creation
						</span>
					</h1>

					<div className="px-10">
						<hr className="border-t-2 border-iphone-natural  w-40"></hr>
					</div>

					{/* Subtitle */}
					<div className="text-left mx-6">
						<h2 className="text-xl text-black">
							I Handle the Web Development
						</h2>
						<h2 className="text-xl text-black">
							You Handle the Business
						</h2>
					</div>

					{/* Main Button */}
					<a href="tel:9499458992">
						<button className="mx-6 p-3 bg-iphone-natural text-white rounded-lg text-lg">
							Contact Me
						</button>
					</a>
				</div>
			</div>
		</>
	);
}

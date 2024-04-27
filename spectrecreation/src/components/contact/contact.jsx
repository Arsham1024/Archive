import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import me from "../../assets/suit-up.jpg";

export default function Contact() {
	return (
		<>
			<div className="flex justify-center text-3xl font-sans font-bold">
				<h2>contact me</h2>
			</div>

			{/* the big image */}
			<section className="flex justify-center items-center p-6">
				<div className="avatar">
					<div className="w-24 rounded-full">
						<img src={me} />
					</div>
				</div>
			</section>

			{/* contact options email, number, github, linked in*/}
			<section className="flex flex-col gap-10 content-center">
				<a href="tel:9499458992">
					<div className="flex-1 mx-36 p-6 bg-gray-50 rounded-3xl">
						<FaPhoneFlip className="h-full w-full"></FaPhoneFlip>
					</div>
				</a>

				<a href="mailto:mehraniarsham@gmail.com">
					<div className="flex-1 mx-36 p-6 bg-gray-50 rounded-3xl">
						<MdEmail className="h-full w-full"></MdEmail>
					</div>
				</a>

				<a href="https://www.linkedin.com/in/arsham-mehrani/">
					<div className="flex-1 mx-36 p-6 bg-gray-50 rounded-3xl">
						<FaLinkedin className="h-full w-full"></FaLinkedin>
					</div>
				</a>

				<a href="https://github.com/Arsham1024">
					<div className="flex-1 mx-36 p-6 bg-gray-50 rounded-3xl">
						<FaGithubSquare className="h-full w-full"></FaGithubSquare>
					</div>
				</a>
			</section>
		</>
	);
}

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function Home() {
	return (
		<div>
			<Header />
			<div className="min-h-screen flex flex-col">
				<main>
					<div className="my-6 text-center">
						<h2 className="mb-4 text-xl font-bold md:text-3xl lg:text-5xl text-lime-800 font-[family-name:var(--font-marvin-visions)]">
							Encontre seu especialista em cannabis medicinal
						</h2>
					</div>
				</main>
			</div>
			<Footer />
		</div>
	);
}
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  	return (
		<footer className="bg-[#1a1a1a] text-white py-10 px-2 rounded-t-3xl relative">
			<div className="container mx-auto px-6">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 font-bold">
					<div className="flex flex-col items-start">
						<div className="mb-2">
							<Image 
								src="/img/kaya_sl_light.png" 
								alt="Kaya" 
								width={300} 
								height={80}
								className="mb-1"
							/>
						</div>
						
						<div className="flex flex-wrap gap-4 mt-4">
							<Image src="/img/kaya_doc_light.png" alt="Kaya Doc" width={100} height={40} />
							<Image src="/img/kaya_biz_light.png" alt="Kaya Biz" width={100} height={40} />
							<Image src="/img/kaya_mind_light.png" alt="Kaya Mind" width={100} height={40} />
						</div>
					</div>
					<div className="md:ml-8">
						<h3 className="text-3xl mb-4 font-[family-name:var(--font-marvin-visions)]">MÉDICOS</h3>
						<ul className="space-y-3">
							<li>
								<Link href="#" className="hover:text-lime-200 transition">
									Funcionalidades do Kaya Doc
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-lime-200 transition">
									FAQ
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-3xl mb-4 font-[family-name:var(--font-marvin-visions)]">PACIENTES</h3>
						<ul className="space-y-3">
							<li>
								<Link href="#" className="hover:text-lime-200 transition">
									Gostaria de me tornar paciente
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-lime-200 transition">
									Benefícios da cannabis
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-lime-200 transition">
									Glossário canábico
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-lime-200 transition">
									FAQ
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-3xl mb-4 font-[family-name:var(--font-marvin-visions)]">MARCAS</h3>
					</div>
				</div>

				<div className="mt-16">
					<h3 className="text-3xl mb-6 font-[family-name:var(--font-marvin-visions)]">NOS SIGA NAS REDES SOCIAIS</h3>
					<div className="flex gap-4 mb-10">
						<Link href="https://linkedin.com" className="bg-[#c5f5a0] rounded-full p-3 hover:opacity-80 transition">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1a1a1a">
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
							</svg>
						</Link>
						<Link href="https://instagram.com" className="bg-[#c5f5a0] rounded-full p-3 hover:opacity-80 transition">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1a1a1a">
								<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
							</svg>
						</Link>
						<Link href="https://youtube.com" className="bg-[#c5f5a0] rounded-full p-3 hover:opacity-80 transition">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1a1a1a">
								<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
							</svg>
						</Link>
					</div>
				</div>
				<div>
					<h3 className="text-3xl mb-6 font-[family-name:var(--font-marvin-visions)]">FALE CONOSCO</h3>
					<div className="space-y-4">
						<div className="flex items-center gap-3">
							<div className="bg-transparent">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#c5f5a0">
									<path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
								</svg>
							</div>
							<span>+55 11 91242-3799</span>
						</div>
						<div className="flex items-center gap-3">
							<div className="bg-transparent">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#c5f5a0">
									<path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
								</svg>
							</div>
							<a href="mailto:atendimento@kayadoc.com" className="hover:text-lime-200 transition">
								atendimento@kayadoc.com
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-16 bg-white text-[#1a1a1a] py-4 rounded-b-3xl">
				<div className="container mx-auto px-6 flex justify-between items-center">
					<p className="text-sm font-medium">COPYRIGHT©KAYA 2025. ALL RIGHTS RESERVED</p>
					<div>
						<Image src="/img/kaya_icon.png" alt="Kaya Icon" width={30} height={30} />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
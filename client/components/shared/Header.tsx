"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const [fncOpen, setFncOpen] = useState(false);
    const [pctOpen, setPctOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleFnc = () => {
        setFncOpen(!fncOpen);
        if (pctOpen) setPctOpen(false);
    };

    const togglePct = () => {
        setPctOpen(!pctOpen);
        if (fncOpen) setFncOpen(false);
    };

    return (
        <header className="bg-[#232323] text-white py-4 px-4 md:px-8 flex flex-wrap items-center justify-between rounded-xl md:rounded-3xl mx-2 md:mx-8 my-4 md:my-8">
            <div className="flex items-center">
                <Image 
                    src="/img/kaya_doc_light.png"
                    alt="Kaya Doc Logo"
                    width={90}
                    height={40}
                />
            </div>

            <button 
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <div className={`w-full md:w-auto md:flex md:items-center md:space-x-6 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0 mt-4 md:mt-0">
                    <div className="relative">
                        <button 
                            onClick={toggleFnc}
                            className="flex items-center space-x-1 w-full"
                        >
                            <span>Funcionalidades</span>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className={`h-4 w-4 transition-transform ${fncOpen ? 'rotate-180' : ''}`} 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {fncOpen && (
                            <div className="absolute z-10 mt-2 w-48 bg-zinc-800 rounded-md shadow-lg py-1">
                                <Link href="#" className="block px-4 py-2 hover:bg-lime-900 text-lime-200">
                                    Descubra Novos Produtos   
                                </Link>
                                <Link href="#" className="block px-4 py-2 hover:bg-lime-900 text-lime-200">
                                    Biblioteca de Estudos
                                </Link>
                                <Link href="#" className="block px-4 py-2 hover:bg-lime-900 text-lime-200">
                                    Webinars
                                </Link>
                                <Link href="#" className="block px-4 py-2 hover:bg-lime-900 text-lime-200">
                                    Copiloto
                                </Link>
                                <Link href="#" className="block px-4 py-2 hover:bg-lime-900 text-lime-200">
                                    Benefícios e Parcerias
                                </Link>
                                <Link href="#" className="block px-4 py-2 hover:bg-lime-900 text-lime-200">
                                    Prontuário
                                </Link>
                                <Link href="#" className="block px-4 py-2 hover:bg-lime-900 text-lime-200">
                                    Anamnese
                                </Link>
                                <Link href="#" className="block px-4 py-2 hover:bg-lime-900 text-lime-200">
                                    Agenda
                                </Link>
                                <Link href="#" className="block px-4 py-2 hover:bg-lime-900 text-lime-200">
                                    Perfil Público
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <button 
                            onClick={togglePct}
                            className="flex items-center space-x-1 w-full"
                        >
                            <span>Paciente</span>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className={`h-4 w-4 transition-transform ${pctOpen ? 'rotate-180' : ''}`} 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        
                        {pctOpen && (
                            <div className="absolute z-10 mt-2 w-48 bg-zinc-800 rounded-md shadow-lg py-1">
                                <Link href="/pct-1" className="block px-4 py-2 hover:bg-lime-900 text-lime-200">
                                    Médicos Prescritores
                                </Link>
                                <Link href="/pct-2" className="block px-4 py-2 hover:bg-lime-900 text-lime-200">
                                    Benefícios da Cannabis
                                </Link>
                                <Link href="/pct-3" className="block px-4 py-2 hover:bg-lime-900 text-lime-200">
                                    Glossário Canábico
                                </Link>
                                <Link href="/pct-4" className="block px-4 py-2 hover:bg-lime-900 text-lime-200">
                                    Blog da Saúde
                                </Link>
                                <Link href="/pct-5" className="block px-4 py-2 hover:bg-lime-900 text-lime-200">
                                    Condições Médicas
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
                    <button className="bg-lime-200 text-black px-6 py-2 rounded-full hover:bg-zinc-800 hover:text-lime-200 transition-colors hover:border-lime-200 border w-full md:w-auto">
                        Teste grátis
                    </button>
                    <button className="bg-zinc-800 text-white px-6 py-2 rounded-full border border-lime-200 hover:bg-lime-200 hover:text-black transition-colors w-full md:w-auto">
                        Login
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
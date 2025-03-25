"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/shared/Header";
import { getDoctor, type Doctor } from "@/services/api";
import Footer from "@/components/shared/Footer";
import { FaInstagram, FaFacebook, FaMapMarkerAlt, FaHeart, FaEye, FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function DoctorDetails() {
    const params = useParams();
    const [doctor, setDoctor] = useState<Doctor | null>(null);
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDoctor = async () => {
            try {
                const id = Number(params.id);
                if (isNaN(id)) throw new Error("Invalid ID");
                
                const data = await getDoctor(id);
                setDoctor(data);
            } catch (error) {
                console.error("Error fetching doctor:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDoctor();
    }, [params.id]);

    if (loading) return;
    if (!doctor || !doctor.id) {
        router.push("/?");
        return;
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="w-full mb-20 font-[family-name:din-2014,sans-serif]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="h-48 bg-lime-200 -mx-6 -mt-6 rounded-t-lg" />
                        <div className="flex flex-col md:flex-row items-start gap-6 -mt-24">
                            <img 
                                src={doctor.foto}
                                alt={doctor.nome}
                                className="w-60 h-60 rounded-full border-4 border-white shadow-lg"
                            />
                            
                            <div className="flex-grow mt-28">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h1 className="text-3xl font-bold">Dr. {doctor.nome}</h1>
                                        <p className="text-xl font-bold text-gray-500">{doctor.especialidade}</p>
                                        <p className="text-sm text-gray-500">{doctor.crm}</p>
                                        <div className="font-semibold font-[family-name:arial,sans-serif] text-sm flex items-center gap-2 mt-2 bg-gray-200 py-1 px-3 rounded-xl w-fit">
                                            <FaMapMarkerAlt className="text-gray-500" />
                                            <span>{`${doctor.cidade}, ${doctor.estado}`}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-4">
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <FaStar 
                                                    key={star}
                                                    className={star <= (doctor.nota || 0) ? "text-yellow-400" : "text-gray-300"}
                                                />
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FaEye className="text-gray-400" />
                                            <span>{doctor.visualizacoes} visualizações</span>
                                        </div>
                                        <FaHeart className="text-gray-400 cursor-pointer hover:text-red-500" />
                                    </div>
                                </div>
                                
                                <div className="flex gap-4 mt-4">
                                    {doctor.instagram && (
                                        <a href={doctor.instagram} target="_blank" rel="noopener noreferrer">
                                            <FaInstagram className="text-2xl text-gray-600 hover:text-gray-800" />
                                        </a>
                                    )}
                                    {doctor.facebook && (
                                        <a href={doctor.facebook} target="_blank" rel="noopener noreferrer">
                                            <FaFacebook className="text-2xl text-gray-600 hover:text-gray-800" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        <section className="mt-8">
                            <h2 className="text-3xl font-bold mb-4">Descrição</h2>
                            <p className="text-gray-700">{doctor.descricao}</p>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-3xl font-bold mb-4">Informações gerais</h2>
                            
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-xl mb-2">Patologias</h3>
                                    <p className="text-gray-700">{doctor.patologias?.join(", ")}</p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-xl mb-2">Atendimento</h3>
                                    <p className="text-gray-700">{doctor.atendimentos?.join(", ")}</p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-xl mb-2">Aceita Convênio</h3>
                                    <p className="text-gray-700">{doctor.convenio ? "Sim" : "Não"}</p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-xl mb-2">Retorno e Acompanhamento</h3>
                                    <p className="text-gray-700">{doctor.retorno} meses</p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-xl mb-2">Experiência com prescrição de produtos à base de cannabis</h3>
                                    <p className="text-gray-700">{doctor.experiencia_cannabis}</p>
                                </div>
                            </div>
                        </section>

                        {doctor.formacoes && doctor.formacoes.length > 0 && (
                            <section className="mt-8">
                                <h2 className="text-3xl font-bold mb-4">Formação</h2>
                                <div className="space-y-4">
                                    {doctor.formacoes.map((formacao, index) => (
                                        <div key={index} className="border-l-4 border-lime-500 pl-4"> {/* Fica melhor assim (: */}
                                            <h3 className="font-bold text-xl">{formacao.instituicao}</h3>
                                            <p className="text-gray-700">{formacao.curso}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
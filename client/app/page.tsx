"use client";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Card from "@/components/ui/Card";
import { getDoctors, type Doctor } from "@/services/api";
import { useEffect, useState } from "react";

const fallbackDoctors: Doctor[] = [
    {
        id: 1,
        foto: "https://saude-kayamind-minio.aqrour.easypanel.host/kayadoc/media/medic_photos/bruno.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tEE1iyojY34tOfrnfIPQ%2F20250324%2Fbrazil%2Fs3%2Faws4_request&X-Amz-Date=20250324T043638Z&X-Amz-Expires=588000&X-Amz-SignedHeaders=host&X-Amz-Signature=027b0966c970e66041f903afcf7829e5603defbfc0cb7f5db211900f15c198e8",
        nome: "Bruno Paladini",
        especialidade: "Medicina de Família e Comunidade",
        valor: 850.00,
        tempo: 90
    },
    {
        id: 2,
        foto: "https://saude-kayamind-minio.aqrour.easypanel.host/kayadoc/media/medic_photos/Dra._Isabela_Junqueira.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tEE1iyojY34tOfrnfIPQ%2F20250324%2Fbrazil%2Fs3%2Faws4_request&X-Amz-Date=20250324T043638Z&X-Amz-Expires=588000&X-Amz-SignedHeaders=host&X-Amz-Signature=e4dafbdedbf34e6708a1d58ba35f10ecc2426d89e8f251172d7199df7d828dca",
        nome: "Isabel Junqueira",
        especialidade: "Medicina de Família e Comunidade",
        valor: 539.00,
        tempo: 60
    }
];

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedEspecialidade, setSelectedEspecialidade] = useState("");
    const [orderBy, setOrderBy] = useState("");
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchDoctors = async () => {
        try {
            setLoading(true);
            setError("");
            const response = await getDoctors({
                search: searchTerm,
                especialidade: selectedEspecialidade === "all" ? "" : selectedEspecialidade,
                order_by: orderBy === "lowest_price" ? "valor_asc" : 
                         orderBy === "highest_price" ? "valor_desc" :
                         orderBy === "most_viewed" ? "visualizacoes" : undefined
            });
            setDoctors(response.results);
        } catch (err) {
            console.error(err);
            setError("Erro ao buscar médicos, exibindo dados locais");
            setDoctors(fallbackDoctors);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDoctors();
    }, [searchTerm, selectedEspecialidade, orderBy]);

    return (
        <div>
            <Header />
            <div className="min-h-screen flex flex-col">
                <main>
                    <div className="my-6 mx-12 text-center">
                        <h2 className="mb-4 text-xl font-bold md:text-3xl lg:text-5xl text-lime-800 font-[family-name:var(--font-marvin-visions)]">
                            Encontre seu especialista em cannabis medicinal
                        </h2>
                        <p className="font-semibold mb-7 md:text-2xl">
                            Busque por especialidade, pelo nome do profissional da saúde ou utilize umas das palavras-chave abaixo.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 mb-8">
                            <div>
                                <input type="radio" name="especialidade" id="especialidade-all" value="all" className="hidden peer" onChange={(e) => setSelectedEspecialidade(e.target.value)} />
                                <label htmlFor="especialidade-all" className="px-10 py-1 text-xs font-bold uppercase rounded-lg cursor-pointer bg-lime-200 peer-checked:bg-lime-600 hover:bg-lime-600">TODAS</label>
                            </div>
                            <div>
                                <input type="radio" name="especialidade" id="especialidade-1" value="Clínico Geral" className="hidden peer" onChange={(e) => setSelectedEspecialidade(e.target.value)} />
                                <label htmlFor="especialidade-1" className="px-10 py-1 text-xs font-bold uppercase rounded-lg cursor-pointer bg-lime-200 peer-checked:bg-lime-600 hover:bg-lime-600">Clínico Geral</label>
                            </div>
                            <div>
                                <input type="radio" name="especialidade" id="especialidade-2" value="Medicina Preventiva e Social" className="hidden peer" onChange={(e) => setSelectedEspecialidade(e.target.value)} />
                                <label htmlFor="especialidade-2" className="px-10 py-1 text-xs font-bold uppercase rounded-lg cursor-pointer bg-lime-200 peer-checked:bg-lime-600 hover:bg-lime-600">Medicina Preventiva e Social</label>
                            </div>
                            <div>
                                <input type="radio" name="especialidade" id="especialidade-3" value="MEDICINA DO TRABALHO" className="hidden peer" onChange={(e) => setSelectedEspecialidade(e.target.value)} />
                                <label htmlFor="especialidade-3" className="px-10 py-1 text-xs font-bold uppercase rounded-lg cursor-pointer bg-lime-200 peer-checked:bg-lime-600 hover:bg-lime-600">MEDICINA DO TRABALHO</label>
                            </div>
                            <div>
                                <input type="radio" name="especialidade" id="especialidade-4" value="MEDICINA DE FAMÍLIA E COMUNIDADE - RQE Nº: 21312 " className="hidden peer" onChange={(e) => setSelectedEspecialidade(e.target.value)} />
                                <label htmlFor="especialidade-4" className="px-10 py-1 text-xs font-bold uppercase rounded-lg cursor-pointer bg-lime-200 peer-checked:bg-lime-600 hover:bg-lime-600">MEDICINA DE FAMÍLIA E COMUNIDADE - RQE Nº: 21312 </label>
                            </div>
                            <div>
                                <input type="radio" name="especialidade" id="especialidade-5" value="MEDICINA PREVENTIVA E SOCIAL - RQE Nº: 39217" className="hidden peer" onChange={(e) => setSelectedEspecialidade(e.target.value)} />
                                <label htmlFor="especialidade-5" className="px-10 py-1 text-xs font-bold uppercase rounded-lg cursor-pointer bg-lime-200 peer-checked:bg-lime-600 hover:bg-lime-600">MEDICINA PREVENTIVA E SOCIAL - RQE Nº: 39217</label>
                            </div>
                            <div>
                                <input type="radio" name="especialidade" id="especialidade-6" value="Medicina Integrativa" className="hidden peer" onChange={(e) => setSelectedEspecialidade(e.target.value)} />
                                <label htmlFor="especialidade-6" className="px-10 py-1 text-xs font-bold uppercase rounded-lg cursor-pointer bg-lime-200 peer-checked:bg-lime-600 hover:bg-lime-600">Medicina Integrativa</label>
                            </div>
                            <div>
                                <input type="radio" name="especialidade" id="especialidade-7" value="Pós graduação em Psiquiatria / Medicina Canabinóide." className="hidden peer" onChange={(e) => setSelectedEspecialidade(e.target.value)} />
                                <label htmlFor="especialidade-7" className="px-10 py-1 text-xs font-bold uppercase rounded-lg cursor-pointer bg-lime-200 peer-checked:bg-lime-600 hover:bg-lime-600">Pós graduação em Psiquiatria / Medicina Canabinóide.</label>
                            </div>
                            <div>
                                <input type="radio" name="especialidade" id="especialidade-8" value="Dentista" className="hidden peer" onChange={(e) => setSelectedEspecialidade(e.target.value)} />
                                <label htmlFor="especialidade-8" className="px-10 py-1 text-xs font-bold uppercase rounded-lg cursor-pointer bg-lime-200 peer-checked:bg-lime-600 hover:bg-lime-600">Dentista</label>
                            </div>
                            <div>
                                <input type="radio" name="especialidade" id="especialidade-9" value="MEDICINA DE FAMÍLIA E COMUNIDADE - RQE Nº: 6198 " className="hidden peer" onChange={(e) => setSelectedEspecialidade(e.target.value)} />
                                <label htmlFor="especialidade-9" className="px-10 py-1 text-xs font-bold uppercase rounded-lg cursor-pointer bg-lime-200 peer-checked:bg-lime-600 hover:bg-lime-600">MEDICINA DE FAMÍLIA E COMUNIDADE - RQE Nº: 6198 </label>
                            </div>
                            <div>
                                <input type="radio" name="especialidade" id="especialidade-10" value="Radiologia e diagnóstico por imagem" className="hidden peer" onChange={(e) => setSelectedEspecialidade(e.target.value)} />
                                <label htmlFor="especialidade-10" className="px-10 py-1 text-xs font-bold uppercase rounded-lg cursor-pointer bg-lime-200 peer-checked:bg-lime-600 hover:bg-lime-600">Radiologia e diagnóstico por imagem</label>
                            </div>
                            <div>
                                <input type="radio" name="especialidade" id="especialidade-11" value="Generalista | Medicina Endocanabinóide" className="hidden peer" onChange={(e) => setSelectedEspecialidade(e.target.value)} />
                                <label htmlFor="especialidade-11" className="px-10 py-1 text-xs font-bold uppercase rounded-lg cursor-pointer bg-lime-200 peer-checked:bg-lime-600 hover:bg-lime-600">Generalista | Medicina Endocanabinóide</label>
                            </div>
                            <div>
                                <input type="radio" name="especialidade" id="especialidade-12" value="Medicina Funcional Integrativa " className="hidden peer" onChange={(e) => setSelectedEspecialidade(e.target.value)} />
                                <label htmlFor="especialidade-12" className="px-10 py-1 text-xs font-bold uppercase rounded-lg cursor-pointer bg-lime-200 peer-checked:bg-lime-600 hover:bg-lime-600">Medicina Funcional Integrativa </label>
                            </div>
                            <div>
                                <input type="radio" name="especialidade" id="especialidade-13" value="None" className="hidden peer" onChange={(e) => setSelectedEspecialidade(e.target.value)} />
                                <label htmlFor="especialidade-13" className="px-10 py-1 text-xs font-bold uppercase rounded-lg cursor-pointer bg-lime-200 peer-checked:bg-lime-600 hover:bg-lime-600">None</label>
                            </div>
                            <div>
                                <input type="radio" name="especialidade" id="especialidade-14" value="Medicina de Família e Comunidade" className="hidden peer" onChange={(e) => setSelectedEspecialidade(e.target.value)} />
                                <label htmlFor="especialidade-14" className="px-10 py-1 text-xs font-bold uppercase rounded-lg cursor-pointer bg-lime-200 peer-checked:bg-lime-600 hover:bg-lime-600">Medicina de Família e Comunidade</label>
                            </div>
                        </div>
                        <input
                            type="text" 
                            id="search" 
                            name="search" 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="block w-full text-sm text-gray-900 bg-gray-100 border-0 rounded-lg shadow-lg md:py-5 md:px-12 md:rounded-full ps-10 focus:ring-blue-500 focus:border-blue-500" 
                        />
                    </div>
                    <div className="my-3 mx-12">
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Filtros
                            </h3>
                            <div className="flex gap-5 mt-2">
                                <div>
                                    <input type="radio" name="order_by" id="filtro-lowest-price" value="lowest_price" className="hidden peer" onChange={(e) => setOrderBy(e.target.value)} />
                                    <label htmlFor="filtro-lowest-price" className="block px-4 py-[6px] text-xs font-bold text-gray-500 bg-gray-300 cursor-pointer rounded-xl peer-checked:text-lime-800 peer-checked:bg-lime-200">MENOR VALOR</label>
                                </div>
                                <div>
                                    <input type="radio" name="order_by" id="filtro-highest-price" value="highest_price" className="hidden peer" onChange={(e) => setOrderBy(e.target.value)} />
                                    <label htmlFor="filtro-highest-price" className="block px-4 py-[6px] text-xs font-bold text-gray-500 bg-gray-300 cursor-pointer rounded-xl peer-checked:text-lime-800 peer-checked:bg-lime-200">MAIOR VALOR</label>
                                </div>
                                <div>
                                    <input type="radio" name="order_by" id="filtro-most_viewed" value="most_viewed" className="hidden peer" onChange={(e) => setOrderBy(e.target.value)} />
                                    <label htmlFor="filtro-most_viewed" className="block px-4 py-[6px] text-xs font-bold text-gray-500 bg-gray-300 cursor-pointer rounded-xl peer-checked:text-lime-800 peer-checked:bg-lime-200">VISUALIZAÇÕES</label>
                                </div>
                            </div>
                        </div>
                        {error && (
                            <p className="text-red-500 mb-4">{error}</p>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-6">
                            {loading ? (
                                <p>Carregando...</p>
                            ) : doctors.length === 0 ? (
                                <p>Nenhum médico encontrado.</p>
                            ) : (
                                doctors.map((doctor) => (
                                    <Card
                                        key={doctor.id}
                                        foto={doctor.foto}
                                        nome={doctor.nome}
                                        especialidade={doctor.especialidade}
                                        valor={doctor.valor}
                                        tempo={doctor.tempo}
                                        onSchedule={() => {}}
                                        onSeeMore={() => {}}
                                    />
                                ))
                            )}
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
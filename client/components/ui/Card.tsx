interface CardProps {
	foto: string;
	nome: string;
	especialidade: string;
	valor: number;
	tempo: number;
	onSchedule: () => void;
	onSeeMore: () => void;
}

const Card: React.FC<CardProps> = ({
	foto,
	nome,
	especialidade,
	valor,
	tempo,
	onSchedule,
	onSeeMore,
}) => {
	return (
	<div className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white">
		<div className="relative w-full pb-[100%]">
		<img
			src={foto}
			alt="Foto do profissional"
			className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
		/>
		</div>
		<div className="p-4">
		<h3 className="text-xl font-semibold text-gray-800">{nome}</h3>
		<p className="text-gray-600 italic">{especialidade}</p>
		<div className="mt-2 mb-4 font-bold">
			<span className="text-lg">
			R$ {valor.toFixed(2).replace('.', ',')}
			</span>
			<span className="text-gray-600 ml-2">{tempo} min</span>
		</div>

		<div className="space-y-2">
			<button
			onClick={onSchedule}
			className="w-full py-3 bg-[#6B8E4E] hover:bg-[#5d7a44] text-white font-bold rounded-md transition-colors"
			>
			AGENDAR CONSULTA
			</button>
			<button
			onClick={onSeeMore}
			className="w-full py-2 text-gray-600 hover:text-gray-800 font-bold transition-colors"
			>
			VER MAIS
			</button>
		</div>
		</div>
	</div>
	);
};

export default Card;
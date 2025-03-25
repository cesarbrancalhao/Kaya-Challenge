const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export interface Doctor {
    id: number;
    foto: string;
    nome: string;
    valor: number;
    tempo: number;
    especialidade: string;
    crm?: string;
    cidade?: string;
    estado?: string;
    visualizacoes?: number;
    nota?: number;
    instagram?: string;
    facebook?: string;
    descricao?: string;
    patologias?: string[];
    atendimentos?: string[];
    convenio?: boolean;
    retorno?: number;
    experiencia_cannabis?: string;
    formacoes?: Formation[];
}

export interface Formation {
    instituicao: string;
    curso: string;
}

export interface DoctorResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Doctor[];
}

export const getDoctors = async (params: {
    search?: string;
    especialidade?: string;
    order_by?: string;
}): Promise<DoctorResponse> => {
    const queryParams = new URLSearchParams();
    if (params.search) queryParams.append('search', params.search);
    if (params.especialidade) queryParams.append('especialidade', params.especialidade);
    if (params.order_by) queryParams.append('order_by', params.order_by);

    const response = await fetch(`${API_URL}/doctor/?${queryParams}`);
    if (!response.ok) throw new Error('Failed to fetch doctors');
    return response.json();
};

export const getDoctor = async (id: number): Promise<Doctor> => {
    const response = await fetch(`${API_URL}/doctor/${id}/`);
    if (!response.ok) throw new Error('Failed to fetch doctor');
    return response.json();
}
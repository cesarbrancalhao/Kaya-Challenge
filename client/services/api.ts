const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export interface Doctor {
    id: number;
    foto: string;
    nome: string;
    especialidade: string;
    valor: number;
    tempo: number;
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

    const response = await fetch(`${API_URL}/api/doctors/?${queryParams}`);
    if (!response.ok) throw new Error('Failed to fetch doctors');
    return response.json();
};
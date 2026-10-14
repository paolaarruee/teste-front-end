import type { Product } from "../models/Products";


const API_URL = '/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';
export async function getProducts(): Promise<Product[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error('Erro ao buscar produtos.');
    }

    const data = await response.json();

    if (!data.success || !Array.isArray(data.products)) {
        throw new Error('Resposta inválida da API.');
    }

    return data.products as Product[];
}
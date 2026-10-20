// apiService.ts - Módulo de integração com o BD NoSQL
const BASE_URL = "https://Technoworks.com.br/apidoc";

export interface ItemApi {
  id?: string;
  titulo: string;
  descricao: string;
  preco: number;
}

export const TechnoworksService = {
  // 1. Função API (Itens: titulo, descricao, preco)
  async getItensApi(): Promise<ItemApi[]> {
    const response = await fetch(`${BASE_URL}/api`);
    return response.json();
  },

  async criarItemApi(item: ItemApi): Promise<any> {
    const response = await fetch(`${BASE_URL}/api`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    return response.json();
  },

  // 2. Função REST (Coleção livre)
  async getColecaoLivre(colecao: string): Promise<any> {
    const response = await fetch(`${BASE_URL}/rest/${colecao}`);
    return response.json();
  },

  async salvarColecaoLivre(colecao: string, data: any): Promise<any> {
    const response = await fetch(`${BASE_URL}/rest/${colecao}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  // 3. Função Easy (Somente GET)
  async getDataEasy(endpoint: string): Promise<any> {
    const response = await fetch(`${BASE_URL}/Easy/${endpoint}`);
    return response.json();
  }
};
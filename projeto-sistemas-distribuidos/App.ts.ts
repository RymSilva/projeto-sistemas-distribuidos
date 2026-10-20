import React, { useEffect, useState } from "react";
import { TechnoworksService, ItemApi } from "./apiService";

export default function App() {
  const [itens, setItens] = useState<ItemApi[]>([]);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState<number | "">("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = async () => {
    try {
      const dados = await TechnoworksService.getItensApi();
      if (Array.isArray(dados)) {
        setItens(dados);
      }
    } catch (error) {
      console.error("Erro ao carregar itens:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!titulo || !descricao || preco === "") return;
    
    setLoading(true);
    try {
      await TechnoworksService.criarItemApi({
        titulo,
        descricao,
        preco: Number(preco)
      });
      setTitulo("");
      setDescricao("");
      setPreco("");
      carregarDados();
    } catch (error) {
      console.error("Erro ao salvar:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Sistemas Distribuídos - Technoworks API</h1>
      <p>Cliente Web Service consumindo banco NoSQL REST (JSON).</p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "30px" }}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
          style={{ padding: "8px" }}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
          style={{ padding: "8px" }}
        />
        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value === "" ? "" : Number(e.target.value))}
          required
          style={{ padding: "8px" }}
        />
        <button type="submit" disabled={loading} style={{ padding: "10px", cursor: "pointer" }}>
          {loading ? "Enviando..." : "Cadastrar Item"}
        </button>
      </form>

      <h2>Itens Cadastrados</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {itens.map((item, index) => (
          <li key={item.id || index} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
            <strong>{item.titulo}</strong> - R$ {item.preco}<br />
            <small>{item.descricao}</small><br />
            <small style={{ color: "#666" }}>ID: {item.id || "Não informado"}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
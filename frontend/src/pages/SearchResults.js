// src/pages/SearchResults.js
import React, { useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { SEARCH_INDEX } from "@/data/searchIndex";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

function norm(s) {
  return (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export default function SearchResults() {
  const q = useQuery().get("q") || "";
  const nq = norm(q);

  const results = useMemo(() => {
    if (!nq) return [];
    return SEARCH_INDEX.filter((item) => {
      const hay = `${item.title} ${item.keywords?.join(" ")} ${item.content}`;
      return norm(hay).includes(nq);
    });
  }, [nq]);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Resultados da busca</h1>
      <p className="text-muted-foreground mb-8">
        {q ? <>Você pesquisou por <span className="font-medium">“{q}”</span>.</> : "Digite algo no campo de busca no topo do site."}
      </p>

      {q && results.length === 0 && (
        <div className="rounded-xl border border-white/10 p-6 mb-8">
          <p className="mb-2">Nenhum resultado encontrado.</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            <li>Tente palavras-chave diferentes ou mais curtas.</li>
            <li>Você quis dizer <Link to="/contato" className="underline">Contato</Link>?</li>
            <li>Veja também a página de <Link to="/servicos" className="underline">Serviços</Link>.</li>
          </ul>
        </div>
      )}

      <ul className="space-y-4">
        {results.map((r, i) => (
          <li key={i} className="rounded-xl border border-white/10 p-5 hover:bg-white/5 transition">
            <Link to={r.url} className="text-lg font-semibold hover:underline">
              {r.title}
            </Link>
            <p className="text-sm text-muted-foreground mt-1">{r.content}</p>
            <div className="mt-2 text-xs opacity-60">
              {r.keywords?.slice(0, 6).map((k) => (
                <span key={k} className="mr-2">#{k}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

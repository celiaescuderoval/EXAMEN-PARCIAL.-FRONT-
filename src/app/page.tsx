"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CocktailCard from "./components/Cocktail";
import { searchCocktailsByName, getRandomCocktail } from "./lib/api/cocktail";
import type { Cocktail } from "./types";

const Home = () => {
  const [search, setSearch] = useState("");
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const router = useRouter();

  const handleSearch = async () => {
    const data = await searchCocktailsByName(search);
    setCocktails(data);
  };

  const handleRandom = async () => {
    const cocktail = await getRandomCocktail();

    if (cocktail) {
      router.push(`/${cocktail.idDrink}`);
    }
  };

  return (
    <main className="main">
      <h1>Buscador de Cocktails</h1>

      <div className="searchBox">
        <input
          type="text"
          placeholder="Buscar cocktail..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={handleSearch}>Buscar</button>
        <button onClick={handleRandom}>Dime algo bonito</button>
      </div>

      <div className="container">
        {cocktails.map((cocktail) => (
          <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
        ))}
      </div>
    </main>
  );
};

export default Home;
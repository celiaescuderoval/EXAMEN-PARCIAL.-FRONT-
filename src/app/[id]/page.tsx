"use client";

import { getCocktailById } from "../lib/api/cocktail";
import type { Cocktail } from "../types";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CocktailDetail = () => {
  const { id } = useParams();
  const router = useRouter();
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);

  useEffect(() => {
    if (id) {
      getCocktailById(id as string).then((res) => {
        setCocktail(res);
      });
    }
  }, [id]);

  const ingredients = cocktail
    ? [
        cocktail.strIngredient1,
        cocktail.strIngredient2,
        cocktail.strIngredient3,
        cocktail.strIngredient4,
        cocktail.strIngredient5,
        cocktail.strIngredient6,
        cocktail.strIngredient7,
        cocktail.strIngredient8,
        cocktail.strIngredient9,
        cocktail.strIngredient10,
        cocktail.strIngredient11,
        cocktail.strIngredient12,
        cocktail.strIngredient13,
        cocktail.strIngredient14,
        cocktail.strIngredient15,
      ].filter(Boolean)
    : [];

  return (
    <div className="detail">
      {cocktail && (
        <>
          <h1>{cocktail.strDrink}</h1>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} width={300} />
          <p><strong>Categoría:</strong> {cocktail.strCategory}</p>
          <p><strong>Alcohol:</strong> {cocktail.strAlcoholic}</p>
          <p><strong>Vaso:</strong> {cocktail.strGlass}</p>
          <p><strong>Instrucciones:</strong> {cocktail.strInstructions}</p>

          <h2>INGREDIENTES</h2>
          <ul>
            {ingredients.map((ingredient, index) => (
                <p key={index}>{ingredient}</p>
            ))}
          </ul>
        </>
      )}

      <button className="backButton" onClick={() => router.back()}>
        Volver
      </button>
    </div>
  );
};

export default CocktailDetail;
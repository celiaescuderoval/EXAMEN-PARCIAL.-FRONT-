import { api } from "./axios";
import type { Cocktail } from "../../types";

export const searchCocktailsByName = async (name: string) => {
    const response = await api.get<{ drinks: Cocktail[] | null }>(`/search.php?s=${name}`);
    return response.data.drinks || [];
};

export const getCocktailById = async (id: string) => {
    const response = await api.get<{ drinks: Cocktail[] }>(`/lookup.php?i=${id}`);
    return response.data.drinks?.[0] || null;
};

export const getRandomCocktail = async () => {
    const response = await api.get<{ drinks: Cocktail[] }>("/random.php");
    return response.data.drinks?.[0] || null;
};
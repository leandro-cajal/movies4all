import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (type, filters = {}) => {
    try{
        const response = await axios.get(`${BASE_URL}/movie/${type}`,{
            params:{
                api_key: API_KEY,
                language: "en-EN",
                ...filters, // Sirve para agregar filtros adicionales como la pagina o el idioma
            },
        });
        return response.data.results; // Devuelve la lista de peliculas
    }catch (error){
        console.error(`Error fetching ${type} movies:`, error);
        throw error;
    }   
};

// 🔹 Nueva función para buscar películas por nombre
export const searchMovies = async (query) => {
    if (!query) return []; // Si no hay query, devuelve un array vacío

    try {
        const response = await axios.get(`${BASE_URL}/search/movie`, {
            params: {
                api_key: API_KEY,
                language: "en-EN",
                query, // El texto que ingresa el usuario
            },
        });
        return response.data.results; // Devuelve la lista de resultados de la búsqueda
    } catch (error) {
        console.error("Error searching movies:", error);
        throw error;
    }
};
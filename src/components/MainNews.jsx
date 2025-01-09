import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // O process.env.REACT_APP_TMDB_API_KEY según tu entorno
const BASE_URL = 'https://api.themoviedb.org/3';

const MainNews = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {


        const fetchMovies = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/movie/now_playing`, {
                    params: {
                        api_key: API_KEY,
                        language: 'es-ES',
                        page: 1,
                    },
                });
                setMovies(response.data.results);
            } catch (error) {
                console.error('Error al obtener las películas:', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className='max-w-7xl mx-auto py-8'>
            <h1 className="text-xl font-bold mb-4">Películas Nuevas</h1>
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {movies.slice(0, 4).map((movie) => (
                    <li key={movie.id} className="border rounded shadow p-2">
                        <div className='relative group cursor-pointer'>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="w-full h-auto rounded"
                            />
                            <div className='absolute font-semibold top-0 text-yellow-400 bg-black/50 rounded pr-2 transition w-full h-full group-hover:opacity-100 opacity-0'>
                                <h2 className="text-lg text-right font-semibold mt-2">{movie.title}</h2>
                                <p className=" text-yellow-400 text-right">{movie.release_date.substring(0, 4)}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MainNews;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { fetchMovies } from '../api/api';


const MainNews = () => {
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState('now_playing'); // Estado para cambiar entre tipos de listas

  useEffect(() =>{
    const getMovies = async () =>{
        try{
            const moviesList = await fetchMovies(type, { page: 2 });
            setMovies(moviesList)
        }catch(error){
            console.error("Error fetching movies", error)
        }
    }
    getMovies();
  },[type]); // Se ejecuta cuando cambia el tipo de lista

  return (
    <div className="max-w-7xl mx-auto py-8 px-3">
      {/* Botones para cambiar entre listas */}
      <div className="mb-4 flex justify-center md:justify-start gap-4">
        <button
          onClick={() => setType('now_playing')}
          className={`px-4 py-2 rounded ${
            type === 'now_playing' ? 'bg-yellow-400' : 'bg-gray-200'
          }`}
        >
          Now Playing
        </button>
        <button
          onClick={() => setType('popular')}
          className={`px-4 py-2 rounded ${
            type === 'popular' ? 'bg-yellow-400' : 'bg-gray-200'
          }`}
        >
          Popular
        </button>
        <button
          onClick={() => setType('top_rated')}
          className={`px-4 py-2 rounded ${
            type === 'top_rated' ? 'bg-yellow-400' : 'bg-gray-200'
          }`}
        >
          Top Rated
        </button>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="relative group cursor-pointer h-full">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full rounded"
              />
              <div className="absolute font-semibold top-0 text-yellow-400 bg-black/50 rounded pr-2 transition w-full h-full group-hover:opacity-100 opacity-0">
                <h2 className="text-lg text-right font-semibold mt-2">
                  {movie.title}
                </h2>
                <p className="text-yellow-400 text-right">
                  {movie.release_date.substring(0, 4)}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainNews;
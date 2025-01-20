import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { searchMovies } from '../api/api';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);

  // 🔹 Función para manejar el cambio en el input
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // 🔹 Función para buscar películas
  const handleSearch = async () => {
    if (searchInput.trim() === "") {
      setMovies([]); // Limpia la lista si el input está vacío
      return;
    }

    try {
      const results = await searchMovies(searchInput);
      setMovies(results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleKeyDown = (e) =>{
    if(e.key === "Enter"){
      e.preventDefault();
      handleSearch();
    }
  }

  const HandleClick = () => {
    setSearchInput(!searchInput)
  }

  // 🔹 Ejecutar la búsqueda cuando searchInput cambie
  useEffect(() => {
    handleSearch();
  }, [searchInput]);

  return (
    <div className='flex flex-col items-center gap-4 relative'>
      <div className='flex items-center gap-2'>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input 
            className='bg-white/30 rounded p-1 outline-none placeholder:text-white/50' 
            placeholder='Search for a movie ...' 
            type="text"
            value={searchInput}
            onChange={handleInputChange} 
            onKeyDown={handleKeyDown} 
          />
        </form>
        <div 
          className='cursor-pointer transition hover:text-yellow-400' 
          onClick={handleSearch} 
        >
          <FaSearch className='text-xl' />
        </div>
      </div>

      {/* 🔹 Lista de películas encontradas */}
      {movies.length > 0 && (
        <ul className="bg-yellow-400 text-black rounded w-full max-w-md top-10 absolute z-40 max-h-96 overflow-y-auto">
          {movies.map((movie) => (
            <li key={movie.id} className="p-4 border-b cursor-pointer hover:bg-black hover:text-yellow-400 transition border-gray-600 last:border-none">
              {movie.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default SearchBar
import React, { useEffect, useState } from 'react'
import Films from './Films'
import Search from './Search'

const Main = () => {

  //pirmas state saugoja paieskos zodi
  const [searchValue, setSearch] = useState('');
  //antras state saugoja gautus duomenis is api
  const [films, SetFilms] = useState('');

//funkcija, kuri uzsetina paieskos zodi i Main state
const setSearchValue = (val) =>{
  //state update method
  setSearch(val);
}

const getFilms = async (searchValue) => {
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`
        const response = await fetch(url)
        const responseJson = await response.json();
        SetFilms(responseJson);
        console.log(films);
}
//useEfefect atsakingas uz metodo getFilms iskvietima
//tikrina, ar pasikeite state reiksme -> searchValue
//jei pasikeite runina viduje aprasyta metoda -> getFilms

  useEffect(()=>{
    getFilms(searchValue);
  }, [searchValue])

 
    return (
    <div>
        <h1>Movies App</h1>
        <Search setSearchValue={setSearchValue}/>
        {films.Response === "True" ?<Films films={films}/> : ''}
    </div>
  )
 
  
}

export default Main
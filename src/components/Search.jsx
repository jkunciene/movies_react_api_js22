import React, { useState } from 'react'

const Search = ({setSearchValue}) => {
    const [movieTitle, setMovieTitle] = useState('');

    //sitoje vietoje apsirasyti funkcija
    const handleSubmit = (e) => {
        e.preventDefault();

        if(movieTitle===""){
            alert("iveskite filmo pavadinima...")
        } else{
            setSearchValue(movieTitle);
            setMovieTitle('');
        }
        
    }
  return (
    <div className='container'>
            <h2 className='row justify-content-center'>Find your movie</h2>
            <form className='row  justify-content-center' onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Write movie title"
                        onChange={(e)=>setMovieTitle(e.target.value)}
                        value={movieTitle}/>
                </div>
            </form>
        </div>
  )
}

export default Search
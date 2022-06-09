import React from 'react'

const Search = () => {
  return (
    <div className='container'>
            <h2 className='row justify-content-center'>Find your movie</h2>
            <form className='row  justify-content-center'>
                <div className="form-group">
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Write movie title"/>
                </div>
            </form>
        </div>
  )
}

export default Search
import React from 'react'
import Films from './Films'
import Search from './Search'

const Main = () => {
    //tevinis komponentas, kuriame gausiu duomenis is api
    //kuris tures du child components: search, card

  return (
    <div>
        <h1>Movies App</h1>
        <Search/>
        <Films/>
    </div>
  )
}

export default Main
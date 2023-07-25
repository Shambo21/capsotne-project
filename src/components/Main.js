
import {Routes, Route} from 'react-router-dom'

import Hero from './Hero'

const Main =() => {

    return (
        <Routes>
          <Route path='/' element={ <Hero />}></Route>
        </Routes>
    )
}

export default Main;
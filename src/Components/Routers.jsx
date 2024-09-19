import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HeroPage from './HeroPage'

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path='/' Component={HeroPage}/>

      </Routes>
    </div>
  )
}

export default Routers

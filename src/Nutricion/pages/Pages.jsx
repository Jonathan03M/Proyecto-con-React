import React from 'react'
import Home from './Home'
import { Route, Routes, useLocation} from 'react-router-dom'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipes from './Recipes'
import {AnimatePresence} from 'framer-motion'

function Pages() {

  const location = useLocation()

  return (
    <AnimatePresence mode='wait'>
    <Routes location={location} key={location.pathname}>
      <Route path="/hoome" element={ <Home/>}/>
      <Route path="/cuisine/:type" element={ <Cuisine/>}/>
      <Route path="/nutricion/searched/:search" element={ <Searched/>}/>
      <Route path="/recipes/:name" element={ <Recipes/>}/>
    </Routes>
    </AnimatePresence>
  
  )
}

export default Pages
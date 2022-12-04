import React from 'react'
import Pages from './pages/Pages'
import './Nutricion.css'
import Category from './components/Category'
import Search from './components/Search'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


function Nutricion() {
  return (

   


    <div className='container'>
     
        <Nav>
          <Logo to={'/'}/>
        </Nav>
        <Search/>
        <Category/>
         <Pages/>
     
     </div>

   
      
       
   
  )
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
`

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`

export default Nutricion





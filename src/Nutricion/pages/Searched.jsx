import React from 'react'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function Searched() {

  const [searchedRecipes, setSearchedRecipes] = useState([])
  let params = useParams()

  const getSearched = async (name) => {
    const data = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=af7aa847d5574eb5993d2acd30919a20&cuisine=${name}`)
    const recipes = await data.json()
    setSearchedRecipes(recipes.results)

}

useEffect(() => {
  getSearched(params.search)
},[params.search])

  return (
    <Grid>
      {searchedRecipes.map((item) => {
        return(
          <Tarjet key={item.id}>
            <Link to={'/nutricion/recipes/' + item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
            </Link>
          </Tarjet>
        )
      })}
    </Grid>
  )
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-grap: 3rem;
`

const Tarjet = styled.div`
img{
    width: 100%;
    border-radius: 2rem;
};
a {
    text-decoration: none;
};
h4 {
    text-align: center;
    padding: 1rem;
};
`

export default Searched
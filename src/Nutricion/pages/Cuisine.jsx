import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Link, useParams} from 'react-router-dom'


function Cuisine() {

    const [cuisine, setCuisine] = useState([])
    let params = useParams()

    const getCuisine = async (name) => {
        const data = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=af7aa847d5574eb5993d2acd30919a20&cuisine=${name}`)
        const recipes = await data.json()
        setCuisine(recipes.results)

    }

    useEffect(() => {
        getCuisine(params.type)
    }, [params.type])

  return (
    <Grid animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}>
        {cuisine.map((item) => {
            return(
                <Tarjet key={item.id}>
                <Link to={'/nutricion/recipes/' + item.id}>
                    <img src={item.image} />
                    <h4>{item.title}</h4>
                    </Link>
                </Tarjet>
            )
        })}
    </Grid>
  )
}

const Grid = styled(motion.div)`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-grap: 3rem;
`

const Tarjet = styled.div`
img{
    width: 100%;
    border-radius: 2rem;
}
a {
    text-decoration: none;
}
h4 {
    text-align: center;
    padding: 1rem;
}
`

export default Cuisine
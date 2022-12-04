import {useEffect, useState} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

function Recipes() {

    let params = useParams()
    const [details, setDetails] = useState({})
    const [activeTab, setActiveTab] = useState('instructions')

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=af7aa847d5574eb5993d2acd30919a20`)
        const detailData = await data.json()
        setDetails(detailData)
    }

    useEffect(() => {
        fetchDetails()
    },[params.name])

  return (
    <DetailWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt="" />
        </div>
        <Info>
            <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instrucciones</Button>
            <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredientes</Button>
           {activeTab === 'instructions' && (
                <div>
                <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
              </div>
           )}
           {activeTab === 'ingredients' && (
                <ul>
                {details.extendedIngredients.map((ingredient) => 
                <li key={ingredient.id}>{ingredient.original}</li>
                )}
                </ul>
           )}
         
        </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
    margin-top: 8rem;
    margin-bottom: 5rem;
    display: flex;
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }

    h2 {
        margin-bottom: 2rem;
    }
    h3 {
      font-size: 20px;
        line-height: 20px;
        margin-bottom: 1rem;
    }
    li {
        font-size: 20px;
        line-height: 2.5rem;
    }
    ul {
        margin-top: 2rem
    }
`

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;

`

const Info = styled.div`
    font-size: 20px;
    margin-left: 5rem;
`

export default Recipes
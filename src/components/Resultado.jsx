import React from 'react'
import styled from '@emotion/styled'


const Contenedor = styled.div`
  color: #FFF;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`

const Texto = styled.p`
    font-size: 18px;
  span {
    font-weight: 700;
  }
`


const Precio = styled.p`
font-size: 24px;
  span {
    font-weight: 700;
  }
`

const Imagen = styled.img`
  display: block;
  width: 120px;
`


const Resultados = ({resultado}) => {
  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL} = resultado
  
  return (
    <Contenedor>
        <Imagen 
        src={`https://cryptocompare.com/${IMAGEURL}`} 
        alt='imagen cripto'
        />
        <div>
          <Precio>Current Price: <span>{PRICE}</span></Precio>
          <Texto>Highest Price Today: <span>{HIGHDAY}</span></Texto>
          <Texto>Lowest Price Today: <span>{LOWDAY}</span></Texto>
          <Texto>24h Variation: <span>{CHANGEPCT24HOUR}</span></Texto>
        </div>
    </Contenedor>
  )
}

export default Resultados
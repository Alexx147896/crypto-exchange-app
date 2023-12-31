import {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
import Error from './Error'


const InputSubmit = styled.input`
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  margin-top: 30px;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;

  &:hover {
    background-color: #7A7DFE;
    transition: background-color .3s ease;
  }
`

function Formulario({setMonedas}) {
  
  const [criptos, setCriptos] = useState([])
  const [error, setError] = useState(false)



  const [moneda, SelectMonedas] = useSelectMonedas('Select Currency', monedas)
  const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('Select Crypto', criptos)


  useEffect( () => {
    
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      const arrayCriptos = resultado.Data.map( cripto => {
        
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        }
        
        return objeto

      })

      setCriptos(arrayCriptos)

    }

    consultarAPI()

  }, [])


  const handleSubmit = e => {
    e.preventDefault()


    if([moneda, criptomoneda].includes('')) {
      setError(true)
      return
    }

    setError(false)

    setMonedas({
      moneda,
      criptomoneda
    })

  }
  
  return (
  
    <>
    
    {error && <Error>All Fields Are Required</Error>}

      <form
      onSubmit={handleSubmit}
      >

        <SelectMonedas />
        <SelectCriptomoneda />
        <InputSubmit 
        type='submit' 
        value='Exchange'/>
      </form>

    </>
  )
}

export default Formulario
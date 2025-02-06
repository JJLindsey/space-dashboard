import React from 'react'
import { useContext } from 'react'
import { NasaContext } from '../context/NasaContext'


export default function NeoCard() {
    const {neoData} = useContext(NasaContext)
    if (!neoData) return null

    
  return (
    <div>NeoCard</div>
  )
}


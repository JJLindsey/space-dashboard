import React from 'react'
import { useNasa } from '../context/NasaContext'
import Dashboard from '../components/Dashboard'
import { Container } from '@mui/material'

export default function DashboardView() {
    const {neoData} = useNasa()

  return (
    <Container maxWidth='md' sx={{py: 4}}>
        DashboardView
        <Dashboard data={neoData}/>
    </Container>
  )
}

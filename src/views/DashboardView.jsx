import React from 'react'
import { useNasa } from '../context/NasaContext'
import Dashboard from '../components/Dashboard'
import { Container, Typography } from '@mui/material'

export default function DashboardView() {
    const {neoData} = useNasa()

  return (
    <Container maxWidth='xl' sx={{ px: 8, py: 4 }}>
        <Typography variant='h4' align='center' color='text.secondary'>Near Earth Object Dashboard</Typography>
        <Dashboard data={neoData}/>
    </Container>
  )
}

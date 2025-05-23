import React from 'react'
import { useNasa } from '../context/NasaContext'
import Dashboard from '../components/Dashboard'
import { Container} from '@mui/material'

export default function DashboardView() {
    const {neoData} = useNasa()

  return (
    <Container
      maxWidth='xl'
      sx={{
        px: 8,
        py: 4
      }}
    >
      <Dashboard data={neoData}/>
    </Container>
  )
}

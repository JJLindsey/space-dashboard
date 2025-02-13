import React from 'react'
import GeoRiskMap from './charts/GeoRiskMap'
import Grid from '@mui/material/Grid2'
import { Box, Card } from '@mui/material'
import AsteroidBarChart from './charts/AsteroidBarChart'
import AsteroidLineChart from './charts/AsteroidLineChart'
import OrbitVisual from './charts/OrbitVisual'
import TopStats from './TopStats'

export default function Dashboard({data}) {
  return (
    <>
   <Box>
    <Card>
        <TopStats neoData={data}/>
      </Card>
   </Box>
    <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <GeoRiskMap neoData={data} />
        </Grid>
        <Grid item xs={12} md={6}>
            <OrbitVisual neoData={data}/>
        </Grid>
        <Grid item xs={12} md={12}>
            <AsteroidBarChart neoData={data}/>
        </Grid>
        <Grid item xs={12} md={6}>
            <AsteroidLineChart neoData={data}/>
        </Grid>
    </Grid>
    </>
  )
}

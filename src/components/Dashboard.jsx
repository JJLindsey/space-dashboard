import React from 'react'
import GeoRiskMap from './charts/GeoRiskMap'
import Grid from '@mui/material/Grid2'
import { Box, Typography } from '@mui/material'
import AsteroidBarChart from './charts/AsteroidBarChart'
import AsteroidLineChart from './charts/AsteroidLineChart'
import OrbitVisual from './charts/OrbitVisual'

export default function Dashboard({data}) {
  return (
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
  )
}

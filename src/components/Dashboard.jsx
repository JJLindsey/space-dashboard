import React from 'react'
import GeoRiskMap from './charts/GeoRiskMap'
import Grid from '@mui/material/Grid2'
import { Box, Card, Typography } from '@mui/material'
import AsteroidBarChart from './charts/AsteroidBarChart'
import AsteroidLineChart from './charts/AsteroidLineChart'
import OrbitVisual from './charts/OrbitVisual'
import TopStats from './TopStats'

export default function Dashboard({data}) {
  return (
    <>
   <Box
    sx={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/nasa-Q1p7bh3SHj8-unsplash-earth.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '250px',
      }}
   >
        <Typography variant='h3' align='center' color='#FFF' sx={{pt: '75px'}}>Near Earth Objects </Typography>
   </Box>
    <Card sx={{pb: 4, backgroundColor: 'background.card'}}>
        <TopStats neoData={data} />
    <Grid container spacing={2} sx={{display: 'flex', justifyContent: 'center'}}>
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
    </Card>
    </>
  )
}

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
    role='banner'
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
        <TopStats neoData={data} aria-label='statistics card data for totals' />
    <Grid container spacing={2} sx={{display: 'flex', justifyContent: 'center'}} aria-label='container to render cards for all charts' >
        <Grid item xs={12} md={6}>
            <GeoRiskMap neoData={data} aria-label='Geographic Impact visualization of near earth objects' role='img'/>
        </Grid>
        <Grid item xs={12} md={6}>
            <OrbitVisual neoData={data} aria-label='solar system orbital visualization of objects' role='img'/>
        </Grid>
        <Grid item xs={12} md={12}>
            <AsteroidBarChart neoData={data} aria-label='Bar chart showing asteroid count by size' role='img'/>
        </Grid>
        <Grid item xs={12} md={6}>
            <AsteroidLineChart neoData={data} aria-label='Line chart showing number asteroids near earth' role='img'/>
        </Grid>
    </Grid>
    </Card>
    </>
  )
}

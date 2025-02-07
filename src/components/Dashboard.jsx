import React from 'react'
import GeoRiskMap from './charts/GeoRiskMap'
import Grid from '@mui/material/Grid2'
import { Box } from '@mui/material'
import AsteroidBarChart from './charts/AsteroidBarChart'

export default function Dashboard({data}) {
  return (
    <Grid>
        <Box>
        Dashboard
        </Box>
        <Grid item>
            <GeoRiskMap neoData={data} />
        </Grid>
        <Grid item>
            <AsteroidBarChart neoData={data}/>
        </Grid>
    </Grid>
  )
}

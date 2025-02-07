import React from 'react'
import GeoRiskMap from './charts/GeoRiskMap'
import Grid from '@mui/material/Grid2'
import { Box } from '@mui/material'
import ThemeToggle from './ThemeToggle'

export default function Dashboard({data}) {
  return (
    <Grid>
        <Box>
        Dashboard
            <ThemeToggle />
        </Box>
        <Grid item>
            <GeoRiskMap neoData={data} />
        </Grid>
    </Grid>
  )
}

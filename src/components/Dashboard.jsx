import React from 'react'
import GeoRiskMap from './charts/GeoRiskMap'
import Grid from '@mui/material/Grid2'

export default function Dashboard({data}) {
  return (
    <Grid>
        Dashboard
        <Grid item>
            <GeoRiskMap neoData={data}/>
        </Grid>
    </Grid>
  )
}

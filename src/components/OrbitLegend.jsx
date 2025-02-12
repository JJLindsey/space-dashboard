import React from 'react'
import { Box, Grid2, Typography } from '@mui/material'

export default function OrbitLegend() {
    const legendData = [
        {label: 'Earth', color: 'blue'},
        {label: 'Sun', color: 'yellow'},
        {label: 'Hazardous Object', color: 'red'},
        {label: 'Non-Hazardous Object', color: 'green'},
        {label: 'Orbit Path dashed lines', color: 'blue'}
    ]
  return (
    <Box>
        <Typography>Legend:</Typography>
        <Grid2>
            {legendData.map((legend, index) => (
                <Grid2 key={index} container spacing={1}>
                    <Grid2 item>
                        <Box sx={{width: '10px', height: '10px', backgroundColor: legend.color, borderRadius: '50%'}}></Box>
                    </Grid2>
                    <Grid2 item>
                        <Typography>{legend.label}</Typography>
                    </Grid2>
                </Grid2>
            ))}
        </Grid2>
    </Box>
  )
}

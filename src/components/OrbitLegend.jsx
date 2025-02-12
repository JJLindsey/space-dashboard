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
    <Box sx={{ml: 4}}>
        <Typography sx={{fontWeight: 'bold'}}>Legend:</Typography>
        <Grid2 container spacing={2}>
            {legendData.map((legend, index) => (
                <Grid2 xs={6} item key={index}>
                    <Box display='flex' alignItems='center' gap={1}>
                        <Box sx={{width: '10px', height: '10px', backgroundColor: legend.color, borderRadius: '50%'}}></Box>
                        <Typography>{legend.label}</Typography>
                    </Box>
                </Grid2>
            ))}
        </Grid2>
    </Box>
  )
}

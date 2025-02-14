import React from 'react'
import { Box, Typography } from '@mui/material'

export default function StatisticCard({title, value, color}) {

  return (
   <Box elevation={0}>
        <Typography variant='h5'>{title}</Typography>
        <Typography variant='h4' style={{color}}>{value}</Typography>
   </Box>
  )
}

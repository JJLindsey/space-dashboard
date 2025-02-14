import React from 'react'
import { Box, Typography } from '@mui/material'

export default function StatisticCard({title, value, color}) {

  return (
   <Box elevation={0}>
        <Typography variant='h4'>{title}: {value}</Typography>
   </Box>
  )
}

import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'

export default function StatisticCard({title, value, color}) {

  return (
   <Box elevation={0}>
    {/* <CardContent> */}
        <Typography variant='h5'>{title}</Typography>
        <Typography variant='h4' style={{color}}>{value}</Typography>
    {/* </CardContent> */}
   </Box>
  )
}

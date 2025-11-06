import React from 'react'
import { Box, Typography } from '@mui/material'

export default function StatisticCard({title, value, color}) {

  return (
   <Box elevation={0}>
        <Typography
          variant='h4'
          sx={{
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },           // centered on mobile, left on desktop
            }}
  >
    {title}: {value}</Typography>
   </Box>
  )
}

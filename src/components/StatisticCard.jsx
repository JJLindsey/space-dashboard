import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'

export default function StatisticCard({title, value, color}) {

  return (
   <Card elevation={0}>
    <CardContent>
        <Typography>{title}</Typography>
        <Typography variant='h4' style={{color}}>{value}</Typography>
    </CardContent>
   </Card>
  )
}

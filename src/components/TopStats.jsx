import React from 'react'
import { useNeoStats } from '../hooks/useNeoStats'
import { Grid2 } from '@mui/material'
import StatisticCard from './StatisticCard'


export default function TopStats({ neoData}) {
    const {totalCount, hazardousCount, nonHazardousCount} = useNeoStats(neoData)
  return (
    <Grid2 container spacing={2}>
        <Grid2 item xs={12} md={4}>
            <StatisticCard title='Total NEOs' value={totalCount} color='primary.main'/>
        </Grid2>
        <Grid2 item xs={12} md={4}>
            <StatisticCard title='Hazardous NEOs' value={hazardousCount} color='primary.error'/>
        </Grid2>
        <Grid2 item xs={12} md={4}>
            <StatisticCard title='Nonhazardous NEOs' value={nonHazardousCount}/>
        </Grid2>
    </Grid2>
  )
}

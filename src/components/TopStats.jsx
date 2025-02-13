import React from 'react'
import { useNeoStats } from '../hooks/useNeoStats'
import { Grid2, Typography, TextField } from '@mui/material'
import StatisticCard from './StatisticCard'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { useNasa } from '../context/NasaContext'

import dayjs from 'dayjs'


export default function TopStats({ neoData }) {
    const {totalCount, hazardousCount, nonHazardousCount} = useNeoStats(neoData)
    const {startDate, endDate, setStartDate, setEndDate, fetchNeoData} = useNasa()

    const startDayjs = dayjs(startDate)
    //const endDayjs = dayjs(endDate)

    const handleDateChange = (newValue) => {
        if (!newValue) return
        const newStartDate = newValue.format('YYYY-MM-DD')
        const newEndDate = dayjs(newStartDate).add(7, 'day').format('YYYY-MM-DD')

        setStartDate(newStartDate)
        setEndDate(newEndDate)
        fetchNeoData(newStartDate, newEndDate)
    }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid2 container spacing={1} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h6" fontWeight={'bold'}>
            Current Date Range: {dayjs(startDate).format('MMM DD, YYYY')} to {dayjs(endDate).format('MMM DD, YYYY')}
        </Typography>
        <Grid2 item>
            <Typography>Choose a Different Start Date</Typography>
        <DatePicker
            aria-label='Date picker'
            value={startDayjs}
            onChange={handleDateChange}
            slotProps={{ textField: { InputLabelProps: { shrink: true } } }}
            renderInput={(params) => <TextField {...params} />}
        />
        </Grid2>
        </Grid2>
        <Grid2 container spacing={1} sx={{display: 'flex', justifyContent: 'center'}}>
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
    </LocalizationProvider>
  )
}

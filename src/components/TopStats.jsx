import React from 'react'
import { useNeoStats } from '../hooks/useNeoStats'
import { Grid2, Typography, TextField, Divider } from '@mui/material'
import StatisticCard from './StatisticCard'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { useNasa } from '../context/NasaContext'

import dayjs from 'dayjs'


export default function TopStats({ neoData }) {
    const {totalCount, hazardousCount, nonHazardousCount} = useNeoStats(neoData)
    const {startDate, endDate, setStartDate, setEndDate} = useNasa()

    const startDayjs = dayjs(startDate)

    const handleDateChange = (newValue) => {
        if (!newValue) return
        const newStartDate = newValue.format('YYYY-MM-DD')
        const newEndDate = dayjs(newStartDate).add(7, 'day').format('YYYY-MM-DD')

        setStartDate(newStartDate)
        setEndDate(newEndDate)
        //fetchNeoData(newStartDate, newEndDate)
    }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid2 container spacing={1} sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', mr: 8}}>
          <Typography variant="h6">
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
        <Grid2 sx={{display: 'flex', justifyContent: 'center', pb: 1, pt: 2}}>
        <Typography variant='h4'>Near Earth Object Stats</Typography>
        </Grid2>
        <Grid2 container spacing={1} sx={{display: 'flex', justifyContent: 'space-evenly', pb: 4, pt: 2}}>
        <Grid2 item xs={12} md={4}>
            <StatisticCard title='Total NEOs' value={totalCount} />
        </Grid2>
        <Grid2 item xs={12} md={4}>
            <StatisticCard title='Hazardous NEOs' value={hazardousCount} color='primary.error'/>
        </Grid2>
        <Grid2 item xs={12} md={4}>
            <StatisticCard title='Nonhazardous NEOs' value={nonHazardousCount}/>
        </Grid2>
        </Grid2>
        <Divider variant='middle' sx={{backgroundColor: 'blue', mb: 4 }}/>
    </LocalizationProvider>
  )
}

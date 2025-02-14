import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js'
import { Card, CardContent, useTheme, Typography } from '@mui/material'


ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend)

export default function AsteroidLineChart({ neoData}) {
    const theme = useTheme()

    if (!neoData) return 'no Asteroid Data'

    const asteroidCounts = Object.keys(neoData).map(date => ({
        date,
        count: neoData[date].length
    }))

    const data ={
        labels: asteroidCounts.map( d => d.date),
        datasets: [
            {
                label: 'Asteroids Approaching Earth',
                data: asteroidCounts.map(d => d.count),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.9)',
                fill: true
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: theme.palette.text.primary // Dynamic text color
                }
            },
        },
        scales: {
            x: {
                ticks: {
                    color: theme.palette.text.primary // Dynamic x-axis label color
                },
                grid: {
                    color: theme.palette.mode === 'dark' ? '#444' : '#ddd' // Adjust grid lines
                }
            },
            y: {
                ticks: {
                    color: theme.palette.text.primary // Dynamic y-axis label color
                },
                grid: {
                    color: theme.palette.mode === 'dark' ? '#444' : '#ddd'
                }
            }
        },
    }

  return (
    <Card elevation={8} sx={{ width: '700px', maxWidth: 800}}>
        <CardContent>
            <Typography sx={{pb: 4}}>Number of Asteroids Approaching Earth</Typography>
            <Line data={data} options={options}/>
            <Typography align='center'>Date</Typography>
        </CardContent>
    </Card>
  )
}

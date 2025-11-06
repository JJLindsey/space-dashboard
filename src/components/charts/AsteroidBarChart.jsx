import React from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { Card, CardContent, Typography, useTheme, Box } from '@mui/material'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function AsteroidBarChart( {neoData }) {
    const theme = useTheme()

    if (!neoData) return null

    const largestAsteroids = Object.values(neoData)
        .flat()
        .sort((a, b) => b.estimated_diameter.kilometers.estimated_diameter_max - a.estimated_diameter.kilometers.estimated_diameter_max)
        .slice(0, 5) //top 5

    const data = {
        labels: largestAsteroids.map(neo => neo.name),
        datasets: [
            {
                label: 'Estimated Diameter (km)',
                data: largestAsteroids.map(neo => neo.estimated_diameter.kilometers.estimated_diameter_max),
                backgroundColor: '#cd1c18',
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
                    color: theme.palette.mode === "dark" ? "#444" : "#ddd" // Adjust grid lines
                }
            },
            y: {
                ticks: {
                    color: theme.palette.text.primary // Dynamic y-axis label color
                },
                grid: {
                    color: theme.palette.mode === "dark" ? "#444" : "#ddd"
                }
            }
        },
    }
    return (
        <Card elevation={8} sx={{width: { xs: '100%', sm: '100%', md: '700px' }, height: {xs: '100%'}, margin: 'auto'}}>
            <CardContent aria-label='Asteroid Size Chart Card'>
                <Typography sx={{pb: 4}}>NEO Size</Typography>
                {/* <Box sx={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16 / 9',
                    mb: 2,
                }}
                >
                    <Bar data={data} options={options} aria-label='asteroid bar chart' />
                    <Typography align='center'>Asteroid Name</Typography>
                </Box> */}
                <Bar data={data} options={options} aria-label='asteroid bar chart' />
                <Typography align='center'>Asteroid Name</Typography>
            </CardContent>
        </Card>
    )
}

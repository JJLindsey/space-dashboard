import React from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { Card, CardContent, Typography, useTheme } from '@mui/material'

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
        <Card elevation={8} sx={{width: '700px', maxWidth: 800, margin: 'auto'}}>
            <CardContent>
                <Typography sx={{pb: 4}}>NEO Size</Typography>
                <Bar data={data} options={options}/>
                <Typography align='center'>Asteroid Name</Typography>
            </CardContent>
        </Card>
    )
}

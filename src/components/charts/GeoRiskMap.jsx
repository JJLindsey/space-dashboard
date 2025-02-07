import React, { useEffect, useRef, useState } from 'react'
import { Box, Card, CardContent, Paper, Typography } from '@mui/material'

export default function GeoRiskMap({ neoData}) {
    const canvasRef = useRef(null)
    const [hoveredRegion, setHoveredRegion] = useState(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        const hazardousNeos = Object.values(neoData)
            .flat()
            .filter(neo => neo.is_potentially_hazardous_asteroid)
        
        //calculate risk level
        const regions = Array(18).fill.map(() => Array(36).fill(0))
        hazardousNeos.forEach(neo => {
            const lat = Math.random() * 180 - 90
            const long = Math.random() * 360 - 180
            const latIndex = Math.floor((lat + 90) / 10)
            const longIndex = Math.floor((long + 180) / 10)
            if (regions[latIndex] && regions[latIndex][longIndex] !== undefined) {
                regions[latIndex][longIndex]++
            }
        })
        //draw
        const drawMap = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            regions.forEach((row, latIndex) => {
                row.forEach((risk, longIndex) => {
                    const x = (longIndex * canvas.width) / 36
                    const y = (latIndex * canvas.height) / 18
                    const width = canvas.width / 36
                    const height = canvas.height / 18

                    //calculate heat color
                    const intensity = Math.min(risk / 5, 1)
                    ctx.fillStyle = `rgba(255, 0 ,0 ${intensity * 0.7})`
                    ctx.fillRect(x, y, width, height)

                    //grid lines
                    ctx.strokeStyle = '#fdcf04'
                    ctx.strokeRect(x, y, width, height)
                })
            })
        }
        drawMap()

        const handleMouseOver = (event) => {
            const rect = canvas.getBoundingClientRect()
            const x = event.clientX - rect.left
            const y = event.clientY = rect.top

            const longIndex = Math.floor((x /canvas.width) * 36)
            const latIndex = Math.floor((y / canvas.height) * 18)
            if (regions[latIndex] && regions[latIndex][longIndex] !== undefined) {
                setHoveredRegion({
                    lat: (latIndex * 10) - 90 + 5,
                    long: (longIndex * 10) - 180 +5,
                    risk: regions[latIndex][longIndex]
                })
            }
        }
        canvas.addEventListener('mousemove', handleMouseOver)
        return () => canvas.removeEventListener('mousemove', handleMouseOver)
    }, [neoData])

  return (
    <Card>
        <CardContent>
            <Typography>Geographic Impact Risk</Typography>
            <Box>
                <canvas
                    ref={canvasRef}
                    width={600}
                    height={300}
                    style={{width: '100%', height: 'auto', border: '1px solid #ccc'}}
                />
                {hoveredRegion && (
                    <Paper
                    sx={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        p: 1,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)'
                    }}
                    >
                        <Typography>
                            Latitude: {hoveredRegion.lat.toFixed(1)}&deg <br />
                            Longitude: {hoveredRegion.long.toFixed(1)}&deg <br />
                            Risk Level: {hoveredRegion.risk}
                        </Typography>
                    </Paper>
                )}
            </Box>
            <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
            <Typography variant="body2" sx={{ mr: 1 }}>Risk Level:</Typography>
                <Box
                    sx={{
                    width: 200,
                    height: 20,
                    background: 'linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,0.7))'
                    }}
                />
            <Typography variant="body2" sx={{ ml: 1 }}>High</Typography>
            </Box>
        </CardContent>
    </Card>
  )
}

import React, { useEffect, useRef, useState } from 'react'
import { Card } from '@mui/material'


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

        
    })

  return (
    <div>GeoRiskMap</div>
  )
}

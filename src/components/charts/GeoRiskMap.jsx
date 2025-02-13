import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import * as topojson from 'topojson-client'
import { Box, Card, CardContent, Paper, Typography } from '@mui/material'

export default function GeoRiskMap({ neoData = {}, darkMode}) {
    const svgRef = useRef(null)
    const [worldData, setWorldData] = useState(null)

    useEffect(() => {
        d3.json('/countries-50m.json').then((topology) => {
            const countries = topojson.feature(topology, topology.objects.countries)
            setWorldData(countries)
        })
    }, [])

    useEffect(() => {
        if (! worldData || !neoData) return

        const width = 650
        const height = 550

        const projection = d3.geoMercator()
            .scale(130) //zoom level
            .translate([width / 2, height / 1.5])

        const pathGenerator = d3.geoPath(projection)

        const svg = d3.select(svgRef.current)
            .attr('width', width)
            .attr('height', height)
            //.style('background', darkMode ? '#1e1e1e' : '#eaf9fb')
            .style('background','#d7faff')
            .style('border', '1px solid #ccc')
        
        //clear prev elements
        svg.selectAll('*').remove()

        //draw countries
        svg.selectAll('.country')
            .data(worldData.features)
            .enter()
            .append('path')
            .attr('class', 'country')
            .attr('d', pathGenerator)
            .attr('fill', darkMode ? '#2a2a2a' : '#84b067')
            .attr('stroke', darkMode ? '#444' : '#593c1e');

        //hazardous asteroid data
        const hazardousNeos = Object.values(neoData)
            .flat()
            .filter(neo => neo.is_potentially_hazardous_asteroid)
            .map(neo => {
                const closeApproach = neo.close_approach_data[0]
                if (!closeApproach) return null

                return {
                    lat: (Math.random() * 180 - 90),
                    long: (Math.random() * 360 - 180),
                    distance: parseFloat(closeApproach.miss_distance.kilometers),
                    velocity: parseFloat(closeApproach.relative_velocity.kilometers_per_second),
                    name:neo.name
                }
            })
            .filter(neo => neo !== null)
        const xScale = d3.scaleLinear()
            .domain([-180, 180]) //longitude range
            .range([0, width])
        const yScale = d3.scaleLinear()
            .domain([-90, 90])
            .range([height, 0])
        
        const colorScale = d3.scaleLinear()
            .domain([0, d3.max(hazardousNeos, d => d.velocity)])
            .range(['yellow', 'red'])

        svg.selectAll('circle')
            .data(hazardousNeos)
            .enter()
            .append('circle')
            .attr('cx', d => xScale(d.long))
            .attr('cy', d => yScale(d.lat))
            .attr('r', d => Math.sqrt(d.distance) / 500)
            .attr('fill', d => colorScale(d.velocity))
            .attr('opacity', 0.7)
            .on('mouseover', function (event, d) {
                d3.select(this).attr('stroke', 'black').attr('stroke-width', 2)

                d3.select('#tooltip')
                    .style('left', `${event.pageX + 10}px`)
                    .style('top', `${event.pageY - 30}px`)
                    .style('display', 'block')
                    .html(`
                        <strong>${d.name}</strong><br>
                        Velocity: ${d.velocity.toFixed(2)} km/s<br>
                        Distance: ${d.distance.toFixed(0)} km
                    `)
            })
            .on('mouseout', function () {
                d3.select(this).attr('stroke', 'none')
                d3.select('#tooltip').style('display', 'none')
            })

    }, [worldData, neoData, darkMode])

  return (
    <Card  elevation={8}>
        <CardContent>
            <Typography>Geographic Impact Risk</Typography>
            <Box>
                <svg ref={svgRef}></svg>
            </Box>  
            <Paper
                    id='tooltip'
                    sx={{
                        position: 'absolute',
                        display: 'none',
                        padding: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        border: '1px solid #ccc'
                    }}
                />
            <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Typography variant='body2' sx={{ mr: 1 }}>Risk Level: Low</Typography>
                <Box
                    sx={{
                    width: 200,
                    height: 20,
                    background: 'linear-gradient(to right, rgba(252, 244, 2, 0.77), rgba(255, 0, 0, 0.76))'
                    }}
                />
            <Typography variant='body2' sx={{ ml: 1 }}>High</Typography>
            </Box>
        </CardContent>
    </Card>
  )
}

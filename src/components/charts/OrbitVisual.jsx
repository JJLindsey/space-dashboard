import React, { useEffect, useState, useRef } from 'react'
import { Box, Button, ButtonGroup ,Card, CardActions, CardContent, Slider, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import OrbitLegend from '../OrbitLegend'


export default function OrbitVisual({ neoData = {}}) {
    const [selectedScale, setSelectedScale] = useState('size')
    const [timeScale, setTimeScale] = useState(50)
    const animationRef = useRef(null)
    const [rotation, setRotation] = useState(0)

    const orbits = neoData ? Object.values(neoData).flat().map(neo => ({
        name: neo.name,
        distance: parseFloat(neo.close_approach_data[0].miss_distance.astronomical),
        velocity: parseFloat(neo.close_approach_data[0].relative_velocity.kilometers_per_second),
        isHazardous: neo.is_potentially_hazardous_asteroid,
        diameter: neo.estimated_diameter.kilometers.estimated_diameter_max
    })) : []

    useEffect(() => {
        const animate = () => {
            setRotation(prev => (prev + (timeScale / 500)) %360)
            animationRef.current = requestAnimationFrame(animate)
        }
        animationRef.current = requestAnimationFrame(animate)
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current)
        }
    }, [timeScale])
    // Calculate positions based on rotation
    const calculatePosition = (orbit, index) => {
    const orbitRadius = selectedScale === 'distance' 
      ? 150 + orbit.distance * 50 
      : 150 + orbit.diameter * 200
    
    const angle = ((index * 360 / orbits.length) + rotation) * (Math.PI / 180);
    
    return {
      x: Math.cos(angle) * orbitRadius,
      y: Math.sin(angle) * orbitRadius
    };
  };

  return (
    <Card elevation={8} sx={{border: '1px solid '}}>
        <CardContent>
        <Typography>Solar System Orbital Visualization</Typography>
            <svg viewBox='-250 -250 500 500' style={{width: '100%', height: 'auto', backgroundColor: '#000'}}>
                {/* Sun */}
                <circle cx='0' cy='0' r='20' fill='#f9d71c' />
                {/* Earth Orbit*/}
                <circle cx='0' cy='0' r='150' fill='none' stroke='blue' strokeWidth='2' strokeDasharray='3,4' />
                {/* Earth */}
                <circle cx='150' cy='0' r='10' fill='blue' />
                {/* Asteroids */}
                {orbits.map((orbit, index) => {
                    //const angle = (index * 260 /orbits.length) * (Math.PI / 180)
                    const orbitRadius = selectedScale === 'distance' ? 150 + orbit.distance * 50 : 150 + orbit.diameter * 600
                    const pos = calculatePosition(orbit, index)
                    // const x = Math.cos(angle) * orbitRadius
                    // const y = Math.sin(angle) * orbitRadius

                    return (
                        <g key={orbit.name}>
                            <circle cx='0' cy='0' r={orbitRadius} fill='none' stroke={orbit.isHazardous ? '#ed2100' : '#44ff44'} strokeWidth='0.5' opacity='0.3' />
                            <circle cx={pos.x} cy={pos.y} r={orbit.diameter * 2 + 2} fill={orbit.isHazardous ? '#ff4444' : '#44ff44'}>
                                <title>{`${orbit.name}\nDistance: ${orbit.distance.toFixed(2)} AU\nDiameter: ${orbit.diameter.toFixed(2)} km`}</title>
                            </circle>
                        </g>
                    )
                })}
            </svg>
        </CardContent>
        <CardActions sx={{justifyContent: 'center'}}>
            <ButtonGroup
                value={selectedScale}
                exclusive
                variant='contained'
                size='small'
                onChange={(e, value) => value && setSelectedScale(value)}
            >
                <Button value='size'>Size Scale</Button>
                <Button value='distance'>Distance Scale</Button>
            </ButtonGroup>
        </CardActions>
        <OrbitLegend/> 
        <Box sx={{width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto', flexDirection: 'column'}}>
            <Typography>Animation Speed</Typography>
            <Slider value={timeScale} onChange={(e, value) => setTimeScale(value)} min={0} max={100} aria-label='slider for animation'></Slider>
        </Box>
    </Card>
  )
}

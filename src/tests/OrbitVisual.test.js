import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import OrbitVisual from '../components/charts/OrbitVisual'
import '@testing-library/jest-dom/extend-expect'

describe('OrbitVisual Component', () => {
    const mockNeoData ={
        1: [
            {
            name: 'Asteroid 1',
            close_appproach_data: [
                {
                miss_distance: { astronomical: '0.5'},
                relative_velocity: { kilometers_per_second: '20'}
                }
            ],
            is_potentially_hazardous_asteroid: false,
            estimated_diameter: { kilometers: { estimated_diameter_max: 0.3}}
            }
        ],
        2: [
            {
            name: 'Asteroid 2',
            close_appproach_data: [
                {
                miss_distance: { astronomical: '0.8'},
                relative_velocity: { kilometers_per_second: '25'}
                }
            ],
            is_potentially_hazardous_asteroid: true,
            estimated_diameter: { kilometers: { estimated_diameter_max: 0.5}}
            }
        ]
    }

    test('renders without crashing', () => {
        render(<OrbitVisual neoData={mockNeoData} />)
        expect(screen.getByText('Solar System Orbital Visualization')).toBeInTheDocument()
    })

    test('displays the correct number of asteroids', () => {
        render(<OrbitVisual neoData={mockNeoData} />)

        expect(screen.getByText('Asteroid 1')).toBeInTheDocument()
        expect(screen.getByText('Asteroid 2')).toBeInTheDocument()
    })

    test('changes animation speed when slider moved', () => {
        render(<OrbitVisual neoData={mockNeoData} />)

        const slider = screen.getByRole('slider')
        
        fireEvent.change(slider, { target: { value: 70 }})
    })

})
import React, { createContext, useContext, useEffect, useState} from 'react'

const NasaContext = createContext()

export const useNasa = () => {
    const context = useContext(NasaContext)
    if (!context) {
        throw new Error('useNasa must be used within NasaProvider')
    }
    return context
}

export const NasaProvider = ({children}) => {
    const [neoData, setNeoData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [filteredData, setFilteredData] = useState(null)
    
    const API_KEY = process.env.REACT_APP_NASA_KEY
    const BASE_URL = 'https://api.nasa.gov/neo/rest/v1/feed'

   const fetchNeoData = async (startDate, endDate) => {
    try {
        setLoading(true)
        setError(null)
        const response = await fetch(
            `${BASE_URL}?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`
        )
        if (!response.ok) {
            throw new Error(`NASA API returned ${response.status}`)
        }

        const data = await response.json()
        setNeoData(data.near_earth_objects)
        setFilteredData(data.near_earth_objects)
    } catch (err) {
        setError(err.message)
        console.error('Error fetching NEO data:', err)
    } finally {
        setLoading(false)
    }
   }

    function filterByHazard(isHazardous) {
        if (!neoData) return
        const filtered = Object.fromEntries(
            Object.entries(neoData).map(([date, neos]) => [
                date,
                neos.filter(neo => neo.is_potentially_hazerdous_asteroid === isHazardous)
            ])
        )
        setFilteredData(filtered)
    }

    useEffect(() => {
        const startDate = '2024-01-01'
        const endDate = '2024-01-06'
        fetchNeoData(startDate, endDate)
    }, [])
    
  return (
    <NasaContext.Provider value={{ neoData: filteredData, loading, error, filterByHazard, fetchNeoData}}>
        {children}
    </NasaContext.Provider>
  )
}

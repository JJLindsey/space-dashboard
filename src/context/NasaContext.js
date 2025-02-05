import React, { createContext, useEffect, useState} from 'react'

export const NasaContext = createContext()

export const NasaProvider = ({children}) => {
    const [neoData, setNeoData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [filteredData, setFilteredData] = useState(null)
    const API_KEY = process.env.REACT_APP_NASA_KEY

    useEffect(() => {
        fetch(`https://api.nasa.goc/neo/rest/v1/feed?start_date=2024-02-01&end_date=2025-02-05&api_key=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            setNeoData(data.near_earth_objects)
            setFilteredData(data.near_earth_objects)
            setLoading(false)
        })
        .catch(error => console.error("Error fetching NEO data:", error))
    }, [])

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

  return (
    <NasaContext.Provider value={{ neoData: filteredData, loading, filterByHazard}}>
        {children}
    </NasaContext.Provider>
  )
}

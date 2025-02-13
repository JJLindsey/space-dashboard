import React from 'react'
import { useNeoStats } from '../hooks/useNeoStats'


export default function TopStats({ neoData}) {
    const {totalCount, hazardousCount, nonHazardousCount, closestApproach} = useNeoStats(neoData)
  return (
    <div>TopStats</div>
  )
}

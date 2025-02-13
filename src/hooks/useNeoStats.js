export const useNeoStats = (neoData) => {
    const allNeos = Object.values(neoData).flat()
    const hazardousCount = allNeos.filter(neo => neo.is_potentially_hazardous_asteroid).length

    return {
        totalCount: allNeos.length,
        hazardousCount,
        nonHazardousCount: allNeos.length - hazardousCount,
    }
}
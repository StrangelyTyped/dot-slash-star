import { DEG_RAD, SIMULATION_LENGTH_YEARS, OBSERVER_POSITION, AU_M, SUN_KG, EARTH_KG, EARTH_YEAR_SECONDS, EARTH_DAY_SECONDS, SUN_RADIUS_MULTIPLIER_FACTOR, PLANET_RADIUS_MULTIPLIER_FACTOR } from "./Constants";


// Assume circular orbit - spherical chickens in a vacuum etc
export function calculateOrbitalPhaseAtT(startPhaseDeg, orbitAus, sizeEarths, solarMassSuns, simulationTimePct){
    // T² = 4 * π² * a³ / (G * (M + m))
    const G = 6.674e-11
    const a = orbitAus * AU_M
    const T = Math.sqrt((4 * Math.PI * Math.PI * a * a * a) / (G * (sizeEarths * EARTH_KG + solarMassSuns * SUN_KG)))
    const orbitalPctAtT1 = EARTH_YEAR_SECONDS / T
    const orbitalPctNow = orbitalPctAtT1 * simulationTimePct
    return ((360 * orbitalPctNow) + startPhaseDeg) % 360
}


export function calculateTotalPulsationEffect(pulsations, simulationTimePct){
    let cumulativeEffect = 1;
    const timeDays = simulationTimePct * (EARTH_YEAR_SECONDS / EARTH_DAY_SECONDS)
    pulsations.forEach(pulsation => {
        const phase = (timeDays % pulsation.settings.periodDays) / pulsation.settings.periodDays
        const amplitude = pulsation.settings.magnitudePct * Math.sin(Math.PI * 2 * phase)
        cumulativeEffect += amplitude
    })
    return cumulativeEffect;
}

const BASE_SUN_RADIUS_AU = 0.00465046726;
const BASE_PLANET_RADIUS_AU = 4.25875e-5;
export function calculateBrightnessAtT(simulationTimePct, dataModel){
    const pulsationFactor = calculateTotalPulsationEffect(dataModel.filter(config => config.feature === "pulsation"), simulationTimePct)

    const star = dataModel.filter(config => config.feature === "star")[0]

    let planetFactor = 1
    // I would love for this to work properly, but hack together for demo due to time constraints
    dataModel.filter(config => config.feature === "planet").forEach(planet => {
        // Planetary Occlusion
        // OK lots of comments because math is hard
        // For the moment let's assume the observer is at phase = 90 (because math is hard and I haven't slept enough)

        const starRadius = BASE_SUN_RADIUS_AU * star.settings.starMassSuns * SUN_RADIUS_MULTIPLIER_FACTOR;
        // A1 is the angle between the observer-sun line and the edge of the sun (RADIANS)
        const a1 = Math.abs(Math.atan(starRadius / OBSERVER_POSITION.radiusAu))

        if(planet.orbitAus > OBSERVER_POSITION.radiusAu){
            // Planet circles behind observer
            return;
        }

        const orbitalPhasePlanet = calculateOrbitalPhaseAtT(planet.settings.phaseDeg, planet.settings.orbitAus, planet.settings.sizeEarths, star.settings.starMassSuns, simulationTimePct)

        // Note: phase base = 90
        if(orbitalPhasePlanet > 180){
            // Planet is on far side of sun
            return;
        }
        // Orbital Offset Planet is the angle of the planet relative to the observer-sun line (from the side of the sun)
        const orbitalPhaseOffsetPlanet = (orbitalPhasePlanet + 90) % 360;

        // elevationPlanet - the distance (perpendicular to the observer-sun line) between the line and the planet
        // In theory this can be absolute but in practice we need to potentially stack multiple planets simultaneously
        const elevationPlanetCenter = planet.settings.orbitAus * Math.sin(orbitalPhaseOffsetPlanet * DEG_RAD)
        const planetSizeRadius = (planet.settings.sizeEarths * BASE_PLANET_RADIUS_AU * PLANET_RADIUS_MULTIPLIER_FACTOR);
        const elevationPlanetLeadingEdge = elevationPlanetCenter - planetSizeRadius
        const elevationPlanetTrailingEdge = elevationPlanetCenter + planetSizeRadius

        // Radius projection planet - the distance along the observer-sun line (From the sun) to the elevation
        const radiusProjectionPlanet = Math.abs(planet.settings.orbitAus * Math.cos(orbitalPhaseOffsetPlanet * DEG_RAD))

        // a2 should be the angle between the observer-sun line and the planet (from the OBSERVER side) (RADIANS)
        const a2Leading = Math.atan(elevationPlanetLeadingEdge / (OBSERVER_POSITION.radiusAu - radiusProjectionPlanet))
        const a2Trailing = Math.atan(elevationPlanetTrailingEdge / (OBSERVER_POSITION.radiusAu - radiusProjectionPlanet))
        
        let occlusionPct = 0
        if(a2Leading < -a1 && a2Trailing > a1){
            // Eclipse
            occlusionPct = 1
        } else if (Math.abs(a2Leading) < Math.abs(a1) && Math.abs(a2Trailing) < Math.abs(a1)){
            // Planetary Transit
            occlusionPct = (planetSizeRadius * planetSizeRadius) / (starRadius * starRadius)
        } else if (Math.abs(a2Leading) < Math.abs(a1)){
            // Leading Edge occlusion
            //occlusionPct = ?
        } else if (Math.abs(a2Trailing) < Math.abs(a1)){
            // Trailing edge occlusion
            //occlusionPct = ?
        }


        planetFactor = Math.min(1, planetFactor * (1 - occlusionPct))
    })
    
    return pulsationFactor * planetFactor;
}

export function simulate(simulationResolutionPct, dataModel){
    let data = []
    for(let i = 0; i <= SIMULATION_LENGTH_YEARS; i += simulationResolutionPct){
        data.push({x: i, y: calculateBrightnessAtT(i, dataModel)})
    }
    return data;
}
import { SIMULATION_LENGTH_YEARS, OBSERVER_POSITION } from "./Constants";
const AU_M = 1.496e+11
const SUN_KG = 1.989e30
const EARTH_KG = 5.972e24
const EARTH_YEAR_SECONDS = 31558150; // Math assumes that t=1 is 1 earth year
const EARTH_DAY_SECONDS = 86400;

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
        if(planet.radiusAus > OBSERVER_POSITION.radiusAu){
            // Planet circles behind observer
            return;
        }

        const starRadius = BASE_SUN_RADIUS_AU * star.settings.starMassSuns
        const planetRadius = BASE_PLANET_RADIUS_AU * planet.settings.sizeEarths

        // fovSun - the angle between the observer-sun line and the edge of the sun
        const fovSun = Math.atan(starRadius / OBSERVER_POSITION.radiusAu)
        // Note: phase base = 90
        const orbitalPhasePlanet = calculateOrbitalPhaseAtT(planet.settings.phaseDeg, planet.settings.orbitAus, planet.settings.sizeEarths, star.settings.starMassSuns, simulationTimePct)
        if(orbitalPhasePlanet < 180){
            // Planet is on far side of sun
            //return;
        }
        // Orbital Offset Planet is the angle of the planet relative to the observer-sun line (from the side of the sun)
        const orbitalPhaseOffsetPlanet = (orbitalPhasePlanet - 90) % 360;

        // elevationPlanet - the distance (perpendicular to the observer-sun line) between the line and the planet
        // In theory this can be absolute but in practice we need to potentially stack multiple planets simultaneously
        const elevationPlanet = planet.settings.orbitAus * Math.sin(orbitalPhaseOffsetPlanet)

        // Radius projection planet - the distance along the observer-sun line (From the sun) to the elevation
        const radiusProjectionPlanet = planet.settings.orbitAus * Math.cos(orbitalPhaseOffsetPlanet)

        // Lambda should be the angle between the observer-sun line and the planet (from the OBSERVER side)
        const lambda = Math.abs(Math.atan(elevationPlanet / (OBSERVER_POSITION.radiusAu - radiusProjectionPlanet)))

        // Distance between observer and centre of planet
        const distanceObserverPlanet = elevationPlanet / Math.cos(lambda)

        // A1 is the angle between the observer-sun line and the edge of the sun
        const a1 = Math.abs(Math.atan(starRadius / OBSERVER_POSITION.radiusAu))

        // A2 is the angle between the observer-sun line and the edge of the planet
        const a2 = Math.abs(Math.atan(planetRadius / planet.settings.sizeEarths) + lambda)
        
        if(Math.abs(orbitalPhasePlanet - OBSERVER_POSITION.phaseDeg) < 5){
            planetFactor -= 0.01 * (5 - Math.abs(orbitalPhasePlanet - OBSERVER_POSITION.phaseDeg))
        }

        // Remember to throw a square in here somewhere because inverse square law
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
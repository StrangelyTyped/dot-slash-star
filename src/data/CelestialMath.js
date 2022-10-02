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
export const ANIMATION_RESOLUTION_YEARS=0.001
export const CHART_RESOLUTION_YEARS=0.001
export const SIMULATION_LENGTH_YEARS=1
export const MAX_RADIUS_AU = 2

export const BASE_SUN_RADIUS_AU = 0.00465046726;
export const BASE_PLANET_RADIUS_AU = 4.25875e-5;
export const SUN_RADIUS_MULTIPLIER_FACTOR = 30;
export const PLANET_RADIUS_MULTIPLIER_FACTOR = 300;

export const DEG_RAD = Math.PI / 180;
export const AU_M = 1.496e+11
export const SUN_KG = 1.989e30
export const EARTH_KG = 5.972e24
export const EARTH_YEAR_SECONDS = 31558150; // Math assumes that t=1 is 1 earth year
export const EARTH_DAY_SECONDS = 86400;

export const OBSERVER_POSITION = {
    radiusAu: MAX_RADIUS_AU-0.1,
    phaseDeg: 90
}
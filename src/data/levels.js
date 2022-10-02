const levels = [
    null, // don't start at level 0
    {
        title: "Planetary Occlusion 1",
        summary: "Some summary text here, maybe for a level-select tooltip",
        hints: "there is one planet on this level",
        description: "Long descriptive text that we'll show inside the level, perhaps in a dialog of some kind",
        levelConfig: {
            enabledFeatures: ["planets"],
            goal: [
                {
                    feature: "star",
                    settings: {
                        starMassSuns: 1,
                    }
                },
                {
                    feature: "planet",
                    settings: {
                        orbitAus: 1.2,
                        sizeEarths: 3,
                        phaseDeg: 0,
                    }
                }
            ],
            initialState: [
                {
                    feature: "star",
                    settings: {
                        starMassSuns: 1,
                    }
                },
                {
                    feature: "planet",
                    settings: {
                        orbitAus: 1.1,
                        sizeEarths: 4,
                        phaseDeg: 0,
                    }
                },
                {
                    feature: "planet",
                    settings: {
                        orbitAus: 1.5,
                        sizeEarths: 4,
                        phaseDeg: 0,
                    }
                },
                {
                    feature: "planet",
                    settings: {
                        orbitAus: 0.5,
                        sizeEarths: 1,
                        phaseDeg: 90,
                    }
                },
                {
                    feature: "pulsation",
                    settings: {
                        periodDays: 90,
                        magnitudePct: 0.005
                    }
                }
            ]
        }
    }
];

export default levels;
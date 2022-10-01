const levels = [
    null, // don't start at level 0
    {
        title: "Planetary Occlusion 1",
        summary: "Some summary text here",
        hints: "there is one planet on this level",
        description: "Long descriptive text that we'll show inside the level",
        levelConfig: {
            enabledFeatures: ["planets"],
            goal: [
                {
                    feature: "planet",
                    settings: {
                        orbit: 1234,
                        size: 5678,
                    }
                }
            ],
            initialState: [
                {
                    feature: "star",
                    settings: {
                    }
                },
                {
                    feature: "planet",
                    settings: {
                        orbit: 1.1,
                        size: 4,
                        phase: 0,
                    }
                },
                {
                    feature: "planet",
                    settings: {
                        orbit: 1.5,
                        size: 2,
                        phase: 0,
                    }
                },
                {
                    feature: "pulsation",
                    settings: {
                    frequency: 1234,
                    magnitude: 5678
                    }
                }
            ]
        }
    }
];

export default levels;
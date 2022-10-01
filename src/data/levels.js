const levels = [
    {
        title: "Planetary Occlusion 1",
        summary: "Some summary text here",
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
            ]
        }
    }
];

export default levels;
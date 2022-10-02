const levels = [
    null, // don't start at level 0
    {
        title: "Stellar Pulsations",
        summary: "Matching Intrinsic Stars",
        description: "Pulsating variables are stars whose radius expands and contracts as part of their natural evolutionary ageing processes.",
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
                    feature: "pulsation",
                    settings: {
                        periodDays: 140,
                        magnitudePct: 0.004
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
                    feature: "pulsation",
                    settings: {
                        periodDays: 0,
                        magnitudePct: 0.000
                    }
                }
            ]
        }
    }, 
    {
        title: "Planetary Occlusion",
        summary: "Matching Extrinsic Stars",
        description: "A star being eclipsed, where the changes in brightness are from perspective, are called extrinsic variables. The Keplar telescope uses this to detect exoplanets! ",
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
                },
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
                }
            ]
        }
    },
    {
        title: "Planetary Occlusion",
        summary: "Light curves",
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
                    feature: "pulsation",
                    settings: {
                        periodDays: 140,
                        magnitudePct: 0.004
                    }
                },
                {
                    feature: "planet",
                    settings: {
                        orbitAus: 1.2,
                        sizeEarths: 3,
                        phaseDeg: 0,
                    }
                },
                {
                    feature: "pulsation",
                    settings: {
                        periodDays: 90,
                        magnitudePct: 0.005
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
                    feature: "pulsation",
                    settings: {
                        periodDays: 90,
                        magnitudePct: 0.005
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
                        phaseDeg: 180,
                    }
                }
            ]
        }
    },
    {
        title: "Planetary Occlusion",
        summary: "Light curves",
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
                    feature: "pulsation",
                    settings: {
                        periodDays: 140,
                        magnitudePct: 0.004
                    }
                },
                {
                    feature: "planet",
                    settings: {
                        orbitAus: 1.2,
                        sizeEarths: 3,
                        phaseDeg: 0,
                    }
                },
                {
                    feature: "pulsation",
                    settings: {
                        periodDays: 90,
                        magnitudePct: 0.005
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
                    feature: "pulsation",
                    settings: {
                        periodDays: 90,
                        magnitudePct: 0.005
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
                        phaseDeg: 180,
                    }
                }
            ]
        }
    },
    {
        title: "Planetary Occlusion",
        summary: "Light curves",
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
                    feature: "pulsation",
                    settings: {
                        periodDays: 140,
                        magnitudePct: 0.004
                    }
                },
                {
                    feature: "planet",
                    settings: {
                        orbitAus: 1.2,
                        sizeEarths: 3,
                        phaseDeg: 0,
                    }
                },
                {
                    feature: "pulsation",
                    settings: {
                        periodDays: 90,
                        magnitudePct: 0.005
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
                    feature: "pulsation",
                    settings: {
                        periodDays: 90,
                        magnitudePct: 0.005
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
                        phaseDeg: 180,
                    }
                }
            ]
        }
    },
    {
        title: "Planetary Occlusion",
        summary: "Light curves",
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
                    feature: "pulsation",
                    settings: {
                        periodDays: 140,
                        magnitudePct: 0.004
                    }
                },
                {
                    feature: "planet",
                    settings: {
                        orbitAus: 1.2,
                        sizeEarths: 3,
                        phaseDeg: 0,
                    }
                },
                {
                    feature: "pulsation",
                    settings: {
                        periodDays: 90,
                        magnitudePct: 0.005
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
                    feature: "pulsation",
                    settings: {
                        periodDays: 90,
                        magnitudePct: 0.005
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
                        phaseDeg: 180,
                    }
                }
            ]
        }
    },
    {
        title: "Planetary Occlusion",
        summary: "Light curves",
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
                    feature: "pulsation",
                    settings: {
                        periodDays: 140,
                        magnitudePct: 0.004
                    }
                },
                {
                    feature: "planet",
                    settings: {
                        orbitAus: 1.2,
                        sizeEarths: 3,
                        phaseDeg: 0,
                    }
                },
                {
                    feature: "pulsation",
                    settings: {
                        periodDays: 90,
                        magnitudePct: 0.005
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
                    feature: "pulsation",
                    settings: {
                        periodDays: 90,
                        magnitudePct: 0.005
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
                        phaseDeg: 180,
                    }
                }
            ]
        }
    },
    {
        title: "Planetary Occlusion",
        summary: "Light curves",
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
                    feature: "pulsation",
                    settings: {
                        periodDays: 140,
                        magnitudePct: 0.004
                    }
                },
                {
                    feature: "planet",
                    settings: {
                        orbitAus: 1.2,
                        sizeEarths: 3,
                        phaseDeg: 0,
                    }
                },
                {
                    feature: "pulsation",
                    settings: {
                        periodDays: 90,
                        magnitudePct: 0.005
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
                    feature: "pulsation",
                    settings: {
                        periodDays: 90,
                        magnitudePct: 0.005
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
                        phaseDeg: 180,
                    }
                }
            ]
        }
    },
    {
        title: "Planetary Occlusion",
        summary: "Light curves",
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
                    feature: "pulsation",
                    settings: {
                        periodDays: 140,
                        magnitudePct: 0.004
                    }
                },
                {
                    feature: "planet",
                    settings: {
                        orbitAus: 1.2,
                        sizeEarths: 3,
                        phaseDeg: 0,
                    }
                },
                {
                    feature: "pulsation",
                    settings: {
                        periodDays: 90,
                        magnitudePct: 0.005
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
                    feature: "pulsation",
                    settings: {
                        periodDays: 90,
                        magnitudePct: 0.005
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
                        phaseDeg: 180,
                    }
                }
            ]
        }
    },
    {
        title: "Planetary Occlusion",
        summary: "Light curves",
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
                    feature: "pulsation",
                    settings: {
                        periodDays: 140,
                        magnitudePct: 0.004
                    }
                },
                {
                    feature: "planet",
                    settings: {
                        orbitAus: 1.2,
                        sizeEarths: 3,
                        phaseDeg: 0,
                    }
                },
                {
                    feature: "pulsation",
                    settings: {
                        periodDays: 90,
                        magnitudePct: 0.005
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
                    feature: "pulsation",
                    settings: {
                        periodDays: 90,
                        magnitudePct: 0.005
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
                        phaseDeg: 180,
                    }
                }
            ]
        }
    },
];

export default levels;
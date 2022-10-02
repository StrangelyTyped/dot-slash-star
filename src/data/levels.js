import kic8462852 from "../media/klc-kic-8462852.png"

const levels = [
    null, // don't start at level 0
    {
        title: "Stellar Pulsations",
        summary: "Matching Intrinsic Stars",
        descriptionJsx: <>
            <p>Pulsating variable stars are ones where the radius expands and contracts as part of their natural evolutionary ageing processes.</p>
            <p>TODO: Add data</p>
        </>,
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
        descriptionJsx: <>
            <p>A star being eclipsed, where the changes in brightness are from perspective, are called extrinsic variables. The Kepler telescope uses this to detect exoplanets!</p>
        </>,
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
        descriptionJsx: <>
            <p>
                Planets orbiting a star may occasionally pass between the star and an observer which will cause a drop in observed brightness.
                This technique is used by the Kepler Space Telescope as it hunts for exoplanets around distant stars.
            </p>
            <p>
                A practical example of this phenomenon can be seen in the real-world light curve from a nearby star called <a href="https://en.wikipedia.org/wiki/Tabby%27s_Star">Tabby's Star</a> <a href="https://mast.stsci.edu/portal/Mashup/Clients/Mast/Portal.html?searchQuery=%7B%22service%22%3A%22CAOMDB%22%2C%22inputText%22%3A%22KIC8462852%22%2C%22paramsService%22%3A%22Mast.Caom.Cone%22%2C%22title%22%3A%22MAST%3A%20KIC8462852%22%2C%22columns%22%3A%22*%22%2C%22caomVersion%22%3Anull%7D">(Designation KIC8462852)</a>
            </p>
            <img src={kic8462852} alt="KIC8462852 Light Curve" />
        </>,
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
                        orbitAus: 0.5,
                        sizeEarths: 3,
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
    },
    {
        title: "Planetary Occlusion",
        summary: "Light curves",
        descriptionJsx: <>
            <p>Long descriptive text that we'll show inside the level, perhaps in a dialog of some kind</p>
        </>,
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
        descriptionJsx: <>
            <p>Long descriptive text that we'll show inside the level, perhaps in a dialog of some kind</p>
        </>,
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
        descriptionJsx: <>
            <p>Long descriptive text that we'll show inside the level, perhaps in a dialog of some kind</p>
        </>,
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
        descriptionJsx: <>
            <p>Long descriptive text that we'll show inside the level, perhaps in a dialog of some kind</p>
        </>,
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
        descriptionJsx: <>
            <p>Long descriptive text that we'll show inside the level, perhaps in a dialog of some kind</p>
        </>,
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
        descriptionJsx: <>
            <p>Long descriptive text that we'll show inside the level, perhaps in a dialog of some kind</p>
        </>,
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
        descriptionJsx: <>
            <p>Long descriptive text that we'll show inside the level, perhaps in a dialog of some kind</p>
        </>,
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
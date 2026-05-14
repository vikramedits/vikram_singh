"use client"

import { useEffect, useMemo, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

export default function ParticlesBackground() {
    const [init, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine)
        }).then(() => {
            setInit(true)
        })
    }, [])

    const options = useMemo(
        () => ({
            fullScreen: { enable: false },

            background: {
                color: "transparent",
            },

            particles: {
                number: {
                    value: 60,
                },
                color: {
                    value: "#8b5cf6",
                },
                links: {
                    enable: true,
                    color: "#8b5cf6",
                    distance: 150,
                    opacity: 0.3,
                },
                move: {
                    enable: true,
                    speed: 1,
                },
                size: {
                    value: { min: 1, max: 3 },
                },
                opacity: {
                    value: 0.5,
                },
            },

            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                },
            },
        }),
        []
    )

    if (!init) return null

    return (
        <Particles
            id="tsparticles"
            options={options}
            className="absolute inset-0 w-full h-full"
        />
    )
}
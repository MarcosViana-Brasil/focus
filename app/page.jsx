'use client'

import Features from '@/components/Features'
import Brands from '@/components/Brands'
import Hero from '@/components/Hero'

import { ReactLenis } from 'lenis/dist/lenis-react'
import Integrations from '@/components/INtegrations'

const Home = () => {
    return (
        <>
            <ReactLenis root>
                <Hero />

                <Brands />

                <Features />

                <Integrations />

                {/* temporary div */}
                <div className="h-[8000px]"></div>
            </ReactLenis>
        </>
    )
}

export default Home

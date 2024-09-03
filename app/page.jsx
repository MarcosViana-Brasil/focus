'use client'

import Features from '@/components/Features'
import Brands from '@/components/Brands'
import Hero from '@/components/Hero'

import { ReactLenis } from 'lenis/dist/lenis-react'
import Integrations from '@/components/INtegrations'
import Testimonial from '@/components/Testimonial'
import Trial from '@/components/Trial'
import Footer from '@/components/Footer'

const Home = () => {
    return (
        <>
            <ReactLenis root>
                <Hero />

                <Brands />

                <Features />

                <Integrations />

                <Testimonial />

                <Trial />

                <Footer />

                {/* temporary div */}
                {/* <div className="h-[8000px]"></div> */}
            </ReactLenis>
        </>
    )
}

export default Home

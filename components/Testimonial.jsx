'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { BiSolidQuoteLeft } from 'react-icons/bi'

import { fadeInOnScroll } from '@/motion/motionVariants'

const testimonial = [
    {
        name: 'John Doe',
        message:
            "This service was incredible! It exceeded all my expectations and I couldn't be happier with the results.",
    },
    {
        name: 'Jane Smith',
        message:
            "This service was incredible! It exceeded all my expectations and I couldn't be happier with the results.",
    },
    {
        name: 'Samuel Green',
        message:
            "This service was incredible! It exceeded all my expectations and I couldn't be happier with the results.",
    },
    {
        name: 'Emily White',
        message:
            "This service was incredible! It exceeded all my expectations and I couldn't be happier with the results.",
    },
    {
        name: 'Micheal Brown',
        message:
            "This service was incredible! It exceeded all my expectations and I couldn't be happier with the results.",
    },
    {
        name: 'Sophia Lee',
        message:
            "This service was incredible! It exceeded all my expectations and I couldn't be happier with the results.",
    },
    {
        name: 'Olivia Martinez',
        message:
            "This service was incredible! It exceeded all my expectations and I couldn't be happier with the results.",
    },
]

const Testimonial = () => {
    return (
        <section className="w-full mb-24 xl:mb-32 flex justify-center items-center">
            <div className="overflow-hidden">
                <motion.div
                    variants={fadeInOnScroll(0.2, 0.4)}
                    initial="hidden"
                    whileInView="visible"
                >
                    <h2 className="h2 mb-4 text-center">
                        What People Are Saying
                    </h2>
                    <p className="lead text-center mb-24">
                        Hear directly from those who have improved their
                        efficiency and organization
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeInOnScroll(0.2, 0.6)}
                    initial="hidden"
                    whileInView="visible"
                    className="flex"
                >
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: '-100%' }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                        className="flex"
                    >
                        {testimonial.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="relative w-[460px] h-[300px] bg-[#0E11354E] mr-12 rounded-2xl flex flex-col justify-center px-14"
                                >
                                    <BiSolidQuoteLeft className="text-accent mb-3 text-3xl" />
                                    <p className="mb-4 text-lg text-white/80">
                                        {item.message}
                                    </p>
                                    <p className="text=xl">{item.name}</p>
                                </div>
                            )
                        })}
                    </motion.div>

                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: '-100%' }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                        className="flex"
                    >
                        {testimonial.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="relative w-[460px] h-[300px] bg-[#0E11354E] mr-12 rounded-2xl flex flex-col justify-center px-14"
                                >
                                    <BiSolidQuoteLeft className="text-accent mb-3 text-3xl" />
                                    <p className="mb-4 text-lg text-white/80">
                                        {item.message}
                                    </p>
                                    <p className="text=xl">{item.name}</p>
                                </div>
                            )
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonial

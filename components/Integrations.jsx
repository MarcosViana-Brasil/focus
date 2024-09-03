'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from './Button'

const icons = [
    {
        src: '/integrations/notion.svg',
    },
    {
        src: '/integrations/slack.svg',
    },
    {
        src: '/integrations/google_drive.svg',
    },
    {
        src: '/integrations/intercom.svg',
    },
    {
        src: '/integrations/jira.svg',
    },
    {
        src: '/integrations/dropbox.svg',
    },
    {
        src: '/integrations/stripe.svg',
    },
    {
        src: '/integrations/zapier.svg',
    },
    {
        src: '/integrations/figma.svg',
    },
    {
        src: '/integrations/confluence.svg',
    },
    {
        src: '/integrations/mailchimp.svg',
    },
    {
        src: '/integrations/whatsapp.svg',
    },
    {
        src: '/integrations/discord.svg',
    },
    {
        src: '/integrations/bitbucket.svg',
    },
    {
        src: '/integrations/invision.svg',
    },
    {
        src: '/integrations/evernote.svg',
    },
]

const Integrations = () => {
    return (
        <section className="py-24 xl-:py-32 min-h-[720px] xl:mt-32">
            <div className="container mx-auto flex flex-col justify-center items-center gap-8 xl:gap-16">
                <div className="text-center">
                    <h2 className="h2 mb-3">Unified Workflow</h2>
                    <p>
                        Integrate with top apps to create a seamless, connected
                        experience
                    </p>
                </div>

                <div>
                    {icons.map((icon, index) => {
                        return (
                            <div
                                className="relative w-[80px] h-[80px]"
                                key={index}
                            >
                                <Image
                                    src={icon.src}
                                    fill
                                    alt=""
                                    className="object-contain"
                                />
                            </div>
                        )
                    })}
                </div>

                <div>
                    <Button btnText="See all" />
                </div>
            </div>
        </section>
    )
}

export default Integrations

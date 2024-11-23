'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Linkedin, Zap, Target, ShieldCheck } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'second2ed',
  description: 'Building outbound systems for B2B businesses to bring more qualified leads to your inbox.',
  icons: {
    icon: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-LQ2rOeNlsNE2fAtAZF8R7fBnoTrrmw.png',
        href: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-LQ2rOeNlsNE2fAtAZF8R7fBnoTrrmw.png',
      },
    ],
  },
}

const processSteps = [
  { title: 'Identify The Problems', description: 'We analyze your business and understand what\'s holding your current outbound system from performing. Then we create a roadmap to revamp your lead generation and boost your results.' },
  { title: 'Define Your ICP and Create an Offer', description: 'We build your ideal customer profile (ICP) list with an irresistible offer that captures attention. If needed, we\'ll continue to revamp this and the offer to ensure our targeting is precise and backed by data.' },
  { title: 'Pipeline Creation and Lead Sourcing', description: 'Leveraging software and advanced sourcing tools, we segment and curate a list of prospects ensuring each outreach is targeted to specific needs, setting the stage for consistent, conversion-focused engagement.' },
  { title: 'Craft Personalized Outreach that Connects', description: 'Our copywriters craft personalized outreach messages, speaking directly to your prospects pain points and needs, making a genuine, human connection.' },
  { title: 'Launch the Campaign', description: 'Set everything live with measurable results.' },
]

export function EnhancedLeadGenerationAgencyComponent() {
  return (
    <div className={`min-h-screen bg-[#05071A] text-white ${inter.className} overflow-x-hidden`}>
      {/* Sticky Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 right-0 bg-[#05071A] z-50 py-4 px-6 flex justify-between items-center shadow-lg"
      >
        <div className="flex items-center">
          <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Second-gxS0q2ito0ujPCWSbhDzLad5lUWC2n.png" alt="Second Ed Logo" width={120} height={40} className="pointer-events-none" />
        </div>
        <Button asChild className="bg-gradient-to-r from-blue-800 to-purple-900 hover:from-blue-900 hover:to-purple-950 active:from-blue-950 active:to-purple-950 transition-colors duration-200">
          <Link href="https://calendly.com/second2ed/consultation">Book Your Call Now</Link>
        </Button>
      </motion.header>

      {/* Hero Section */}
      <section className="py-[90px] px-4 transition-all duration-300 ease-in-out">
        <div className="relative min-h-screen flex items-center justify-center text-center px-4 pt-1">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-blue-900 opacity-20"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Growth Relies on a Steady Stream of NEW Leads.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              second ed builds outbound systems for B2B businesses to bring more qualified leads to your inbox, without the guesswork…
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-800 to-purple-900 hover:from-blue-900 hover:to-purple-950 active:from-blue-950 active:to-purple-950 text-white font-bold py-3 px-6 rounded-full transition-colors duration-200 transform hover:scale-105">
              <Link href="https://calendly.com/second2ed/consultation">Book Your Call Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="py-[90px] px-4 transition-all duration-300 ease-in-out">
        <div className="max-w-6xl mx-auto space-y-20">
          <FeatureCard
            title="Bridge the Gap Between a Cold Lead and a Booked Meeting"
            description="The boring, tedious work of finding qualified leads and booking meetings is all on us. Allowing you to focus on what really matters: CLOSING DEALS"
            imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-E7G8wlzsR4PnwBWkARls6ikpLgG2P8.png"
            imageAlt="Bridge the gap illustration"
          />
          <FeatureCard
            title="Stand Out in Crowded Mailboxes"
            description="Nowadays, personalization matters more than ever. We have a dedicated team doing full-on personalization for your emails, so they never get lost in the ocean of AI generated content."
            imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-QURTcI78aydg2Vwgxyk0RFadw0jM7A.png"
            imageAlt="Stand out from crowd illustration"
            reverse
          />
          <FeatureCard
            title="Say Goodbye to Unqualified Leads"
            description="Don't spray your email campaign to a list that was made using broad search terms. Curating a list of well defined leads based on your personal ideal customer profile is key to booking more meetings and getting new clients."
            imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(7)-PSvt67bdPESMkLBhSNdVkuRKuawW03.png"
            imageAlt="Inbox sorting illustration"
          />
        </div>
      </section>

      {/* Process Section (Interactive Timeline) */}
      <section className="py-[90px] px-4 bg-[#030407] transition-all duration-300 ease-in-out">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          >
            How We Help YOU
          </motion.h2>
          <Timeline />
        </div>
      </section>

      {/* Results Carousel */}
      <section className="py-[90px] px-4 bg-[#05071A] transition-all duration-300 ease-in-out mb-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          >
            Our Results
          </motion.h2>
          <ResultsCarousel />
        </div>
      </section>

      {/* Why Second Edition? Section */}
      <section className="py-[90px] px-4 bg-[#080B26] transition-all duration-300 ease-in-out">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          >
            Why Second Ed?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <WhySecondEdCard
              icon={<Zap className="w-12 h-12 text-blue-500" />}
              title="Simplify your Systems"
              description="Leave it all on us to construct a guaranteed system to convert for your business."
            />
            <WhySecondEdCard
              icon={<Target className="w-12 h-12 text-purple-500" />}
              title="Guaranteed Pipeline"
              description="Start executing immediately with our unique tech stack and experienced team."
            />
            <WhySecondEdCard
              icon={<ShieldCheck className="w-12 h-12 text-green-500" />}
              title="Risk-Free Start"
              description="Experience our proven system at no cost upfront—let us earn your trust and show you real results before you commit."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-[90px] px-4 transition-all duration-300 ease-in-out">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          >
            Frequently Asked Questions
          </motion.h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Why not hire a BDR?</AccordionTrigger>
              <AccordionContent>
                second ed will provide you with similar services as a BDR, at a fraction of the price. Unlike having to hire multiple BDRs when there are more leads, our service is fully scalable, cost-efficient, and performance-driven—meaning the results are guaranteed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Why can't we just buy the software you use and do this ourselves?</AccordionTrigger>
              <AccordionContent>
                Anyone can buy the software and utilize it, but the results will vary drastically. We have professionals with 4+ years of experience with these tools who have found the most efficient ways to produce the best results possible for you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How quickly can I expect to see results?</AccordionTrigger>
              <AccordionContent>
                We are confident that you will start to see your sales pipeline populated with qualified leads within 30 days. Then, all that matters is that you go and close those deals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How do you define 'qualified'?</AccordionTrigger>
              <AccordionContent>
                First, we understand your ideal customer profile. We do our research and due diligence, and then get to work. 'Qualified' to us means there is an extremely high likelihood of interest in your company.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How do you personalize outreach for each lead?</AccordionTrigger>
              <AccordionContent>
                We have copywriters who personalize emails sent out to your ideal customer targets. This allows our emails to stand out amongst the AI-generated campaigns that every business seems to be running.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Call-to-Action Block */}
      <section className="py-[90px] px-4 bg-gradient-to-r from-blue-800 to-purple-900 transition-all duration-300 ease-in-out">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto text-center bg-[#080B26] p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Schedule your free strategy call</h2>
          <p className="text-lg mb-6">
            Let's talk about how we can build an outbound system for your business to enhance your lead generation and book more qualified meetings!
          </p>
          <Button asChild size="lg" className="w-full bg-white text-blue-800 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200">
            <Link href="https://calendly.com/second2ed/consultation">Book Now</Link>
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#030407] py-6 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Second-gxS0q2ito0ujPCWSbhDzLad5lUWC2n.png" alt="Second Ed Logo" width={120} height={40} className="pointer-events-none" />
          </div>
          <Link href="https://linkedin.com/company/second2ed" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="hover:bg-blue-900 active:bg-blue-950 transition-colors duration-200">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ title, description, imageSrc, imageAlt, reverse = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="bg-[#080B26] border-none overflow-hidden hover:shadow-lg transition-all duration-300">
        <CardContent className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 p-8`}>
          <motion.div className="flex-1" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              {title}
            </h3>
            <p className="text-gray-300 mb-6">{description}</p>
            <Button asChild variant="outline" className="border-blue-700 text-blue-400 hover:bg-blue-900 hover:text-white active:bg-blue-950 transition-colors duration-200">
              <Link href="https://calendly.com/second2ed/consultation">Learn More</Link>
            </Button>
          </motion.div>
          <motion.div className="flex-1" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
            <img src={imageSrc} alt={imageAlt} className="w-full h-auto rounded-lg shadow-lg pointer-events-none" />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const { top, height } = timelineRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const scrollPosition = windowHeight - top
        const progress = Math.min(Math.max(scrollPosition / height, 0), 1)
        setScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={timelineRef} className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700">
        <motion.div
          className="absolute top-0 left-0 w-full bg-blue-900"
          style={{ height: `${scrollProgress * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
      {processSteps.map((step, index) => (
        <TimelineItem key={index} step={step} index={index} />
      ))}
    </div>
  )
}

function TimelineItem({ step, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const contentAnimation = useAnimation()

  useEffect(() => {
    if (isInView) {
      contentAnimation.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } })
    }
  }, [isInView, contentAnimation])

  return (
    <div ref={ref} className={`flex items-center mb-12 timeline-step ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className="w-1/2"></div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: isInView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="w-8 h-8 absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center"
      >
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
          {index + 1}
        </div>
      </motion.div>
      <motion.div
        className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}
        initial={{ opacity: 0, y: 20 }}
        animate={contentAnimation}
      >
        <div className="bg-[#080B26] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
          <p className="text-gray-300">{step.description}</p>
        </div>
      </motion.div>
    </div>
  )
}

function ResultsCarousel() {
  const [width, setWidth] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        const scrollWidth = carouselRef.current.scrollWidth
        const offsetWidth = carouselRef.current.offsetWidth
        setWidth(scrollWidth - offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)

    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const clientResults = [
    { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a-irRwhSyufA3VNhk7gc4nHzO8VVAMHU.png" },
    { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b-EelHWJsKr01e6iQbZsDsN2QRVwESlb.png" },
    { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c-EIfQpBxaicZxttpJzS8URrr4B9AZ6b.png" },
    { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d-4yKaU5tKLRZqXdTpp5BA9CmzVkmzUT.png" },
    { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e-FUTJ1fjXrPcg79yj8CsmEYrOiCceTP.png" },
    { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f-IXZYK77z8hC4Z4ZA0GHOQ2r6KcPUEt.png" }
  ];

  const duplicatedResults = [...clientResults, ...clientResults]

  return (
    <div className="overflow-hidden bg-[#05071A] py-8">
      <motion.div
        ref={carouselRef}
        className="pointer-events-none"
      >
        <motion.div
          animate={{
            x: [-width, 0],
            transition: {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            },
          }}
          className="flex gap-6"
        >
          {duplicatedResults.map((result, index) => (
            <motion.div
              key={index}
              className="min-w-[250px] sm:min-w-[300px]"
            >
              <Card className="bg-[#080B26] border-none overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  <Image
                    src={result.image}
                    alt={`Campaign Performance Analytics - Showing metrics like sequence starts, reply rates, and positive response rates`}
                    width={300}
                    height={200}
                    className="w-full h-auto pointer-events-none"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

function WhySecondEdCard({ icon, title, description }) {
  return (
    <Card className="bg-[#0C1030] border-none overflow-hidden hover:shadow-lg transition-all duration-300">
      <CardContent className="flex flex-col items-center p-6 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, y: [0, -10, 0] }}
          transition={{ 
            scale: { type: "spring", stiffness: 260, damping: 20 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
          className="mb-4"
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}
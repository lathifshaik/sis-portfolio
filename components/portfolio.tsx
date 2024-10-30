'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaDatabase, FaLaptopCode, FaCloud } from 'react-icons/fa'
import * as THREE from 'three'
import Image from 'next/image'
import dp from '@/components/dp.jpg'
import firstdp from '@/components/firstdp.jpeg'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function Stars() {
  const ref = useRef<THREE.Group>(null)
  const [sphere] = useState(() => new THREE.SphereGeometry(1, 32, 32))
  const [material] = useState(() => new THREE.MeshBasicMaterial({ color: 0xffffff }))

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.x = Math.cos(t / 4) / 8
      ref.current.rotation.y = Math.sin(t / 4) / 8
      ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
    }
  })

  return (
    <group ref={ref}>
      {[...Array(200)].map((_, i) => (
        <mesh
          key={i}
          geometry={sphere}
          material={material}
          position={[
            Math.random() * 100 - 50,
            Math.random() * 100 - 50,
            Math.random() * 100 - 50
          ]}
          scale={Math.random() * 0.2}
        />
      ))}
    </group>
  )
}

import { ReactNode } from 'react';

function AnimatedCard({ children, delay = 0 }: { children: ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="bg-gray-800 border-gray-700 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
        {children}
      </Card>
    </motion.div>
  )
}

export function PortfolioComponent() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <motion.div className="fixed inset-0 z-0" style={{ opacity }}>
        <Canvas aria-label="Animated star background">
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} />
          <Stars />
        </Canvas>
      </motion.div>
      <div className="relative z-10">
        <header className="flex justify-between items-center p-6 bg-gray-800 bg-opacity-90 backdrop-blur-md sticky top-0 border-b border-gray-700 z-50">
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Avatar className="h-12 w-12 border-2 border-blue-600">
              <AvatarImage src={firstdp.src} alt="Nandini Saini" />
              <AvatarFallback>NS</AvatarFallback>
            </Avatar>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Nandini Saini
            </h1>
          </motion.div>
          <nav>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex space-x-2"
            >
              <Button variant="ghost" size="icon" asChild className="text-gray-300 hover:text-white hover:bg-gray-700">
                <a href="https://github.com/nandinisaini" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-gray-300 hover:text-white hover:bg-gray-700">
                <a href="https://www.linkedin.com/in/nandinisaini/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-gray-300 hover:text-white hover:bg-gray-700">
                <a href="mailto:nandinisaini@email.com" target="_blank" rel="noopener noreferrer">
                  <FaEnvelope className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </motion.div>
          </nav>
        </header>

        <main className="container mx-auto px-6 py-12 space-y-24">
          <section id="hero" className="text-center min-h-[calc(100vh-80px)] flex flex-col justify-center items-center space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg"
            >
              <Image
                src={dp}
                alt="Nandini Saini"
                width={192}
                height={192}
                objectFit="cover"
              />
            </motion.div>
            <motion.h2
              className="text-5xl sm:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Data Analyst & Developer
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 mb-8 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Transforming complex data into actionable insights and innovative solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <a href='https://drive.google.com/file/d/1p8j1jMKzjyf2Lw9QCk3dZVKJcAGKLgCb/view?usp=sharing'>Download Resume </a>
              </Button>
            </motion.div>
          </section>

          <section id="about" className="max-w-4xl mx-auto">
            <AnimatedCard>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-400">About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  Data Analyst with over 3 years of experience in market research, analytics, and data-driven
                  decision-making. Skilled in advanced analytics, data visualization, and process optimization, with a
                  proven track record of translating complex datasets into actionable insights that enhance operational
                  efficiency. Passionate about leveraging data to drive business growth and innovation.
                </p>
              </CardContent>
            </AnimatedCard>
          </section>

          <section id="experience">
            <h2 className="text-3xl font-bold mb-8 text-blue-400 text-center">Work Experience</h2>
            <div className="space-y-8">
              {[
                {
                  title: 'Data Analyst Consultant',
                  company: '7th Avenue Partners',
                  period: 'Jan 2024 – Present',
                  description: [
                    'Led the lifecycle management of 100+ SaaS and IT products, identifying new product lines and using SAP to support strategic planning and enterprise resource management.',
                    'Developed interactive dashboards and data models, contributing to a 40% increase in product stability by reducing pre-launch critical defects.',
                    'Implemented automation for data integration workflows, reducing manual interventions and improving operational efficiency.',
                    'Enhanced company processes, decreasing error rates from 12.7% to 1.2% and achieving a 98% on-time project delivery.',
                  ],
                },
                {
                  title: 'Data Analytics Professional',
                  company: 'Rowan University',
                  period: 'Sept 2022 – Dec 2023',
                  description: [
                    'Streamlined data preprocessing tasks using Alteryx, reducing project time by 45%.',
                    'Created and maintained dashboards in Tableau and Power BI, driving a 40% increase in engagement and a 30% rise in event participation.',
                    'Analyzed complex datasets in Google Analytics, uncovering trends that boosted departmental efficiency by 33%.',
                  ],
                },
                {
                  title: 'Data Analyst Intern',
                  company: 'Blood Box',
                  period: 'Jun 2020 – Aug 2022',
                  description: [
                    'Utilized Datorama and Tableau for market intelligence, analyzing survey data and identifying user behavior trends that improved retention by 25%.',
                    'Developed data visualizations to streamline data insights, leading to a 20% increase in user satisfaction.',
                  ],
                },
              ].map((job, index) => (
                <AnimatedCard key={index} delay={index * 0.1}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-blue-400">{job.title}</CardTitle>
                    <p className="text-sm text-gray-400">
                      {job.company} | {job.period}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                      {job.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </section>

          <section id="projects">
            <h2 className="text-3xl font-bold mb-8 text-blue-400 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Sin-City Dataset Analysis',
                  description:
                    'Led a team to analyze large datasets using advanced statistical techniques, generating insights that informed strategic decisions and improved departmental operations.',
                },
                {
                  title: 'Travel Website for Broke College Students',
                  description:
                    'Designed a budget-friendly travel website targeting college students, showcasing skills in UX/UI and content creation.',
                },
              ].map((project, index) => (
                <AnimatedCard key={index} delay={index * 0.1}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-blue-400">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{project.description}</p>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </section>

          <section id="education">
            <h2 className="text-3xl font-bold mb-8 text-blue-400 text-center">Education & Certifications</h2>
            <div className="space-y-8">
              <AnimatedCard>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-blue-400">Bachelor of Science in Computer Science</CardTitle>
                  <p className="text-sm text-gray-400">Rowan University | Dec 2023</p>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>GPA: 4.0 (Summa Cum Laude)</p>
                  <p>Awards: Gold & Brown Scholarship (Top 1% of applicants, awarded $15,000 for academic excellence and leadership)</p>
                </CardContent>
              </AnimatedCard>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  'Google Data Analytics Professional, Google 2023',
                  'Data Analyst Virtual Intern, Accenture 2023',
                  'SAP Technical Consultant, SAP 2023',
                ].map((cert, index) => (
                  <AnimatedCard key={index} delay={index * 0.1}>
                    <CardContent className="p-4">
                      <p className="text-gray-300">{cert}</p>
                    </CardContent>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </section>

          <section id="skills">
            <h2 className="text-3xl font-bold mb-8 text-blue-400 text-center">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  category: 'Data Analysis',
                  icon: <FaDatabase className="h-6 w-6 text-blue-400 mb-2" />,
                  skills: ['SQL', 'Python', 'Tableau', 'Power BI', 'Machine Learning', 'A/B Testing', 'Digital Marketing', 'Data Mining'],
                },
                {
                  category: 'Software & Platforms',
                  icon: <FaLaptopCode className="h-6 w-6 text-blue-400 mb-2" />,
                  skills: ['SAP', 'VMWare', 'AutoSys', 'Oracle', 'Figma', 'Adobe XD', 'Google Analytics', 'MS Excel'],
                },
                {
                  category: 'Cloud & DevOps',
                  icon: <FaCloud className="h-6 w-6 text-blue-400 mb-2" />,
                  skills: ['Google Cloud', 'Azure', 'ServiceNow', 'JIRA', 'Confluence', 'Visio', 'Linux'],
                },
              
              ].map((skillSet, index) => (
                <AnimatedCard key={index} delay={index * 0.1}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-blue-400 flex items-center">
                      {skillSet.icon}
                      <span className="ml-2">{skillSet.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 text-gray-300">
                      {skillSet.skills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </section>

          <section id="achievements">
            <h2 className="text-3xl font-bold mb-8 text-blue-400 text-center">Achievements & Hobbies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedCard>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-blue-400">Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-gray-300">
                    <li>Solved 200+ coding problems across various competitive programming platforms.</li>
                    <li>Recipient of Dean's List Honors for 6 consecutive semesters for academic excellence.</li>
                  </ul>
                </CardContent>
              </AnimatedCard>
              <AnimatedCard delay={0.1}>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-blue-400">Hobbies & Interests</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-gray-300">
                    <li>Cooking: Experimenting with international recipes</li>
                    <li>Badminton & Basketball: Regularly play in community leagues</li>
                    <li>Crafting: Enjoy upcycling and sustainable crafts</li>
                  </ul>
                </CardContent>
              </AnimatedCard>
            </div>
          </section>

          <section id="contact" className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">Get in Touch</h2>
            <p className="mb-8 text-gray-300">
              Feel free to reach out for collaborations or just a friendly hello. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <FaEnvelope className="mr-2" />
                Email Me
              </Button>
              <Button size="lg" variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white">
                <FaLinkedin className="mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </section>
        </main>

        <footer className="text-center py-6 mt-12 bg-gray-800 bg-opacity-90 backdrop-blur-md border-t border-gray-700">
          <p className="text-gray-400">&copy; 2024 Nandini Saini. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
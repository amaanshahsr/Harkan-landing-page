import { useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import Contact from '../components/Contact'

export default function ContactPage() {
  useReveal()
  useEffect(() => {
    document.title = 'Contact — Harkan Robotics'
    return () => { document.title = 'Harkan Robotics — A Studio for Thinking Machines' }
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start a conversation"
        sub="Questions about our robots, a demo, partnerships or careers — we'd love to hear from you."
        crumb="Contact"
      />
      <Contact />
    </>
  )
}

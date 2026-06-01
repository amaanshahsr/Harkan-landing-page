import { useReveal } from '../hooks/useReveal'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Products from '../components/Products'
import WhyHarkan from '../components/WhyHarkan'
import Industries from '../components/Industries'
import Process from '../components/Process'
import Contact from '../components/Contact'

export default function Home() {
  useReveal()
  return (
    <>
      <Hero />
      <Marquee />
      <Products />
      <WhyHarkan />
      <Industries />
      <Process />
      <Contact />
    </>
  )
}

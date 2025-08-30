import ThemeToggle from '../components/ThemeToggle'
import BackGroundEffect from '../components/BackGroundEffect'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import  ContactSection  from '../components/ContactSection'
import { SkillsSection } from '../components/SkillsSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { Footer } from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects  */}
      <BackGroundEffect />
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home

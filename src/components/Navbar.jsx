import { useEffect, useState } from 'react'
import { cn } from '../lib/utlis'
import { Menu, X } from 'lucide-react'
const navItems = [
    {
        name: "Home", href:"#hero"
    },
    {
        name: "About", href:"#about"
    },
    {
        name: "Skills", href:"#skills"
    },
    {
        name: "Projects", href:"#projects"
    },
    {
        name: "Contact", href:"#contact"
    },
]
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY> 10)
        }
        window.addEventListener("scroll", handleScroll)
        return ()=>window.removeEventListener("scroll", handleScroll)
    },[])
  return (
      <nav className={cn("fixed w-full z-40 transition-all duration-300",
          isScrolled ? 'py-3 bg-background/80 backdrop:backdrop-blur-md shadow-xs' : "py-5"
      )}>
          <div className=" container flex items-center justify-between ">
              <a href='#hero' className='text-xl font-bold text-primary flex items-center'>
                  <span className='relative z-10'>
                      <span className='text-glow text-foreground'>AbdulnourTech</span> Portfolio
                  </span>
              </a>
              {/* DESKTOP nav */}
              <div className="hidden md:flex space-x-8">
                  {navItems.map((item, key) => (
                      <a key={key} href={item.href} className='text-foreground/80 hover:text-primary transition duration-500'>{item.name}</a>
                  ))}
              </div>
              {/* MOBILE nav */}
              <button onClick={() => setIsMenuOpen((prev) => !prev)}
              className='md:hidden p-2 text-foreground z-50'
              >
                  {isMenuOpen ? <X size={24}/>: <Menu size={24}/>}
                </button>
              <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                  "transition-all duration-300 md:hidden",
                  isMenuOpen ? "opacity-100 pointer-events-auto": " opacity-0 pointer-none:"
                )}>
                  
               <div className="flex flex-col space-y-8 text-xl">
                  {navItems.map((item, key) => (
                      <a key={key} href={item.href} className='text-foreground/80 hover:text-primary transition duration-500'
                      onClick={()=> setIsMenuOpen(false)}
                      >{item.name}</a>
                    ))}
              </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar
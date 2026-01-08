import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

// Optional variant lets us swap colors when the nav sits on a dark background
const Navbar = ({ variant = 'light' }) => {
    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false)
    const isDarkBg = variant === 'dark'
    const baseColor = isDarkBg ? '#BEBEBE' : '#1F1F1F'
    const activeColor = isDarkBg ? '#F6F1E8' : '#BEBEBE'
    const menuBgColor = isDarkBg ? '#1F1F1F' : '#F6F1E8'

    const navItems = [
        { path: '/', label: 'ABOUT' },
        { path: '/journalism', label: 'JOURNALISM' },
        { path: '/creative', label: 'CREATIVE' },
        { path: '/resume', label: 'RESUME' }
    ]

    return (
        <>
            <div className="relative top-[1px]">
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 flex flex-col gap-1.5 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ color: baseColor }}
                >
                    <span className="w-6 h-0.5 block" style={{ backgroundColor: baseColor, transition: 'all 0.3s ease' }}></span>
                    <span className="w-6 h-0.5 block" style={{ backgroundColor: baseColor, transition: 'all 0.3s ease' }}></span>
                    <span className="w-6 h-0.5 block" style={{ backgroundColor: baseColor, transition: 'all 0.3s ease' }}></span>
                </button>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex text-xs sm:text-sm md:text-[14px] font-[500] gap-4 sm:gap-6 md:gap-[36px] tracking-[0.12em] font-Montserrat leading-none">
                    {navItems.map((item) => (
                        <li
                            key={item.path}
                            style={{ color: location.pathname === item.path ? activeColor : baseColor }}
                        >
                            <Link to={item.path}>{item.label}</Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Navigation */}
                {isOpen && (
                    <ul
                        className="md:hidden absolute top-full left-0 right-0 flex flex-col gap-4 p-4 mt-2 rounded-md"
                        style={{ backgroundColor: menuBgColor }}
                    >
                        {navItems.map((item) => (
                            <li
                                key={item.path}
                                style={{ color: location.pathname === item.path ? activeColor : baseColor }}
                            >
                                <Link
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm font-[500] tracking-[0.12em] font-Montserrat"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
};

export default Navbar;
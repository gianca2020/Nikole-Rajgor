import { Link, useLocation } from 'react-router-dom'

// Optional variant lets us swap colors when the nav sits on a dark background
const Navbar = ({ variant = 'light' }) => {
    const location = useLocation()
    const isDarkBg = variant === 'dark'
    const baseColor = isDarkBg ? '#BEBEBE' : '#1F1F1F'
    const activeColor = isDarkBg ? '#F6F1E8' : '#BEBEBE'

    return (
    <>
    {/*Navbar content will be Montserrat/14px/medium/36px gap */}
<div className="relative top-[1px]">
    <ul className="text-[12px] md:text-[14px] font-[500] flex gap-[28px] md:gap-[36px] tracking-[0.12em] font-Montserrat leading-none">
        <li style={{ color: location.pathname === '/' ? activeColor : baseColor }}>
            <Link to="/">ABOUT</Link>
        </li>
        <li style={{ color: location.pathname === '/journalism' ? activeColor : baseColor }}>
            <Link to="/journalism">JOURNALISM</Link>
        </li>
        <li style={{ color: location.pathname === '/creative' ? activeColor : baseColor }}>
            <Link to="/creative">CREATIVE</Link>
        </li>
        <li style={{ color: location.pathname === '/resume' ? activeColor : baseColor }}>
            <Link to="/resume">RESUME</Link>
        </li>
    </ul>
</div>
    </>
)
};

export default Navbar;
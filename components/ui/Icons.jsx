import linkedinIcon from "../../assets/linkedin (light).png";
import linkedinIconDark from "../../assets/linkedin (dark).png";
import instagramIcon from "../../assets/instagram (light).png";
import instagramIconDark from "../../assets/instagram (dark).png";
import twitterIcon from "../../assets/twitter (light).png";
import twitterIconDark from "../../assets/twitter (dark).png";

const Icons = ({ variant = "light" }) => {
  const linkedIn = variant === "dark" ? linkedinIconDark : linkedinIcon;
  const instagram = variant === "dark" ? instagramIconDark : instagramIcon;
  const twitter = variant === "dark" ? twitterIconDark : twitterIcon;
  
  return (
    <div className="flex justify-center gap-6">
      <a href="https://x.com/nikolerajgor?s=21" target="_blank" rel="noopener noreferrer">
        <img src={twitter} alt="Twitter" className="w-12 h-12" />
      </a>
      <a href="https://www.linkedin.com/in/nikole-rajgor-553b851b7/" target="_blank" rel="noopener noreferrer">
        <img src={linkedIn} alt="LinkedIn" className="w-12 h-12" />
      </a>
      <a href="https://www.instagram.com/nikolerajgor?igsh=ZmczdmR1M3ZuaHVj" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="Instagram" className="w-12 h-12" />
      </a>
    </div>
  );
};

export default Icons;

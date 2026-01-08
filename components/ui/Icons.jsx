import linkedinIcon from "../../assets/linkedin (light).png";
import instagramIcon from "../../assets/instagram (light).png";
import twitterIcon from "../../assets/twitter (light).png";

const Icons = () => {
  return (
    <div className="flex justify-center gap-6">
      <a href="https://x.com" target="_blank" rel="noopener noreferrer">
        <img src={twitterIcon} alt="Twitter" className="w-12 h-12" />
      </a>
      <a href="https://www.linkedin.com/in/nikole-rajgor-553b851b7/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" className="w-12 h-12" />
      </a>
      <a href="https://www.instagram.com/nikolerajgor?igsh=ZmczdmR1M3ZuaHVj" target="_blank" rel="noopener noreferrer">
        <img src={instagramIcon} alt="Instagram" className="w-12 h-12" />
      </a>
    </div>
  );
};

export default Icons;

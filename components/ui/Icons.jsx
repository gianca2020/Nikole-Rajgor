import linkedinIcon from "../../assets/linkedin (light).png";
import instagramIcon from "../../assets/instagram (light).png";
import twitterIcon from "../../assets/twitter (light).png";

const Icons = () => {
  return (
    <div className="flex justify-center gap-6">
      <a href="https://l.instagram.com/?u=https%3A%2F%2Fx.com%2Fnikolerajgor%3Fs%3D21&e=AT3v0S3XdXpoze2AlBThVvkYg28MfcEUbTH8yiAbwHm9PUCP2pWb1gJgY5Y2uuRcFflTMs9TcDYIPpbx3tw1J_IejavX66z8Y4vzoC5f_qZe7J7x3ZK0tQBuZZP9Gro6lq5jzM2g5YMS" target="_blank" rel="noopener noreferrer">
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

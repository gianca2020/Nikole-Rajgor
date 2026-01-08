import { useState } from "react";
import emailjs from "@emailjs/browser";
import twitterIcon from "../../assets/twitter.png";
import linkedinIcon from "../../assets/linkedin (2).png";
import instagramIcon from "../../assets/instagram.png";

const ContactEmail = ({ fullHeight = true }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_jof732q", // ✅ Service ID
        "template_x3kxkds", // ✅ Template ID
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // ✅ from .env
      )
      .then(() => {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={fullHeight ? "min-h-screen flex flex-col gap-4 max-w-md mx-auto mt-24" : "flex flex-col gap-4 max-w-md mx-auto mt-24"}
    >
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-32 resize-none"
        required
      />

      <button type="submit" disabled={status === "sending"} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400">
        {status === "sending" ? "Sending..." : "Send"}
      </button>

      {status === "success" && <p>Email sent successfully!</p>}
      {status === "error" && <p>Something went wrong. Try again.</p>}

      <div className="flex justify-center gap-6 mt-8">
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
        </a>
      </div>
    </form>
  );
};

export default ContactEmail;

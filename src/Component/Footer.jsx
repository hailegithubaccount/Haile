import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";

const socials = [
  { icon: faGithub, url: "https://github.com/hailegithubaccount", label: "GitHub" },
  { icon: faLinkedin, url: "https://www.linkedin.com/in/hailemichael-eshetu-6920b2372/", label: "LinkedIn" },
  { icon: faTelegram, url: "https://t.me/Haile6", label: "Telegram" },
  { icon: faInstagram, url: "https://www.instagram.com/haile_adey?igsh=MXBkMHNxcjZ5ZWczMQ==", label: "Instagram" },
  { icon: faFacebook, url: "https://www.facebook.com/profile.php?id=100072563070175", label: "Facebook" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 px-6 md:px-12 text-zinc-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div>
          <div className="text-xl font-bold text-white tracking-tight">
            Haile<span className="text-zinc-500">.dev</span>
          </div>
          <p className="text-xs text-zinc-500 mt-1">Full Stack & Mobile Application Developer</p>
        </div>

        <div className="flex gap-5 text-zinc-400">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={s.icon} size="lg" />
            </a>
          ))}
        </div>

        <div className="text-xs text-zinc-500">
          © {currentYear} Haile Michael Eshetu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

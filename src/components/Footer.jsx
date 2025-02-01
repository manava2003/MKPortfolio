import { footer } from "framer-motion/client";
import FooterImageLogo from "../assets/Group 16.png";
import UnderLine from "../assets/Line 9.png";
export default function Component() {
  return (
    <footer className="bg-[#E90074] pt-32 w-full h-[550px] flex flex-col">
      <div className="container mx-auto px-20 pb-40 flex justify-between items-start">
        {/* Logo Section */}
        <div className="flex-1   ">
          <a href="/" aria-label="MKaepae Home">
            <img
              src={FooterImageLogo}
              alt="MKaepae Logo"
              className="w-[400px] h-auto"
            />
          </a>
          <img className="pt-3" src={UnderLine} alt="underline" />
        </div>

        {/* Footer Navigation Groups */}
        <div className="flex gap-16">
          {/* Explore Links */}
          <div className="text-white">
            <h2 className="text-xl font-extralight text-black mb-6">Explore</h2>
            <ul className="space-y-4 text-lg">
              <li>
                <a
                  href="/about"
                  className="hover:opacity-80 transition-opacity"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:opacity-80 transition-opacity"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="/work" className="hover:opacity-80 transition-opacity">
                  Work
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:opacity-80 transition-opacity"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-white">
            <h2 className="text-xl font-extralight text-black mb-6">Follow</h2>
            <ul className="space-y-4 text-lg">
              <li>
                <a
                  href="https://instagram.com/mkaepae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/mkaepae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

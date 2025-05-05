import FooterImageLogo from "../assets/final-small-logo.svg";
import UnderLine from "../assets/Line 9.png";
export default function Component({scrollToSection,aboutRef,contactRef,workRef,servicesRef}) {
  return (
    <footer className=" md:-translate-y-0 bg-[#E90074] pt-32 w-full h-[550px] flex flex-col">
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
        <div className="flex gap-32 -translate-x-10">
          {/* Explore Links */}
          <div className="text-white">
            <h2 className="text-xl font-extralight text-black mb-6">Explore</h2>
            <ul className="space-y-4 text-lg">
              <li>
                <a
                 onClick={() => scrollToSection(aboutRef)}
                  className="hover:opacity-80 transition-opacity"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection(servicesRef)}
                  className="hover:opacity-80 transition-opacity"
                >
                  Services
                </a>
              </li>
              <li>
                <a  className="hover:opacity-80 transition-opacity" onClick={() => scrollToSection(workRef)}>
                  Work
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection(contactRef)}
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
                  href="https://instagram.com/studio.mkbae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mahinder-kaur-b05a351b8/"
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
      <div className="bg-pink-800 h-[50px] translate-y-10"></div>
    </footer>
  );
}

import React from "react";
import { Link } from "react-router-dom";

// A simple SVG Icon component for reusability
const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors duration-300"
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Decorative Wave SVG */}
      <div className="bg-white">
        <svg
          viewBox="0 0 1440 65"
          preserveAspectRatio="none"
          className="w-full text-slate-900 -mb-1"
          fill="currentColor"
        >
          <path d="M0,32L120,37.3C240,43,480,53,720,53.3C960,53,1200,43,1320,37.3L1440,32L1440,65L1320,65C1200,65,960,65,720,65C480,65,240,65,120,65L0,65Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Logo/Brand Name */}
          <h2 className="text-3xl font-bold tracking-tight">ARTSPACE</h2>
          <p className="mt-2 text-gray-400">
            Handcrafted Creations, Made with Passion.
          </p>

          {/* Navigation Links */}
          <nav
            className="my-8 flex justify-center gap-6 sm:gap-8"
            aria-label="Footer"
          >
            <Link
              to="/"
              className="text-base leading-6 text-gray-300 hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/#about"
              className="text-base leading-6 text-gray-300 hover:text-white"
            >
              About
            </Link>
            <Link
              to="/products"
              className="text-base leading-6 text-gray-300 hover:text-white"
            >
              Products
            </Link>
          </nav>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <SocialIcon href="https://www.instagram.com/_art_space___?igsh=MTk3Y2FpdDE0ZWppMQ%3D%3D&utm_source=qr">
              <span className="sr-only">Instagram</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 012.792 2.792c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-2.792 2.792c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-2.792-2.792c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 012.792-2.792c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 8.118c-2.147 0-3.882 1.735-3.882 3.882s1.735 3.882 3.882 3.882 3.882-1.735 3.882-3.882-1.735-3.882-3.882-3.882zM12 14.333a2.333 2.333 0 110-4.666 2.333 2.333 0 010 4.666zm5.338-7.77a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://youtube.com/@artby_naji?si=gGzJvY8XemkjOBFH">
              <span className="sr-only">YouTube</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.78 22 12 22 12s0 3.22-.42 4.814a2.506 2.506 0 0 1-1.768 1.768c-1.594.42-7.812.42-7.812.42s-6.218 0-7.812-.42a2.506 2.506 0 0 1-1.768-1.768C2.002 15.22 2 12 2 12s0-3.22.42-4.814a2.506 2.506 0 0 1 1.768-1.768C5.782 5 12 5 12 5s6.218 0 7.812.418ZM15.197 12 10 9.142v5.716L15.197 12Z"
                  clipRule="evenodd"
                />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://wa.me/918714732282">
              <span className="sr-only">WhatsApp</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM9.81 7.26c.27-.14.65-.29.83-.32.22-.04.44.07.56.32.14.27.46.97.51 1.05.04.07.07.16 0 .27-.04.09-.14.22-.3.39-.14.14-.27.3-.41.48-.14.18-.29.35-.14.65.14.27.68.99 1.48 1.71.97.92 1.78 1.21 2.05 1.35.27.14.44.12.6-.04.19-.19.83-.97.97-1.16.14-.18.29-.14.48-.07l.9.44c.18.09.3.14.35.22.04.07.04.48-.09.95-.14.46-1.02 1.12-1.2 1.2-.14.05-.33.07-.54.07-.22,0-.56-.05-.83-.16-.3-.12-1.88-.68-3.59-2.14-1.35-1.12-2.25-2.5-2.5-2.92-.25-.41-.04-.65.09-.82z" />
              </svg>
            </SocialIcon>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-base text-gray-400">
            &copy; {currentYear} Artspace. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

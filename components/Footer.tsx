import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pc-dark border-t border-pc-gray-light/20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright and Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <p className="text-caption text-pc-light/80">
              © {currentYear} The Games Forum Inc. All rights reserved.
            </p>
            <Link
              href="/terms"
              className="text-caption text-pc-light/60 hover:text-pc-pink transition-colors"
            >
              Terms of Service & Privacy Policy
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={25}
                  height={25}
                  className="w-full h-full object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

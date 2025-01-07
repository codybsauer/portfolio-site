"use client";

import React from "react";

import Image from "next/image";
import { socialLinks } from "./constants";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-indigo-950 to-black border-t border-indigo-500/30">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-mono text-indigo-400 mb-2">
                PHOTO USAGE NOTICE
              </h3>
              <p className="text-blue-200 font-mono text-sm leading-relaxed">
                PHOTOGRAPHS DISPLAYED ON THIS SITE WERE TAKEN DURING MY TIME AT
                THE LEAGUE OF AMAZING PROGRAMMERS. THESE IMAGES REMAIN THE
                PROPERTY OF THE LEAGUE OF AMAZING PROGRAMMERS.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-mono text-indigo-400 mb-2">
                PROJECT SCREENSHOTS NOTICE
              </h3>
              <p className="text-blue-200 font-mono text-sm leading-relaxed">
                SCREENSHOTS OF DEFISPOT AND ARJUNA MARKETING MATERIALS ARE
                DISPLAYED SOLELY TO DEMONSTRATE PROJECT CONTRIBUTIONS. ALL
                TRADEMARKS, LOGOS, AND CONTENT SHOWN IN THESE SCREENSHOTS REMAIN
                THE PROPERTY OF THEIR RESPECTIVE OWNERS.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-mono text-indigo-400 mb-2">
                TRADEMARK NOTICES
              </h3>
              <p className="text-blue-200 font-mono text-sm leading-relaxed">
                THE LINKEDIN &quot;IN&quot; LOGO IS A REGISTERED TRADEMARK OF
                LINKEDIN CORPORATION AND ITS AFFILIATES IN THE UNITED STATES
                AND/OR OTHER COUNTRIES.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <h3 className="text-lg font-mono text-indigo-400 mb-4">LINKS</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-indigo-950/50 
                           border border-indigo-500/50 
                           text-blue-200 hover:bg-indigo-900/50 
                           transition-colors duration-200
                           hover:border-indigo-400
                           flex items-center justify-center"
                  aria-label={link.label}
                >
                  {link.isLinkedIn ? (
                    <div className="w-6 h-6 relative">
                      <Image
                        src="/In-Blue-Logo.png.original.png"
                        alt="LinkedIn"
                        fill
                        className="object-contain"
                        sizes="24px"
                      />
                    </div>
                  ) : (
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <title>{link.icon?.title}</title>
                      <path d={link.icon?.path || ""} />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-indigo-500/30 text-center">
          <p className="text-blue-200 font-mono text-xs">
            © {new Date().getFullYear()} CODY SAUER - ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

// Define the shape of a single link
interface FooterLink {
  name: string;
  href: string;
}

const Footer: React.FC = () => {
  // TypeScript now knows this is an array of FooterLink objects
  const footerLinks: FooterLink[] = [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Careers', href: '#' },
  ];

  return (
    <footer className="w-full rounded-t-3xl bg-slate-50 dark:bg-slate-950 mt-12 border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 max-w-7xl mx-auto gap-6 font-sans text-sm leading-relaxed">
        
        {/* Brand and Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-bold text-indigo-700 dark:text-indigo-500 tracking-tighter">
            Pulse
          </span>
          <p className="text-slate-500 dark:text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} Pulse Discovery. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-500 dark:text-slate-400 hover:text-indigo-700 dark:hover:text-indigo-500 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
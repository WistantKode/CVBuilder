"use client";
import Link from "next/link";
import LandingButton from "../atoms/LandingButton";

export default function Navbar() {
  const navLinks = [
    { label: "Accueil", href: "#" },
    { label: "Bénéfices", href: "#" },
    { label: "Processus", href: "#" },
    { label: "Tarifs", href: "#" },
    { label: "Avis", href: "#" },
    { label: "FAQ", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center gap-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-black text-[#012a2b] tracking-tighter">
              cvbuilder
            </span>
            <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] group-hover:scale-125 transition-transform" />
          </Link>

          <div className="hidden xl:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[15px] font-bold text-slate-500 hover:text-[#10b981] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/login"
            className="text-[15px] font-bold text-slate-700 hover:text-[#10b981] transition-colors px-4"
          >
            Se connecter
          </Link>
          <LandingButton 
            variant="secondary" 
            className="bg-[#012a2b] hover:bg-[#023e3f] py-3.5 h-auto flex items-center gap-2 group"
          >
            Commecer
            <svg 
              className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </LandingButton>
        </div>
      </div>
    </nav>
  );
}

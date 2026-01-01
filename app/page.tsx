"use client";
import Navbar from "@/components/landing/layout/Navbar";
import Hero from "@/components/landing/sections/Hero";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* Footer or other sections could go here */}
      <footer className="py-12 border-t border-slate-100 bg-white">
        <div className="container mx-auto px-6 text-center text-slate-400 text-sm">
          <p>© 2026 CVBuilder. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  );
}

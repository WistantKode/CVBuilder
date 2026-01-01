"use client";
import Link from "next/link";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-base-100 font-sans">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-bounce">
              <Sparkles className="w-4 h-4" />
              <span>Nouveau : Éditeur Ultra-Modulaire</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Créez un CV qui vous <span className="text-primary italic">ressemble</span> vraiment.
            </h1>
            
            <p className="text-xl text-base-content/70 mb-12 max-w-2xl mx-auto">
              Le builder le plus complet et personnalisable du marché. Choisissez parmi 20+ templates et construisez votre carrière en quelques minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/builder" className="btn btn-primary btn-lg gap-2 text-lg">
                Commencer mon CV
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="btn btn-ghost btn-lg">Voir les modèles</button>
            </div>
          </div>
        </div>

        {/* Floating elements simulation */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </section>

      {/* Proof Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: "20+ Modèles", desc: "Des designs pour chaque secteur" },
              { title: "100% Modulaire", desc: "Ajoutez et déplacez vos sections" },
              { title: "Export HD", desc: "PDF haute résolution prêt à l'emploi" }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center gap-4 p-6">
                <CheckCircle className="w-8 h-8 text-success" />
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-base-content/60">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

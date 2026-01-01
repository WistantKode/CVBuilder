"use client";
import { motion } from "framer-motion";
import LandingButton from "../atoms/LandingButton";
import FloatingIcon from "../atoms/FloatingIcon";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-40 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-50/50 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 -z-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Content */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-[80px] font-bold text-slate-900 leading-[1.05] tracking-tight mb-8"
          >
            Gérez vos CV comme <br />
            un pro, <span className="relative inline-block">
              sans la complexité
              {/* Emerald Underline Curve */}
              <svg className="absolute -bottom-4 left-0 w-full h-4" viewBox="0 0 400 20" preserveAspectRatio="none">
                <path d="M5 15 Q 200 5 395 15" stroke="#10b981" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
          >
            CVBuilder génère automatiquement vos documents de carrière, organise vos pièces justificatives 
            et partage tout avec vos recruteurs en un clic.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            <Link href="/builder">
              <LandingButton variant="primary" size="lg" className="bg-[#10b981] hover:bg-[#059669] px-12 py-5 h-auto text-lg flex items-center gap-3">
                Commencer à gérer mes CV Gratuitement
                <svg className="w-5 h-5 bg-white/20 rounded-full p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </LandingButton>
            </Link>
            
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-sm font-semibold text-slate-400">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
                30 jours d'essai gratuit
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
                Annulez à tout moment
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mockup Main View */}
        <div className="relative max-w-6xl mx-auto mt-32">
          {/* Main App Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative bg-white rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-slate-100 p-3"
          >
            <div className="bg-[#fcfdfd] border border-slate-100 rounded-[30px] overflow-hidden aspect-[16/9] relative">
              {/* Window Controls */}
              <div className="absolute top-6 left-8 flex gap-2 z-20">
                <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/30" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/20 border border-yellow-400/30" />
                <div className="w-3 h-3 rounded-full bg-green-400/20 border border-green-400/30" />
              </div>

              {/* Sidebar Simulation */}
              <div className="absolute top-0 left-0 w-64 h-full bg-white border-r border-slate-100 p-8 pt-20 space-y-8">
                <div className="space-y-4">
                  <div className="h-2 w-16 bg-slate-900 rounded-full" />
                  <div className="space-y-4 pt-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-center gap-3 group px-2 py-1 cursor-default">
                        <div className="w-5 h-5 rounded bg-slate-100 group-first:bg-emerald-100" />
                        <div className={`h-2 rounded-full ${i === 1 ? 'w-24 bg-slate-900' : 'w-20 bg-slate-200'}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Topbar Simulation */}
              <div className="absolute top-0 right-0 left-64 h-20 bg-white border-b border-slate-100 px-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <div className="w-5 h-5 rounded bg-slate-100" />
                   <div className="h-2 w-32 bg-slate-100 rounded-full" />
                </div>
                <div className="flex items-center gap-6">
                   <div className="flex gap-4">
                     <div className="w-4 h-4 bg-slate-100 rounded-full" />
                     <div className="w-4 h-4 bg-slate-100 rounded-full" />
                   </div>
                   <div className="w-10 h-10 bg-slate-200 rounded-full" />
                </div>
              </div>

              {/* Content Simulation */}
              <div className="absolute top-20 right-0 left-64 p-12">
                 <div className="flex items-center justify-between mb-16">
                    <div className="space-y-4">
                       <div className="flex items-center gap-3 text-slate-400 text-sm font-bold uppercase tracking-widest">
                          <div className="w-4 h-4 rounded-full border-2 border-slate-400" />
                          Active CV
                       </div>
                       <div className="text-4xl font-bold text-slate-900">Software Engineer</div>
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-12">
                   <div className="space-y-8">
                      <div className="h-6 w-48 bg-slate-100 rounded-full" />
                      <div className="space-y-4">
                        <div className="h-4 w-full bg-slate-50 rounded-full" />
                        <div className="h-4 w-5/6 bg-slate-50 rounded-full" />
                        <div className="h-4 w-4/6 bg-slate-50 rounded-full" />
                      </div>
                   </div>
                   <div className="bg-slate-50/50 rounded-3xl border border-dashed border-slate-200 p-8 flex flex-col items-center justify-center text-slate-300">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 mb-4 flex items-center justify-center">
                         <div className="w-6 h-6 border-2 border-slate-200 rounded" />
                      </div>
                      <div className="h-2 w-24 bg-slate-100 rounded-full" />
                   </div>
                 </div>
              </div>
            </div>

            {/* Floating Hand cursor (as in mockup) */}
            <motion.div
              animate={{ 
                x: [0, 40, 0],
                y: [0, -20, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-[60%] z-[60]"
            >
              <svg className="w-24 h-24 drop-shadow-2xl" viewBox="0 0 100 100" fill="none">
                 <circle cx="50" cy="50" r="10" fill="black" fillOpacity="0.1" />
                 <path d="M40 40 L60 60 M60 40 L40 60" stroke="white" strokeWidth="2" strokeLinecap="round" />
                 {/* Better cursor SVG */}
                 <path d="M30 30 Q35 25 40 30 L45 50 Q50 45 55 50 L60 70 Q55 75 50 70 L45 90 Q40 95 35 90 L30 30Z" fill="white" stroke="black" strokeWidth="4" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Floating Action Icons (Clap & Heart) */}
          <FloatingIcon 
            className="top-[-20px] right-[-30px] w-24 h-24" 
            bgColor="bg-[#e7f5ed]" 
            borderColor="border-white"
            delay={0.2}
            scale={1.1}
          >
            {/* Clapping Hands Icon SVG */}
            <svg className="w-12 h-12 text-[#10b981]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 21h4" />
              <path d="M12 18V2" />
              <path d="M4.93 10.93a7 7 0 0 1 14.14 0" />
              <path d="M7.76 13.76a4 4 0 0 1 8.48 0" />
            </svg>
          </FloatingIcon>

          <FloatingIcon 
            className="bottom-[80px] right-[-20px] w-20 h-20" 
            bgColor="bg-[#fff1f0]" 
            borderColor="border-white"
            delay={0.7}
            scale={1}
          >
            {/* Heart Icon SVG */}
            <svg className="w-10 h-10 text-[#f43f5e]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </FloatingIcon>

          {/* Profile Reference Badge (Louis Staub style) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute bottom-[-100px] left-8 flex items-center gap-5 bg-white p-4 pr-8 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-slate-100"
          >
            <div className="w-14 h-14 rounded-full bg-slate-500 overflow-hidden ring-4 ring-slate-50">
               <Image src="/profile.jpg" alt="User" width={56} height={56} className="object-cover" />
            </div>
            <div className="space-y-0.5 text-left">
              <p className="font-bold text-slate-900 text-lg">Louis Staub</p>
              <p className="text-sm font-medium text-slate-400">J'optimise le taux de conversion de ta landing page</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

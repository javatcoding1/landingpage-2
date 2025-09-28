'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Heart } from "lucide-react";
import { Icons } from '@/components/ui/icons';

// Top contributors data (20 contributors for 2 rows of 10)
const topContributors = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528?v=4",
    profileUrl: "https://github.com/vercel",
    name: "Vercel"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/7711062?v=4", 
    profileUrl: "https://github.com/microsoft",
    name: "Microsoft"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/69631?v=4",
    profileUrl: "https://github.com/facebook",
    name: "Facebook"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/22632046?v=4",
    profileUrl: "https://github.com/typescript",
    name: "TypeScript"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/18133?v=4",
    profileUrl: "https://github.com/git",
    name: "Git"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/54879112?v=4",
    profileUrl: "https://github.com/tailwindcss",
    name: "Tailwind CSS"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/139895814?v=4",
    profileUrl: "https://github.com/shadcn-ui",
    name: "shadcn/ui"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/6412038?v=4",
    profileUrl: "https://github.com/react",
    name: "React"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/1024025?v=4",
    profileUrl: "https://github.com/stripe",
    name: "Stripe"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/698437?v=4",
    profileUrl: "https://github.com/nodejs",
    name: "Node.js"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/317889?v=4",
    profileUrl: "https://github.com/apple",
    name: "Apple"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/9919?v=4",
    profileUrl: "https://github.com/github",
    name: "GitHub"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/1342004?v=4",
    profileUrl: "https://github.com/google",
    name: "Google"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/2918581?v=4",
    profileUrl: "https://github.com/bootstrap-vue",
    name: "Bootstrap"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/6078720?v=4",
    profileUrl: "https://github.com/prisma",
    name: "Prisma"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/12551863?v=4",
    profileUrl: "https://github.com/supabase",
    name: "Supabase"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/13142323?v=4",
    profileUrl: "https://github.com/planetscale",
    name: "PlanetScale"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/14985020?v=4",
    profileUrl: "https://github.com/railway-app",
    name: "Railway"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/8019099?v=4",
    profileUrl: "https://github.com/linear",
    name: "Linear"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/54469796?v=4",
    profileUrl: "https://github.com/clerk",
    name: "Clerk"
  }
];

// Performance metrics data for the simple radar display
const performanceData = [
  { metric: 'Performance', value: 85 },
  { metric: 'Quality', value: 92 },
  { metric: 'Security', value: 78 },
  { metric: 'Maintainability', value: 88 },
  { metric: 'Documentation', value: 75 },
  { metric: 'Community', value: 95 },
];


// Simple performance radar chart component for the stats section
const PerformanceRadarChart = () => (
  <div className="h-32 flex items-center justify-center">
    <div className="grid grid-cols-2 gap-2 w-full">
      {performanceData.map((item, index) => (
        <div key={index} className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">{item.metric}</span>
          <div className="flex items-center gap-2">
            <div className="w-12 bg-neutral-700 rounded-full h-1.5">
              <div 
                className="bg-blue-500 h-1.5 rounded-full" 
                style={{ width: `${item.value}%` }}
              />
            </div>
            <span className="text-white font-medium">{item.value}%</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const OpensourceSection = () => (
  <section className="container mx-auto flex w-full max-w-5xl flex-col items-center justify-start !px-4 py-16 text-center md:py-32 bg-neutral-950">
    <div className="flex flex-col items-center text-center">
      <h2 className="leading-tighter font-gilroy max-w-2xl bg-gradient-to-b from-white/80 via-white to-white/60 bg-clip-text text-5xl font-semibold tracking-tight text-pretty text-transparent lg:leading-[1.1] xl:text-6xl/[4rem] xl:tracking-tighter">
        Built by professionals, for professionals
      </h2>
      <p className="text-muted-foreground text-base tracking-tight mt-4 max-w-2xl">
        Join thousands of professionals contributing to our networking ecosystem. Connect with industry experts, practice together, and grow your career.
      </p>
          </div>
          
    {/* Contributors Row */}
    <div className="mt-16 w-full">
      {/* Contributors Showcase */}
      <div className="mb-8">
        <div className="space-y-6">
          <div className="flex justify-center gap-3">
            {topContributors.slice(0, 5).map((contributor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="relative group"
              >
                <img
                  src={contributor.imageUrl}
                  alt={contributor.name}
                  className="w-14 h-14 rounded-full border-2 border-neutral-600 group-hover:border-purple-400 transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center gap-3">
            {topContributors.slice(5, 10).map((contributor, index) => (
              <motion.div
                key={index + 5}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (index + 5) * 0.1, duration: 0.3 }}
                className="relative group"
              >
                <img
                  src={contributor.imageUrl}
                  alt={contributor.name}
                  className="w-14 h-14 rounded-full border-2 border-neutral-600 group-hover:border-purple-400 transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Community Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button 
          onClick={() => window.open("https://github.com/hxqlabs/helixque", "_blank")}
          className="inline-flex items-center justify-center gap-2 font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 py-2 has-[>svg]:px-3 h-8 rounded-lg px-4 text-[13.5px] whitespace-nowrap shadow-[inset_0_1px_0_0_#FFFFFF20]"
        >
          <Icons.github className="w-4 h-4" />
          Join Community
        </button>
        
        <button
          onClick={() => window.open("https://github.com/hxqlabs/helixque/fork", "_blank")}
          className="inline-flex items-center justify-center gap-2 font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-secondary-foreground hover:bg-secondary/80 py-2 has-[>svg]:px-3 h-8 rounded-lg px-4 text-[13.5px] whitespace-nowrap shadow-[inset_0_1px_0_0_#FFFFFF20]"
        >
          <Heart className="w-4 h-4" />
          Network Now
        </button>
      </div>
    </div>

  </section>
  );

export default OpensourceSection;
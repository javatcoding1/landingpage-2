"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { CloudOrbitDemo } from "@/components/ui/cloud-orbit-demo";

export function CTANew() {
  return (
    <div className="bg-background theme-container">
      <section className="bg-background flex h-full w-full items-center justify-center px-6 py-16 md:px-8">
        <div className="border-border/20 dark:border-white/10 relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border shadow-sm dark:shadow-md">
          {/* Background Pattern Overlay */}
          <div className="bg-secondary/30 dark:bg-white/5 pointer-events-none absolute inset-0 h-full w-full bg-[radial-gradient(var(--border)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] bg-[length:24px_24px]"></div>
          
          {/* Main Content Container */}
          <div className="flex flex-col items-stretch justify-center gap-12 md:gap-0 lg:flex-row lg:gap-12">
            {/* Left Content Section */}
            <div className="relative z-10 flex h-full w-full flex-col items-center gap-4 p-4 pt-16 pb-0 text-center sm:p-12 md:p-16 lg:w-1/2 lg:items-start lg:pt-20 lg:pr-0 lg:pb-20 lg:pl-14 lg:text-left">
              {/* Logo/Brand Link */}
              <Link href="#home" className="flex items-center gap-2">
                <div className="text-foreground dark:text-white flex gap-2 items-center transition-colors duration-300">
                  <img
                    src="/logo.svg"
                    alt="HelixQue Logo"
                    width={36}
                    height={40}
                    className="w-9 h-10"
                  />
                  <span className="bg-blue-100 text-blue-600 dark:bg-blue-50 dark:text-blue-600 -translate-y-2 uppercase inline-block border-2 text-xs border-blue-600 px-1 font-semibold rounded-md transition-colors duration-300">
                    HelixQue
                  </span>
                </div>
              </Link>

              {/* Main Heading */}
              <div>
                <h2 className="text-foreground mt-8 text-4xl text-[clamp(40px,10vw,44px)] leading-[1.2] font-bold tracking-tighter text-balance sm:text-5xl">
                  Ready to Accelerate Your Career?
                </h2>
              </div>

              {/* Description */}
              <div>
                <p className="text-muted-foreground leading-7 font-normal text-pretty sm:max-w-[600px] sm:text-lg">
                  Join thousands of professionals who are already networking, practicing interviews, and pitching to investors on HelixQue.
                </p>
              </div>

              {/* CTA Button */}
              <Link 
                href="#" 
                className="group/cta-button bg-foreground text-background hover:bg-foreground/90 dark:bg-white dark:text-black dark:hover:bg-gray-200 font-medium mt-8 flex h-10 items-center gap-2 rounded-full px-8 text-sm shadow-md hover:shadow-lg transition-all duration-300"
              >
                Get Started for Free
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover/cta-button:translate-x-1" />
              </Link>
            </div>

            {/* Right CloudOrbit Section */}
            <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 pb-4 lg:min-h-[500px] lg:w-1/2 lg:px-0 lg:pb-0">
              <div className="flex h-full w-full items-center justify-center lg:absolute lg:-right-5 lg:top-8 lg:w-[130%]">
                <div className="flex items-center justify-center w-full h-[320px] md:h-[400px] lg:h-[480px] scale-95 md:scale-100 lg:scale-110">
                  <CloudOrbitDemo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


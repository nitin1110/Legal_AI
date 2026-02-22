'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Gavel } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-24 py-6 bg-transparent backdrop-blur-sm"
    >
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-[#2D5BFF] rounded-xl flex items-center justify-center shadow-lg">
          <Gavel className="text-white w-6 h-6" />
        </div>
        <span className="text-2xl font-bold tracking-tight text-[#2C2638] dark:text-white">
          LegalFlow
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {['Product', 'Solutions', 'Pricing', 'Resources'].map((item) => (
          <a 
            key={item} 
            href="#" 
            className="text-sm font-medium text-[#2C2638]/70 dark:text-white/70 hover:text-[#2D5BFF] dark:hover:text-[#4D7CFF] transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:block text-sm font-bold text-[#2C2638] dark:text-white hover:opacity-70 transition-opacity">
          Log in
        </button>
        <button className="px-6 py-2.5 bg-[#2D5BFF] text-white rounded-full font-bold text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all">
          Get Started
        </button>
        <div className="ml-2">
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}

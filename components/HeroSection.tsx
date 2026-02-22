'use client';

import { Gavel, FileText, CheckSquare, ReceiptText } from 'lucide-react';
import FloatingCard from './FloatingCard';
import PortalCard from './PortalCard';
import { motion } from 'motion/react';
import { ThemeToggle } from './ThemeToggle';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center px-6 lg:px-24 transition-colors duration-300 noise-bg">
      <ThemeToggle />
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
          alt="Background"
          fill
          priority
          className="object-cover opacity-40 dark:opacity-20 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-white/80 dark:bg-black/90 transition-colors duration-300" />
      </div>

      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[400px] h-[120px] bg-white/40 dark:bg-white/5 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-[40%] right-[10%] w-[500px] h-[150px] bg-white/40 dark:bg-white/5 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[20%] right-[-10%] w-[450px] h-[130px] bg-white/40 dark:bg-white/5 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 py-20 lg:py-0">
        {/* Left Content */}
        <div className="max-w-2xl">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.8,
                  staggerChildren: 0.2
                }
              }
            }}
            className="text-5xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-[#2C2638] dark:text-white"
          >
            <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="block">
              A single platform to
            </motion.span>
            <motion.span 
              variants={{ 
                hidden: { opacity: 0 }, 
                visible: { 
                  opacity: 1,
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                } 
              }} 
              className="font-bold text-[#5C5C7A] dark:text-[#A2A9E7] block"
            >
              manage every part of
            </motion.span>
            <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="font-bold text-[#2D5BFF] dark:text-[#4D7CFF] block">
              your legal work
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-xl lg:text-2xl text-[#2D5BFF] dark:text-[#4D7CFF] font-medium max-w-lg leading-relaxed opacity-80"
          >
            Track matters, coordinate schedules, manage clients, centralize documents, and handle communication - all in one system.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 bg-[#2D5BFF] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              Get Started Free
            </button>
            <button className="px-8 py-4 bg-white dark:bg-white/10 text-[#2C2638] dark:text-white border border-black/5 dark:border-white/10 rounded-full font-bold text-lg shadow-md hover:shadow-lg hover:scale-105 transition-all">
              Book a Demo
            </button>
          </motion.div>
        </div>

        {/* Right Content - Floating Elements */}
        <div className="relative h-[600px] w-full hidden lg:block">
          {/* Billing Card */}
          <div className="absolute top-[10%] right-[10%]">
            <FloatingCard 
              icon={ReceiptText} 
              label="Billing" 
              color="blue" 
              rotation={12} 
              delay={0.4}
            />
          </div>

          {/* Matters Card */}
          <div className="absolute top-[40%] left-[0%]">
            <FloatingCard 
              icon={Gavel} 
              label="Matters" 
              color="orange" 
              rotation={12} 
              delay={0.5}
            />
          </div>

          {/* Portal Card */}
          <div className="absolute top-[45%] right-[5%]">
            <PortalCard 
              rotation={5} 
              delay={0.6}
            />
          </div>

          {/* Tasks Card */}
          <div className="absolute bottom-[15%] left-[25%]">
            <FloatingCard 
              icon={CheckSquare} 
              label="Tasks" 
              color="dark" 
              rotation={5} 
              delay={0.7}
            />
          </div>

          {/* Documents Card */}
          <div className="absolute bottom-[10%] right-[0%]">
            <FloatingCard 
              icon={FileText} 
              label="Documents" 
              color="dark" 
              rotation={5} 
              delay={0.8}
            />
          </div>
        </div>

        {/* Mobile View of Floating Elements */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
           <FloatingCard icon={ReceiptText} label="Billing" color="blue" className="px-6 py-4 text-xl justify-center" />
           <FloatingCard icon={Gavel} label="Matters" color="orange" className="px-6 py-4 text-xl justify-center" />
           <PortalCard className="w-full justify-center py-6" />
           <FloatingCard icon={CheckSquare} label="Tasks" color="dark" className="px-6 py-4 text-xl justify-center" />
           <FloatingCard icon={FileText} label="Documents" color="dark" className="px-6 py-4 text-xl justify-center" />
        </div>
      </div>
    </section>
  );
}

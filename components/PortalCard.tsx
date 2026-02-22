'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface PortalCardProps {
  rotation?: number;
  className?: string;
  delay?: number;
}

export default function PortalCard({
  rotation = 0,
  className,
  delay = 0,
}: PortalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate: rotation }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] }}
      style={{ '--rotation': `${rotation}deg` } as React.CSSProperties}
      className={cn(
        'flex items-center gap-4 px-6 py-4 rounded-[40px] bg-[#A2A9E7] dark:bg-[#3D4485]/80 dark:backdrop-blur-md shadow-xl w-[320px] transition-all duration-300 animate-float',
        'hover:shadow-2xl cursor-default',
        className
      )}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 relative">
        <Image 
          src="https://picsum.photos/seed/legal/100/100" 
          alt="Avatar" 
          fill 
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-[#3D4485] rounded-full" />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-bold text-[#2C2638] dark:text-white">John Doe - Portal</span>
        <span className="text-[10px] text-[#2C2638]/70 dark:text-white/70 leading-tight">
          Hey! Could you please review a document for me?
        </span>
        <span className="text-[10px] font-bold text-[#2C2638]/50 dark:text-white/40 mt-1">MAT-2233 - 2 h ago</span>
      </div>
      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#E67E22] rounded-full" />
    </motion.div>
  );
}

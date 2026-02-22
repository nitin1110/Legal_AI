'use client';

import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface FloatingCardProps {
  icon: LucideIcon;
  label: string;
  color: 'blue' | 'orange' | 'dark' | 'purple';
  rotation?: number;
  className?: string;
  delay?: number;
}

const colorMap = {
  blue: 'bg-[#2D5BFF] dark:bg-[#2D5BFF]/80 dark:backdrop-blur-md text-white',
  orange: 'bg-[#E67E22] dark:bg-[#E67E22]/80 dark:backdrop-blur-md text-white',
  dark: 'bg-[#2C2638] dark:bg-[#2C2638]/80 dark:backdrop-blur-md text-white',
  purple: 'bg-[#A2A9E7] dark:bg-[#A2A9E7]/80 dark:backdrop-blur-md text-[#2C2638] dark:text-white',
};

export default function FloatingCard({
  icon: Icon,
  label,
  color,
  rotation = 0,
  className,
  delay = 0,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate: rotation }}
      whileHover="hover"
      transition={{ duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] }}
      style={{ '--rotation': `${rotation}deg` } as React.CSSProperties}
      className={cn(
        'flex items-center gap-3 px-8 py-5 rounded-[40px] shadow-xl whitespace-nowrap transition-all duration-300 animate-float group',
        'hover:shadow-2xl cursor-default',
        colorMap[color],
        className
      )}
      variants={{
        hover: { scale: 1.05, y: -5 }
      }}
    >
      <motion.div
        variants={{
          hover: { rotate: [0, -10, 10, 0], scale: 1.1 }
        }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-8 h-8" strokeWidth={2.5} />
      </motion.div>
      <span className="text-2xl font-bold tracking-tight">{label}</span>
    </motion.div>
  );
}

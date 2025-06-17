import { motion, useSpring } from "framer-motion"
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card"
import {
  Star,
} from "lucide-react"

type Skill = {
  name: string;
  icon: React.ReactNode;
  description: string;
  level: number;
};

type SkillCardProps = {
  skill: Skill;
  delay: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  gradient: string;
};


// Custom hook for animated progress with spring physics

function useAnimatedProgress(targetValue: number, delay = 0) {
  const springProgress = useSpring(0, {
    stiffness: 100,
    damping: 30,
  });
  const [progress, setProgress] = useState(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(targetValue);
    }, delay);
    return () => clearTimeout(timer);
  }, [targetValue, delay]);

  useEffect(() => {
    springProgress.set(progress);
  }, [progress, springProgress]);

  useEffect(() => {
    const unsubscribe = springProgress.onChange((latest) =>
      setDisplayValue(Math.round(latest))
    );
    return () => unsubscribe();
  }, [springProgress]);

  return { progress: displayValue, springProgress };
}

export default function SkillCard({
  skill,
  delay,
  isHovered,
  onHover,
  onLeave,
  gradient,
}: SkillCardProps) {
  const { progress } = useAnimatedProgress(skill.level, delay);

  return (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      className="group"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <Card
        className={`p-6 transition-all duration-300 border-0 ${
          isHovered
            ? "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 shadow-lg scale-105"
            : "bg-gray-50/50 dark:bg-gray-700/50 hover:bg-gray-100/50 dark:hover:bg-gray-700/70"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <motion.div
              className="text-3xl"
              animate={
                isHovered ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }
              }
              transition={{ duration: 0.3 }}
            >
              {skill.icon}
            </motion.div>
            <div>
              <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                {skill.name}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {skill.description}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <motion.span
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
              animate={{ scale: isHovered ? 1.1 : 1 }}
            >
              {progress}%
            </motion.span>
            {progress >= 85 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
              </motion.div>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
          <motion.div
            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${gradient} rounded-full`}
            style={{ width: `${progress}%` }}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.div
            className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
      </Card>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Lock, Check, Coins, Sparkles } from "lucide-react";
import { useGameState } from "@/hooks/useGameState";
import { useCountdown } from "@/hooks/useCountdown";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Sun, Moon, Trophy, ArrowLeft } from "lucide-react";

const DayCard = ({
  day, completed, unlocked, isCurrent, xp, coins, onClick, nextUnlock,
}: {
  day: number; completed: boolean; unlocked: boolean; isCurrent: boolean;
  xp: number; coins: number; onClick: () => void; nextUnlock: Date | null;
}) => {
  const countdown = useCountdown(unlocked ? null : nextUnlock);

  return (
    <motion.button
      onClick={unlocked && !completed ? onClick : undefined}
      className={`relative rounded-2xl p-3 flex flex-col items-center justify-center aspect-square border-2 transition-all
        ${completed ? "bg-secondary/20 border-secondary shadow-md" : ""}
        ${isCurrent && unlocked && !completed ? "bg-primary/10 border-primary animate-pulse-glow" : ""}
        ${!unlocked ? "bg-muted/50 border-border opacity-60 cursor-not-allowed" : "cursor-pointer"}
        ${unlocked && !completed && !isCurrent ? "bg-card border-border hover:border-primary/50 hover:shadow-md" : ""}
      `}
      whileHover={unlocked && !completed ? { scale: 1.05 } : {}}
      whileTap={unlocked && !completed ? { scale: 0.95 } : {}}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: day * 0.02 }}
    >
      <span className="text-xs text-muted-foreground font-semibold">Day</span>
      <span className="text-lg font-fredoka font-bold">{day}</span>

      {completed && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -top-1 -right-1 bg-secondary rounded-full p-0.5">
          <Check className="h-3 w-3 text-secondary-foreground" />
        </motion.div>
      )}

      {!unlocked && (
        <Lock className="h-3 w-3 text-muted-foreground mt-1" />
      )}

      {!unlocked && countdown && (
        <span className="text-[9px] text-muted-foreground mt-0.5 font-mono">{countdown}</span>
      )}

      {completed && (
        <div className="flex gap-1 mt-1">
          <span className="text-[9px] flex items-center gap-0.5">🪙{coins}</span>
          <span className="text-[9px] flex items-center gap-0.5">⚡{xp}</span>
        </div>
      )}

      {isCurrent && unlocked && !completed && (
        <Sparkles className="h-3 w-3 text-primary mt-1" />
      )}
    </motion.button>
  );
};

const QuestPage = () => {
  const navigate = useNavigate();
  const { state, isDayUnlocked, getNextUnlockTime, getCurrentDay, getCompletedDays } = useGameState();
  const { dark, toggle } = useTheme();
  const currentDay = getCurrentDay();
  const completedDays = getCompletedDays();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate("/")} className="rounded-full">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="font-fredoka font-bold text-xl">💰 Money Quest</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-accent/20 px-3 py-1 rounded-full text-sm font-semibold">
              🪙 {state.totalCoins}
            </div>
            <div className="flex items-center gap-1 bg-primary/20 px-3 py-1 rounded-full text-sm font-semibold">
              ⚡ {state.totalXP} XP
            </div>
            <Button variant="ghost" size="icon" onClick={() => navigate("/rewards")} className="rounded-full">
              <Trophy className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={toggle} className="rounded-full">
              {dark ? <Sun className="h-5 w-5 text-accent" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-lg">
        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-semibold">{completedDays}/30 Days Completed</span>
            <span className="text-muted-foreground">🔥 {state.currentStreak} day streak</span>
          </div>
          <Progress value={(completedDays / 30) * 100} className="h-3 rounded-full" />
        </div>

        {/* 5x6 Grid */}
        <div className="grid grid-cols-5 gap-2 sm:gap-3">
          {state.progress.map((dayProgress) => (
            <DayCard
              key={dayProgress.day}
              day={dayProgress.day}
              completed={dayProgress.completed}
              unlocked={isDayUnlocked(dayProgress.day)}
              isCurrent={dayProgress.day === currentDay}
              xp={dayProgress.xpEarned}
              coins={dayProgress.coinsEarned}
              nextUnlock={getNextUnlockTime(dayProgress.day)}
              onClick={() => navigate(`/quiz/${dayProgress.day}`)}
            />
          ))}
        </div>

        {completedDays === 30 && (
          <motion.div
            className="mt-8 text-center bg-gradient-to-r from-accent/20 to-secondary/20 rounded-2xl p-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          >
            <div className="text-5xl mb-3">👑</div>
            <h2 className="font-fredoka font-bold text-2xl mb-2">Quest Complete!</h2>
            <p className="text-muted-foreground">You've mastered the Money Quest! You're a financial champion! 🏆</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default QuestPage;

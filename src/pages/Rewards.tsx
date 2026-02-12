import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useGameState } from "@/hooks/useGameState";
import { useTheme } from "@/hooks/useTheme";
import { badges } from "@/data/quizData";
import { ArrowLeft, Sun, Moon } from "lucide-react";

const RewardsPage = () => {
  const navigate = useNavigate();
  const { state, getCompletedDays } = useGameState();
  const { dark, toggle } = useTheme();
  const completedDays = getCompletedDays();
  const level = Math.floor(state.totalXP / 500) + 1;
  const xpInLevel = state.totalXP % 500;

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/5 via-background to-secondary/5">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate("/quest")} className="rounded-full">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="font-fredoka font-bold text-xl">🏆 Rewards</h1>
          </div>
          <Button variant="ghost" size="icon" onClick={toggle} className="rounded-full">
            {dark ? <Sun className="h-5 w-5 text-accent" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-lg space-y-6">
        {/* Stats Overview */}
        <motion.div
          className="bg-card rounded-3xl p-6 shadow-lg border border-border/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-center mb-4">
            <div className="text-5xl mb-2">🎮</div>
            <h2 className="font-fredoka font-bold text-2xl">Level {level}</h2>
            <p className="text-sm text-muted-foreground">{xpInLevel}/500 XP to next level</p>
            <Progress value={(xpInLevel / 500) * 100} className="h-2 mt-2" />
          </div>

          <div className="grid grid-cols-3 gap-3 mt-6">
            <div className="bg-primary/10 rounded-2xl p-4 text-center">
              <div className="text-2xl mb-1">📅</div>
              <div className="font-fredoka font-bold text-xl">{completedDays}</div>
              <div className="text-xs text-muted-foreground">Days</div>
            </div>
            <div className="bg-accent/10 rounded-2xl p-4 text-center">
              <div className="text-2xl mb-1">🪙</div>
              <div className="font-fredoka font-bold text-xl">{state.totalCoins}</div>
              <div className="text-xs text-muted-foreground">Coins</div>
            </div>
            <div className="bg-secondary/10 rounded-2xl p-4 text-center">
              <div className="text-2xl mb-1">🔥</div>
              <div className="font-fredoka font-bold text-xl">{state.currentStreak}</div>
              <div className="text-xs text-muted-foreground">Streak</div>
            </div>
          </div>
        </motion.div>

        {/* Badges */}
        <motion.div
          className="bg-card rounded-3xl p-6 shadow-lg border border-border/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="font-fredoka font-bold text-lg mb-4">🏅 Badge Collection</h3>
          <div className="space-y-3">
            {badges.map((badge) => {
              const earned = state.earnedBadges.includes(badge.id);
              return (
                <motion.div
                  key={badge.id}
                  className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all
                    ${earned ? "bg-accent/10 border-accent/30" : "bg-muted/30 border-border opacity-50"}`}
                  whileHover={earned ? { scale: 1.02 } : {}}
                >
                  <div className={`text-3xl ${earned ? "" : "grayscale"}`}>
                    {badge.emoji}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-fredoka font-semibold">{badge.name}</h4>
                    <p className="text-xs text-muted-foreground">{badge.description}</p>
                  </div>
                  {earned ? (
                    <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full font-semibold">Earned!</span>
                  ) : (
                    <span className="text-xs text-muted-foreground">Day {badge.requiredDay}</span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Accuracy */}
        <motion.div
          className="bg-card rounded-3xl p-6 shadow-lg border border-border/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="font-fredoka font-bold text-lg mb-4">📊 Quiz Stats</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-secondary/10 rounded-2xl p-4 text-center">
              <div className="font-fredoka font-bold text-2xl text-secondary">
                {state.progress.filter(p => p.answeredCorrectly).length}
              </div>
              <div className="text-xs text-muted-foreground">Correct Answers</div>
            </div>
            <div className="bg-coral/10 rounded-2xl p-4 text-center">
              <div className="font-fredoka font-bold text-2xl text-coral">
                {state.progress.filter(p => p.completed && !p.answeredCorrectly).length}
              </div>
              <div className="text-xs text-muted-foreground">Incorrect</div>
            </div>
          </div>
          {completedDays > 0 && (
            <div className="mt-4 text-center">
              <span className="text-sm text-muted-foreground">Accuracy: </span>
              <span className="font-fredoka font-bold text-primary">
                {Math.round((state.progress.filter(p => p.answeredCorrectly).length / completedDays) * 100)}%
              </span>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default RewardsPage;

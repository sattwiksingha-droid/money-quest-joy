import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { Sun, Moon, Coins, Trophy, Shield, Sparkles } from "lucide-react";

const FloatingCoin = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <motion.div
    className="absolute text-3xl pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%` }}
    animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
    transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
  >
    🪙
  </motion.div>
);

const Index = () => {
  const navigate = useNavigate();
  const { dark, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
      {/* Floating coins */}
      <FloatingCoin delay={0} x={10} y={20} />
      <FloatingCoin delay={0.5} x={85} y={15} />
      <FloatingCoin delay={1} x={75} y={60} />
      <FloatingCoin delay={1.5} x={15} y={70} />
      <FloatingCoin delay={2} x={50} y={10} />

      {/* Theme toggle */}
      <div className="absolute top-4 right-4 z-10">
        <Button variant="ghost" size="icon" onClick={toggle} className="rounded-full">
          {dark ? <Sun className="h-5 w-5 text-accent" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>

      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
        {/* Hero */}
        <motion.div
          className="text-center max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-7xl mb-6"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💰
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-fredoka font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            MONEY QUEST
          </h1>

          <p className="text-xl md:text-2xl font-nunito text-muted-foreground mb-2">
            Your 30-Day Financial Adventure
          </p>

          <p className="text-base text-muted-foreground mb-8 max-w-md mx-auto">
            Learn personal finance, spot scams, earn XP & badges — one fun question per day! 🎮
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { icon: <Coins className="h-4 w-4" />, text: "Earn Coins", color: "bg-accent/20 text-accent-foreground" },
              { icon: <Trophy className="h-4 w-4" />, text: "Collect Badges", color: "bg-secondary/20 text-secondary-foreground" },
              { icon: <Shield className="h-4 w-4" />, text: "Spot Scams", color: "bg-coral/20 text-coral-foreground" },
              { icon: <Sparkles className="h-4 w-4" />, text: "Level Up", color: "bg-violet/20 text-violet-foreground" },
            ].map((pill) => (
              <motion.div
                key={pill.text}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${pill.color}`}
                whileHover={{ scale: 1.05 }}
              >
                {pill.icon}
                {pill.text}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              onClick={() => navigate("/quest")}
              className="text-lg px-10 py-6 rounded-2xl font-fredoka font-semibold bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg shadow-primary/25"
            >
              🚀 Start Your 30-Day Money Quest
            </Button>
          </motion.div>

          <p className="mt-6 text-sm text-muted-foreground">
            Free • No sign-up required • Learn at your pace
          </p>
        </motion.div>

        {/* How it works */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { emoji: "📅", title: "1 Question / Day", desc: "Answer one fun quiz question each day for 30 days" },
            { emoji: "🧠", title: "Learn Finance", desc: "Budgeting, saving, investing & scam awareness" },
            { emoji: "🏆", title: "Earn Rewards", desc: "Collect coins, XP, and unlock cool badges" },
          ].map((step, i) => (
            <motion.div
              key={step.title}
              className="bg-card rounded-2xl p-6 text-center shadow-md border border-border/50"
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.2)" }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl mb-3">{step.emoji}</div>
              <h3 className="font-fredoka font-semibold text-lg mb-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Index;

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useGameState } from "@/hooks/useGameState";
import { useCountdown } from "@/hooks/useCountdown";
import { quizQuestions } from "@/data/quizData";
import { ArrowLeft, Check, X } from "lucide-react";

const confettiEmojis = ["🎉", "🪙", "⭐", "✨", "💰", "🔥"];

const QuizPage = () => {
  const { day } = useParams<{ day: string }>();
  const dayNum = parseInt(day || "1");
  const navigate = useNavigate();
  const { state, isDayUnlocked, answerQuestion, getNextUnlockTime } = useGameState();
  const [selected, setSelected] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const question = quizQuestions.find(q => q.day === dayNum);
  const dayProgress = state.progress[dayNum - 1];
  const nextUnlock = getNextUnlockTime(dayNum + 1);
  const nextCountdown = useCountdown(nextUnlock);

  if (!question) {
    navigate("/quest");
    return null;
  }

  if (!isDayUnlocked(dayNum)) {
    navigate("/quest");
    return null;
  }

  const alreadyCompleted = dayProgress.completed;
  const isCorrect = confirmed ? selected === question.correctIndex : null;

  const handleConfirm = () => {
    if (selected === null) return;
    setConfirmed(true);
    if (!alreadyCompleted) {
      answerQuestion(dayNum, selected);
      if (selected === question.correctIndex) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }
    }
  };

  const displaySelected = alreadyCompleted ? dayProgress.selectedAnswer : selected;
  const displayConfirmed = alreadyCompleted || confirmed;
  const displayCorrect = alreadyCompleted ? dayProgress.answeredCorrectly : isCorrect;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      {/* Confetti */}
      <AnimatePresence>
        {showConfetti && (
          <>
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl pointer-events-none z-50"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: -20,
                  rotate: 0,
                  opacity: 1,
                }}
                animate={{
                  y: window.innerHeight + 20,
                  rotate: Math.random() * 360,
                  opacity: 0,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 + Math.random(), delay: Math.random() * 0.5 }}
              >
                {confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)]}
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate("/quest")} className="rounded-full">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="font-fredoka font-bold text-lg">Day {dayNum}</h1>
            <span className="text-xs text-muted-foreground bg-primary/10 px-2 py-0.5 rounded-full">{question.topic}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-lg">
        {/* Question Card */}
        <motion.div
          className="bg-card rounded-3xl p-6 shadow-lg border border-border/50 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-lg font-semibold font-nunito leading-relaxed mb-6">{question.question}</p>

          <div className="space-y-3">
            {question.options.map((option, idx) => {
              const isThis = displaySelected === idx;
              const isCorrectOption = idx === question.correctIndex;
              let optionClass = "bg-muted/30 border-border hover:border-primary/50";

              if (displayConfirmed) {
                if (isCorrectOption) optionClass = "bg-secondary/20 border-secondary";
                else if (isThis && !isCorrectOption) optionClass = "bg-destructive/10 border-destructive/50";
                else optionClass = "bg-muted/20 border-border opacity-50";
              } else if (isThis) {
                optionClass = "bg-primary/10 border-primary shadow-sm";
              }

              return (
                <motion.button
                  key={idx}
                  onClick={() => !displayConfirmed && setSelected(idx)}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center gap-3 ${optionClass}`}
                  whileHover={!displayConfirmed ? { scale: 1.02 } : {}}
                  whileTap={!displayConfirmed ? { scale: 0.98 } : {}}
                >
                  <span className="w-8 h-8 rounded-full bg-background border-2 border-current flex items-center justify-center text-sm font-bold shrink-0">
                    {displayConfirmed && isCorrectOption ? <Check className="h-4 w-4 text-secondary" /> :
                     displayConfirmed && isThis && !isCorrectOption ? <X className="h-4 w-4 text-destructive" /> :
                     String.fromCharCode(65 + idx)}
                  </span>
                  <span className="font-medium text-sm">{option}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Confirm Button */}
        {!displayConfirmed && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <Button
              size="lg"
              onClick={handleConfirm}
              disabled={selected === null}
              className="w-full rounded-2xl font-fredoka font-semibold text-lg py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              Confirm Answer ✓
            </Button>
          </motion.div>
        )}

        {/* Result */}
        {displayConfirmed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Feedback message */}
            <div className={`rounded-2xl p-5 ${displayCorrect ? "bg-secondary/10 border border-secondary/30" : "bg-coral/10 border border-coral/30"}`}>
              <div className="text-2xl mb-2">{displayCorrect ? "🔥" : "💡"}</div>
              <h3 className="font-fredoka font-bold text-lg mb-1">
                {displayCorrect ? "You're on fire!" : "Almost! Here's what to remember..."}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{question.explanation}</p>
            </div>

            {/* Rewards */}
            <div className="flex gap-3">
              <div className="flex-1 bg-accent/10 rounded-2xl p-4 text-center border border-accent/20">
                <div className="text-2xl mb-1">🪙</div>
                <div className="font-fredoka font-bold text-lg">+{dayProgress.coinsEarned}</div>
                <div className="text-xs text-muted-foreground">Coins</div>
              </div>
              <div className="flex-1 bg-primary/10 rounded-2xl p-4 text-center border border-primary/20">
                <div className="text-2xl mb-1">⚡</div>
                <div className="font-fredoka font-bold text-lg">+{dayProgress.xpEarned}</div>
                <div className="text-xs text-muted-foreground">XP</div>
              </div>
            </div>

            {/* Next Day Info */}
            {dayNum < 30 && (
              <div className="bg-card rounded-2xl p-5 text-center border border-border/50">
                <p className="text-sm text-muted-foreground mb-1">Next question unlocks in</p>
                <p className="font-fredoka font-bold text-2xl text-primary">
                  {nextCountdown || "⏳ Calculating..."}
                </p>
                <p className="text-xs text-muted-foreground mt-1">Come back tomorrow! 🌟</p>
              </div>
            )}

            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/quest")}
              className="w-full rounded-2xl font-fredoka"
            >
              ← Back to Quest Map
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;

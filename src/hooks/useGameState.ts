import { useState, useEffect, useCallback } from "react";
import { quizQuestions, badges, type QuizQuestion, type Badge } from "@/data/quizData";

export interface DayProgress {
  day: number;
  completed: boolean;
  answeredCorrectly: boolean | null;
  selectedAnswer: number | null;
  completedAt: string | null;
  xpEarned: number;
  coinsEarned: number;
}

export interface GameState {
  progress: DayProgress[];
  totalXP: number;
  totalCoins: number;
  currentStreak: number;
  earnedBadges: string[];
  questStartedAt: string | null;
}

const STORAGE_KEY = "money-quest-state";

const createInitialState = (): GameState => ({
  progress: Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    completed: false,
    answeredCorrectly: null,
    selectedAnswer: null,
    completedAt: null,
    xpEarned: 0,
    coinsEarned: 0,
  })),
  totalXP: 0,
  totalCoins: 0,
  currentStreak: 0,
  earnedBadges: [],
  questStartedAt: null,
});

export function useGameState() {
  const [state, setState] = useState<GameState>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : createInitialState();
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const isDayUnlocked = useCallback((day: number): boolean => {
    if (day === 1) return true;
    const prevDay = state.progress[day - 2];
    if (!prevDay.completed || !prevDay.completedAt) return false;
    const completedTime = new Date(prevDay.completedAt).getTime();
    const now = Date.now();
    return now - completedTime >= 24 * 60 * 60 * 1000;
  }, [state.progress]);

  const getNextUnlockTime = useCallback((day: number): Date | null => {
    if (day === 1) return null;
    const prevDay = state.progress[day - 2];
    if (!prevDay.completed || !prevDay.completedAt) return null;
    return new Date(new Date(prevDay.completedAt).getTime() + 24 * 60 * 60 * 1000);
  }, [state.progress]);

  const getCurrentDay = useCallback((): number => {
    for (let i = 0; i < 30; i++) {
      if (!state.progress[i].completed) return i + 1;
    }
    return 30;
  }, [state.progress]);

  const answerQuestion = useCallback((day: number, selectedIndex: number) => {
    const question = quizQuestions.find(q => q.day === day);
    if (!question) return;

    const isCorrect = selectedIndex === question.correctIndex;
    const xp = isCorrect ? question.xpReward : Math.floor(question.xpReward * 0.3);
    const coins = isCorrect ? question.coinReward : Math.floor(question.coinReward * 0.3);

    setState(prev => {
      const newProgress = [...prev.progress];
      newProgress[day - 1] = {
        ...newProgress[day - 1],
        completed: true,
        answeredCorrectly: isCorrect,
        selectedAnswer: selectedIndex,
        completedAt: new Date().toISOString(),
        xpEarned: xp,
        coinsEarned: coins,
      };

      const completedDays = newProgress.filter(p => p.completed).length;
      let streak = 0;
      for (let i = completedDays - 1; i >= 0; i--) {
        if (newProgress[i].completed) streak++;
        else break;
      }

      const newBadges = [...prev.earnedBadges];
      badges.forEach(badge => {
        if (completedDays >= badge.requiredDay && !newBadges.includes(badge.id)) {
          newBadges.push(badge.id);
        }
      });

      return {
        ...prev,
        progress: newProgress,
        totalXP: prev.totalXP + xp,
        totalCoins: prev.totalCoins + coins,
        currentStreak: streak,
        earnedBadges: newBadges,
        questStartedAt: prev.questStartedAt || new Date().toISOString(),
      };
    });
  }, []);

  const getCompletedDays = useCallback(() => {
    return state.progress.filter(p => p.completed).length;
  }, [state.progress]);

  const resetGame = useCallback(() => {
    setState(createInitialState());
  }, []);

  return {
    state,
    isDayUnlocked,
    getNextUnlockTime,
    getCurrentDay,
    answerQuestion,
    getCompletedDays,
    resetGame,
  };
}

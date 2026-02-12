

# 🎮 MONEY QUEST — 30-Day Financial Quiz App

## Overview
A gamified, friendly financial literacy quiz app where users complete one question per day over 30 days. The experience feels like a game — not a test — with coins, XP, badges, progress tracking, and motivational micro-animations.

## Tech Stack
- **Frontend:** React + Tailwind CSS + Framer Motion (animations)
- **Backend:** Supabase (auth, database, progress tracking)
- **Theme:** Light mode default with dark mode toggle

---

## Screens & Features

### 1. 🏠 Home / Landing Screen
- Playful hero section with "Start Your 30-Day Money Quest" CTA button
- Animated coins and sparkle effects
- Brief explanation of the challenge (learn finance, earn XP, collect badges)
- Login / Sign Up buttons (Supabase Auth — email/password)

### 2. 🗓️ 30-Day Calendar Grid
- 5×6 grid of day cards (Day 1–30)
- **Unlocked days:** Bright, clickable cards with checkmarks for completed days
- **Locked days:** Greyed out with a lock icon and countdown timer to next unlock
- **Current day:** Glowing/pulsing highlight to draw attention
- Day cards show earned coins/XP for completed days
- Real 24-hour timer: each day unlocks exactly 24 hours after the previous day's question was answered

### 3. 📝 Daily Question Screen
- Clean MCQ card with 4 answer options
- Topics rotate across: budgeting, saving, investing, digital payments, scam awareness (OTP fraud, phishing, fake loans, KYC fraud)
- Tap to select → Confirm → Reveal correct answer with explanation
- Correct: coin burst animation + XP gain + motivational message ("You're on fire! 🔥")
- Incorrect: gentle encouragement ("Almost! Here's what to remember...") + smaller XP reward for participation
- "Come back tomorrow" message with countdown timer after answering

### 4. 🏆 Rewards & Progress Screen
- Overall progress bar (X/30 days completed)
- Total coins earned & XP level
- Badge collection (e.g., "Budget Boss," "Scam Spotter," "Savings Star," "Finance Rookie")
- Badges unlock at milestones (Day 7, 14, 21, 30)
- Streak tracker with streak-based bonus rewards

### 5. 👤 Simple Profile
- Display name, avatar selection (cute illustrated avatars)
- Stats summary (days completed, total XP, badges)
- Dark/light mode toggle

---

## Database (Supabase)
- **Users/Profiles table:** user info, avatar, display name
- **Quiz Questions table:** 30 pre-loaded questions with answers and explanations
- **User Progress table:** tracks which days are completed, answers given, XP earned, unlock timestamps
- **Badges table:** badge definitions and user badge awards
- Row-Level Security on all user data

---

## Design Style
- Bright gradients (blue → green, gold accents)
- Rounded cards with soft shadows
- Cute icons (coins, shields, stars, locks)
- Micro-animations: fade-ins, scale effects, coin bursts, confetti on milestones
- Friendly typography, emoji-style feedback
- Mobile-first responsive layout

---

## Quiz Content
- 30 hardcoded questions covering:
  - Personal finance basics (saving, budgeting, compound interest)
  - Digital payments & UPI safety
  - Scam awareness (phishing, OTP fraud, fake loan apps, KYC scams)
  - Online financial safety tips
- Each question includes a short educational explanation shown after answering


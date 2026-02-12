export interface QuizQuestion {
  id: number;
  day: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic: string;
  xpReward: number;
  coinReward: number;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1, day: 1,
    question: "What is the 50/30/20 rule in budgeting?",
    options: ["50% savings, 30% needs, 20% wants", "50% needs, 30% wants, 20% savings", "50% wants, 30% savings, 20% needs", "50% investments, 30% needs, 20% fun"],
    correctIndex: 1,
    explanation: "The 50/30/20 rule suggests spending 50% of income on needs, 30% on wants, and 20% on savings/debt repayment.",
    topic: "Budgeting", xpReward: 100, coinReward: 10,
  },
  {
    id: 2, day: 2,
    question: "What is compound interest?",
    options: ["Interest only on the principal", "Interest on interest + principal", "A fixed monthly fee", "A government tax on savings"],
    correctIndex: 1,
    explanation: "Compound interest is interest calculated on both the initial principal and the accumulated interest — making your money grow faster over time!",
    topic: "Saving", xpReward: 100, coinReward: 10,
  },
  {
    id: 3, day: 3,
    question: "What should you NEVER share with anyone claiming to be from your bank?",
    options: ["Your account number", "Your OTP or PIN", "Your bank branch name", "Your account type"],
    correctIndex: 1,
    explanation: "Banks will NEVER ask for your OTP or PIN. Sharing these can give scammers full access to your account.",
    topic: "Scam Awareness", xpReward: 100, coinReward: 10,
  },
  {
    id: 4, day: 4,
    question: "What is an emergency fund?",
    options: ["Money for vacations", "3-6 months of expenses saved for unexpected events", "A government insurance scheme", "A type of investment fund"],
    correctIndex: 1,
    explanation: "An emergency fund is savings set aside (typically 3-6 months of expenses) for unexpected situations like job loss or medical emergencies.",
    topic: "Saving", xpReward: 100, coinReward: 10,
  },
  {
    id: 5, day: 5,
    question: "Which of these is a sign of a phishing email?",
    options: ["Email from your known contact", "Urgent request with a suspicious link", "A newsletter you subscribed to", "A receipt from a recent purchase"],
    correctIndex: 1,
    explanation: "Phishing emails often create urgency and include suspicious links to steal your personal information. Always verify the sender!",
    topic: "Scam Awareness", xpReward: 100, coinReward: 10,
  },
  {
    id: 6, day: 6,
    question: "What does UPI stand for?",
    options: ["Universal Payment Interface", "Unified Payments Interface", "United Payment Integration", "Unified Process Interface"],
    correctIndex: 1,
    explanation: "UPI stands for Unified Payments Interface — a real-time payment system that allows instant money transfers between bank accounts.",
    topic: "Digital Payments", xpReward: 100, coinReward: 10,
  },
  {
    id: 7, day: 7,
    question: "What is the safest way to create a strong password?",
    options: ["Your birthday", "A mix of uppercase, lowercase, numbers & symbols", "Your pet's name", "The word 'password123'"],
    correctIndex: 1,
    explanation: "Strong passwords use a mix of characters and are at least 12 characters long. Never use personal info that others can guess!",
    topic: "Online Safety", xpReward: 150, coinReward: 15,
  },
  {
    id: 8, day: 8,
    question: "What is a mutual fund?",
    options: ["A savings account", "A pool of money from many investors managed by professionals", "A government bond", "A type of insurance"],
    correctIndex: 1,
    explanation: "A mutual fund pools money from multiple investors to invest in stocks, bonds, or other assets, managed by professional fund managers.",
    topic: "Investing", xpReward: 100, coinReward: 10,
  },
  {
    id: 9, day: 9,
    question: "If someone calls saying you won a lottery you never entered, what should you do?",
    options: ["Share your bank details to receive the prize", "Pay the 'processing fee' they ask for", "Hang up — it's a scam", "Forward the call to friends"],
    correctIndex: 2,
    explanation: "You can't win a lottery you never entered! This is a classic scam. Never share financial details or pay fees for 'prizes.'",
    topic: "Scam Awareness", xpReward: 100, coinReward: 10,
  },
  {
    id: 10, day: 10,
    question: "What is inflation?",
    options: ["When prices decrease over time", "When the value of money increases", "When prices increase and purchasing power decreases", "A type of investment return"],
    correctIndex: 2,
    explanation: "Inflation means prices rise over time, reducing what your money can buy. That's why saving alone isn't enough — investing helps beat inflation!",
    topic: "Finance Basics", xpReward: 100, coinReward: 10,
  },
  {
    id: 11, day: 11,
    question: "What is KYC in banking?",
    options: ["Keep Your Cash", "Know Your Customer", "Key Year Certificate", "Knowledge Yield Card"],
    correctIndex: 1,
    explanation: "KYC (Know Your Customer) is a verification process banks use to confirm your identity. Beware of fake KYC update requests — they're often scams!",
    topic: "Scam Awareness", xpReward: 100, coinReward: 10,
  },
  {
    id: 12, day: 12,
    question: "What is the benefit of starting to invest early?",
    options: ["No benefit — timing doesn't matter", "You pay less tax", "Compound growth works longer for you", "Banks give you higher interest rates"],
    correctIndex: 2,
    explanation: "Starting early gives your money more time to compound and grow. Even small amounts invested early can become significant over decades!",
    topic: "Investing", xpReward: 100, coinReward: 10,
  },
  {
    id: 13, day: 13,
    question: "What is a credit score?",
    options: ["Your total bank balance", "A number representing your creditworthiness", "The interest rate on your loan", "Your salary bracket"],
    correctIndex: 1,
    explanation: "A credit score (usually 300-900) reflects how reliably you repay debts. Higher scores help you get better loan terms and interest rates.",
    topic: "Finance Basics", xpReward: 100, coinReward: 10,
  },
  {
    id: 14, day: 14,
    question: "Which of these is a red flag for a fake loan app?",
    options: ["Listed on official app stores only", "Asks for access to all your contacts and photos", "Has clear terms and conditions", "Offers standard interest rates"],
    correctIndex: 1,
    explanation: "Fake loan apps often request excessive permissions (contacts, photos, etc.) to later harass or blackmail you. Stick to verified lenders!",
    topic: "Scam Awareness", xpReward: 150, coinReward: 15,
  },
  {
    id: 15, day: 15,
    question: "What is diversification in investing?",
    options: ["Putting all money in one stock", "Spreading investments across different assets", "Only investing in gold", "Changing investments daily"],
    correctIndex: 1,
    explanation: "Diversification means spreading your investments across different asset types to reduce risk. Don't put all your eggs in one basket!",
    topic: "Investing", xpReward: 100, coinReward: 10,
  },
  {
    id: 16, day: 16,
    question: "What should you check before clicking a payment link?",
    options: ["The color of the button", "The URL and sender's identity", "The font size", "Nothing — just click it"],
    correctIndex: 1,
    explanation: "Always verify the URL (look for https://) and confirm the sender before clicking any payment link. Fraudulent links can steal your money!",
    topic: "Online Safety", xpReward: 100, coinReward: 10,
  },
  {
    id: 17, day: 17,
    question: "What is SIP in investing?",
    options: ["Single Investment Plan", "Systematic Investment Plan", "Savings Insurance Policy", "Standard Income Program"],
    correctIndex: 1,
    explanation: "SIP (Systematic Investment Plan) lets you invest a fixed amount regularly in mutual funds, building wealth gradually through disciplined investing.",
    topic: "Investing", xpReward: 100, coinReward: 10,
  },
  {
    id: 18, day: 18,
    question: "Why should you avoid sharing your screen during a 'support' call?",
    options: ["It uses too much data", "The caller can see your passwords and OTPs", "Your screen might break", "It's just bad manners"],
    correctIndex: 1,
    explanation: "Screen sharing with scammers lets them see everything — your OTPs, passwords, and banking details. Legitimate support never asks for screen access!",
    topic: "Scam Awareness", xpReward: 100, coinReward: 10,
  },
  {
    id: 19, day: 19,
    question: "What is the difference between a debit card and a credit card?",
    options: ["They are exactly the same", "Debit uses your money; credit is borrowed money", "Credit cards are free to use", "Debit cards have no limits"],
    correctIndex: 1,
    explanation: "A debit card spends money directly from your bank account. A credit card lets you borrow money that you must repay, often with interest if not paid on time.",
    topic: "Finance Basics", xpReward: 100, coinReward: 10,
  },
  {
    id: 20, day: 20,
    question: "What does 'too good to be true' usually mean in financial offers?",
    options: ["It's a great opportunity", "It's guaranteed profit", "It's likely a scam or very risky", "It means low risk"],
    correctIndex: 2,
    explanation: "Offers promising unrealistic returns (like 'double your money in a week') are almost always scams or extremely risky schemes. Be skeptical!",
    topic: "Scam Awareness", xpReward: 100, coinReward: 10,
  },
  {
    id: 21, day: 21,
    question: "What is an index fund?",
    options: ["A fund managed by a single person", "A fund that tracks a market index like Nifty or S&P 500", "A type of savings account", "A government retirement fund"],
    correctIndex: 1,
    explanation: "Index funds passively track a market index, offering broad market exposure with low fees. They're great for beginner investors!",
    topic: "Investing", xpReward: 150, coinReward: 15,
  },
  {
    id: 22, day: 22,
    question: "What is two-factor authentication (2FA)?",
    options: ["Using two different passwords", "An extra security step beyond just a password", "Having two bank accounts", "A type of encryption"],
    correctIndex: 1,
    explanation: "2FA adds an extra verification step (like an OTP or fingerprint) beyond your password, making your accounts much harder to hack.",
    topic: "Online Safety", xpReward: 100, coinReward: 10,
  },
  {
    id: 23, day: 23,
    question: "What is the best way to track your expenses?",
    options: ["Don't bother tracking", "Use a budgeting app or spreadsheet regularly", "Check your balance once a year", "Ask friends how much you spent"],
    correctIndex: 1,
    explanation: "Regularly tracking expenses helps you understand spending patterns, find areas to save, and stay on budget. Apps make this super easy!",
    topic: "Budgeting", xpReward: 100, coinReward: 10,
  },
  {
    id: 24, day: 24,
    question: "What should you do if you accidentally shared your OTP with someone?",
    options: ["Wait and see what happens", "Immediately contact your bank and change passwords", "Share it with more people for help", "Nothing — OTPs expire anyway"],
    correctIndex: 1,
    explanation: "Act immediately! Contact your bank, change your passwords, and monitor your account. Even though OTPs expire, the damage can happen in seconds.",
    topic: "Scam Awareness", xpReward: 100, coinReward: 10,
  },
  {
    id: 25, day: 25,
    question: "What is the power of 'paying yourself first'?",
    options: ["Buying things for yourself before paying bills", "Saving/investing a portion before spending on anything else", "Getting paid before your colleagues", "Having multiple income sources"],
    correctIndex: 1,
    explanation: "Paying yourself first means automatically setting aside savings/investments from each paycheck before spending on anything else. It builds discipline!",
    topic: "Saving", xpReward: 100, coinReward: 10,
  },
  {
    id: 26, day: 26,
    question: "Which is safer for online shopping?",
    options: ["Saving card details on every website", "Using virtual cards or secure payment gateways", "Sharing card photos on chat", "Using public WiFi for payments"],
    correctIndex: 1,
    explanation: "Virtual cards and secure payment gateways add layers of protection. Avoid saving card details on multiple sites and never use public WiFi for payments!",
    topic: "Online Safety", xpReward: 100, coinReward: 10,
  },
  {
    id: 27, day: 27,
    question: "What is a Ponzi scheme?",
    options: ["A legitimate investment strategy", "A fraud where old investors are paid with new investors' money", "A type of mutual fund", "A government savings program"],
    correctIndex: 1,
    explanation: "Ponzi schemes use new investors' money to pay earlier investors, creating an illusion of returns. They always collapse eventually — avoid them!",
    topic: "Scam Awareness", xpReward: 100, coinReward: 10,
  },
  {
    id: 28, day: 28,
    question: "Why is health insurance important even when you're young?",
    options: ["It's not important when young", "Premiums are lower when young & accidents can happen anytime", "Only old people need it", "It's required by law everywhere"],
    correctIndex: 1,
    explanation: "Health insurance premiums are lowest when you're young, and medical emergencies don't wait for age. Starting early saves money and provides protection!",
    topic: "Finance Basics", xpReward: 100, coinReward: 10,
  },
  {
    id: 29, day: 29,
    question: "What is the smartest approach to managing debt?",
    options: ["Ignore it and hope it goes away", "Pay minimum on all debts equally", "Pay off high-interest debt first while maintaining minimums on others", "Take more loans to pay off existing ones"],
    correctIndex: 2,
    explanation: "The 'avalanche method' — paying off high-interest debt first — saves you the most money over time while maintaining minimum payments on other debts.",
    topic: "Finance Basics", xpReward: 100, coinReward: 10,
  },
  {
    id: 30, day: 30,
    question: "What's the most important financial habit you can build?",
    options: ["Spending everything you earn", "Living below your means and investing the difference", "Avoiding all financial products", "Only using cash, never digital payments"],
    correctIndex: 1,
    explanation: "Living below your means and investing the surplus is the foundation of financial freedom. Congratulations on completing the 30-Day Money Quest! 🎉🏆",
    topic: "Finance Basics", xpReward: 200, coinReward: 25,
  },
];

export interface Badge {
  id: string;
  name: string;
  emoji: string;
  description: string;
  requiredDay: number;
}

export const badges: Badge[] = [
  { id: "finance-rookie", name: "Finance Rookie", emoji: "🌱", description: "Started your Money Quest!", requiredDay: 1 },
  { id: "budget-boss", name: "Budget Boss", emoji: "💰", description: "Completed 7 days of financial learning!", requiredDay: 7 },
  { id: "scam-spotter", name: "Scam Spotter", emoji: "🛡️", description: "14 days of scam awareness!", requiredDay: 14 },
  { id: "savings-star", name: "Savings Star", emoji: "⭐", description: "21 days — you're a savings superstar!", requiredDay: 21 },
  { id: "money-master", name: "Money Master", emoji: "👑", description: "Completed all 30 days! You're a Money Master!", requiredDay: 30 },
];

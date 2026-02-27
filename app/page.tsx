"use client";

import { useState } from "react";

// ── Types ────────────────────────────────────────────────────────────────────

type PersonalityKey =
  | "bold-adventurer"
  | "zen-minimalist"
  | "practical-pragmatist"
  | "night-owl";

interface Personality {
  key: PersonalityKey;
  name: string;
  coffee: string;
  tagline: string;
  description: string;
  emoji: string;
}

interface AnswerOption {
  emoji: string;
  text: string;
  personality: PersonalityKey;
}

interface Question {
  question: string;
  options: AnswerOption[];
}

// ── Data ─────────────────────────────────────────────────────────────────────

const personalities: Record<PersonalityKey, Personality> = {
  "bold-adventurer": {
    key: "bold-adventurer",
    name: "The Bold Adventurer",
    coffee: "Single-Origin Ethiopian Pour-Over",
    tagline: "Life's too short for boring coffee.",
    description:
      "You chase intensity and new experiences. Bright, fruity, complex — just like you. You drink coffee that sparks conversation and demands attention.",
    emoji: "🔥",
  },
  "zen-minimalist": {
    key: "zen-minimalist",
    name: "The Zen Minimalist",
    coffee: "Japanese Iced Pour-Over",
    tagline: "Clarity in every cup.",
    description:
      "You value calm, intention, and simplicity. A perfectly brewed, crystal-clear iced pour-over matches your deliberate, peaceful approach to life.",
    emoji: "🌿",
  },
  "practical-pragmatist": {
    key: "practical-pragmatist",
    name: "The Practical Pragmatist",
    coffee: "Classic Drip Coffee",
    tagline: "No fuss. Just results.",
    description:
      "You need coffee that works as hard as you do. Reliable, consistent, and gets the job done — you're not here for the ceremony, you're here to perform.",
    emoji: "⚡",
  },
  "night-owl": {
    key: "night-owl",
    name: "The Night Owl",
    coffee: "Cold Brew Concentrate",
    tagline: "The night is young. So is your second wind.",
    description:
      "When the world sleeps, you come alive. Smooth, dark, and potent — cold brew concentrate is built for marathon sessions and midnight breakthroughs.",
    emoji: "🌙",
  },
};

const questions: Question[] = [
  {
    question: "Your ideal Saturday morning looks like…",
    options: [
      {
        emoji: "🧗",
        text: "Hiking a trail I've never tried",
        personality: "bold-adventurer",
      },
      {
        emoji: "🧘",
        text: "Slow morning, meditation, journaling",
        personality: "zen-minimalist",
      },
      {
        emoji: "📋",
        text: "Checking off my weekend to-do list",
        personality: "practical-pragmatist",
      },
      {
        emoji: "😴",
        text: "Sleeping in until noon, no shame",
        personality: "night-owl",
      },
    ],
  },
  {
    question: "Your workspace vibe is…",
    options: [
      {
        emoji: "🎨",
        text: "Colorful and covered in inspiration",
        personality: "bold-adventurer",
      },
      {
        emoji: "🪴",
        text: "Clean desk, one plant, natural light",
        personality: "zen-minimalist",
      },
      {
        emoji: "🗂️",
        text: "Organized with labeled folders everywhere",
        personality: "practical-pragmatist",
      },
      {
        emoji: "🌑",
        text: "Dark, quiet, and only I understand the system",
        personality: "night-owl",
      },
    ],
  },
  {
    question: "When you travel, you…",
    options: [
      {
        emoji: "🗺️",
        text: "Wing it and discover things along the way",
        personality: "bold-adventurer",
      },
      {
        emoji: "🏡",
        text: "Find one neighborhood and really live in it",
        personality: "zen-minimalist",
      },
      {
        emoji: "📅",
        text: "Have a detailed itinerary before you leave",
        personality: "practical-pragmatist",
      },
      {
        emoji: "✈️",
        text: "Book red-eye flights and arrive at midnight",
        personality: "night-owl",
      },
    ],
  },
  {
    question: "Your relationship with caffeine is…",
    options: [
      {
        emoji: "🎲",
        text: "Always trying something new and exotic",
        personality: "bold-adventurer",
      },
      {
        emoji: "🍃",
        text: "Mindful — one perfect cup, savored slowly",
        personality: "zen-minimalist",
      },
      {
        emoji: "⏰",
        text: "Scheduled — same time, same amount, every day",
        personality: "practical-pragmatist",
      },
      {
        emoji: "🌙",
        text: "Necessary — especially after 10 PM",
        personality: "night-owl",
      },
    ],
  },
  {
    question: "Your friends would describe you as…",
    options: [
      {
        emoji: "🚀",
        text: "The one who suggests wild ideas",
        personality: "bold-adventurer",
      },
      {
        emoji: "🕊️",
        text: "The calm, grounding presence",
        personality: "zen-minimalist",
      },
      {
        emoji: "🛠️",
        text: "The one who actually makes things happen",
        personality: "practical-pragmatist",
      },
      {
        emoji: "🦇",
        text: "The mysterious one who appears after dark",
        personality: "night-owl",
      },
    ],
  },
  {
    question: "Your ideal creative flow state is…",
    options: [
      {
        emoji: "⛰️",
        text: "Fueled by adrenaline and big ideas",
        personality: "bold-adventurer",
      },
      {
        emoji: "🌊",
        text: "Quiet focus, no distractions, pure flow",
        personality: "zen-minimalist",
      },
      {
        emoji: "📊",
        text: "Structured sprints with clear goals",
        personality: "practical-pragmatist",
      },
      {
        emoji: "🌃",
        text: "2 AM when the world finally goes quiet",
        personality: "night-owl",
      },
    ],
  },
];

// ── Scoring ───────────────────────────────────────────────────────────────────

const TIE_BREAK_ORDER: PersonalityKey[] = [
  "bold-adventurer",
  "zen-minimalist",
  "practical-pragmatist",
  "night-owl",
];

function calculateResult(answers: PersonalityKey[]): PersonalityKey {
  const counts: Record<PersonalityKey, number> = {
    "bold-adventurer": 0,
    "zen-minimalist": 0,
    "practical-pragmatist": 0,
    "night-owl": 0,
  };
  for (const a of answers) counts[a]++;

  let winner: PersonalityKey = TIE_BREAK_ORDER[0];
  let max = 0;
  for (const key of TIE_BREAK_ORDER) {
    if (counts[key] > max) {
      max = counts[key];
      winner = key;
    }
  }
  return winner;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function QuizPage() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<PersonalityKey[]>([]);
  const [result, setResult] = useState<PersonalityKey | null>(null);
  const [copied, setCopied] = useState(false);

  async function handleShare(personalityName: string) {
    const url = "https://quiz-project-sigma-swart.vercel.app";
    const text = `I got "${personalityName}" on the Coffee Personality Quiz! ☕ What's yours?`;
    if (navigator.share) {
      await navigator.share({ title: "What's Your Coffee Personality?", text, url });
    } else {
      await navigator.clipboard.writeText(`${text}\n${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  const selectedForCurrent = answers[currentQuestion] ?? null;

  function handleSelect(personality: PersonalityKey) {
    const updated = [...answers];
    updated[currentQuestion] = personality;
    setAnswers(updated);
  }

  function handleNext() {
    if (!selectedForCurrent) return;
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setResult(calculateResult(answers));
    }
  }

  function handleBack() {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  }

  function handleRetake() {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  }

  // ── Intro Screen ────────────────────────────────────────────────────────────
  if (!started) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-5 py-12">
        <div className="max-w-lg w-full text-center">
          <div className="text-7xl mb-6">☕</div>
          <h1
            className="text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            What&apos;s Your{" "}
            <span style={{ color: "#f59e0b" }}>Coffee</span>{" "}
            Personality?
          </h1>
          <p className="text-gray-400 text-base sm:text-lg mb-10 leading-relaxed">
            6 questions. 4 personality types. Your perfect brew awaits. ✨
          </p>
          <button
            onClick={() => setStarted(true)}
            className="w-full sm:w-auto px-10 py-4 rounded-full text-lg font-semibold text-black transition-all duration-200 hover:brightness-110 active:scale-95"
            style={{ backgroundColor: "#f59e0b" }}
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  // ── Result Screen ───────────────────────────────────────────────────────────
  if (result) {
    const p = personalities[result];
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-5 py-12">
        <div className="max-w-lg w-full">
          <div
            className="rounded-2xl border p-6 sm:p-8 text-center"
            style={{ backgroundColor: "#111111", borderColor: "#2a2a2a" }}
          >
            <div className="text-6xl mb-4">{p.emoji}</div>
            <p className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: "#f59e0b" }}>
              Your Coffee Personality
            </p>
            <h2
              className="text-2xl sm:text-4xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {p.name}
            </h2>
            <p className="text-gray-400 italic mb-6 text-sm sm:text-base">&ldquo;{p.tagline}&rdquo;</p>

            <div
              className="rounded-xl p-4 sm:p-5 mb-6 text-left"
              style={{ backgroundColor: "#1a1a1a", borderColor: "#2a2a2a", border: "1px solid" }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#f59e0b" }}>
                Your Perfect Cup
              </p>
              <p className="text-white text-lg sm:text-xl font-semibold">{p.coffee}</p>
            </div>

            <p className="text-gray-400 leading-relaxed mb-8 text-sm sm:text-base">{p.description}</p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => handleShare(p.name)}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-black transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{ backgroundColor: "#f59e0b" }}
              >
                {copied ? "Link Copied! ✓" : "Share My Result"}
              </button>
              <button
                onClick={handleRetake}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold border transition-all duration-200 hover:border-gray-500 active:scale-95"
                style={{ borderColor: "#2a2a2a", color: "#9ca3af", backgroundColor: "transparent" }}
              >
                Retake Quiz
              </button>
            </div>
          </div>
          <p className="text-center text-gray-600 text-sm mt-6">Made by Fuzail Kadri</p>
        </div>
      </div>
    );
  }

  // ── Question Screen ─────────────────────────────────────────────────────────
  const q = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-5 py-12">
      <div className="max-w-lg w-full">
        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-6">
          {questions.map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full transition-all duration-300"
              style={{
                backgroundColor:
                  i <= currentQuestion ? "#f59e0b" : "#2a2a2a",
                opacity: i <= currentQuestion ? 1 : 0.4,
              }}
            />
          ))}
        </div>

        {/* Card */}
        <div
          className="rounded-2xl border p-5 sm:p-8"
          style={{ backgroundColor: "#111111", borderColor: "#2a2a2a" }}
        >
          <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "#f59e0b" }}>
            Question {currentQuestion + 1} of {questions.length}
          </p>
          <h2
            className="text-lg sm:text-2xl font-bold text-white mb-5 leading-snug"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            {q.question}
          </h2>

          <div className="flex flex-col gap-3 mb-6">
            {q.options.map((opt) => {
              const isSelected = selectedForCurrent === opt.personality;
              return (
                <button
                  key={opt.personality}
                  onClick={() => handleSelect(opt.personality)}
                  className="text-left rounded-xl px-4 py-4 border transition-all duration-200 flex items-center gap-3 hover:border-amber-500 active:scale-[0.98]"
                  style={{
                    backgroundColor: isSelected
                      ? "rgba(245, 158, 11, 0.08)"
                      : "#1a1a1a",
                    borderColor: isSelected ? "#f59e0b" : "#2a2a2a",
                  }}
                >
                  <span className="text-2xl flex-shrink-0">{opt.emoji}</span>
                  <span
                    className="font-medium text-sm sm:text-base"
                    style={{ color: isSelected ? "#f59e0b" : "#e5e7eb" }}
                  >
                    {opt.text}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className="flex-1 py-3.5 rounded-full text-sm font-medium border transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:border-gray-500"
              style={{
                borderColor: "#2a2a2a",
                color: "#9ca3af",
                backgroundColor: "transparent",
              }}
            >
              ← Back
            </button>
            <button
              onClick={handleNext}
              disabled={!selectedForCurrent}
              className="flex-[2] py-3.5 rounded-full text-sm font-semibold text-black transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:brightness-110 active:scale-95"
              style={{ backgroundColor: "#f59e0b" }}
            >
              {isLastQuestion ? "See My Result →" : "Next →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

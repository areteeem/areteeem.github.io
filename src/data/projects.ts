export type Project = {
  number: string;
  name: string;
  slug: string;
  className: string;
  category: string;
  year: string;
  role: string;
  description: string;
  image: string;
  problem: string;
  approach: string;
  architecture: string;
  result: string;
};

export const projects: Project[] = [
  {
    number: "01",
    name: "TutPro",
    slug: "tutpro",
    className: "project--tutpro",
    category: "Education platform",
    year: "In progress",
    role: "Product design, frontend, systems",
    description: "A local-first workspace for educators to run lessons, schedules, payments, and student progress.",
    image: "https://picsum.photos/seed/tutpro-learning-workspace/1600/1000",
    problem: "Teaching operations span schedules, lesson planning, student records, payment tracking, and communication. They need to stay dependable even when connectivity is not.",
    approach: "A teacher workspace and student portal separate the operational center from student-facing tasks while preserving a clear ownership boundary for data.",
    architecture: "Local browser storage provides the fast working copy. Supabase-backed synchronization and school-scoped access controls support the path to shared operation.",
    result: "The active system covers lesson management, scheduling, homework, grades, payments, reports, offline persistence, and online synchronization work."
  },
  {
    number: "02",
    name: "ReTrace",
    slug: "retrace",
    className: "",
    category: "AI learning tool",
    year: "2026",
    role: "Product design, AI workflow, frontend",
    description: "A maths learning workspace that finds the first wrong turn in a solution and turns it into focused practice.",
    image: "https://picsum.photos/seed/math-reasoning-blueprint/1600/900",
    problem: "Many AI learning tools provide an answer before locating the misconception that caused a student to make a mistake.",
    approach: "The workflow reviews a typed or photographed solution, identifies the earliest invalid step, tests the likely misconception, and creates a next learning activity.",
    architecture: "A Next.js interface turns structured Gemini output into an editable visual trace. The prototype is local-first, with browser storage holding the learning library.",
    result: "The working prototype supports photo input, structured diagnosis, editable transcription, targeted quizzes, flashcards, practice sets, summaries, and saved material."
  },
  {
    number: "03",
    name: "GalaxyBar",
    slug: "galaxybar",
    className: "project--galaxy",
    category: "macOS utility",
    year: "In progress",
    role: "Native app design, Swift, Bluetooth",
    description: "A lightweight menu bar controller for checking battery status and switching Samsung Galaxy Buds modes.",
    image: "https://picsum.photos/seed/galaxy-buds-menu-bar/1400/1000",
    problem: "Checking battery or changing noise-control modes should not require opening a full device-management app.",
    approach: "A compact native status item puts connection state, battery status, and sound-mode changes in one predictable location.",
    architecture: "The AppKit menu bar interface is connected to a Bluetooth service and Galaxy Buds protocol implementation through CoreBluetooth.",
    result: "The current build connects to the device, reads battery and active mode, and switches ANC, ambient, and off states."
  }
];

export type Project = {
  number: string; name: string; slug: string; label: string; year: string; role: string;
  description: string; context: string; areas: string[]; image?: string; visual: string;
  featured?: boolean; problem: string; approach: string; architecture: string; result: string;
  decisions: string[]; metrics?: string[]; externalUrl?: string;
};

export const projects: Project[] = [
  {
    number: "01", name: "TutPro", slug: "tutpro", label: "EdTech · Product · 2025-present", year: "2025-present", role: "Founder · Product Lead · Developer", featured: true, externalUrl: "https://tutpro.org", image: "/images/tutpro.webp", visual: "workspace",
    description: "A multi-user education platform for tutors and schools that unifies lessons, schedules, homework, grading, payments, student management, and learning workflows in one operating system.",
    context: "TutPro supports 7,500 active students and 39 teachers. Its current operating record includes 28,773+ lessons, 11,459+ lesson plans, and 500,000+ learning cards.",
    areas: ["Product design", "React", "Supabase", "System architecture", "Educational UX"],
    problem: "Teaching operations span planning, scheduling, learning materials, payments, and student progress. Those workflows need to remain dependable in daily use.",
    approach: "TutPro grew from a personal workflow into separate teacher and student surfaces, with a product model built around how educational work actually happens.",
    architecture: "Local persistence supports day-to-day continuity. Online sync, authentication, visibility boundaries, and school-scoped data support collaboration.",
    decisions: ["Separated teacher and student workflows so each surface has an appropriate level of complexity.", "Kept core teaching actions close to the lesson and learner context rather than distributing them across disconnected tools.", "Designed data boundaries for individual, school, and shared educational work."],
    result: "A commercial education platform used internationally.",
    metrics: ["7,500 active students", "39 teachers", "500,000+ learning cards", "28,773+ lessons", "11,459+ lesson plans"]
  },
  {
    number: "02", name: "ReTrace", slug: "retrace", label: "AI · Learning · 2026", year: "2026", role: "Product design · AI workflows · Frontend", featured: true, image: "/images/retrace.webp", visual: "trace",
    description: "An AI reasoning debugger that finds the first wrong turn in a student's solution, identifies the likely misconception, and turns it into targeted learning material.",
    context: "The prototype connects solution diagnosis with assessments, flashcards, practice, and saved learning material so the feedback can become a next action rather than a final verdict.",
    areas: ["Product design", "AI workflows", "Next.js", "Learning UX"],
    problem: "Most AI learning tools reach for an answer before locating the misconception that caused a student to make a mistake.",
    approach: "The product reviews a typed or photographed solution, identifies the earliest invalid step, tests the likely misconception, then creates a focused learning activity.",
    architecture: "A Next.js interface translates structured Gemini responses into editable reasoning traces and local learning material.",
    decisions: ["Made the first invalid step the primary unit of feedback.", "Kept diagnosis editable so a learner can correct an input before continuing.", "Connected explanations to practice and saved material instead of treating them as one-off chat output."],
    result: "A hackathon-ready local prototype with diagnosis, assessments, flashcards, practice, and saved material."
  },
  {
    number: "03", name: "Evaly", slug: "evaly", label: "Assessment · Security · 2025-present", year: "2025-present", role: "Independent Developer", visual: "assessment", featured: true,
    description: "An academic examination platform rebuilt from the open-source HeyForm foundation for structured educational testing, proctoring, and assessment integrity.",
    context: "Evaly has recorded 6,350+ assessments, bringing an operational scale requirement to timing, reporting, question delivery, and integrity signals.",
    areas: ["TypeScript", "JavaScript", "Supabase", "Frontend security", "Educational UX"],
    problem: "General-purpose forms do not provide the controls or observability required for higher-integrity educational examinations.",
    approach: "A form workflow was rebuilt around timed examinations, evaluation, course isolation, and test integrity.",
    architecture: "Assessment events, monitoring signals, randomized questions and answers, and reporting support a specialized examination workflow.",
    decisions: ["Focused the interface on the examination flow, not generic form-building.", "Used randomized question and answer delivery to reduce simple answer sharing.", "Made timing and monitoring states visible enough for educators to review what occurred."],
    result: "6,350+ assessments conducted.", metrics: ["6,350+ assessments conducted"]
  },
  {
    number: "04", name: "GalaxyBar", slug: "galaxybar", label: "macOS · Hardware · In progress", year: "Current", role: "Native app design · Swift · Bluetooth", image: "/images/galaxybar.webp", visual: "buds",
    description: "A lightweight native macOS menu bar utility for controlling Samsung Galaxy Buds, checking connection and battery state, and switching ANC modes without opening a full app.",
    context: "The current build handles the three everyday listening states: ANC, ambient sound, and off, alongside connection and battery feedback.",
    areas: ["Swift", "AppKit", "CoreBluetooth", "Protocol integration"],
    problem: "Battery and noise-control changes should not require opening a full management application.",
    approach: "A compact menu-bar interface brings connection state, battery levels, and mode changes into one predictable location.",
    architecture: "AppKit and a status item connect to CoreBluetooth and a Galaxy Buds protocol implementation.",
    decisions: ["Placed the core controls in the menu bar to keep the utility available without adding window management.", "Prioritized connection, battery, and active mode as the minimum useful status set.", "Used native macOS patterns instead of reproducing a mobile companion-app interface."],
    result: "The current build connects, reads battery and active mode, and switches ANC, ambient, and off states."
  },
  {
    number: "05", name: "Cyclic Sequence Analyser", slug: "cyclic-sequence-analyser", label: "Mathematics · React · 2025", year: "2025", role: "Developer", visual: "signal",
    description: "A React application that applies the Discrete Fourier Transform to cyclic numerical sequences and expresses detected patterns as closed-form trigonometric equations.",
    context: "The tool converts a sequence from a table of values into a readable mathematical model, linking algorithmic analysis with a learning-oriented interface.",
    areas: ["React", "DFT", "KaTeX", "Mathematical visualisation"],
    problem: "Periodic patterns can be difficult to interpret from raw numerical sequences.",
    approach: "The application applies DFT analysis and presents discovered periodicity as readable trigonometric expressions.",
    architecture: "React interface with mathematical rendering and calculation-driven visualisation.",
    decisions: ["Presented the computed result as an equation, not only as frequency-domain output.", "Used mathematical typesetting to keep transformations readable.", "Kept input, calculation, and visual explanation in a single workflow."],
    result: "A technical experiment connecting algorithmic analysis and a readable learning interface."
  },
  {
    number: "06", name: "Financial Intelligence Tracker", slug: "financial-intelligence", label: "FinTech · React · 2025", year: "2025", role: "Product design · Frontend", visual: "finance",
    description: "A prize-winning financial tracking application focused on spending analysis, budgeting, data organisation, and legible financial visualisation.",
    context: "The work explored how a financial overview can move beyond isolated transactions and totals into a clearer, decision-ready personal picture.",
    areas: ["React", "Frontend architecture", "Data visualisation", "Product design"],
    problem: "Personal financial information needs a clearer structure than isolated transactions and totals.",
    approach: "A product concept focused on budgeting, analysis, and legible financial views.",
    architecture: "React-based interface and data visualisation work.",
    decisions: ["Organized views around spending and budget questions rather than raw transaction storage.", "Used visual hierarchy to make trends easier to scan.", "Kept the product scope centred on practical personal-finance actions."],
    result: "Prize-winning project."
  },
  {
    number: "07", name: "Search for the Lost World", slug: "lost-world", label: "Game development · 2024", year: "2024", role: "Game design · Developer", image: "/images/lost-world.webp", visual: "world",
    description: "A prize-winning Unity adventure game that approaches ecology and environmental protection through missions, narrative, and interactive educational themes.",
    context: "The game treats environmental learning as a world the player can explore and affect, rather than a passive sequence of facts.",
    areas: ["Unity", "C#", "Game design", "Interactive education"],
    problem: "Environmental learning is more memorable when players can act within a coherent world rather than only receive information.",
    approach: "Mission-based gameplay connects narrative, ecology, and educational themes.",
    architecture: "Unity and C# game development.",
    decisions: ["Used mission structure to give educational themes a reason to exist inside the game.", "Connected ecology and narrative instead of treating learning content as a separate quiz layer.", "Designed for participation and discovery over passive explanation."],
    result: "Prize-winning project."
  },
  {
    number: "08", name: "CareBridge", slug: "carebridge", label: "Health · Hackathon · 2026", year: "Jul-Aug 2026", role: "CareBridge Developer · Health Track", visual: "carebridge",
    description: "An evidence-linked medical-record handoff platform built during PeddieHacks 2026 to make important health information easier to structure, understand, and share temporarily.",
    context: "Built in a 48-hour international hackathon with 300+ registered participants. CareBridge advanced to live presentation and judging, earning $200+ in prizes.",
    areas: ["Health records", "QR sharing", "Multilingual UX", "Evidence-linked workflows"],
    problem: "Important health information can be fragmented when a person needs to hand it over quickly across language and context boundaries.",
    approach: "Developed workflows for structured health-record extraction, medication and allergy summaries, multilingual information, source-linked evidence, and temporary QR-based sharing.",
    architecture: "The product concept combines structured record fields with temporary QR sharing and source-linked evidence so handoff information can remain traceable.",
    decisions: ["Kept medication and allergy summaries prominent for fast handoff.", "Included multilingual information to reduce a common communication barrier.", "Used temporary QR-based sharing rather than assuming permanent, unrestricted access."],
    result: "PeddieHacks 2026 Health Track entry, presented live at the judging stage. Hosted by the Peddie School Computer Science Club with sponsors including NordVPN, Arduino, CodeCrafters, Art of Problem Solving, Interview Cake, .XYZ, and DBAcademy.",
    metrics: ["48-hour international hackathon", "300+ registered participants", "$200+ in prizes", "Live presentation and judging stage"]
  },
  {
    number: "09", name: "Sign2Graph", slug: "sign2graph", label: "AI · Accessibility · Hackathon · 2026", year: "Jul-Aug 2026", role: "Sign2Graph Developer · 3rd Place Overall", visual: "sign2graph",
    description: "An AI-powered STEM learning platform that combines webcam-based air writing, gesture recognition, mathematical-input classification, animated explanations, and accessibility-oriented learning features.",
    context: "Sign2Graph won 3rd place overall at STEMist Hacks IV, an international hackathon with 400+ registered participants. The event offered $2,500 in cash and promoted $30,000+ in credits and subscriptions.",
    areas: ["Gesture recognition", "Air writing", "Mathematical input", "Accessibility"],
    problem: "Mathematical input and visual explanation can be barriers for learners who do not thrive in conventional keyboard-first interfaces.",
    approach: "Combined webcam-based air writing, gesture recognition, input classification, animated explanations, and accessibility-oriented learning features into one STEM learning workflow.",
    architecture: "The platform joins live camera input with gesture and mathematical-input interpretation before presenting a learning-focused visual response.",
    decisions: ["Made air writing and gesture recognition part of the core input path, not a cosmetic addition.", "Paired recognized input with animated explanation to make the next step clearer.", "Used accessibility-oriented interaction as a product requirement from the beginning."],
    result: "3rd place overall at STEMist Hacks IV. T-Mobile was the presenting sponsor; the judging and workshop panel included professionals from Microsoft, Walmart Global Tech, Disney, Oracle, Electronic Arts, and Caterpillar.",
    metrics: ["3rd place overall", "400+ registered participants", "$2,500 cash offered", "$30,000+ credits and subscriptions promoted"]
  }
];

export const socials = {
  github: "https://github.com/areteeem",
  linkedin: "https://www.linkedin.com/in/artem-kachan/",
  telegram: "https://t.me/ar_kch",
  instagram: "https://instagram.com/ar_kch",
  email: "mailto:kacanartem95@gmail.com",
  cv: "https://1drv.ms/w/c/15f9fbe75eefc0c1/IQDytdg7vUdNSZx1iFPgjbdEAb2CO-M-wJq-OmV3N1G-N7s"
};

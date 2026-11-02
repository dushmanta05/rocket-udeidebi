# AGENTS.md

Instructions and guidelines for AI agents working on **Arpita's Launch Pad** (`rocket-udeidebi`).

## Project Overview

- **Purpose:** A PPT-style interactive bachelorette party website ("Arpita's Launch Pad") for Arpita, designed to run on a laptop connected to a TV, and responsive on mobile.
- **Tone:** Full chaos roasts among work friends, siblings, and cousins.
- **Stack:** Vite + React + TypeScript + GSAP (MotionPath) + Framer Motion + Plain CSS (CSS variables) + canvas-confetti.
- **Runtime:** 100% frontend only. Node 24 with `pnpm`. No backend, no database, no runtime network calls, no analytics. Must work fully offline after `pnpm build` (`base: './'`).

## Coding Standards

**Coding standard: do not add comments when generating code unless one is absolutely necessary.** The bar is a reader who knows the language and can see the code. A comment earns its place only by carrying something the code cannot: a schema trap, a constraint from the shared database, a decision that looks wrong until you know what broke last time. If it could be deleted without losing information, delete it.

These do not earn their place, and the codebase has too many of them already:

- Restating the next line. `// Loop over the rows`, `// Set the title`.
- Naming a function above its own declaration. The signature says it.
- Section banners inside a function (`// --- validation ---`). Extract or leave.
- Narrating a change (`// now uses the new helper`). That is what git is for.
- Explaining a language or library feature to a reader who is using it.

Prefer a clearer name or a smaller function over a comment explaining a murky one. When a comment is worth writing, write it once, at the highest point it applies to: a package or type doc rather than the same note repeated on five methods.

### General Code Guidelines
- Use TypeScript with strict types. Never use `any` unless strictly unavoidable.
- Keep components small and focused on a single responsibility.
- Strict separation of data and UI: All copy, lists, roast text, rules, and timeline stops live in `src/data/` as typed arrays/objects. Never hardcode content directly inside JSX components.
- Robust asset handling: Never allow missing images, videos, or audio files to break or crash the UI. Always fall back cleanly to the `Placeholder` component or SVG placeholders.
- Respect `prefers-reduced-motion` in all GSAP timelines and Framer Motion transitions.

## Git & Commits

- Commit meaningful changes only, one distinct change per commit.
- Use Conventional Commits: `type(scope): subject` or `type: subject`, with `feat`, `fix`, `perf`, `refactor`, `docs`, `style`, `test` or `chore`.
- Keep the subject concise and all lowercase, with no trailing period.
- No description: the subject line is the whole message.
- No `Co-Authored-By` line, for Claude or anyone else, and no other attribution or trailer.
- Always run the build/type check (`pnpm build` or `pnpm tsc --noEmit`) and verify clean output before committing.
- **Never commit `PLAN.md`:** All persistent specifications live in `docs/CONTEXT.md`. `PLAN.md` is strictly ignored in `.gitignore`.

## Session Workflow & Progress Tracking

1. **Start of Session:** Always read `docs/PROGRESS.md` and `docs/CONTEXT.md` to see the current state, active tasks, and implementation specs.
2. **Implementation:** Work on one distinct task or component at a time, adhering strictly to the no-comments rule.
3. **End of Task / Session:** Always update `docs/PROGRESS.md` with what was completed, current state, and next steps before committing.
4. **Commit:** Commit each distinct working change with a concise conventional commit message matching the commit rules above.

## Directory Structure

```text
rocket-udeidebi/
├── docs/
│   ├── CONTEXT.md       # Full project brief, section specs, character personas, animation specs
│   └── PROGRESS.md      # Living roadmap, section checklist, status tracker, and session notes
├── public/
│   ├── audio/           # Sound clips and background music (optional, graceful failure)
│   ├── images/          # Real photos when supplied (placeholders used otherwise)
│   └── videos/          # Wish video clips
├── src/
│   ├── components/      # Shared UI pieces (Placeholder, Hippo, Penguin, Rocket, ProgressRocket, etc.)
│   │   └── art/         # Standalone SVG art placeholders for characters and props
│   ├── data/            # Strictly typed data files (timeline, awards, bag items, rules, wishes, etc.)
│   ├── hooks/           # Navigation, keyboard shortcuts, swipe detection, audio controller
│   ├── sections/        # The 13 distinct section components
│   ├── styles/          # Plain CSS variables and global theme styles
│   ├── App.tsx          # Root container and section coordinator
│   └── main.tsx         # Application entry point
├── AGENTS.md            # Agent instructions and standards
└── README.md
```

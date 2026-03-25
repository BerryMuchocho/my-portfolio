function ReactIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="8" ry="3.3" stroke="currentColor" strokeWidth="1.4" />
      <ellipse
        cx="12"
        cy="12"
        rx="8"
        ry="3.3"
        stroke="currentColor"
        strokeWidth="1.4"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="8"
        ry="3.3"
        stroke="currentColor"
        strokeWidth="1.4"
        transform="rotate(120 12 12)"
      />
    </svg>
  )
}

function JavaScriptIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4.5" y="4.5" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 9.2v5.3c0 1.3-.7 2-1.9 2-1 0-1.7-.4-2.1-1.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13.5 15.7c.4.6 1 .9 1.8.9 1 0 1.7-.5 1.7-1.2 0-.8-.5-1.1-1.8-1.6-1.2-.4-2.1-1-2.1-2.3 0-1.4 1.1-2.4 2.8-2.4 1.2 0 2 .4 2.6 1.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function TailwindIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 10.2c1.1-1.8 2.4-2.7 4.1-2.7 2.5 0 3.2 1.7 4 3 .6 1 1.1 1.6 2.4 1.6 1 0 1.9-.5 2.5-1.5-1.1 1.8-2.4 2.7-4.1 2.7-2.5 0-3.2-1.7-4-3-.6-1-1.1-1.6-2.4-1.6-1 0-1.9.5-2.5 1.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 14.2c1.1-1.8 2.4-2.7 4.1-2.7 2.5 0 3.2 1.7 4 3 .6 1 1.1 1.6 2.4 1.6 1 0 1.9-.5 2.5-1.5-1.1 1.8-2.4 2.7-4.1 2.7-2.5 0-3.2-1.7-4-3-.6-1-1.1-1.6-2.4-1.6-1 0-1.9.5-2.5 1.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function RouterStateIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 7.5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 12h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 16.5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16.5" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function ToolingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4.5 5.5 8.2 12 12l6.5-3.8L12 4.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M5.5 8.2V15.8L12 19.5l6.5-3.7V8.2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 12v7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export const skillIcons = {
  react: ReactIcon,
  javascript: JavaScriptIcon,
  tailwind: TailwindIcon,
  routerState: RouterStateIcon,
  tooling: ToolingIcon,
}

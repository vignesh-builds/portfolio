// Small shared pieces: line icons and the section heading.
const paths = {
  code: "M16 18l6-6-6-6M8 6l-6 6 6 6",
  layout: "M3 4h18v16H3zM3 9h18M9 9v11",
  db: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  tools: "M14 6a4 4 0 005 5l-9 9a2.1 2.1 0 01-3-3l9-9a4 4 0 00-2-2z",
  coffee: "M17 8h1a4 4 0 010 8h-1M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4zM6 2v2M10 2v2M14 2v2",
  check: "M5 12.5l4.5 4.5L19 7.5",
  "arrow-right": "M5 12h14M12 5l7 7-7 7",
  github:
    "M15 22v-4a4.8 4.8 0 00-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 004 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2",
  linkedin:
    "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM6 4a2 2 0 11-4 0 2 2 0 014 0z",
  mail: "M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zM22 6l-10 7L2 6",
  download: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3",
  moon: "M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z",
  sun: "M12 8a4 4 0 100 8 4 4 0 000-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4",
  user: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 100 8 4 4 0 000-8z",
  pin: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0116 0zM12 7a3 3 0 100 6 3 3 0 000-6z",
  folder: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z",
  cap: "M22 10L12 5 2 10l10 5 10-5zM6 12v5c3 2 9 2 12 0v-5",
  calendar: "M3 4h18v18H3zM16 2v4M8 2v4M3 10h18",
  send: "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z",
  external: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3",
  up: "M12 19V5M5 12l7-7 7 7",
  trophy:
    "M6 9H4.5a2.5 2.5 0 010-5H6M18 9h1.5a2.5 2.5 0 000-5H18M4 22h16M10 14.7V17c0 .55-.47.98-.97 1.2C7.85 18.75 7 20.2 7 22M14 14.7V17c0 .55.47.98.97 1.2C16.15 18.75 17 20.2 17 22M18 2H6v7a6 6 0 0012 0V2z",
  target: "M12 22a10 10 0 100-20 10 10 0 000 20zM12 18a6 6 0 100-12 6 6 0 000 12zM12 14a2 2 0 100-4 2 2 0 000 4z",
};

export function Icon({ name, size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}

// Section title with a short gold underline, like the design
export function SectionHead({ icon, title, accent }) {
  return (
    <header className="sec-head">
      <span className="sec-icon">
        <Icon name={icon} size={26} />
      </span>
      <h2>
        {title} {accent && <span>{accent}</span>}
      </h2>
    </header>
  );
}

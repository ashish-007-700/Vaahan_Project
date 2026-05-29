const icons = {
  route: (
    <>
      <path d="M5 18c4-7 10-1 14-8" />
      <path d="M5 18h4" />
      <path d="M15 6h4v4" />
    </>
  ),
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" />
    </>
  ),
  nodes: (
    <>
      <circle cx="6" cy="7" r="2" />
      <circle cx="18" cy="7" r="2" />
      <circle cx="12" cy="17" r="2" />
      <path d="M8 8.5l2.8 5.3M16 8.5l-2.8 5.3M8 7h8" />
    </>
  ),
  signal: (
    <>
      <path d="M4 16h3M10 16h3M16 16h4" />
      <path d="M5.5 16v-5M11.5 16V7M18 16V4" />
    </>
  ),
  bolt: (
    <>
      <path d="M13 2L5 13h6l-1 9 8-12h-6l1-8z" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12M18 6L6 18" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </>
  ),
  moon: (
    <>
      <path d="M20 15.2A8.5 8.5 0 0 1 8.8 4a7 7 0 1 0 11.2 11.2z" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </>
  )
};

export default function Icon({ name, size = 24, title }) {
  return (
    <svg
      aria-hidden={title ? undefined : "true"}
      aria-label={title}
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  );
}

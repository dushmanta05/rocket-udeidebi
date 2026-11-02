interface MenuBoardArtProps {
  size?: number | string
  className?: string
}

export function MenuBoardArt({ size = 160, className = '' }: MenuBoardArtProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="25" y="20" width="110" height="125" rx="10" fill="#fef3c7" stroke="#b45309" strokeWidth="4" />
      <line x1="25" y1="50" x2="135" y2="50" stroke="#d97706" strokeWidth="2.5" />
      <circle cx="80" cy="35" r="8" fill="#f59e0b" />
      <line x1="40" y1="70" x2="120" y2="70" stroke="#92400e" strokeWidth="3" strokeLinecap="round" />
      <line x1="40" y1="90" x2="120" y2="90" stroke="#92400e" strokeWidth="3" strokeLinecap="round" />
      <line x1="40" y1="110" x2="105" y2="110" stroke="#92400e" strokeWidth="3" strokeLinecap="round" />
      <line x1="40" y1="130" x2="95" y2="130" stroke="#92400e" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

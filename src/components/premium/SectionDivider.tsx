/**
 * Flödande SVG-vågdelare mellan sektioner. Ren CSS-animation (subtil),
 * inga klient-hooks. `fill` matchar nästa sektions bakgrundsfärg.
 */
interface SectionDividerProps {
  /** Färg på vågen – ska matcha sektionen nedanför. */
  fill?: string
  /** Vänd vågen (för övergång åt andra hållet). */
  flip?: boolean
  className?: string
}

export function SectionDivider({
  fill = '#ffffff',
  flip = false,
  className = '',
}: SectionDividerProps) {
  return (
    <div
      aria-hidden
      className={`relative w-full leading-none ${flip ? 'rotate-180' : ''} ${className}`}
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="block w-full h-[60px] sm:h-[90px]"
      >
        <path
          fill={fill}
          d="M0,40 C240,90 480,0 720,30 C960,60 1200,90 1440,45 L1440,90 L0,90 Z"
        />
      </svg>
    </div>
  )
}

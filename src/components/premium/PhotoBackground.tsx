import Image from 'next/image'
import { MeshBackground } from './MeshBackground'

/**
 * Tom platshållare. När inget foto anges visar vi enbart mesh-bakgrunden
 * (ren grön gradient) i stället för ett orelaterat foto. Sätt riktiga foton
 * per plats senare (se BILDER.md).
 */
export const PLACEHOLDER_PHOTO = ''

type MeshVariant = 'forest' | 'cream' | 'memorial'

interface PhotoBackgroundProps {
  /** Bildsökväg. Default = den tillfälliga platshållaren. */
  src?: string
  alt?: string
  /** Mesh-variant som visas under bilden (fallback om bild saknas). */
  variant?: MeshVariant
  /**
   * Mörk overlay-styrka för läsbar text ovanpå.
   * 'strong' = mycket text, 'medium' = balans, 'soft' = dekor.
   * Overlayn är mörkast i topp/botten och lättast i mitten så själva
   * bilden syns skarpt medan texten förblir läsbar.
   */
  overlay?: 'strong' | 'medium' | 'soft' | 'none'
  /** object-position på bilden, t.ex. 'center', 'top', '50% 30%'. */
  objectPosition?: string
  /** Ladda direkt (above-the-fold hero). */
  priority?: boolean
  className?: string
}

const OVERLAY: Record<NonNullable<PhotoBackgroundProps['overlay']>, string> = {
  strong:
    'bg-gradient-to-b from-forest-deep/65 via-forest-deep/25 to-forest-deep/70',
  medium:
    'bg-gradient-to-b from-forest-deep/55 via-forest-deep/15 to-forest-deep/60',
  soft: 'bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent',
  none: '',
}

/**
 * Bakgrundsfoto med mörk overlay för heroes/sektioner.
 * Mesh ligger kvar under som fallback. Lägg som absolut lager bakom innehåll
 * (förälder bör vara `relative overflow-hidden`).
 */
export function PhotoBackground({
  src = PLACEHOLDER_PHOTO,
  alt = '',
  variant = 'forest',
  overlay = 'strong',
  objectPosition = 'center',
  priority = false,
  className = '',
}: PhotoBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Fallback-mesh under bilden (visas ensam när inget foto anges) */}
      <MeshBackground variant={variant} />
      {src && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          quality={90}
          priority={priority}
          className="object-cover"
          style={{ objectPosition }}
        />
      )}
      {overlay !== 'none' && (
        <div className={`absolute inset-0 ${OVERLAY[overlay]}`} />
      )}
    </div>
  )
}

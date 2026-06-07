/**
 * Återanvändbar gradient-mesh-bakgrund med mjuka driftande blobbar + film-korn.
 * Ersätter foton i heroes/CTA. Lägg som absolut lager bakom innehållet.
 *
 * variant:
 *  - 'forest' : mörk grön (ljus text ovanpå)
 *  - 'cream'  : ljus grädde (mörk text ovanpå)
 */
type MeshVariant = 'forest' | 'cream' | 'memorial'

const MESH_CLASS: Record<MeshVariant, string> = {
  forest: 'mesh-forest',
  cream: 'mesh-cream',
  memorial: 'mesh-memorial',
}

const BLOBS: Record<MeshVariant, [string, string, string]> = {
  forest: ['rgba(111,179,122,0.45)', 'rgba(46,125,50,0.45)', 'rgba(194,161,77,0.20)'],
  cream: ['rgba(111,179,122,0.30)', 'rgba(194,161,77,0.22)', 'rgba(46,125,50,0.14)'],
  memorial: ['rgba(74,82,90,0.45)', 'rgba(184,153,90,0.22)', 'rgba(74,82,90,0.30)'],
}

export function MeshBackground({
  variant = 'forest',
  className = '',
}: {
  variant?: MeshVariant
  className?: string
}) {
  const [b1, b2, b3] = BLOBS[variant]
  return (
    <div className={`absolute inset-0 overflow-hidden grain ${MESH_CLASS[variant]} ${className}`}>
      <div className="blob blob-animate" style={{ width: '38rem', height: '38rem', top: '-8rem', left: '-6rem', background: b1 }} />
      <div className="blob blob-animate" style={{ width: '30rem', height: '30rem', bottom: '-10rem', right: '-6rem', background: b2, animationDelay: '4s' }} />
      <div className="blob blob-animate" style={{ width: '22rem', height: '22rem', top: '40%', right: '20%', background: b3, animationDelay: '8s' }} />
    </div>
  )
}

import { StarRating } from '@/components/ui/StarRating'
import { BUSINESS } from '@/lib/data/business'

const TESTIMONIALS = [
  {
    id: 1,
    rating: 5,
    quote:
      'Lukas klippte gräset och fixade kanterna perfekt. Snabbt, prydligt och allt var bortstädat efteråt. Varmt rekommenderas!',
    author: 'Per',
    location: 'Bräcke',
  },
  {
    id: 2,
    rating: 5,
    quote:
      'Riktigt nöjd med fönsterputsen. Fönstren har aldrig varit så rena och Lukas är både trevlig och noggrann.',
    author: 'Maria',
    location: 'Gällö',
  },
  {
    id: 3,
    rating: 5,
    quote:
      'Pålitlig och lätt att ha att göra med – svarar snabbt och håller vad han lovar. Skönt med någon lokal man kan lita på.',
    author: 'Johan P.',
    location: 'Bräcke-trakten',
  },
  {
    id: 4,
    rating: 5,
    quote:
      'Lukas rengjorde min mammas gravsten inför allhelgona. Så fint gjort och med stor omtanke. Tack.',
    author: 'Karin L.',
    location: 'Gällö',
  },
]

function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" fill="#1877F2">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.991 22 12z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A1A1A] mb-3 sm:mb-4 tracking-tight">
            Det säger mina kunder
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Jag är stolt över förtroendet kunderna i Bräcke-trakten visar mig.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#F5F5F5] rounded-2xl p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-all duration-300"
            >
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              <p className="text-sm text-gray-800 italic leading-relaxed flex-grow mb-5">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <p className="font-semibold text-[#1A1A1A] text-sm">
                  {testimonial.author}
                  <span className="font-normal text-gray-500"> · {testimonial.location}</span>
                </p>
                <span className="flex items-center gap-1 text-xs text-gray-500">
                  <FacebookIcon />
                  Facebook
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-gray-600 text-base">
            Snitt <span className="font-bold text-brand-green text-lg">4.8 / 5</span> på Facebook
          </p>
          <a
            href={BUSINESS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-green underline underline-offset-2 hover:text-brand-green-dark transition-colors"
          >
            <FacebookIcon />
            Läs fler omdömen på Facebook
          </a>
        </div>
      </div>
    </section>
  )
}

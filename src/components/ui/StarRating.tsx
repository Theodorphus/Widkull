/**
 * STAR RATING COMPONENT
 *
 * Used in testimonials to display 5-star ratings
 * Shows filled stars based on rating value using lucide-react
 *
 * Usage:
 * <StarRating rating={5} />
 * <StarRating rating={4} />
 */

import { Star } from 'lucide-react'

interface StarRatingProps {
  rating: number // 1-5
  size?: 'sm' | 'md' | 'lg'
}

export function StarRating({
  rating,
  size = 'md',
}: StarRatingProps) {
  const sizeMap = {
    sm: 16,
    md: 20,
    lg: 24,
  }

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={sizeMap[size]}
          className={star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
        />
      ))}
    </div>
  )
}

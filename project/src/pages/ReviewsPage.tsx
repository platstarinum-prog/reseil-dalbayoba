import Reviews from '../components/Reviews';
import type { Review } from '../components/Reviews';
import review1 from '../data/reviews/review-1.json';
import review2 from '../data/reviews/review-2.json';
import review3 from '../data/reviews/review-3.json';
import review4 from '../data/reviews/review-4.json';

const REVIEWS: Review[] = [review1, review2, review3, review4];

export default function ReviewsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-24 pb-20">
      <Reviews reviews={REVIEWS} />
    </main>
  );
}

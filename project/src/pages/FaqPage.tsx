import FAQ from '../components/FAQ';
import type { FaqItem } from '../components/FAQ';
import shipping from '../data/faq/shipping.json';
import authenticity from '../data/faq/authenticity.json';
import payment from '../data/faq/payment.json';
import returns from '../data/faq/returns.json';

const ITEMS: FaqItem[] = [shipping, authenticity, payment, returns];

export default function FaqPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-24 pb-20">
      <FAQ items={ITEMS} />
    </main>
  );
}

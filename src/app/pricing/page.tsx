export default function Page() {
  return (
    <main className="py-8 px-4 mt-20 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Pricing Plans</h1>
      <p className="text-center text-gray-400 mb-4">
        Prices shown in GBP. Final checkout prices in app stores may vary and
        may include taxes (VAT).
      </p>
      <p className="text-center text-gray-400 mb-12 text-sm">
        Displayed prices are for the website only — app stores handle regional
        pricing and taxes.
      </p>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PricingTier
          title="Free"
          price="£0"
          description="Forever free"
          features={[
            "Up to 3 habits",
            "Basic tracking",
            "Reminders",
            "Local storage",
          ]}
        />
        <PricingTier
          title="Premium Monthly"
          price="£2.49"
          description="per month"
          features={[
            "Everything in Free",
            "Cloud sync",
            "Advanced analytics",
            "Custom reminders",
            "Ad-free experience",
            "Priority support",
          ]}
          highlighted={true}
        />
        <PricingTier
          title="Premium Yearly"
          price="£16.99"
          description="per year (save ~33%)"
          features={[
            "Everything in Free",
            "Cloud sync",
            "Advanced analytics",
            "Custom reminders",
            "Ad-free experience",
            "Priority support",
          ]}
        />
        <PricingTier
          title="Lifetime"
          price="£39.99"
          description="one-time payment"
          features={[
            "Everything in Free",
            "Cloud sync",
            "Advanced analytics",
            "Custom reminders",
            "Ad-free experience",
            "Priority support",
            "Lifetime updates",
          ]}
          highlighted={true}
        />
      </section>
    </main>
  );
}

interface PricingTierProps {
  title: string;
  price: string;
  description?: string;
  features: string[];
  highlighted?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({
  title,
  price,
  description,
  features,
  highlighted = false,
}) => {
  return (
    <article
      className={`border rounded-lg p-6 shadow-md transition-transform hover:scale-105 flex flex-col ${
        highlighted ? "border-blue-500 bg-blue-500/10" : "border-gray-300"
      }`}
    >
      <h2
        className={`text-2xl font-semibold ${
          highlighted ? "text-blue-400" : "text-gray-200"
        }`}
      >
        {title}
      </h2>
      <p className="text-3xl font-bold text-white my-2">{price}</p>
      {description && (
        <p className="text-sm text-gray-400 mb-4">{description}</p>
      )}
      <ul className="space-y-2 mb-6 flex-grow">
        {features.map((feature) => (
          <li key={feature} className="text-gray-300 text-sm flex items-start">
            <span className="mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-2 px-4 rounded-lg font-medium transition-colors mt-auto ${
          highlighted
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-gray-700 text-gray-200 hover:bg-gray-600"
        }`}
      >
        Choose Plan
      </button>
    </article>
  );
};

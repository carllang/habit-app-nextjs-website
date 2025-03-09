export default function Page() {
  return (
    <div className="py-8 px-4 text-white mt-20">
      <h1 className="text-center text-3xl font-bold mb-6">Pricing Plans</h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <PricingTier
          title="Free"
          price="$0"
          features={[
            "Access to basic features",
            "1 project",
            "Community support",
          ]}
        />
        <PricingTier
          title="Monthly"
          price="$9.99/month"
          features={[
            "Everything in Free",
            "Unlimited projects",
            "Priority support",
            "Access to advanced features",
          ]}
          highlighted={true}
        />
      </div>
    </div>
  );
}

interface PricingTierProps {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({
  title,
  price,
  features,
  highlighted = false,
}) => {
  return (
    <div
      className={`border ${
        highlighted ? "border-blue-500" : "border-gray-300"
      } rounded-lg p-4 shadow-md`}
    >
      <h2
        className={`text-2xl font-semibold ${
          highlighted ? "text-blue-500" : "text-white"
        }`}
      >
        {title}
      </h2>
      <p
        className={`text-xl ${
          highlighted ? "text-blue-500" : "text-white"
        } my-4`}
      >
        {price}
      </p>
      <ul>
        {features.map((feature) => (
          <li key={feature} className="text-gray-700 my-2">
            - {feature}
          </li>
        ))}
      </ul>
      <button
        className={`mt-4 py-2 px-4 rounded-lg ${
          highlighted ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-900"
        }`}
      >
        Choose Plan
      </button>
    </div>
  );
};

import React from 'react'
import PricingCard from './PricingCard';

const subscriptionPlans = [
  {
    id: 1,
    type: "Free",
    price: "$0",
    subscription: "month",
    description: "Great for individuals exploring text-to-image generation.",
    buttonText: "Choose Free",
    features: [
      "50 credits/month",
      "Generate up to 5 images/day",
      "Basic styles and resolutions",
      "Standard processing speed",
      "Community support"
    ]
  },
  {
    id: 2,
    type: "Premium",
    price: "$19.99",
    subscription: "month",
    description: "Ideal for creators and professionals with moderate needs.",
    buttonText: "Choose Premium",
    features: [
      "1,000 credits/month",
      "Generate up to 100 images/month",
      "All styles and resolutions",
      "Faster processing speed",
      "Priority email support",
      "Discounted rate for additional credits"
    ]
  },
  {
    id: 3,
    type: "Enterprise",
    price: "$256",
    subscription: "year",
    description: "Perfect for large businesses and corporations.",
    buttonText: "Choose Enterprise",
    features: [
      "10,000+ credits/month",
      "Unlimited image generation",
      "Custom styles and high-resolution outputs",
      "Priority processing speed",
      "Dedicated account manager",
      "API access for integration",
      "Advanced analytics and reporting",
      "24/7 priority support"
    ]
  }
];

function Pricing() {
  return (
    <section className="relative z-0 overflow-hidden bg-white pb-5 pt-5 dark:bg-dark px-6 lg:pb-[20px] lg:pt-[50px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              
              <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Pricing Plans
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex  flex-wrap justify-center">
          <div className="-mx-4 flex flex-wrap">
            {subscriptionPlans.map((plan) => (
              <PricingCard 
                key={plan.id}
                type={plan.type}
                price={plan.price}
                subscription={plan.subscription}
                description={plan.description}
                buttonText={plan.buttonText}
                features={plan.features}
              />
                
              
            ))}
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;



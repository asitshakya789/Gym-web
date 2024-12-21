import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '29',
    features: [
      'Access to gym floor',
      'Basic equipment usage',
      'Locker room access',
      'Free WiFi',
    ],
  },
  {
    name: 'Premium',
    price: '59',
    features: [
      'All Basic features',
      'Unlimited group classes',
      'Personal trainer consultation',
      'Towel service',
      'Sauna access',
    ],
    popular: true,
  },
  {
    name: 'Elite',
    price: '99',
    features: [
      'All Premium features',
      '2x Personal training sessions/month',
      'Nutrition consultation',
      'Recovery room access',
      'Guest passes',
      'Priority booking',
    ],
  },
];

const Membership = () => {
  return (
    <section id="membership" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Membership Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect membership plan that fits your fitness journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-lg shadow-md p-8 ${
                plan.popular ? 'border-2 border-red-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                  Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-md font-medium transition-colors ${
                plan.popular
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
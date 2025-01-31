import { Check } from 'lucide-react';

export default function Products() {
  const plans = [
    {
      name: 'Starter',
      price: '£999',
      description: 'Perfect for small businesses',
      features: [
        'Basic AI Integration',
        'Responsive Website',
        'Basic SEO Setup',
        '3 Months Support',
        'Monthly Reports'
      ]
    },
    {
      name: 'Professional',
      price: '£2,499',
      description: 'Ideal for growing companies',
      features: [
        'Advanced AI Solutions',
        'Custom Web Application',
        'Comprehensive SEO',
        '6 Months Support',
        'Weekly Reports',
        'Priority Support',
        'Social Media Integration'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Full AI Suite',
        'Enterprise Web Platform',
        'Advanced SEO & Marketing',
        '12 Months Support',
        'Daily Reports',
        '24/7 Priority Support',
        'Custom Integrations',
        'Dedicated Account Manager'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Our Products & Deals</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Choose the perfect package for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`
                bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8
                ${index === 1 ? 'border-2 border-primary transform scale-105' : ''}
              `}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-2">{plan.price}</div>
                  <p className="text-gray-600 dark:text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-2" />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`
                  w-full py-3 px-6 rounded-lg font-semibold transition-colors
                  ${index === 1
                    ? 'bg-primary text-white hover:bg-blue-600'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                  }
                `}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
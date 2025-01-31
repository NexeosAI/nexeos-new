import { Brain, Globe, Code, Search, Rocket, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Custom AI solutions to automate and optimise your business processes.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern web applications built with cutting-edge technologies.',
      features: ['Custom Web Apps', 'E-commerce Solutions', 'Progressive Web Apps', 'API Development'],
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: Search,
      title: 'SEO Services',
      description: 'Comprehensive SEO strategies to improve your online visibility.',
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Content Strategy'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: Globe,
      title: 'Digital Marketing',
      description: 'Results-driven digital marketing campaigns.',
      features: ['Social Media Marketing', 'Content Marketing', 'Email Marketing', 'PPC Campaigns'],
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with our security solutions.',
      features: ['Security Audits', 'Penetration Testing', 'Security Training', 'Incident Response'],
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: Rocket,
      title: 'Business Consulting',
      description: 'Strategic guidance for digital transformation.',
      features: ['Digital Strategy', 'Technology Consulting', 'Process Optimisation', 'Innovation Planning'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-400">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
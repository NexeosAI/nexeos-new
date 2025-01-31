import { ArrowRight, Code, Globe, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
              Scotland's Leading AI<br />
              Web Development Agency
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400">
              Transforming businesses through innovative AI solutions and cutting-edge web development
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-blue-600 transition-colors"
              >
                Get Started <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
                alt="AI Technology" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <Sparkles className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Cutting-edge artificial intelligence solutions to automate and optimise your business processes.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800"
                alt="Web Development" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <Code className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Custom web applications and responsive websites built with the latest technologies.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                alt="SEO Analytics" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">SEO Optimisation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Boost your online presence with our expert SEO strategies and digital marketing solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
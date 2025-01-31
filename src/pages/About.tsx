import { Award, Users, Building } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">About NEXEOS</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We are Scotland's premier AI and web development agency, dedicated to delivering innovative solutions that drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Committed to delivering the highest quality solutions
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Skilled professionals with diverse expertise
              </p>
            </div>
            <div className="text-center">
              <Building className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Scottish Heritage</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Proud to serve businesses across Scotland
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <img 
              src="https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?auto=format&fit=crop&q=80&w=800"
              alt="Edinburgh Skyline" 
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
              alt="Modern Office Space" 
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Founded in Scotland, NEXEOS has grown to become a leading force in AI and web development. Our journey began with a simple mission: to help businesses thrive in the digital age through innovative technology solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Today, we work with clients across Scotland and beyond, delivering cutting-edge AI solutions, beautiful web experiences, and effective SEO strategies that drive real results.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Our team combines Scottish ingenuity with global expertise, ensuring that every project we undertake meets the highest standards of quality and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
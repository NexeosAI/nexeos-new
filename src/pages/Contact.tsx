import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Get in touch with our team to discuss your project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">contact@nexeos.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">+44 131 XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">Edinburgh, Scotland</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-primary text-white font-semibold hover:bg-blue-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
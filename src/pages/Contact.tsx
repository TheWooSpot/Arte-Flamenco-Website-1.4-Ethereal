import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            ref={ref}
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="section-title gold-gradient">Contact Us</h1>
            <p className="section-subtitle">BEGIN YOUR JOURNEY</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-display text-3xl mb-6 text-accent">Get in Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-light font-medium mb-2">Studio Location</h3>
                  <p className="text-light/70">123 Arte Flamenco Avenue<br />New York, NY 10001<br />United States</p>
                </div>
                <div>
                  <h3 className="text-light/70 font-medium mb-2">Contact Information</h3>
                  <p className="text-light/70">Email: info@arteflamenco.com<br />Phone: +1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="text-light font-medium mb-2">Studio Hours</h3>
                  <p className="text-light/70">
                    Monday - Friday: 9:00 AM - 10:00 PM<br />
                    Saturday: 8:00 AM - 8:00 PM<br />
                    Sunday: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="bg-secondary p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-light/70 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark border border-light/20 rounded focus:border-accent focus:outline-none text-light"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-light/70 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark border border-light/20 rounded focus:border-accent focus:outline-none text-light"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-light/70 mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark border border-light/20 rounded focus:border-accent focus:outline-none text-light"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-light/70 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-dark border border-light/20 rounded focus:border-accent focus:outline-none text-light resize-none"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;

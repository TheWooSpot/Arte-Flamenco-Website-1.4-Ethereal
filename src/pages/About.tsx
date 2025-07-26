import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

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
            <h1 className="section-title gold-gradient">Our Story</h1>
            <p className="section-subtitle">WHERE DREAMS TAKE FLIGHT</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/3094220/pexels-photo-3094220.jpeg" 
                alt="Dance Studio"
                className="w-full h-96 object-cover rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="font-display text-3xl mb-6 text-accent">Founded on Passion</h2>
              <p className="text-light/80 mb-6 leading-relaxed">
                Arte Flamenco Dance Studio was born from a vision to create a sanctuary where dancers of all levels could explore their artistic potential. Founded in 2015, we've grown from a small studio to a thriving community of passionate artists.
              </p>
              <p className="text-light/80 mb-6 leading-relaxed">
                Our philosophy centers on the belief that dance is not just movement, but a language of the soul. We provide a nurturing environment where creativity flourishes and technical excellence is achieved through dedication and joy.
              </p>
              <p className="text-light/80 leading-relaxed">
                Today, we continue to inspire dancers to push boundaries, embrace vulnerability, and discover the transformative power of movement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;

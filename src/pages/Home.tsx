import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Home = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-secondary to-dark"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <motion.div 
          ref={heroRef}
          className="text-center z-10 px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={heroInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="gold-gradient">ARTE FLAMENCO</span>
          </motion.h1>
          
          <motion.p 
            className="text-xs md:text-sm tracking-widest text-accent mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            DANCE STUDIO
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-light/80 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Where movement transcends the physical realm and dance becomes a journey of self-discovery and artistic expression.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
            <Link to="/workshops" className="btn-primary">
              Explore Workshops
            </Link>
            <Link to="/about" className="btn-primary bg-transparent">
              Our Story
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div 
            ref={featuresRef}
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={featuresInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title gold-gradient">Experience the Magic</h2>
            <p className="section-subtitle">DISCOVER YOUR INNER DANCER</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Contemporary",
                description: "Express your emotions through fluid, graceful movements that tell your unique story.",
                image: "https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg"
              },
              {
                title: "Ballet",
                description: "Master the classical foundations with precision, elegance, and timeless technique.",
                image: "https://images.pexels.com/photos/3094230/pexels-photo-3094230.jpeg"
              },
              {
                title: "Jazz",
                description: "Unleash your energy with dynamic, rhythmic movements full of personality and flair.",
                image: "https://images.pexels.com/photos/3094212/pexels-photo-3094212.jpeg"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group cursor-pointer"
                initial={{ y: 50, opacity: 0 }}
                animate={featuresInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden mb-6 h-64">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-all duration-300"></div>
                </div>
                <h3 className="font-display text-2xl mb-4 text-accent">{feature.title}</h3>
                <p className="text-light/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title gold-gradient mb-8">Begin Your Journey</h2>
            <p className="text-lg text-light/80 mb-8 max-w-2xl mx-auto">
              Join our community of passionate dancers and discover the transformative power of movement.
            </p>
            <Link to="/contact" className="btn-primary">
              Start Dancing Today
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;

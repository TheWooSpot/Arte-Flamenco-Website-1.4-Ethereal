import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Performances = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const performances = [
    {
      title: "Ethereal Nights",
      date: "March 15, 2024",
      venue: "Grand Theater",
      description: "An enchanting evening showcasing contemporary and lyrical performances by our advanced students.",
      image: "https://images.pexels.com/photos/3094240/pexels-photo-3094240.jpeg"
    },
    {
      title: "Spring Recital",
      date: "May 20, 2024",
      venue: "Ethereal Studio",
      description: "Our annual spring showcase featuring performances from all levels and dance styles.",
      image: "https://images.pexels.com/photos/3094235/pexels-photo-3094235.jpeg"
    },
    {
      title: "Summer Intensive Showcase",
      date: "July 30, 2024",
      venue: "City Arts Center",
      description: "A culmination of our summer intensive program with guest choreographers and special performances.",
      image: "https://images.pexels.com/photos/3094245/pexels-photo-3094245.jpeg"
    }
  ];

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
            <h1 className="section-title gold-gradient">Performances</h1>
            <p className="section-subtitle">SHOWCASE YOUR ARTISTRY</p>
          </motion.div>

          <div className="space-y-8">
            {performances.map((performance, index) => (
              <motion.div
                key={performance.title}
                className="bg-secondary rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 group hover:shadow-2xl transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img 
                    src={performance.image} 
                    alt={performance.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-all duration-300"></div>
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="font-display text-3xl mb-4 text-accent">{performance.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 text-light/60">
                    <span className="text-sm">{performance.date}</span>
                    <span className="text-sm">{performance.venue}</span>
                  </div>
                  <p className="text-light/80 mb-6 leading-relaxed">{performance.description}</p>
                  <button className="btn-primary self-start">Get Tickets</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Performances;

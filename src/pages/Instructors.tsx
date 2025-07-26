import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Instructors = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const instructors = [
    {
      name: "Elena Vasquez",
      specialty: "Contemporary & Lyrical",
      experience: "15+ years",
      bio: "Former principal dancer with the National Ballet Company, Elena brings grace and emotional depth to every class.",
      image: "https://images.pexels.com/photos/3094250/pexels-photo-3094250.jpeg"
    },
    {
      name: "Marcus Chen",
      specialty: "Jazz & Commercial",
      experience: "12+ years",
      bio: "Broadway veteran and choreographer, Marcus infuses high energy and commercial appeal into his dynamic classes.",
      image: "https://images.pexels.com/photos/3094255/pexels-photo-3094255.jpeg"
    },
    {
      name: "Isabella Rodriguez",
      specialty: "Classical Ballet",
      experience: "20+ years",
      bio: "Trained at the Royal Ballet School, Isabella maintains the highest standards of classical technique and artistry.",
      image: "https://images.pexels.com/photos/3094260/pexels-photo-3094260.jpeg"
    },
    {
      name: "David Thompson",
      specialty: "Hip Hop & Urban",
      experience: "10+ years",
      bio: "Street dance champion and music video choreographer, David brings authentic urban styles to the studio.",
      image: "https://images.pexels.com/photos/3094265/pexels-photo-3094265.jpeg"
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
            <h1 className="section-title gold-gradient">Our Instructors</h1>
            <p className="section-subtitle">MASTERS OF MOVEMENT</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.name}
                className="bg-secondary rounded-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-all duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-display text-2xl mb-2 text-accent">{instructor.name}</h3>
                  <div className="flex justify-between items-center mb-4 text-sm text-light/60">
                    <span>{instructor.specialty}</span>
                    <span>{instructor.experience}</span>
                  </div>
                  <p className="text-light/80 leading-relaxed">{instructor.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Instructors;
